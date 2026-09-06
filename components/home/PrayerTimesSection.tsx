"use client";

import { PrayerData } from "@/lib/prayer-times";
import IqamaTable from "@/components/home/IqamaTable";
import type { IqamaTimes, JumuahEntry } from "@/lib/site-content";

export default function PrayerTimesSection({
  prayerData,
  iqamaTimes,
  jumuah,
}: {
  prayerData: PrayerData | null;
  iqamaTimes: IqamaTimes;
  jumuah: JumuahEntry[];
}) {
  return (
    <section className="section-spacing bg-white" id="prayer-times">
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

        {!prayerData && <p role="status" className="text-center text-gray-600 mb-6">Adhan times are temporarily unavailable. Please contact the masjid to confirm today&apos;s schedule.</p>}

        <div data-aos="fade-up" data-aos-delay="100">
          <IqamaTable iqamaTimes={iqamaTimes} jumuah={jumuah} />
        </div>
      </div>
    </section>
  );
}
