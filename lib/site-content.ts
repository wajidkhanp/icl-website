import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export type IqamaTimes = {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

export type JumuahEntry = {
  time: string;
  khateeb: string;
};

export type SiteContent = {
  announcements: [string, string, string, string];
  iqamaTimes: IqamaTimes;
  jumuah: [JumuahEntry, JumuahEntry];
  weekendDhuhrNote: string;
  seasonalNote: string;
};

export const defaultSiteContent: SiteContent = {
  announcements: [
    "Iqama time update for Fajr & Isha Prayers.",
    "Zohar on every Sat & Sun @ 1:30 PM.",
    "Friday Night Halaqa after Isha.",
    "Youth Program (Halaqa) every Saturday after Isha.",
  ],
  iqamaTimes: {
    fajr: "5:30 AM",
    dhuhr: "1:30 PM",
    asr: "5:30 PM",
    maghrib: "+5 min after adhan",
    isha: "9:00 PM",
  },
  jumuah: [
    { time: "12:30 PM", khateeb: "Imam Mahmud Iddrisu" },
    { time: "1:30 PM", khateeb: "Br. Dawood Ahmed" },
  ],
  weekendDhuhrNote: "Dhuhr on every Saturday & Sunday @ 1:30 PM.",
  seasonalNote: "Prayer times may change seasonally.",
};

function contentFilePath() {
  return process.env.ICL_CONTENT_FILE ?? join(process.cwd(), "data", "site-content.json");
}

function isContent(value: unknown): value is SiteContent {
  if (!value || typeof value !== "object") return false;
  const content = value as SiteContent;
  const iqamaKeys = ["fajr", "dhuhr", "asr", "maghrib", "isha"] as const;
  return Array.isArray(content.announcements)
    && content.announcements.length === 4
    && content.announcements.every((announcement) => typeof announcement === "string" && announcement.length <= 300)
    && typeof content.weekendDhuhrNote === "string"
    && typeof content.seasonalNote === "string"
    && content.iqamaTimes !== undefined
    && iqamaKeys.every((key) => typeof content.iqamaTimes[key] === "string")
    && Array.isArray(content.jumuah)
    && content.jumuah.length === 2
    && content.jumuah.every((entry) => entry && typeof entry.time === "string" && typeof entry.khateeb === "string");
}

export function readSiteContent(): SiteContent {
  try {
    const parsed: unknown = JSON.parse(readFileSync(contentFilePath(), "utf8"));
    if (parsed && typeof parsed === "object" && typeof (parsed as { announcement?: unknown }).announcement === "string") {
      const legacy = parsed as Record<string, unknown>;
      delete legacy.announcement;
      legacy.announcements = [(parsed as { announcement: string }).announcement, "", "", ""];
      return isContent(legacy) ? legacy : defaultSiteContent;
    }
    return isContent(parsed) ? parsed : defaultSiteContent;
  } catch {
    return defaultSiteContent;
  }
}

export function writeSiteContent(content: SiteContent) {
  const path = contentFilePath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}