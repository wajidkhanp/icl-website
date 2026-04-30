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
    desc: "Islamic Center of Laveen was founded to serve the growing Muslim community in the Laveen area. Regular prayers and programs began at our current location.",
    status: "completed",
    icon: "🕌",
  },
  {
    phase: "Phase 2",
    title: "Land Identification",
    date: "2022",
    desc: "The community identified a suitable permanent location in Laveen to build the masjid. Fundraising campaigns launched to support the acquisition.",
    status: "completed",
    icon: "📍",
  },
  {
    phase: "Phase 3",
    title: "Fundraising Campaign",
    date: "2023 – Present",
    desc: "Active fundraising through Mohid platform and community events. Alhamdulillah, the community has been incredibly generous. Every dollar counts.",
    status: "active",
    icon: "💚",
  },
  {
    phase: "Phase 4",
    title: "Design & Planning",
    date: "In Progress",
    desc: "Architectural design and planning phase — working with Islamic architects to create a beautiful, functional masjid that reflects our heritage.",
    status: "active",
    icon: "📐",
  },
  {
    phase: "Phase 5",
    title: "Construction Begins",
    date: "Upcoming",
    desc: "Breaking ground on our permanent masjid facility, insha'Allah. This will include a prayer hall, classrooms, ablution area, and community spaces.",
    status: "upcoming",
    icon: "🏗️",
  },
  {
    phase: "Phase 6",
    title: "Grand Opening",
    date: "Insha'Allah",
    desc: "The Islamic Center of Laveen opens its doors as a full masjid and community center serving Muslims in Laveen for generations to come.",
    status: "upcoming",
    icon: "🎉",
  },
];

const features = [
  { icon: "🕌", label: "Main Prayer Hall", desc: "Capacity for 500+ worshippers" },
  { icon: "👦", label: "Children's Area", desc: "Dedicated kids' prayer space" },
  { icon: "📚", label: "Classrooms", desc: "For school and halaqas" },
  { icon: "🚿", label: "Ablution Facilities", desc: "Full wudu facilities for men & women" },
  { icon: "👩", label: "Sisters' Section", desc: "Separate sisters' prayer hall" },
  { icon: "🤝", label: "Community Hall", desc: "For events and gatherings" },
];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        badge="Building Our Home"
        title="Construction"
        titleHighlight="Updates"
        subtitle="Follow our journey as we build a permanent home for the Muslim community in Laveen, AZ"
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
            subtitle="Every great masjid starts with a community's determination. Here is our journey so far."
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
                  <div className="relative z-10 flex-shrink-0">
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
            subtitle="The permanent ICL masjid will be a state-of-the-art facility designed for worship, education, and community."
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
            title="Community"
            titleHighlight="Photos"
            subtitle="Our current home and the community we serve."
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
          <p className="font-cinzel text-gold-400 text-2xl mb-3 arabic-text">ابْنِ مَسْجِدًا</p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white mb-4">
            Help Build Our Masjid
          </h2>
          <p className="text-islamic-200 text-lg leading-relaxed mb-8">
            The Prophet ﷺ said: &quot;Whoever builds a masjid for Allah, Allah will build for him a house in Paradise.&quot; — Bukhari &amp; Muslim
          </p>
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-islamic-700 font-cinzel font-bold text-lg px-12 py-5 rounded-full hover:bg-islamic-50 transition-colors shadow-xl"
          >
            Donate to Building Fund
          </a>
        </div>
      </section>
    </>
  );
}
