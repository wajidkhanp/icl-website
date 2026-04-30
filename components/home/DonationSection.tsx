import { MOHID_DONATION_URL } from "@/lib/iqama-config";

const campaigns = [
  {
    title: "General Fund",
    desc: "Support daily operations, utilities, and masjid maintenance.",
    icon: "🕌",
    link: MOHID_DONATION_URL,
  },
  {
    title: "Building Fund",
    desc: "Help construct our permanent masjid facility in Laveen.",
    icon: "🏗️",
    link: MOHID_DONATION_URL,
  },
  {
    title: "Zakat",
    desc: "Pay your annual Zakat to eligible recipients through ICL.",
    icon: "🌙",
    link: MOHID_DONATION_URL,
  },
  {
    title: "Sadaqah",
    desc: "Voluntary charity for education, community programs, and the needy.",
    icon: "💚",
    link: MOHID_DONATION_URL,
  },
];

export default function DonationSection() {
  return (
    <section className="py-20 bg-islamic-50 pattern-overlay" id="donate">
      <div className="max-w-7xl mx-auto px-4">
        {/* Quranic verse */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="font-cinzel text-gold-600 text-2xl md:text-3xl leading-loose mb-4 arabic-text">
            إِنَّ الَّذِينَ آمَنُواْ وَعَمِلُواْ الصَّالِحَاتِ وَأَقَامُواْ الصَّلاَةَ وَآتَوُاْ الزَّكَاةَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ
          </p>
          <p className="text-gray-600 italic text-base md:text-lg max-w-2xl mx-auto mb-2">
            &quot;Verily, those who have attained to faith and do good works, and are constant in prayer, and dispense charity — they shall have their reward with their Sustainer.&quot;
          </p>
          <p className="text-gold-600 font-cinzel font-semibold text-sm">
            Quran 2:277
          </p>

          <div className="mt-8">
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-3">
              Support Your Masjid
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Islamic Center of Laveen needs your help and donations now more than ever. Every contribution, big or small, makes a difference.
            </p>
          </div>
        </div>

        {/* Campaign cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {campaigns.map((c, i) => (
            <div
              key={c.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl p-6 shadow-sm border border-islamic-100 hover:shadow-md hover:border-islamic-300 transition-all group"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-cinzel font-bold text-islamic-700 text-lg mb-2">
                {c.title}
              </h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">{c.desc}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-semibold text-sm py-2.5 rounded-xl transition-colors"
              >
                Donate →
              </a>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center" data-aos="fade-up">
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold text-lg px-12 py-5 rounded-full transition-all shadow-lg shadow-islamic-700/30 hover:shadow-xl"
          >
            Donate Today via Mohid
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Secure payment powered by Mohid · Tax-deductible donations
          </p>
        </div>
      </div>
    </section>
  );
}
