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
    desc: "Establishing and maintaining daily congregational prayers as the cornerstone of our community life.",
  },
  {
    icon: "📖",
    title: "Education",
    desc: "Nurturing love of the Quran and Islamic knowledge through the Noor Al-Quran School and weekly halaqas.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Building strong bonds between Muslim families in Laveen through shared worship, events, and support.",
  },
  {
    icon: "💚",
    title: "Service",
    desc: "Giving back to the wider Laveen community through charitable work, outreach, and social services.",
  },
  {
    icon: "🌙",
    title: "Integrity",
    desc: "Operating with transparency, accountability, and Islamic ethics in all of our affairs.",
  },
  {
    icon: "⭐",
    title: "Youth",
    desc: "Investing in the next generation of Muslim leaders through dedicated youth programs and mentorship.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "ICL Founded",
    desc: "A small group of Muslim families in Laveen came together to establish regular prayers and programs for the community.",
  },
  {
    year: "2021",
    title: "Programs Launch",
    desc: "The Noor Al-Quran School, weekly halaqas, and youth programs officially launched under Imam Sheikh Mahmud Iddrisu.",
  },
  {
    year: "2022",
    title: "Growing Community",
    desc: "Membership grew to serve dozens of families. Jumu'ah prayers expanded to two shifts to accommodate the community.",
  },
  {
    year: "2023",
    title: "Building Campaign",
    desc: "Launched the permanent masjid building fund campaign on Mohid. Community rallied with generous contributions.",
  },
  {
    year: "2024",
    title: "Planning & Design",
    desc: "Architectural planning underway for a purpose-built masjid facility in Laveen Village.",
  },
  {
    year: "Today",
    title: "Looking Forward",
    desc: "Continuing to serve, grow, and build — working toward a permanent masjid that will serve generations to come.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About ICL"
        title="More Than a Masjid —"
        titleHighlight="We Are Family"
        subtitle="The Islamic Center of Laveen is a sanctuary of faith, learning, and community for Muslim families in the Laveen area."
        arabicText="وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div
              data-aos="fade-right"
              className="bg-islamic-700 rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 pattern-overlay opacity-20" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎯</div>
                <h2 className="font-cinzel font-bold text-2xl mb-4">Our Mission</h2>
                <p className="text-islamic-100 leading-relaxed text-lg">
                  To provide a welcoming, inclusive space for worship, Quranic education, and community service — strengthening the iman of every Muslim family in Laveen while contributing positively to the broader community.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-islamic-50 border-2 border-islamic-200 rounded-3xl p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 pattern-overlay opacity-10" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌟</div>
                <h2 className="font-cinzel font-bold text-2xl text-islamic-700 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A permanent, purpose-built masjid in Laveen that serves as a landmark of faith — a place where the Muslim community prays together, children memorize the Quran, and families find belonging for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <Image
                src="https://www.islamiccenteroflaveen.org/masjid-pics/slide1.jpeg"
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
                A Community Built on<br />
                <span className="text-islamic-400">Faith & Service</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Islamic Center of Laveen was born from a simple need: Muslim families in the Laveen area needed a nearby place to pray, gather, and raise their children with Islamic values.
                </p>
                <p>
                  What started as a small congregation has grown into a vibrant community with daily prayers, the Noor Al-Quran School, weekly halaqas, youth programs, and women&apos;s classes — all led by our dedicated Imam, Sheikh Mahmud Iddrisu.
                </p>
                <p className="italic border-l-4 border-gold-400 pl-4 text-gray-500">
                  &quot;Be kind, for whenever kindness becomes part of something, it beautifies it.&quot;
                  <br />
                  <span className="text-gold-600 font-semibold not-italic text-sm">— Prophet Muhammad ﷺ</span>
                </p>
                <p>
                  Today, ICL serves dozens of families and continues to grow. We are actively working toward our most ambitious goal: building a permanent masjid that will serve Laveen&apos;s Muslim community for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            badge="Our Journey"
            title="ICL"
            titleHighlight="Timeline"
            subtitle="From a small prayer gathering to a thriving Islamic community center."
          />

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-islamic-100" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="relative flex gap-6 md:gap-10"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-8 md:w-16 h-8 md:h-16 rounded-full bg-islamic-700 flex items-center justify-center border-4 border-white shadow-md">
                      <span className="text-white font-cinzel font-bold text-xs md:text-sm">{item.year.slice(-2)}</span>
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
      <section className="py-20 bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Our Values"
            title="What We"
            titleHighlight="Stand For"
            subtitle="Six core values guide everything we do at the Islamic Center of Laveen."
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Leadership"
            title="Meet Our"
            titleHighlight="Imam"
          />
          <div className="max-w-3xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-islamic-50 rounded-3xl p-10 border border-islamic-100 flex flex-col md:flex-row gap-8 items-center"
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
                  Sheikh Mahmud Iddrisu leads the Islamic Center of Laveen as Imam, educator, and community guide. He leads all five daily prayers, delivers Jumu&apos;ah khutbahs, teaches at the Noor Al-Quran School, and conducts weekly halaqas for brothers, sisters, and youth.
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
      <section className="py-16 bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="font-cinzel font-bold text-3xl text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-islamic-200 text-lg mb-8">
            Whether you&apos;re new to Laveen or looking for a masjid to call home — you are always welcome at ICL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-8 py-4 rounded-full hover:bg-islamic-50 transition-colors"
            >
              Become a Member
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
