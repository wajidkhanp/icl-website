import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Education — Noor Al-Quran School",
  description:
    "Noor Al-Quran School at ICL offers Quran Hifz programs, weekend Islamic school, and halaqas for kids and adults in Laveen, AZ.",
};

const programs = [
  {
    icon: "📖",
    title: "Kids Hifz Program",
    subtitle: "Ages 6–16",
    desc: "Imagine placing a crown of light on your parents' heads on the Day of Judgment. That journey begins here — with patient, structured Hifz classes that nurture children's love of the Quran.",
    schedule: "Mon, Wed, Fri · After Asr",
    color: "from-islamic-700 to-islamic-900",
  },
  {
    icon: "🎓",
    title: "Adults Hifz Program",
    subtitle: "All Ages",
    desc: "It is never too late to carry the words of Allah in your heart. Our adult Hifz track is designed around your life — flexible, encouraging, and free of judgment. Your age is not a barrier.",
    schedule: "Sat & Sun · Morning",
    color: "from-islamic-600 to-islamic-800",
  },
  {
    icon: "🕌",
    title: "Weekend Islamic School",
    subtitle: "Ages 5–14",
    desc: "Give your children the foundation that no secular school can provide. Our weekend school weaves Quran, Seerah, Fiqh, and Arabic into a joyful, structured learning experience.",
    schedule: "Saturday & Sunday",
    color: "from-gold-600 to-gold-700",
  },
  {
    icon: "📚",
    title: "Tafseer Halaqa",
    subtitle: "Open to All",
    desc: "The Quran speaks — do you understand what it says? Our weekly Tafseer halaqa unlocks the depth, beauty, and guidance of the Book of Allah. Come curious, leave transformed.",
    schedule: "Wednesday · After Maghrib",
    color: "from-islamic-500 to-islamic-700",
  },
];

const curriculum = [
  { subject: "Quran Hifz", desc: "Systematic memorization with proper Tajweed and daily revision" },
  { subject: "Quran Recitation", desc: "Beautiful, correct pronunciation through the rules of Tajweed" },
  { subject: "Islamic Studies", desc: "Pillars of Islam, Pillars of Iman, Fiqh of daily life" },
  { subject: "Seerah", desc: "The life of Prophet Muhammad ﷺ — our greatest role model" },
  { subject: "Arabic Language", desc: "Foundational Arabic so students can understand what they recite" },
  { subject: "Aqeedah", desc: "Firm Islamic belief and understanding of who we worship and why" },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        badge="Islamic Education"
        title="Noor Al-Quran"
        titleHighlight="School at ICL"
        subtitle="The best gift you can give your child is a heart connected to the Quran. That gift is available right here in Laveen."
        arabicText="اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"
      />

      {/* School overview */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div data-aos="fade-right">
              <Image
                src="https://www.islamiccenteroflaveen.org/masjid-pics/quran.jpeg"
                alt="Noor Al-Quran School"
                width={640}
                height={430}
                className="rounded-3xl object-cover w-full shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                Our School
              </span>
              <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-5 leading-tight">
                Planting the Quran<br />
                <span className="text-islamic-400">in the Soil of Young Hearts</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Prophet ﷺ said: &quot;The best among you are those who learn the Quran and teach it.&quot; At the Noor Al-Quran School, we take that hadith seriously — building a space where learning the Book of Allah is joyful, structured, and life-changing.
                </p>
                <p>
                  Whether your child is picking up a mushaf for the very first time or you&apos;re an adult who has always dreamed of completing your Hifz — there is a place for you here. Our Imam, Sheikh Mahmud Iddrisu, brings patience, knowledge, and genuine love for every student who walks through our doors.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "50+", label: "Students Enrolled" },
                  { value: "4+", label: "Years of Serving Laveen" },
                  { value: "4", label: "Active Programs" },
                  { value: "2", label: "Age Groups" },
                ].map((s) => (
                  <div key={s.label} className="bg-islamic-50 rounded-2xl p-4 text-center border border-islamic-100">
                    <p className="font-cinzel font-bold text-2xl text-islamic-700">{s.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Programs Offered"
            title="Your Path to"
            titleHighlight="the Quran"
            subtitle="Every program is led by Imam Sheikh Mahmud Iddrisu with an emphasis on proper recitation, deep memorization, and beautiful Islamic character."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`bg-gradient-to-br ${p.color} rounded-2xl p-6 text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 pattern-overlay opacity-20" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <span className="inline-block bg-white/20 text-white/90 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {p.subtitle}
                  </span>
                  <h3 className="font-cinzel font-bold text-xl mb-3">{p.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-xs text-white/60 font-semibold uppercase tracking-wider mb-1">Schedule</p>
                    <p className="text-white font-semibold text-sm">{p.schedule}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Curriculum"
            title="What We"
            titleHighlight="Teach"
            subtitle="A complete Islamic curriculum designed to build students who are grounded in their faith, proud of their identity, and rooted in the Quran."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up" data-aos-delay="100">
            {curriculum.map((c, i) => (
              <div key={c.subject} className="flex gap-4 p-5 bg-islamic-50 rounded-2xl border border-islamic-100">
                <div className="w-10 h-10 bg-islamic-700 rounded-xl flex items-center justify-center text-white font-cinzel font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-islamic-700 mb-1">{c.subject}</h4>
                  <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imam profile */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            Our Imam & Teacher
          </span>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-islamic-100">
            <div className="w-24 h-24 bg-islamic-700 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
              🎓
            </div>
            <h3 className="font-cinzel font-bold text-2xl text-islamic-700 mb-2">
              Sheikh Mahmud Iddrisu
            </h3>
            <p className="text-islamic-500 font-semibold mb-5">Masjid Imam · Head Teacher</p>
            <p className="text-gray-600 leading-relaxed">
              Sheikh Mahmud brings more than knowledge to the classroom — he brings heart. His teaching style is patient, encouraging, and deeply rooted in his love for the Quran. Dozens of students in Laveen have deepened their connection to the Book of Allah under his guidance, and many carry their Hifz because he believed in them when it was hard.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Quran Hifz", "Tafseer", "Tajweed", "Islamic Studies", "Arabic"].map((tag) => (
                <span key={tag} className="bg-islamic-50 text-islamic-700 border border-islamic-200 font-semibold text-xs px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="section-spacing bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white mb-4">
            Don&apos;t Wait — Enroll Today
          </h2>
          <p className="text-islamic-200 text-lg mb-8">
            Every day without the Quran is a day of opportunity missed. Register your child — or yourself — for the upcoming semester. The journey of a thousand ayahs begins with one class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:secretary@iclaveen.net?subject=Enrollment Inquiry — Noor Al-Quran School"
              className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-8 py-4 rounded-full hover:bg-islamic-50 transition-colors"
            >
              Email to Enroll
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white font-cinzel font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
