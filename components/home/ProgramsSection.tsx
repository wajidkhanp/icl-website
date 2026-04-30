const programs = [
  {
    day: "Wednesday",
    time: "After Maghrib",
    title: "Tafseer Halaqa",
    desc: "The Quran was not just revealed to be recited — it was revealed to be understood. Join us as our Imam opens the layers of meaning in the Noble Quran, one ayah at a time.",
    icon: "📖",
    badge: "Weekly",
  },
  {
    day: "Friday",
    time: "After Isha",
    title: "Friday Night Halaqa",
    desc: "End your week in the best way — surrounded by brothers and sisters, remembering Allah together. Knowledge, dhikr, and the warmth of community await you every Friday night.",
    icon: "🌙",
    badge: "Weekly",
  },
  {
    day: "Saturday",
    time: "After Asr",
    title: "Women's Quran Class",
    desc: "A sacred space for sisters to reconnect with the Book of Allah. In a warm, sisters-only setting, deepen your recitation, Tajweed, and love of the Quran at your own pace.",
    icon: "🌸",
    badge: "Sisters",
  },
  {
    day: "Saturday",
    time: "After Isha",
    title: "Youth Halaqa",
    desc: "Our youth are not the future of this ummah — they are the present. We invest in their character, their faith, and their identity as proud, grounded young Muslims.",
    icon: "⭐",
    badge: "Youth",
  },
];

const IMAM_NAME = "Sheikh Mahmud Iddrisu";

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Community Programs
          </span>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-4">
            Nourish Your Soul — Every Week
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Gathering in the house of Allah is never wasted time. Our weekly programs led by {IMAM_NAME} are open to all — brothers, sisters, youth, and families.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="relative bg-gradient-to-br from-islamic-700 to-islamic-900 rounded-2xl p-6 text-white overflow-hidden group hover:from-islamic-600 hover:to-islamic-800 transition-all"
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 pattern-overlay opacity-20" />

              {/* Badge */}
              <div className="relative z-10 flex justify-between items-start mb-5">
                <span className="text-4xl">{p.icon}</span>
                <span className="bg-islamic-400/30 text-islamic-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>

              {/* Day & Time */}
              <div className="relative z-10 mb-3">
                <p className="text-islamic-300 text-xs font-semibold uppercase tracking-widest mb-0.5">
                  {p.day} · {p.time}
                </p>
                <h3 className="font-cinzel font-bold text-xl text-white">
                  {p.title}
                </h3>
              </div>

              <p className="relative z-10 text-islamic-200 text-sm leading-relaxed mb-5">
                {p.desc}
              </p>

              <p className="relative z-10 text-gold-400 text-xs font-semibold">
                Led by: {IMAM_NAME}
              </p>
            </div>
          ))}
        </div>

        {/* View all events */}
        <div className="text-center" data-aos="fade-up">
          <a
            href="/events"
            className="inline-block border-2 border-islamic-700 text-islamic-700 hover:bg-islamic-700 hover:text-white font-cinzel font-bold px-10 py-4 rounded-full transition-all"
          >
            View Full Schedule →
          </a>
        </div>
      </div>
    </section>
  );
}
