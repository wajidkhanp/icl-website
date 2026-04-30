"use client";

import { useEffect, useState } from "react";
import { PrayerData } from "@/lib/prayer-times";
import { iqamaTimes, jumuahTimes } from "@/lib/iqama-config";

const PRAYERS = [
  { key: "Fajr" as const, name: "Fajr", arabic: "الفجر", icon: "🌙" },
  { key: "Dhuhr" as const, name: "Dhuhr", arabic: "الظهر", icon: "☀️" },
  { key: "Asr" as const, name: "Asr", arabic: "العصر", icon: "🌤️" },
  { key: "Maghrib" as const, name: "Maghrib", arabic: "المغرب", icon: "🌅" },
  { key: "Isha" as const, name: "Isha", arabic: "العشاء", icon: "🌃" },
] as const;

const iqamaMap: Record<string, string> = {
  Fajr: iqamaTimes.fajr,
  Dhuhr: iqamaTimes.dhuhr,
  Asr: iqamaTimes.asr,
  Maghrib: iqamaTimes.maghrib,
  Isha: iqamaTimes.isha,
};

function getNextPrayer(timings: PrayerData["timings"]): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  for (const prayer of PRAYERS) {
    const t = timings[prayer.key];
    const [time, ampm] = t.split(" ");
    const [h, m] = time.split(":").map(Number);
    let hour24 = h;
    if (ampm === "PM" && h !== 12) hour24 += 12;
    if (ampm === "AM" && h === 12) hour24 = 0;
    const t24 = `${pad(hour24)}:${pad(m)}`;
    if (t24 > currentTime) return prayer.key;
  }
  return "Fajr"; // next day
}

export default function PrayerTimesSection({
  prayerData,
}: {
  prayerData: PrayerData | null;
}) {
  const [nextPrayer, setNextPrayer] = useState<string>("");

  useEffect(() => {
    if (prayerData) {
      setNextPrayer(getNextPrayer(prayerData.timings));
    }
  }, [prayerData]);

  return (
    <section className="py-16 bg-white" id="prayer-times">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          {prayerData && (
            <div className="flex justify-center gap-4 mb-4 text-sm text-gray-500">
              <span>{prayerData.readable}</span>
              <span>•</span>
              <span className="font-cinzel text-islamic-600">
                {prayerData.hijri.day}{" "}
                {prayerData.hijri.month.en}{" "}
                {prayerData.hijri.year} AH
              </span>
            </div>
          )}
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-3">
            Prayer Times
          </h2>
          <p className="text-gray-500 text-sm">
            Adhan & Iqama times for Islamic Center of Laveen
          </p>
        </div>

        {/* Prayer cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {PRAYERS.map((prayer) => {
            const isNext = nextPrayer === prayer.key;
            return (
              <div
                key={prayer.key}
                className={`rounded-2xl p-5 text-center transition-all ${
                  isNext
                    ? "bg-islamic-700 text-white shadow-xl shadow-islamic-700/30 scale-105"
                    : "bg-islamic-50 text-islamic-900 border border-islamic-100"
                }`}
              >
                <div className="text-2xl mb-2">{prayer.icon}</div>
                <p className={`font-cinzel text-lg font-bold mb-0.5 ${isNext ? "text-white" : "text-islamic-700"}`}>
                  {prayer.name}
                </p>
                <p className={`text-xs mb-3 ${isNext ? "text-islamic-200" : "text-gray-400"}`}>
                  {prayer.arabic}
                </p>

                <div className="space-y-1">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${isNext ? "text-islamic-300" : "text-gray-400"}`}>
                      Adhan
                    </p>
                    <p className={`font-bold ${isNext ? "text-white" : "text-gray-700"}`}>
                      {prayerData ? prayerData.timings[prayer.key] : "—"}
                    </p>
                  </div>
                  <div className={`border-t ${isNext ? "border-islamic-600" : "border-islamic-100"} pt-1`}>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${isNext ? "text-islamic-300" : "text-gray-400"}`}>
                      Iqama
                    </p>
                    <p className={`font-bold text-sm ${isNext ? "text-islamic-300" : "text-islamic-600"}`}>
                      {iqamaMap[prayer.key]}
                    </p>
                  </div>
                </div>

                {isNext && (
                  <div className="mt-3">
                    <span className="inline-block bg-islamic-400/30 text-islamic-200 text-xs font-semibold px-2 py-0.5 rounded-full">
                      Next Prayer
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Jumu'ah + note */}
        <div
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex-1 bg-islamic-700 rounded-2xl p-5 text-center text-white">
            <p className="font-cinzel font-bold text-lg mb-1">🕌 Jumu&apos;ah</p>
            <p className="text-islamic-200 text-sm mb-2">Friday Prayer</p>
            <div className="flex justify-center gap-3">
              {jumuahTimes.map((t) => (
                <span
                  key={t}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-islamic-300 text-xs mt-2">
              Khutbah begins 15 min before Iqama
            </p>
          </div>
          <div className="flex-1 bg-islamic-50 rounded-2xl p-5 text-center border border-islamic-100">
            <p className="font-cinzel font-bold text-islamic-700 text-sm mb-2">📝 Note</p>
            <p className="text-gray-600 text-sm">
              Dhuhr on every <strong>Saturday & Sunday</strong> @ 1:30 PM.
              Prayer times may change seasonally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
