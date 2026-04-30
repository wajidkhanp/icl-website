import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { jumuahTimes } from "@/lib/iqama-config";

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
    desc: "In-depth explanation of the Noble Quran — Tafseer Al-Kareem. Suitable for brothers and sisters of all knowledge levels.",
    icon: "📖",
    tags: ["Open to All", "Arabic & English"],
    color: "from-islamic-700 to-islamic-900",
  },
  {
    day: "Friday",
    time: "After Isha",
    title: "Friday Night Halaqa",
    desc: "A weekly gathering of knowledge, dhikr, and community connection. Topics rotate covering Fiqh, Seerah, and contemporary issues.",
    icon: "🌙",
    tags: ["Brothers & Sisters", "Weekly"],
    color: "from-islamic-600 to-islamic-800",
  },
  {
    day: "Saturday",
    time: "After Asr",
    title: "Women's Quran Class",
    desc: "Dedicated Quran class for sisters — covering Hifz, Tajweed, and Islamic knowledge in a comfortable sisters-only environment.",
    icon: "🌸",
    tags: ["Sisters Only", "All Levels"],
    color: "from-islamic-500 to-islamic-700",
  },
  {
    day: "Saturday",
    time: "After Isha",
    title: "Youth Halaqa",
    desc: "Building the next generation of Muslim leaders through Islamic knowledge, character development, and community engagement.",
    icon: "⭐",
    tags: ["Youth Program", "Ages 10–25"],
    color: "from-gold-600 to-gold-700",
  },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function EventsPage() {
  return (
    <>
      <PageHero
        badge="Programs & Events"
        title="Community"
        titleHighlight="Events"
        subtitle="Weekly programs, special events, and gatherings for every member of the ICL community"
        arabicText="وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ"
      />

      {/* Weekly programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Recurring Programs"
            title="Weekly"
            titleHighlight="Schedule"
            subtitle="All programs are led by Imam Sheikh Mahmud Iddrisu. No registration required — just show up!"
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
      <section className="py-20 bg-islamic-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            badge="Every Friday"
            title="Jumu'ah"
            titleHighlight="Prayer"
            subtitle="Friday congregational prayer is the most important gathering of the week for every Muslim."
          />

          <div className="bg-gradient-to-br from-islamic-700 to-islamic-900 rounded-3xl p-10 text-white text-center relative overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 pattern-overlay opacity-20" />
            <div className="relative z-10">
              <p className="font-cinzel text-gold-400 text-2xl mb-6 arabic-text">
                يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ
              </p>
              <p className="text-islamic-200 italic mb-10 text-lg max-w-2xl mx-auto">
                &quot;O you who believe! When the call for Friday prayer is made, hasten to the remembrance of Allah&quot; — Quran 62:9
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                {jumuahTimes.map((t, i) => (
                  <div key={t} className="bg-white/10 border border-white/20 rounded-2xl px-10 py-6">
                    <p className="text-islamic-300 text-sm font-semibold mb-1">{i === 0 ? "1st Jumu'ah" : "2nd Jumu'ah"}</p>
                    <p className="font-cinzel font-bold text-white text-3xl">{t}</p>
                    <p className="text-islamic-300 text-xs mt-2">Khutbah 15 min before</p>
                  </div>
                ))}
              </div>
              <p className="text-islamic-300 text-sm">
                Arabic & English Khutbah · All brothers and sisters welcome
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special events coming soon */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center" data-aos="fade-up">
          <SectionTitle
            badge="Special Events"
            title="Upcoming"
            titleHighlight="Events"
            subtitle="Special events, fundraisers, and community iftars are announced here. Check back regularly or contact us to stay informed."
          />
          <div className="bg-islamic-50 border-2 border-dashed border-islamic-200 rounded-3xl p-14">
            <div className="text-6xl mb-4">📣</div>
            <h3 className="font-cinzel font-bold text-xl text-islamic-700 mb-2">Events Coming Soon</h3>
            <p className="text-gray-500 mb-6">
              Special events are announced via email and at the masjid. Contact us to be added to our mailing list.
            </p>
            <a
              href="mailto:secretary@iclaveen.net?subject=Add me to the ICL mailing list"
              className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold px-8 py-3 rounded-full transition-colors"
            >
              Join Mailing List
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
