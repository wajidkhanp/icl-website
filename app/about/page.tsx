import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Islamic Center of Laveen — our founding story, mission, vision, and the community we serve in Laveen, AZ.",
};

const values = [
  {
    icon: "🕌",
    title: "Worship",
    desc: "Five prayers a day anchor our community. The masjid doors open before Fajr and close after Isha — because the remembrance of Allah is the heart of everything we do.",
  },
  {
    icon: "📖",
    title: "Education",
    desc: "We believe every Muslim should know their deen. Through the Noor Al-Quran School, Tafseer halaqas, and weekly circles of knowledge, we make learning accessible to all.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "The Prophet ﷺ said the believers are like one body. We live that — showing up for each other in celebration, in hardship, and in everyday life.",
  },
  {
    icon: "💚",
    title: "Service",
    desc: "Islam is not only between you and Allah — it extends to your neighbor, your city, and the stranger who needs help. We serve the wider Laveen community with open hands.",
  },
  {
    icon: "🌙",
    title: "Integrity",
    desc: "Honesty and accountability are non-negotiable. We operate with full transparency in our finances, our governance, and our dealings with every member of this community.",
  },
  {
    icon: "⭐",
    title: "Youth",
    desc: "Our young people carry the amanah of this ummah forward. We invest in them not just as future leaders — but as present Muslims who matter right now.",
  },
];

const timeline = [
  {
    year: "2008",
    marker: "08",
    title: "The Journey Begins",
    desc: "Incorporated in 2008, ICL began with Jumu’ah prayers at the César Chávez Library before moving to the Bougainvillea Golf Course. It later established its weekend school and held Jumu’ah, Fajr, Isha, and Taraweeh prayers for several years at the former Laveen Elementary School.",
  },
  {
    year: "2009–2012",
    marker: "09",
    title: "Building Toward a Permanent Masjid",
    desc: "In 2009, ICL purchased property on Southern Avenue with the vision of building a permanent masjid for the spiritual, educational, and community needs of Muslims in Laveen. The community broke ground in 2011 and received its building permit in 2012.",
  },
  {
    year: "2013",
    marker: "13",
    title: "A Place to Call Our Own",
    desc: "ICL purchased the former RE/MAX office at 51st Avenue and Dobbins Road, renovating it into a musalla—a dedicated space for prayer and worship.",
  },
  {
    year: "Growing Beyond Our Walls",
    marker: "→",
    title: "Making Room for Community",
    desc: "As the congregation and Noor Al-Quran School grew, ICL needed additional space for Jumu’ah prayers and educational programs. With permission from the City of Phoenix, the center proceeded with plans to construct a larger masjid on the south side of the property.",
  },
  {
    year: "2025",
    marker: "25",
    title: "A New Milestone",
    desc: "ICL received its certificate of occupancy for the new masjid, marking a significant milestone in the center’s growth and development.",
  },
  {
    year: "Today",
    marker: "•",
    title: "A Thriving Community",
    desc: "ICL hosts two Jumu’ah prayer services and is supported by a full-time imam and several faculty members. Its Hifz program and weekend Islamic school help students strengthen their knowledge of Islam and the Qur’an.",
  },
  {
    year: "Looking Ahead",
    marker: "→",
    title: "Building for the Future",
    desc: "ICL’s future vision includes establishing a full-time Islamic school, expanding community programs and activities, and developing business space to support the center’s long-term growth. Our journey continues, insha’Allah.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About ICL"
        title="More Than a Masjid —"
        titleHighlight="We Are Family"
        subtitle="The Islamic Center of Laveen was built on a simple belief: every Muslim family in Laveen deserves a place to pray, to learn, and to belong."
        arabicText="وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا"
      />

      {/* Mission & Vision */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div
              data-aos="fade-right"
              className="bg-islamic-700 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 pattern-overlay opacity-20" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="font-cinzel font-bold text-2xl mb-4">Our Mission</h2>
                <p className="text-islamic-100 leading-relaxed text-lg">
                  To be a welcoming home for every Muslim — a place where iman is strengthened, the Quran is taught, and no one walks through the door and feels like a stranger. We serve the Muslim families of Laveen and, through them, the entire community around us.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-islamic-50 border-2 border-islamic-200 rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 pattern-overlay opacity-10" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌟</div>
                <h2 className="font-cinzel font-bold text-2xl text-islamic-700 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A thriving Islamic center in the heart of Laveen — where the adhan rings out five times a day, children memorize Quran, and generations of Muslim families find peace, purpose, and belonging. Insha&apos;Allah, we will continue building for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div data-aos="fade-right">
              <Image
                src="/masjidICL1.jpg"
                alt="Islamic Center of Laveen"
                width={640}
                height={430}
                className="rounded-3xl object-cover w-full shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                Our Story
              </span>
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-5 leading-tight">
                Built Through Faith,<br />
                <span className="text-islamic-400">Perseverance &amp; Community</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  From humble beginnings at local gathering spaces to a dedicated masjid in Laveen, ICL has grown through the faith and dedication of the community it serves.
                </p>
                <p>
                  Today, ICL is a center for worship, education, and community. Two Jumu&apos;ah services, a full-time imam, faculty members, a Hifz program, and a weekend Islamic school help bring the community together and nurture the next generation.
                </p>
                <p className="italic border-l-4 border-gold-400 pl-4 text-gray-500">
                  &quot;Whoever travels a path in search of knowledge, Allah will make easy for them a path to Paradise.&quot;
                  <br />
                  <span className="text-gold-600 font-semibold not-italic text-sm">— Prophet Muhammad ﷺ (Muslim)</span>
                </p>
                <p>
                  We are still growing, still dreaming, and still building. Every person who walks through our doors becomes part of that story. Including you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            badge="Our Journey"
            title="ICL"
            titleHighlight="Timeline"
            subtitle="From humble beginnings to a growing center for worship, education, and community — every milestone reflects faith, perseverance, and the dedication of those who helped build ICL."
          />

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-islamic-100" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-8 md:w-16 h-8 md:h-16 rounded-full bg-islamic-700 flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white font-cinzel font-bold text-xs md:text-sm">{item.marker}</span>
                    </div>
                  </div>
                  <div className="pb-6 pt-1">
                    <p className="text-islamic-500 font-cinzel font-bold text-sm mb-1">{item.year}</p>
                    <h3 className="font-cinzel font-bold text-xl text-islamic-700 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Our Values"
            title="What We"
            titleHighlight="Stand For"
            subtitle="Six principles that guide every decision, every program, and every interaction at the Islamic Center of Laveen."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-white rounded-2xl p-7 border border-islamic-100 hover:border-islamic-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-cinzel font-bold text-islamic-700 text-xl mb-2">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imam profile */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Leadership"
            title="Meet Our"
            titleHighlight="Imam"
          />
          <div className="max-w-3xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-islamic-50 rounded-3xl p-6 md:p-8 border border-islamic-100 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-28 h-28 rounded-full bg-islamic-700 flex items-center justify-center text-6xl shrink-0 shadow-lg">
                🎓
              </div>
              <div>
                <h3 className="font-cinzel font-bold text-2xl text-islamic-700 mb-1">
                  Sheikh Mahmud Iddrisu
                </h3>
                <p className="text-islamic-500 font-semibold mb-4">Masjid Imam · Head of Education</p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Sheikh Mahmud Iddrisu is the heart of ICL. He leads every prayer with care, delivers khutbahs that speak to where we live and who we are, and teaches the Quran to students of all ages with patience and love. For many families in Laveen, he is not just the Imam — he is a spiritual father.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Quran Hifz", "Tafseer", "Tajweed", "Fiqh", "Seerah", "Islamic Studies"].map((tag) => (
                    <span key={tag} className="bg-islamic-100 text-islamic-700 border border-islamic-200 font-semibold text-xs px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="font-cinzel font-bold text-3xl text-white mb-4">
            This Is Your Community Too
          </h2>
          <p className="text-islamic-200 text-lg mb-8">
            Whether you&apos;re new to Laveen or have lived here for years — the doors of ICL are open for you. Come as you are. You are always welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-8 py-4 rounded-full hover:bg-islamic-50 transition-colors"
            >
              Join the Family
            </Link>
            <a
              href={MOHID_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-cinzel font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Support ICL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
