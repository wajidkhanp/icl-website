import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "Construction Updates",
  description:
    "Follow the construction journey of Islamic Center of Laveen's permanent masjid. Updates, milestones, and how you can help.",
};

const milestones = [
  {
    phase: "Phase 1",
    title: "Community Established",
    date: "2020",
    desc: "A group of Muslim families in Laveen answered the call — they needed a masjid. With du'a and determination, the Islamic Center of Laveen was born. The adhan rang out for the first time in Laveen. Alhamdulillah.",
    status: "completed",
    icon: "🕌",
  },
  {
    phase: "Phase 2",
    title: "Land Identified",
    date: "2022",
    desc: "After much searching and prayer, a suitable permanent location in Laveen was identified. The dream of owning a masjid — a place where no one could one day tell us to leave — became a real goal.",
    status: "completed",
    icon: "📍",
  },
  {
    phase: "Phase 3",
    title: "Fundraising Campaign",
    date: "2023 – Present",
    desc: "We launched our building fund and the ummah responded with open hearts. Alhamdulillah — families giving $10, individuals giving $10,000, all united by one intention: to build a house for Allah.",
    status: "active",
    icon: "💚",
  },
  {
    phase: "Phase 4",
    title: "Design & Planning",
    date: "In Progress",
    desc: "We are working with Islamic architects to design a masjid that is functional, beautiful, and reflective of our heritage. Every detail is being crafted with worship at its center.",
    status: "active",
    icon: "📐",
  },
  {
    phase: "Phase 5",
    title: "Construction Begins",
    date: "Upcoming",
    desc: "Insha'Allah, the day will come when we break ground. A day our children will remember. A day that begins with a du'a and ends with the beginning of something built to last generations.",
    status: "upcoming",
    icon: "🏗️",
  },
  {
    phase: "Phase 6",
    title: "Grand Opening",
    date: "Insha'Allah",
    desc: "The adhan echoes from a masjid that belongs to the Muslim community of Laveen — forever. A prayer hall filled to capacity. Children learning Quran in dedicated classrooms. The dream realized.",
    status: "upcoming",
    icon: "🎉",
  },
];

const features = [
  { icon: "🕌", label: "Main Prayer Hall", desc: "Capacity for 500+ worshippers — room for every brother and sister" },
  { icon: "👦", label: "Children's Area", desc: "A dedicated space so families can pray together without worry" },
  { icon: "📚", label: "Classrooms", desc: "Rooms designed for Hifz school, halaqas, and Islamic studies" },
  { icon: "🚿", label: "Ablution Facilities", desc: "Full wudu areas for brothers and sisters — clean, spacious, dignified" },
  { icon: "👩", label: "Sisters' Section", desc: "A complete, private prayer hall for our sisters — as it should be" },
  { icon: "🤝", label: "Community Hall", desc: "For weddings, iftars, community dinners, and gatherings of joy" },
];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        badge="Building Our Home"
        title="Help Us Build"
        titleHighlight="Allah's House"
        subtitle="Every Muslim family in Laveen deserves a masjid they can call home. We are building it — brick by brick, prayer by prayer, together."
        arabicText="إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ"
      />

      {/* Quranic verse banner */}
      <section className="py-10 bg-islamic-50 border-b border-islamic-100">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-cinzel text-gold-600 text-lg md:text-xl arabic-text mb-3">
            إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ
          </p>
          <p className="text-gray-600 italic">
            &quot;Only those who believe in Allah and the Last Day shall build and maintain the mosques of Allah.&quot;
          </p>
          <p className="text-gold-600 font-cinzel font-bold text-sm mt-2">Quran 9:18</p>
        </div>
      </section>

      {/* Milestone timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            badge="Our Journey"
            title="Building"
            titleHighlight="Milestones"
            subtitle="Every great masjid in history started with people who refused to give up. This is our story."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-islamic-100 md:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.phase}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={i * 80}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border-4 border-white shadow-lg ${
                        m.status === "completed"
                          ? "bg-islamic-600"
                          : m.status === "active"
                          ? "bg-gold-500"
                          : "bg-gray-200"
                      }`}
                    >
                      {m.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"} pb-6`}>
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          m.status === "completed"
                            ? "bg-islamic-100 text-islamic-700"
                            : m.status === "active"
                            ? "bg-gold-100 text-gold-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {m.status === "completed" ? "✓ Complete" : m.status === "active" ? "🔄 In Progress" : "⏳ Upcoming"}
                      </span>
                      <span className="text-gray-400 text-xs">{m.date}</span>
                    </div>
                    <p className="font-cinzel text-xs text-islamic-500 font-semibold uppercase tracking-wider mb-1">{m.phase}</p>
                    <h3 className="font-cinzel font-bold text-xl text-islamic-700 mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planned features */}
      <section className="py-20 bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Future Facility"
            title="What We're"
            titleHighlight="Building"
            subtitle="A permanent masjid designed from the ground up for worship, community, education, and dignity."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.label}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-white rounded-2xl p-6 border border-islamic-100 flex gap-4 items-start hover:border-islamic-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl shrink-0">{f.icon}</div>
                <div>
                  <h4 className="font-cinzel font-bold text-islamic-700 mb-1">{f.label}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Gallery"
            title="Our Community"
            titleHighlight="Today"
            subtitle="The faces and spaces of ICL — a community united by faith, growing every day."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["slide1", "slide2", "slide3", "slide4"].map((img, i) => (
              <div
                key={img}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="rounded-2xl overflow-hidden aspect-square relative"
              >
                <Image
                  src={`https://www.islamiccenteroflaveen.org/masjid-pics/${img}.jpeg`}
                  alt={`ICL Community Photo ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-cinzel text-gold-400 text-2xl mb-3 arabic-text">مَن يَبْنِي مَسْجِدًا لِلَّهِ</p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white mb-4">
            Be Among the Builders
          </h2>
          <p className="text-islamic-200 text-lg leading-relaxed mb-8">
            The Prophet ﷺ said: &quot;Whoever builds a masjid for Allah, Allah will build for him a house in Paradise.&quot; (Bukhari &amp; Muslim)<br /><br />
            Your name may not be on the wall — but your reward is with Allah. Give today and become one of the builders of Laveen&apos;s permanent masjid.
          </p>
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-islamic-700 font-cinzel font-bold text-lg px-12 py-5 rounded-full hover:bg-islamic-50 transition-colors shadow-xl"
          >
            Donate to the Building Fund
          </a>
        </div>
      </section>
    </>
  );
}
