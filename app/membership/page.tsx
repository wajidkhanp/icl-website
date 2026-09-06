import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import MembershipForm from "@/components/contact/MembershipForm";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Become a member of Islamic Center of Laveen. Support your masjid and strengthen the Muslim community in Laveen, AZ.",
};

const tiers = [
  {
    icon: "🌱",
    title: "General Member",
    price: "Free",
    desc: "Every Muslim who calls Laveen home is welcome here — no fee, no barrier, no conditions.",
    benefits: [
      "Voting rights at community meetings",
      "Access to all programs and events",
      "Community newsletter & announcements",
      "Prayer times and iqama updates",
    ],
    cta: "Register Free",
    highlight: false,
  },
  {
    icon: "⭐",
    title: "Supporting Member",
    price: "$25+/mo",
    desc: "For those who feel the weight of this masjid in their heart and want to carry part of it.",
    benefits: [
      "All General Member benefits",
      "Monthly sadaqah via Mohid",
      "Priority building fund updates",
      "Recognition at ICL annual dinner",
      "Tax-deductible monthly giving",
    ],
    cta: "Become a Supporter",
    highlight: true,
  },
  {
    icon: "🏗️",
    title: "Builder Member",
    price: "$100+/mo",
    desc: "Lead the charge. Your generosity is what transforms a dream into four walls and a mihrab.",
    benefits: [
      "All Supporting Member benefits",
      "Named recognition on Masjid wall (insha'Allah)",
      "Priority access to ICL events",
      "Direct updates from the building committee",
      "Ongoing sadaqah jariyah for every dollar given",
    ],
    cta: "Lead the Build",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is ICL membership free?",
    a: "Yes — General Membership is completely free. We never want cost to be a reason someone feels excluded from their masjid. Financial tiers exist for those who want to actively sustain and grow ICL.",
  },
  {
    q: "Are my donations tax-deductible?",
    a: "Yes. ICL is a registered nonprofit organization. All donations through Mohid come with an instant email receipt that can be used for tax purposes at year-end.",
  },
  {
    q: "What happens after I register?",
    a: "Our team will personally reach out within a few days to welcome you, share program schedules, and answer any questions. You are joining a family — and we want you to feel that from day one.",
  },
  {
    q: "Can non-Muslims visit or attend events?",
    a: "Many of our community events and outreach programs are open to neighbors of all backgrounds. Islam calls us to be a mercy to all people, and we take that seriously.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        badge="Join ICL"
        title="You Already Belong —"
        titleHighlight="Make It Official"
        subtitle="The masjid is everyone's. But when you register as a member, you say: 'This is my community, and I am committed to it.' Join the ICL family today."
        arabicText="وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ"
      />

      {/* Membership tiers */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            badge="Membership Tiers"
            title="Choose How You"
            titleHighlight="Want to Contribute"
            subtitle="Whether you give your time, your du'a, or your wealth — every level of commitment strengthens this community."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {tiers.map((tier, i) => (
              <div
                key={tier.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`rounded-2xl p-8 border-2 relative overflow-hidden transition-all ${
                  tier.highlight
                    ? "border-islamic-500 bg-islamic-700 text-white shadow-xl shadow-islamic-700/30"
                    : "border-islamic-100 bg-white hover:border-islamic-300 hover:shadow-md"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute inset-0 pattern-overlay opacity-20" />
                )}
                {tier.highlight && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-white font-cinzel font-bold text-xs px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h3 className={`font-cinzel font-bold text-xl mb-1 ${tier.highlight ? "text-white" : "text-islamic-700"}`}>
                    {tier.title}
                  </h3>
                  <p className={`text-3xl font-cinzel font-bold mb-3 ${tier.highlight ? "text-islamic-300" : "text-islamic-500"}`}>
                    {tier.price}
                  </p>
                  <p className={`text-sm mb-6 ${tier.highlight ? "text-islamic-200" : "text-gray-500"}`}>
                    {tier.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {tier.benefits.map((b) => (
                      <li key={b} className={`flex gap-2 items-start text-sm ${tier.highlight ? "text-islamic-100" : "text-gray-600"}`}>
                        <span className={`mt-0.5 shrink-0 ${tier.highlight ? "text-islamic-300" : "text-islamic-500"}`}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {tier.price === "Free" ? (
                    <a
                      href="#register"
                      className={`block w-full text-center font-cinzel font-bold py-3 rounded-xl transition-colors ${
                        tier.highlight
                          ? "bg-white text-islamic-700 hover:bg-islamic-50"
                          : "bg-islamic-700 text-white hover:bg-islamic-600"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <a
                      href={MOHID_DONATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center font-cinzel font-bold py-3 rounded-xl transition-colors ${
                        tier.highlight
                          ? "bg-white text-islamic-700 hover:bg-islamic-50"
                          : "bg-islamic-700 text-white hover:bg-islamic-600"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="section-spacing bg-islamic-50" id="register">
        <div className="max-w-2xl mx-auto px-4">
          <SectionTitle
            badge="Free Registration"
            title="Register as a"
            titleHighlight="Member"
            subtitle="Takes two minutes. Means the world to us — and to the future of this masjid."
          />
          <div data-aos="fade-up">
            <MembershipForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            badge="Questions"
            title="Frequently Asked"
            titleHighlight="Questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-islamic-50 border border-islamic-100 rounded-2xl p-6"
              >
                <h3 className="font-cinzel font-bold text-islamic-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
