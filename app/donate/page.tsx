import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Islamic Center of Laveen with your Zakat, Sadaqah, and general donations. All contributions are tax-deductible.",
};

const campaigns = [
  {
    icon: "🕌",
    title: "General Fund",
    desc: "Covers daily masjid operations, utilities, cleaning, maintenance, and essential running costs.",
    color: "border-islamic-300",
    badge: "Always Open",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "🏗️",
    title: "Building Fund",
    desc: "Help us construct a permanent, purpose-built masjid facility for the Muslim community in Laveen.",
    color: "border-gold-400",
    badge: "Priority",
    badgeColor: "bg-gold-100 text-gold-700",
  },
  {
    icon: "🌙",
    title: "Zakat",
    desc: "Fulfill your obligatory annual Zakat. Distributed to eligible recipients in the community as per Islamic guidelines.",
    color: "border-islamic-300",
    badge: "Obligatory",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "💚",
    title: "Sadaqah",
    desc: "Voluntary charity supporting education programs, youth activities, community events, and those in need.",
    color: "border-islamic-300",
    badge: "Ongoing",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "📖",
    title: "Education Fund",
    desc: "Fund the Noor Al-Quran School — teacher salaries, school supplies, and scholarship assistance for families.",
    color: "border-islamic-300",
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🤝",
    title: "Community Services",
    desc: "Support outreach programs, food drives, youth sports, and interfaith community events.",
    color: "border-islamic-300",
    badge: "Community",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const howToSteps = [
  { step: "1", title: "Choose a Campaign", desc: "Select from General Fund, Zakat, Sadaqah, or Building Fund." },
  { step: "2", title: "Click Donate", desc: "You'll be securely redirected to our Mohid payment portal." },
  { step: "3", title: "Enter Amount", desc: "Choose a one-time or recurring monthly donation amount." },
  { step: "4", title: "Receive Receipt", desc: "Get an email receipt for your tax-deductible donation." },
];

const verses = [
  {
    arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ",
    english: "The example of those who spend their wealth in the way of Allah is like a seed which grows seven ears...",
    ref: "Quran 2:261",
  },
  {
    arabic: "إِنَّ الَّذِينَ آمَنُواْ وَعَمِلُواْ الصَّالِحَاتِ وَأَقَامُواْ الصَّلاَةَ وَآتَوُاْ الزَّكَاةَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ",
    english: "Those who believe, do good works, and are constant in prayer and dispense charity — shall have their reward with their Lord.",
    ref: "Quran 2:277",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        badge="Give for the Sake of Allah"
        title="Donate to"
        titleHighlight="ICL"
        subtitle="Every dollar you give is an investment in your akhirah. Support your masjid, your community, and your deen."
        arabicText="وَأَنفِقُوا فِي سَبِيلِ اللَّهِ"
      />

      {/* Quranic verses */}
      <section className="py-14 bg-islamic-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {verses.map((v) => (
              <div key={v.ref} className="bg-white rounded-2xl p-7 border border-islamic-100 shadow-sm" data-aos="fade-up">
                <p className="font-cinzel text-gold-600 text-xl leading-loose mb-4 arabic-text text-right">
                  {v.arabic}
                </p>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-3">&quot;{v.english}&quot;</p>
                <p className="text-gold-600 font-cinzel font-bold text-sm">{v.ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Donation Campaigns"
            title="Choose Where"
            titleHighlight="to Give"
            subtitle="All donations are processed securely through Mohid and are tax-deductible."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((c, i) => (
              <div
                key={c.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`bg-white rounded-2xl p-7 border-2 ${c.color} hover:shadow-lg hover:border-islamic-400 transition-all group`}
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-4xl">{c.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                </div>
                <h3 className="font-cinzel font-bold text-islamic-700 text-xl mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.desc}</p>
                <a
                  href={MOHID_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold py-3 rounded-xl transition-colors"
                >
                  Donate Now →
                </a>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href={MOHID_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold text-lg px-14 py-5 rounded-full shadow-xl shadow-islamic-700/30 transition-all hover:shadow-2xl"
            >
              Donate via Mohid
            </a>
            <p className="text-gray-400 text-sm mt-3">Secure · Instant receipt · Tax-deductible</p>
          </div>
        </div>
      </section>

      {/* How to donate */}
      <section className="py-20 bg-islamic-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            badge="Simple Process"
            title="How to"
            titleHighlight="Donate"
            subtitle="Donating to ICL is simple, secure, and takes less than 2 minutes."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToSteps.map((s, i) => (
              <div key={s.step} data-aos="fade-up" data-aos-delay={i * 100} className="text-center">
                <div className="w-16 h-16 bg-islamic-700 text-white font-cinzel font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-islamic-700/30">
                  {s.step}
                </div>
                <h4 className="font-cinzel font-bold text-islamic-700 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sadaqah Jariyah box */}
      <section className="py-14 bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-cinzel text-gold-400 text-2xl mb-3 arabic-text">صَدَقَةٌ جَارِيَة</p>
          <h2 className="font-cinzel font-bold text-3xl text-white mb-4">Sadaqah Jariyah</h2>
          <p className="text-islamic-200 text-lg leading-relaxed mb-6">
            When you donate to build the masjid, fund education, or dig a well — your reward continues flowing even after you leave this world. Make an investment in your akhirah today.
          </p>
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-10 py-4 rounded-full hover:bg-islamic-50 transition-colors"
          >
            Give Sadaqah Jariyah
          </a>
        </div>
      </section>
    </>
  );
}
