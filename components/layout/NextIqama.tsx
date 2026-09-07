"use client";

import { useEffect, useState } from "react";
import type { PrayerTimings } from "@/lib/prayer-times";
import type { IqamaTimes } from "@/lib/site-content";

type Schedule = {
  timings: PrayerTimings | null;
  iqamaTimes: IqamaTimes;
};

type NextPrayer = {
  name: string;
  time: string;
};

const prayers = [
  { key: "fajr", name: "Fajr", adhanKey: "Fajr" },
  { key: "dhuhr", name: "Dhuhr", adhanKey: "Dhuhr" },
  { key: "asr", name: "Asr", adhanKey: "Asr" },
  { key: "maghrib", name: "Maghrib", adhanKey: "Maghrib" },
  { key: "isha", name: "Isha", adhanKey: "Isha" },
] as const;

function currentMinutes() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  return hour * 60 + minute;
}

function parseTime(value: string) {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const period = match[3].toUpperCase();
  if (hour < 1 || hour > 12 || minute > 59) return null;
  if (period === "AM" && hour === 12) hour = 0;
  if (period === "PM" && hour !== 12) hour += 12;
  return hour * 60 + minute;
}

function getIqamaMinutes(iqama: string, adhan: string | undefined) {
  const offset = iqama.match(/^\+\s*(\d+)\s*min/i);
  if (offset && adhan) {
    const adhanMinutes = parseTime(adhan);
    return adhanMinutes === null ? null : adhanMinutes + Number(offset[1]);
  }
  return parseTime(iqama);
}

function formatTime(minutes: number) {
  const hour = Math.floor((minutes % 1440) / 60);
  const minute = minutes % 60;
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

function findNextPrayer(schedule: Schedule): NextPrayer | null {
  if (!schedule.timings) return null;
  const now = currentMinutes();
  const upcoming = prayers
    .map((prayer) => {
      const minutes = getIqamaMinutes(
        schedule.iqamaTimes[prayer.key],
        schedule.timings?.[prayer.adhanKey],
      );
      return minutes === null ? null : { ...prayer, minutes };
    })
    .filter((prayer): prayer is (typeof prayers)[number] & { minutes: number } => prayer !== null)
    .map((prayer) => ({ ...prayer, minutes: prayer.minutes <= now ? prayer.minutes + 1440 : prayer.minutes }))
    .sort((first, second) => first.minutes - second.minutes);

  const next = upcoming[0];
  return next ? { name: next.name, time: formatTime(next.minutes) } : null;
}

export default function NextIqama({ mobile = false }: { mobile?: boolean }) {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let active = true;
    const loadSchedule = async () => {
      try {
        const response = await fetch("/api/prayer-times", { cache: "no-store" });
        if (!response.ok) return;
        const data = (await response.json()) as Schedule;
        if (active) setSchedule(data);
      } catch {
        // The navbar remains unchanged if prayer data is unavailable.
      }
    };

    loadSchedule();
    const timer = window.setInterval(loadSchedule, 30000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!schedule) return;
    let pulseTimer: number | undefined;
    const update = () => {
      const next = findNextPrayer(schedule);
      setNextPrayer((previous) => {
        if (next && (previous?.name !== next.name || previous.time !== next.time)) {
          setPulse(true);
          window.clearTimeout(pulseTimer);
          pulseTimer = window.setTimeout(() => setPulse(false), 900);
        }
        return next;
      });
    };

    update();
    const timer = window.setInterval(update, 15000);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(pulseTimer);
    };
  }, [schedule]);

  if (!nextPrayer) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${mobile ? "flex lg:hidden" : "hidden lg:inline-flex"} ${pulse ? "animate-pulse" : ""} items-center justify-center gap-2 whitespace-nowrap rounded-full border border-islamic-200 bg-islamic-50 px-3 py-2 text-xs font-bold text-islamic-800 shadow-sm`}
    >
      <span className="text-islamic-600">Next Iqama</span>
      <span aria-hidden="true" className="text-islamic-300">•</span>
      <span>{nextPrayer.name}</span>
      <span className="text-gold-700">{nextPrayer.time}</span>
    </div>
  );
}
