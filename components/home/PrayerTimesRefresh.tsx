"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMasjidDate } from "@/lib/prayer-times";

// Refresh an open prayer schedule when the date changes in Phoenix.
export default function PrayerTimesRefresh({ date }: { date: string }) {
  const router = useRouter();
  useEffect(() => {
    const refreshIfNeeded = () => {
      if (document.visibilityState === "visible" && getMasjidDate() !== date) {
        router.refresh();
      }
    };
    const timer = setInterval(refreshIfNeeded, 30000);
    document.addEventListener("visibilitychange", refreshIfNeeded);
    refreshIfNeeded();
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refreshIfNeeded);
    };
  }, [date, router]);
  return null;
}
