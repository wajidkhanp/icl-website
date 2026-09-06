import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

// Run the actual TypeScript modules with isolated external services, without
// sending email or depending on the prayer API being available during tests.
function loadModule(path, mocks = {}, globals = {}) {
  const filename = resolve(path);
  const source = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loaded = { exports: {} };
  const require = createRequire(filename);
  vm.runInNewContext(source, {
    module: loaded, exports: loaded.exports,
    require: (id) => Object.hasOwn(mocks, id) ? mocks[id] : require(id),
    process: { env: { RESEND_API_KEY: "test-only" } },
    console: { error() {} }, AbortSignal, ...globals,
  }, { filename });
  return loaded.exports;
}

const config = loadModule("lib/iqama-config.ts");
const timingStrings = { Fajr: "05:00", Sunrise: "06:00", Dhuhr: "12:30", Asr: "16:00", Maghrib: "18:30", Isha: "20:00" };
const payload = () => ({ data: { timings: { ...timingStrings }, date: {
  readable: "05 Sep 2026", gregorian: { date: "05-09-2026" },
  hijri: { day: "23", month: { en: "Rabi al-awwal", number: 3 }, year: "1448", weekday: { en: "Saturday" } },
} } });
const prayerModule = (fetch = async () => ({ ok: true, json: async () => payload() })) =>
  loadModule("lib/prayer-times.ts", { "./iqama-config": config }, { fetch });

const validForm = { name: "Visitor", email: "visitor@example.com", subject: "Inquiry", message: "Hello" };
function contactModule(send, env = { RESEND_API_KEY: "test-only" }) {
  return loadModule("app/api/contact/route.ts", {
    resend: { Resend: class { emails = { send }; } },
  }, { process: { env } });
}
const request = (body) => new Request("http://localhost/api/contact", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
});

test("contact rejects malformed JSON, invalid types, blank fields, and invalid email before delivery", async () => {
  const { POST } = contactModule(() => { throw new Error("Must not send"); });
  for (const body of [null, [], {}, { ...validForm, name: 123 }, { ...validForm, message: "  " },
    { ...validForm, email: "invalid" }, { ...validForm, subject: "Hello\r\nBcc: other@example.com" },
    { ...validForm, message: "x".repeat(10001) }]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal((await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{" }))).status, 400);
});

test("contact escapes submitted HTML and accepts provider confirmation", async () => {
  let sent;
  const { POST } = contactModule(async (message) => { sent = message; return { data: { id: "email-id" }, error: null }; });
  const response = await POST(request({ ...validForm, name: " <b>Visitor</b> ", message: '<img src="x"> & hello' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(sent.replyTo, validForm.email);
  assert.ok(sent.html.includes("&lt;b&gt;Visitor&lt;/b&gt;"));
  assert.ok(sent.html.includes("&lt;img src=&quot;x&quot;&gt; &amp; hello"));
  assert.ok(!sent.html.includes('<img src="x">'));
});

test("contact never reports success on provider errors or missing confirmation", async () => {
  for (const result of [{ data: null, error: { message: "Rejected" } }, { data: null, error: null }]) {
    const { POST } = contactModule(async () => result);
    assert.equal((await POST(request(validForm))).status, 502);
  }
  const { POST } = contactModule(async () => { throw new Error("Network failure"); });
  assert.equal((await POST(request(validForm))).status, 500);
  const unconfigured = contactModule(() => { throw new Error("Must not send"); }, {});
  assert.equal((await unconfigured.POST(request(validForm))).status, 503);
});

test("prayer date follows Phoenix midnight rather than UTC midnight", () => {
  const { getMasjidDate } = prayerModule();
  assert.equal(getMasjidDate(new Date("2026-09-06T06:59:59Z")), "2026-09-05");
  assert.equal(getMasjidDate(new Date("2026-09-06T07:00:00Z")), "2026-09-06");
});

test("next prayer uses Phoenix time and handles noon and the final prayer", async () => {
  const { fetchPrayerTimes, getNextPrayer } = prayerModule();
  const data = await fetchPrayerTimes(new Date("2026-09-05T19:00:00Z"));
  assert.ok(data);
  assert.equal(getNextPrayer(data.timings, new Date("2026-09-05T11:59:00Z")), "Fajr");
  assert.equal(getNextPrayer(data.timings, new Date("2026-09-05T12:00:00Z")), "Dhuhr");
  assert.equal(getNextPrayer(data.timings, new Date("2026-09-05T19:30:00Z")), "Asr");
  assert.equal(getNextPrayer(data.timings, new Date("2026-09-06T03:00:00Z")), "Fajr");
});

test("prayer fetch reuses daily cache key and changes it at local midnight", async () => {
  const urls = [];
  const { fetchPrayerTimes } = prayerModule(async (url, options) => {
    urls.push(url);
    assert.equal(options.next.revalidate, 3600);
    assert.ok(options.signal);
    return { ok: true, json: async () => payload() };
  });
  await fetchPrayerTimes(new Date("2026-09-05T19:00:00Z"));
  await fetchPrayerTimes(new Date("2026-09-06T06:59:00Z"));
  await fetchPrayerTimes(new Date("2026-09-06T07:00:00Z"));
  assert.equal(urls[0], urls[1]);
  assert.notEqual(urls[1], urls[2]);
});

test("prayer API failures, stale dates, and malformed data use the unavailable state", async () => {
  for (const body of [null, {}, { data: {} }, (() => { const p = payload(); p.data.timings.Fajr = "25:90"; return p; })(),
    (() => { const p = payload(); p.data.date.hijri = null; return p; })(),
    (() => { const p = payload(); p.data.date.gregorian.date = "04-09-2026"; return p; })()]) {
    const { fetchPrayerTimes } = prayerModule(async () => ({ ok: true, json: async () => body }));
    assert.equal(await fetchPrayerTimes(new Date("2026-09-05T19:00:00Z")), null);
  }
  for (const fetch of [async () => ({ ok: false }), async () => { throw new Error("Timeout"); }]) {
    assert.equal(await prayerModule(fetch).fetchPrayerTimes(), null);
  }
});
