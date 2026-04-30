import { LAT, LNG } from "./iqama-config";

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
  const [hourStr, minute] = time24.replace(/ \(.*\)/, "").split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  return `${hour}:${minute} ${ampm}`;
}

export async function fetchPrayerTimes(): Promise<PrayerData | null> {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const url = `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${LAT}&longitude=${LNG}&method=2`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = await res.json();
    const { timings, date } = json.data;
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
