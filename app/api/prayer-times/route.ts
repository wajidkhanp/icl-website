import { NextResponse } from "next/server";
import { fetchPrayerTimes, getMasjidDate } from "@/lib/prayer-times";
import { getIqamaTimesForDate, readSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const now = new Date();
  const prayerData = await fetchPrayerTimes(now);
  const content = readSiteContent();
  const iqamaTimes = getIqamaTimesForDate(content, now);

  return NextResponse.json(
    {
      date: getMasjidDate(now),
      timings: prayerData?.timings ?? null,
      iqamaTimes,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      },
    },
  );
}
