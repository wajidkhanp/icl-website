import { LAT, LNG, MASJID_TIMEZONE } from "./iqama-config";

export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface HijriDate {
  day: string;
  month: { en: string; number: number };
  year: string;
  weekday: { en: string };
}

export interface PrayerData {
  timings: PrayerTimings;
  hijri: HijriDate;
  readable: string;
}

function to12Hour(time24: string): string {
  if (typeof time24 !== "string" || !/^([01]\d|2[0-3]):[0-5]\d(?: \(.*\))?$/.test(time24)) {
    throw new Error("Invalid prayer time");
  }
  const [hourStr, minute] = time24.replace(/ \(.*\)/, "").split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minute} ${ampm}`;
}

export function getMasjidDate(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: MASJID_TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
}

export function getJumuahDate(now = new Date()): string {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: MASJID_TIMEZONE,
    weekday: "short",
  }).format(now);
  const daysFromFriday = weekday === "Thu" || weekday === "Fri" || weekday === "Sat"
    ? 5 - ({ Thu: 4, Fri: 5, Sat: 6 }[weekday] ?? 0)
    : -( ({ Sun: 7, Mon: 3, Tue: 2, Wed: 1 }[weekday] ?? 0) );
  const friday = new Date(now.getTime() + daysFromFriday * 24 * 60 * 60 * 1000);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: MASJID_TIMEZONE,
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(friday);
}

export function getNextPrayer(timings: PrayerTimings, now = new Date()): string {
  const currentTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: MASJID_TIMEZONE, hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(now);
  for (const key of ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const) {
    const [time, period] = timings[key].split(" ");
    const [hour, minute] = time.split(":").map(Number);
    const hour24 = hour % 12 + (period === "PM" ? 12 : 0);
    if (`${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}` > currentTime) return key;
  }
  return "Fajr";
}

export async function fetchPrayerTimes(now = new Date()): Promise<PrayerData | null> {
  try {
    // A stable timestamp per Phoenix day allows the fetch cache to be reused.
    const localDate = getMasjidDate(now);
    const timestamp = Date.parse(`${localDate}T12:00:00-07:00`) / 1000;
    const url = `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${LAT}&longitude=${LNG}&method=2`;
    const res = await fetch(url, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const json = await res.json();
    const { timings, date } = json.data;
    if (date.gregorian?.date !== localDate.split("-").reverse().join("-") ||
        typeof date.readable !== "string" ||
        typeof date.hijri?.day !== "string" ||
        typeof date.hijri?.month?.en !== "string" ||
        typeof date.hijri?.year !== "string" ||
        typeof date.hijri?.weekday?.en !== "string") return null;
    return {
      timings: {
        Fajr: to12Hour(timings.Fajr),
        Sunrise: to12Hour(timings.Sunrise),
        Dhuhr: to12Hour(timings.Dhuhr),
        Asr: to12Hour(timings.Asr),
        Maghrib: to12Hour(timings.Maghrib),
        Isha: to12Hour(timings.Isha),
      },
      hijri: date.hijri,
      readable: date.readable,
    };
  } catch {
    return null;
  }
}
