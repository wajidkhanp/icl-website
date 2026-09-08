import type { IqamaTimes, JumuahEntry } from "@/lib/site-content";

const prayers = [
  { key: "fajr", name: "Fajr", arabic: "الفجر", icon: "🌙" },
  { key: "dhuhr", name: "Dhuhr", arabic: "الظهر", icon: "☀️" },
  { key: "asr", name: "Asr", arabic: "العصر", icon: "🌤️" },
  { key: "maghrib", name: "Maghrib", arabic: "المغرب", icon: "🌅" },
  { key: "isha", name: "Isha", arabic: "العشاء", icon: "🌃" },
] as const;

export default function IqamaTable({ iqamaTimes, jumuah, jumuahDate }: { iqamaTimes: IqamaTimes; jumuah: JumuahEntry[]; jumuahDate: string }) {
  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-islamic-200 bg-white shadow-sm">
        <div className="grid grid-cols-[1fr_auto] bg-islamic-700 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white sm:grid-cols-[1.4fr_1fr] sm:px-6">
          <span>Prayer</span>
          <span className="text-right sm:text-left">Iqama</span>
        </div>
        {prayers.map((prayer, index) => (
          <div key={prayer.key} className={`grid grid-cols-[1fr_auto] items-center gap-3 border-t border-islamic-100 px-4 py-4 sm:grid-cols-[1.4fr_1fr] sm:px-6 ${index % 2 ? "bg-islamic-50/60" : "bg-white"}`}>
            <div className="flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">{prayer.icon}</span>
              <div>
                <p className="font-cinzel font-bold text-islamic-800">{prayer.name}</p>
                <p className="font-cinzel text-sm text-gray-400" dir="rtl">{prayer.arabic}</p>
              </div>
            </div>
            <p className="text-right font-cinzel text-lg font-bold text-islamic-700 sm:text-left">{iqamaTimes[prayer.key as keyof IqamaTimes]}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-gold-300 bg-gold-100/50">
        <div className="flex items-center justify-between gap-3 border-b border-gold-300 bg-gold-400/30 px-4 py-3 sm:px-6">
          <h3 className="font-cinzel font-bold text-islamic-900">Jumu&apos;ah Prayer</h3>
          <span className="text-right text-xs font-semibold uppercase tracking-wider text-gold-700">Friday<br />{jumuahDate}</span>
        </div>
        <div className="grid divide-y divide-gold-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {jumuah.map((entry, index) => (
            <div key={`${entry.time}-${index}`} className="grid grid-cols-[auto_1fr] items-center gap-4 px-4 py-4 sm:px-6">
              <div className="rounded-xl bg-white px-3 py-2 text-center shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gold-700">{index + 1}st</p>
                <p className="font-cinzel text-lg font-bold text-islamic-800">{entry.time}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Khateeb</p>
                <p className="font-semibold text-islamic-800">{entry.khateeb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}