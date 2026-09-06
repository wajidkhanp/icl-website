import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { readSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Events & Programs",
  description:
    "Weekly Islamic programs and events at Islamic Center of Laveen — Halaqas, Jumu'ah, Youth Programs, and Women's Classes.",
};

const weeklyEvents = [
  {
    day: "Wednesday",
    time: "After Maghrib",
    title: "Tafseer Halaqa",
    desc: "The Quran has layers — and every week, Imam Sheikh Mahmud opens a new one. In-depth Tafseer Al-Kareem taught in both Arabic and English. Come with your questions. Leave with clarity.",
    icon: "📖",
    tags: ["Open to All", "Arabic & English"],
    color: "from-islamic-700 to-islamic-900",
  },
  {
    day: "Friday",
    time: "After Isha",
    title: "Friday Night Halaqa",
    desc: "End the blessed day of Jumu'ah surrounded by your brothers and sisters in faith. Knowledge, dhikr, and real talk about living as a Muslim in today's world — every Friday night.",
    icon: "🌙",
    tags: ["Brothers & Sisters", "Weekly"],
    color: "from-islamic-600 to-islamic-800",
  },
  {
    day: "Saturday",
    time: "After Asr",
    title: "Women's Quran Class",
    desc: "A sacred, comfortable space for our sisters — to recite, memorize, and reflect on the Quran without distraction. All levels welcome. Led with care and sisterly warmth.",
    icon: "🌸",
    tags: ["Sisters Only", "All Levels"],
    color: "from-islamic-500 to-islamic-700",
  },
  {
    day: "Saturday",
    time: "After Isha",
    title: "Youth Halaqa",
    desc: "Our youth are the present of this ummah — not just its future. We build them up with Islamic knowledge, strong character, and a community where being Muslim is something to be proud of.",
    icon: "⭐",
    tags: ["Youth Program", "Ages 10–25"],
    color: "from-gold-600 to-gold-700",
  },
];

export default function EventsPage() {
  const { jumuah } = readSiteContent();

  return (
    <>
      <PageHero
        badge="Programs & Events"
        title="Gather. Learn."
        titleHighlight="Grow Together."
        subtitle="The Prophet ﷺ said: 'No people gather in one of the houses of Allah, reciting the Book of Allah and studying it together, but tranquility descends upon them.' — Come find that tranquility at ICL."
        arabicText="وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ"
      />

      {/* Weekly programs */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Recurring Programs"
            title="Weekly"
            titleHighlight="Schedule"
            subtitle="Led by Imam Sheikh Mahmud Iddrisu. No registration needed — just show up with an open heart."
          />

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {weeklyEvents.map((e, i) => (
              <div
                key={e.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`bg-gradient-to-br ${e.color} rounded-2xl p-8 text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 pattern-overlay opacity-20" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl">{e.icon}</span>
                    <div className="text-right">
                      <p className="font-cinzel font-bold text-white/90 text-lg">{e.day}</p>
                      <p className="text-islamic-300 text-sm">{e.time}</p>
                    </div>
                  </div>
                  <h3 className="font-cinzel font-bold text-2xl mb-3">{e.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-5">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((tag) => (
                      <span key={tag} className="bg-white/15 text-white/90 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick reference table */}
          <div className="bg-islamic-50 rounded-2xl border border-islamic-100 overflow-hidden" data-aos="fade-up">
            <div className="bg-islamic-700 px-6 py-4">
              <h3 className="font-cinzel font-bold text-white text-lg">📅 Weekly Schedule at a Glance</h3>
            </div>
            <div className="divide-y divide-islamic-100">
              {weeklyEvents.map((e) => (
                <div key={e.title} className="px-6 py-4 flex items-center gap-4">
                  <div className="w-24 shrink-0">
                    <p className="font-cinzel font-bold text-islamic-700 text-sm">{e.day}</p>
                    <p className="text-gray-400 text-xs">{e.time}</p>
                  </div>
                  <div className="w-px h-8 bg-islamic-200 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">{e.title}</p>
                    <p className="text-gray-500 text-sm">{e.tags.join(" · ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jumu'ah section */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            badge="Every Friday"
            title="Jumu'ah"
            titleHighlight="Prayer"
            subtitle="The most important hour of the most blessed day of the week. Don't miss it."
          />

          <div className="bg-gradient-to-br from-islamic-700 to-islamic-900 rounded-3xl p-6 md:p-8 text-white text-center relative overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 pattern-overlay opacity-20" />
            <div className="relative z-10">
              <p className="font-cinzel text-gold-400 text-2xl mb-6 arabic-text">
                يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ
              </p>
              <p className="text-islamic-200 italic mb-10 text-lg max-w-2xl mx-auto">
                &quot;O you who believe! When the call to Friday prayer is made, hasten — leave your work and hurry to the remembrance of Allah.&quot; — Quran 62:9
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                {jumuah.map((entry, i) => (
                  <div key={`${entry.time}-${i}`} className="bg-white/10 border border-white/20 rounded-2xl px-10 py-6">
                    <p className="text-islamic-300 text-sm font-semibold mb-1">{i === 0 ? "1st Jumu'ah" : "2nd Jumu'ah"}</p>
                    <p className="font-cinzel font-bold text-white text-3xl">{entry.time}</p>
                    <p className="text-white/80 text-sm mt-2">Khateeb: {entry.khateeb}</p>
                    <p className="text-islamic-300 text-xs mt-2">Khutbah 15 min before</p>
                  </div>
                ))}
              </div>
              <p className="text-islamic-300 text-sm">
                Arabic & English Khutbah · All brothers and sisters welcome · Two shifts to accommodate everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special events */}
      <section className="section-spacing bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center" data-aos="fade-up">
          <SectionTitle
            badge="Special Events"
            title="Upcoming"
            titleHighlight="Events"
            subtitle="Ramadan iftars, Eid celebrations, fundraiser dinners, and community gatherings are announced here. Stay connected."
          />
          <div className="bg-islamic-50 border-2 border-dashed border-islamic-200 rounded-3xl p-14">
            <div className="text-6xl mb-4">📣</div>
            <h3 className="font-cinzel font-bold text-xl text-islamic-700 mb-2">Events Announced Soon</h3>
            <p className="text-gray-500 mb-6">
              Special events are shared by email and at the masjid. Join our mailing list so you never miss a gathering, iftar, or community dinner.
            </p>
            <a
              href="mailto:secretary@iclaveen.net?subject=Add me to the ICL mailing list"
              className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold px-8 py-3 rounded-full transition-colors"
            >
              Join the Mailing List
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
