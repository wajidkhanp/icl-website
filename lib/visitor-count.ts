import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

type VisitorStore = {
  month: string;
  visitors: string[];
};

const EMPTY_STORE: VisitorStore = { month: "", visitors: [] };

function visitorFilePath() {
  return process.env.ICL_VISITOR_FILE ?? join(process.cwd(), "data", "visitor-count.json");
}

export function getVisitorMonth(now = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    year: "numeric",
    month: "2-digit",
  }).format(now).replace("/", "-");
}

function readVisitorStore(): VisitorStore {
  try {
    const parsed: unknown = JSON.parse(readFileSync(visitorFilePath(), "utf8"));
    if (
      parsed
      && typeof parsed === "object"
      && typeof (parsed as VisitorStore).month === "string"
      && Array.isArray((parsed as VisitorStore).visitors)
      && (parsed as VisitorStore).visitors.every((visitor) => typeof visitor === "string")
    ) {
      return parsed as VisitorStore;
    }
  } catch {
    // A missing counter is expected on a new installation.
  }

  return EMPTY_STORE;
}

function writeVisitorStore(store: VisitorStore) {
  const filePath = visitorFilePath();
  mkdirSync(dirname(filePath), { recursive: true });
  const temporaryPath = `${filePath}.${process.pid}.tmp`;
  writeFileSync(temporaryPath, `${JSON.stringify(store)}\n`, "utf8");
  renameSync(temporaryPath, filePath);
}

export function recordMonthlyVisitor(visitorId: string, now = new Date()) {
  const month = getVisitorMonth(now);
  const visitorHash = createHash("sha256").update(visitorId).digest("hex");
  const stored = readVisitorStore();
  const store = stored.month === month ? stored : { month, visitors: [] };

  if (!store.visitors.includes(visitorHash)) {
    store.visitors.push(visitorHash);
    writeVisitorStore(store);
  }

  return store.visitors.length;
}
