import { MOHID_DONATION_URL } from "@/lib/iqama-config";
import ZelleCallout from "@/components/ui/ZelleCallout";

const campaigns = [
  {
    title: "General Fund",
    desc: "Keep the lights on, the doors open, and the adhan calling. Your support sustains every prayer held at ICL.",
    icon: "🕌",
  },
  {
    title: "Building Fund",
    desc: "Be among those who build Allah's house. Every dollar is a brick in a masjid that will outlast us all.",
    icon: "🏗️",
  },
  {
    title: "Zakat",
    desc: "Purify your wealth and fulfil your obligation. ICL distributes Zakat to eligible families with trust and care.",
    icon: "🌙",
  },
  {
    title: "Sadaqah",
    desc: "A smile is sadaqah — and so is funding a child's Quran class. No gift is too small in the sight of Allah.",
    icon: "💚",
  },
];

export default function DonationSection() {
  return (
    <section className="section-spacing bg-islamic-50 pattern-overlay" id="donate">
      <div className="max-w-7xl mx-auto px-4">
        {/* Quranic verse */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="font-cinzel text-gold-600 text-2xl md:text-3xl leading-loose mb-4 arabic-text">
            مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
          </p>
          <p className="text-gray-600 italic text-base md:text-lg max-w-2xl mx-auto mb-2">
            &quot;The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes, in each spike a hundred grains — and Allah multiplies for whom He wills.&quot;
          </p>
          <p className="text-gold-600 font-cinzel font-semibold text-sm">
            Quran 2:261
          </p>

          <div className="mt-8">
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-3">
              Invest in Your Akhirah
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The masjid doors stay open because of people like you. Every act of giving — however small — is recorded by Allah and multiplied beyond what we can imagine.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <ZelleCallout />
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
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
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
            Give for the Sake of Allah
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Secure · Instant tax receipt · 100% goes to ICL
          </p>
        </div>
      </div>
    </section>
  );
}
