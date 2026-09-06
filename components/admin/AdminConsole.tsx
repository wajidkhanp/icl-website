"use client";

import { FormEvent, useEffect, useState } from "react";
import type { SiteContent } from "@/lib/site-content";

const emptyContent: SiteContent = {
  announcement: "",
  iqamaTimes: { fajr: "", dhuhr: "", asr: "", maghrib: "", isha: "" },
  jumuah: [{ time: "", khateeb: "" }, { time: "", khateeb: "" }],
  weekendDhuhrNote: "",
  seasonalNote: "",
};

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold text-islamic-800">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-islamic-200 bg-white px-3 py-2.5 text-gray-800 outline-none transition focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200" required />
    </label>
  );
}

export default function AdminConsole() {
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent>(emptyContent);
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadContent = async () => {
    const response = await fetch("/api/admin/content");
    if (!response.ok) return false;
    setContent(await response.json());
    setAuthenticated(true);
    return true;
  };

  useEffect(() => {
    fetch("/api/admin/content").then(async (response) => {
      if (response.ok) {
        setContent(await response.json());
        setAuthenticated(true);
      }
    });
  }, []);

  async function login(event: FormEvent) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (!response.ok) {
      setError("Incorrect password.");
      return;
    }
    setPassword("");
    await loadContent();
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    setError("");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "Could not save changes.");
      return;
    }
    setContent(result.content);
    setMessage("Changes saved. The public schedule is updated.");
  }

  if (!authenticated) {
    return (
      <form onSubmit={login} className="mx-auto max-w-md rounded-2xl border border-islamic-100 bg-white p-6 shadow-sm">
        <h1 className="font-cinzel text-2xl font-bold text-islamic-800">ICL Admin Portal</h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to update the public prayer schedule.</p>
        <label className="mt-6 block space-y-1.5">
          <span className="text-sm font-semibold text-islamic-800">Admin password</span>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-islamic-200 px-3 py-2.5 outline-none focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200" required />
        </label>
        {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
        <button className="mt-5 w-full rounded-xl bg-islamic-700 px-4 py-3 font-semibold text-white transition hover:bg-islamic-600">Sign in</button>
      </form>
    );
  }

  return (
    <form onSubmit={save} className="space-y-8">
      <div>
        <h1 className="font-cinzel text-3xl font-bold text-islamic-800">ICL Admin Portal</h1>
        <p className="mt-2 text-gray-500">Update the information displayed on the public prayer and announcement areas.</p>
      </div>

      <section className="rounded-2xl border border-islamic-100 bg-white p-5 shadow-sm sm:p-7">
        <h2 className="font-cinzel text-xl font-bold text-islamic-800">Daily Iqama Times</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(content.iqamaTimes) as Array<keyof SiteContent["iqamaTimes"]>).map((key) => (
            <Field key={key} label={key[0].toUpperCase() + key.slice(1)} value={content.iqamaTimes[key]} onChange={(value) => setContent({ ...content, iqamaTimes: { ...content.iqamaTimes, [key]: value } })} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gold-200 bg-gold-100/40 p-5 shadow-sm sm:p-7">
        <h2 className="font-cinzel text-xl font-bold text-islamic-800">Friday Jumu&apos;ah</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {content.jumuah.map((entry, index) => (
            <div key={index} className="space-y-4 rounded-xl border border-gold-200 bg-white p-4">
              <p className="font-semibold text-gold-700">{index + 1}st Jumu&apos;ah</p>
              <Field label="Time" value={entry.time} onChange={(value) => setContent({ ...content, jumuah: content.jumuah.map((item, itemIndex) => itemIndex === index ? { ...item, time: value } : item) as SiteContent["jumuah"] })} />
              <Field label="Khateeb" value={entry.khateeb} onChange={(value) => setContent({ ...content, jumuah: content.jumuah.map((item, itemIndex) => itemIndex === index ? { ...item, khateeb: value } : item) as SiteContent["jumuah"] })} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-islamic-100 bg-white p-5 shadow-sm sm:p-7">
        <h2 className="font-cinzel text-xl font-bold text-islamic-800">Public Messages</h2>
        <div className="mt-5 space-y-4">
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-islamic-800">Announcement banner</span><textarea value={content.announcement} onChange={(event) => setContent({ ...content, announcement: event.target.value })} rows={3} className="w-full rounded-xl border border-islamic-200 px-3 py-2.5 outline-none focus:border-islamic-500 focus:ring-2 focus:ring-islamic-200" required /></label>
          <Field label="Weekend Dhuhr note" value={content.weekendDhuhrNote} onChange={(value) => setContent({ ...content, weekendDhuhrNote: value })} />
          <Field label="Seasonal note" value={content.seasonalNote} onChange={(value) => setContent({ ...content, seasonalNote: value })} />
        </div>
      </section>

      {error && <p className="font-semibold text-red-600">{error}</p>}
      {message && <p className="font-semibold text-islamic-700">{message}</p>}
      <button className="rounded-xl bg-gold-400 px-6 py-3 font-bold text-islamic-950 shadow-sm transition hover:bg-gold-300">Save public updates</button>
    </form>
  );
}