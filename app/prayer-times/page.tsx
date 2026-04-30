import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { fetchPrayerTimes } from "@/lib/prayer-times";
import { iqamaTimes, jumuahTimes } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "Prayer Times",
  description:
    "Daily prayer times (Adhan & Iqama) for Islamic Center of Laveen. Live prayer schedule for Fajr, Dhuhr, Asr, Maghrib, Isha, and Jumu'ah.",
};

const PRAYERS = [
  { key: "Fajr" as const,    name: "Fajr",    arabic: "الفجر",   icon: "🌙", iqama: iqamaTimes.fajr },
  { key: "Dhuhr" as const,   name: "Dhuhr",   arabic: "الظهر",   icon: "☀️", iqama: iqamaTimes.dhuhr },
  { key: "Asr" as const,     name: "Asr",     arabic: "العصر",   icon: "🌤️", iqama: iqamaTimes.asr },
  { key: "Maghrib" as const, name: "Maghrib", arabic: "المغرب",  icon: "🌅", iqama: iqamaTimes.maghrib },
  { key: "Isha" as const,    name: "Isha",    arabic: "العشاء",  icon: "🌃", iqama: iqamaTimes.isha },
] as const;

const EXTRA_TIMES = [
  { key: "Sunrise" as const, name: "Sunrise", arabic: "الشروق", icon: "🌄" },
] as const;

export default async function PrayerTimesPage() {
  const prayerData = await fetchPrayerTimes();

  return (
    <>
      <PageHero
        badge="Salah Times"
        title="Prayer"
        titleHighlight="Times"
        subtitle="Adhan and Iqama schedule for Islamic Center of Laveen, AZ"
        arabicText="أَقِيمُوا الصَّلَاةَ"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Date header */}
          {prayerData && (
            <div className="text-center mb-10" data-aos="fade-up">
              <div className="inline-flex flex-col sm:flex-row gap-3 items-center bg-islamic-50 border border-islamic-100 rounded-2xl px-8 py-4">
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Gregorian</p>
                  <p className="font-cinzel font-bold text-islamic-700 text-lg">{prayerData.readable}</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-islamic-200" />
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Hijri</p>
                  <p className="font-cinzel font-bold text-islamic-700 text-lg">
                    {prayerData.hijri.day} {prayerData.hijri.month.en} {prayerData.hijri.year} AH
                  </p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-islamic-200" />
                <div className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Day</p>
                  <p className="font-cinzel font-bold text-islamic-700 text-lg">{prayerData.hijri.weekday.en}</p>
                </div>
              </div>
            </div>
          )}

          {/* Main prayer table */}
          <div className="bg-white rounded-3xl border border-islamic-100 shadow-sm overflow-hidden mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-islamic-700 px-6 py-4 grid grid-cols-4 text-white text-sm font-cinzel font-bold uppercase tracking-wider">
              <span>Prayer</span>
              <span className="text-center">Arabic</span>
              <span className="text-center">Adhan</span>
              <span className="text-center">Iqama</span>
            </div>

            {PRAYERS.map((prayer, i) => (
              <div
                key={prayer.key}
                className={`px-6 py-5 grid grid-cols-4 items-center border-b border-islamic-50 last:border-0 transition-colors hover:bg-islamic-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{prayer.icon}</span>
                  <span className="font-cinzel font-bold text-islamic-700 text-lg">{prayer.name}</span>
                </div>
                <p className="text-center text-gray-400 font-cinzel arabic-text text-lg">{prayer.arabic}</p>
                <p className="text-center font-semibold text-gray-700">
                  {prayerData ? prayerData.timings[prayer.key] : "—"}
                </p>
                <p className="text-center font-bold text-islamic-600">{prayer.iqama}</p>
              </div>
            ))}

            {/* Sunrise row (adhan only, no iqama) */}
            {prayerData && (
              <div className="px-6 py-5 grid grid-cols-4 items-center bg-amber-50/60 border-t border-amber-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌄</span>
                  <span className="font-cinzel font-bold text-amber-700 text-lg">Sunrise</span>
                </div>
                <p className="text-center text-gray-400 font-cinzel arabic-text text-lg">الشروق</p>
                <p className="text-center font-semibold text-gray-700">{prayerData.timings.Sunrise}</p>
                <p className="text-center text-gray-400 text-sm italic">—</p>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10" data-aos="fade-up" data-aos-delay="150">
            <div className="bg-islamic-50 border border-islamic-100 rounded-2xl p-5">
              <p className="font-cinzel font-bold text-islamic-700 mb-2">📝 Weekend Note</p>
              <p className="text-gray-600 text-sm">
                Dhuhr on every <strong>Saturday & Sunday</strong> is held at <strong>1:30 PM</strong>.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="font-cinzel font-bold text-amber-700 mb-2">🌙 Seasonal Changes</p>
              <p className="text-gray-600 text-sm">
                Prayer times update daily based on the sun. Iqama times may be adjusted by the Imam seasonally.
              </p>
            </div>
          </div>

          {/* Jumu'ah section */}
          <div className="bg-gradient-to-br from-islamic-700 to-islamic-900 rounded-3xl p-8 text-white text-center overflow-hidden relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 pattern-overlay opacity-20" />
            <div className="relative z-10">
              <p className="font-cinzel text-gold-400 text-xl mb-2 arabic-text">صَلَاةُ الْجُمُعَة</p>
              <h3 className="font-cinzel font-bold text-3xl text-white mb-2">Jumu&apos;ah</h3>
              <p className="text-islamic-200 mb-6">Friday congregational prayer — held in two shifts</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                {jumuahTimes.map((t, i) => (
                  <div key={t} className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                    <p className="text-islamic-300 text-xs font-semibold uppercase tracking-wider mb-1">
                      {i === 0 ? "1st Jumu'ah" : "2nd Jumu'ah"}
                    </p>
                    <p className="font-cinzel font-bold text-white text-2xl">{t}</p>
                  </div>
                ))}
              </div>
              <p className="text-islamic-300 text-sm">
                Khutbah begins 15 minutes before Iqama · Arabic & English Khutbah
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
