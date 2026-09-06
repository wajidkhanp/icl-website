import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import ZelleCallout from "@/components/ui/ZelleCallout";
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
    desc: "The electricity that keeps the lights on for Fajr. The water for wudu. The space where du'as are made. Your general donation keeps this masjid alive every single day.",
    color: "border-islamic-300",
    badge: "Always Open",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "🏗️",
    title: "Building Fund",
    desc: "You have the chance to be among those who build a house of Allah. A permanent masjid for Laveen — so the adhan rings out long after we are gone.",
    color: "border-gold-400",
    badge: "Priority",
    badgeColor: "bg-gold-100 text-gold-700",
  },
  {
    icon: "🌙",
    title: "Zakat",
    desc: "Purify your wealth and fulfil your obligation with trust. ICL distributes Zakat to eligible families in the community with care, accountability, and Islamic integrity.",
    color: "border-islamic-300",
    badge: "Obligatory",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "💚",
    title: "Sadaqah",
    desc: "A meal for a family in need. A Quran for a student. A scholarship for a child who deserves to memorize the Book of Allah. Your sadaqah reaches further than you know.",
    color: "border-islamic-300",
    badge: "Ongoing",
    badgeColor: "bg-islamic-100 text-islamic-700",
  },
  {
    icon: "📖",
    title: "Education Fund",
    desc: "Fund the teachers who pour knowledge into young hearts. Help us keep tuition free or affordable for every family who wants their child to love the Quran.",
    color: "border-islamic-300",
    badge: "Education",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🤝",
    title: "Community Services",
    desc: "Food drives, youth programs, outreach events — we serve the broader Laveen community because Islam calls us to be a mercy to those around us.",
    color: "border-islamic-300",
    badge: "Community",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const howToSteps = [
  { step: "1", title: "Choose a Cause", desc: "Give where your heart moves you — masjid operations, building, Zakat, education, or community services." },
  { step: "2", title: "Click Donate", desc: "You'll be securely redirected to Mohid — our trusted, encrypted payment portal." },
  { step: "3", title: "Set Your Amount", desc: "Give once or set up a recurring monthly sadaqah — even a small amount, consistently, is beloved to Allah." },
  { step: "4", title: "Receive Your Receipt", desc: "An instant tax-deductible receipt lands in your inbox. Your reward is recorded with Allah." },
];

const verses = [
  {
    arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ",
    english: "The example of those who spend their wealth in the way of Allah is like a seed which grows seven ears — in each ear, a hundred grains. And Allah multiplies for whom He wills.",
    ref: "Quran 2:261",
  },
  {
    arabic: "لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ",
    english: "You will never attain righteousness until you spend from that which you love most. And whatever you spend — Allah knows it well.",
    ref: "Quran 3:92",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        badge="Give for the Sake of Allah"
        title="Your Donation Is"
        titleHighlight="Sadaqah Jariyah"
        subtitle="When you give to ICL, your reward does not end here. It flows into every prayer made in this masjid, every child who memorizes Quran, every family lifted by this community."
        arabicText="وَأَنفِقُوا فِي سَبِيلِ اللَّهِ"
      />

      <section className="bg-white px-4 pb-2 pt-6 sm:pt-8">
        <ZelleCallout />
      </section>

      {/* Quranic verses */}
      <section className="section-spacing bg-islamic-50">
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
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Donation Campaigns"
            title="Choose Where"
            titleHighlight="to Give"
            subtitle="Every cause is dear. Give where your heart moves — all donations are tax-deductible and processed securely through Mohid."
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
              Give for the Sake of Allah →
            </a>
            <p className="text-gray-400 text-sm mt-3">Secure · Instant receipt · Tax-deductible</p>
          </div>
        </div>
      </section>

      {/* How to donate */}
      <section className="section-spacing bg-islamic-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            badge="Simple Process"
            title="How to"
            titleHighlight="Donate"
            subtitle="It takes less than 2 minutes. Your intention makes it an act of worship."
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
      <section className="section-spacing bg-islamic-700">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <p className="font-cinzel text-gold-400 text-2xl mb-3 arabic-text">صَدَقَةٌ جَارِيَة</p>
          <h2 className="font-cinzel font-bold text-3xl text-white mb-4">What Will You Leave Behind?</h2>
          <p className="text-islamic-200 text-lg leading-relaxed mb-6">
            The Prophet ﷺ said that when a person dies, three things remain: a continuous charity, knowledge that benefits others, or a righteous child who prays for them. Building this masjid. Funding this school. These are your ongoing gifts — living on long after your last breath, insha&apos;Allah.
          </p>
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-10 py-4 rounded-full hover:bg-islamic-50 transition-colors"
          >
            Leave Your Sadaqah Jariyah
          </a>
        </div>
      </section>
    </>
  );
}
