import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { MASJID_ADDRESS, MASJID_PHONE, MASJID_EMAIL } from "@/lib/iqama-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Islamic Center of Laveen. Visit us at 5099 W Dobbins Rd, Laveen Village, AZ or reach us by phone and email.",
};

const contactCards = [
  {
    icon: "📍",
    label: "Address",
    value: MASJID_ADDRESS,
    link: "https://maps.google.com/?q=5099+W+Dobbins+Rd+1,+Laveen+Village,+AZ+85339",
    linkLabel: "Get Directions",
  },
  {
    icon: "📞",
    label: "Phone",
    value: MASJID_PHONE,
    link: `tel:${MASJID_PHONE.replace(/[^0-9]/g, "")}`,
    linkLabel: "Call Now",
  },
  {
    icon: "✉️",
    label: "General Inquiries",
    value: MASJID_EMAIL,
    link: `mailto:${MASJID_EMAIL}`,
    linkLabel: "Send Email",
  },
  {
    icon: "💻",
    label: "IT / Website",
    value: "it@iclaveen.net",
    link: "mailto:it@iclaveen.net",
    linkLabel: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Contact"
        titleHighlight="Us"
        subtitle="We'd love to hear from you. Reach out for any questions about programs, membership, or general inquiries."
      />

      {/* Contact cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14" data-aos="fade-up">
            {contactCards.map((c) => (
              <div key={c.label} className="bg-islamic-50 border border-islamic-100 rounded-2xl p-6 text-center hover:border-islamic-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{c.icon}</div>
                <p className="font-cinzel font-bold text-islamic-700 text-sm mb-2">{c.label}</p>
                <p className="text-gray-600 text-sm mb-4 break-words">{c.value}</p>
                <a
                  href={c.link}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block text-sm font-semibold text-islamic-600 hover:text-islamic-700 underline underline-offset-2"
                >
                  {c.linkLabel} →
                </a>
              </div>
            ))}
          </div>

          {/* Map + Form side by side */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Google Maps embed */}
            <div data-aos="fade-right">
              <h2 className="font-cinzel font-bold text-2xl text-islamic-700 mb-5">Find Us</h2>
              <div className="rounded-2xl overflow-hidden border border-islamic-100 shadow-sm h-80">
                <iframe
                  src="https://maps.google.com/maps?q=5099+W+Dobbins+Rd+%231,+Laveen+Village,+AZ+85339&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Islamic Center of Laveen location"
                  className="border-0"
                />
              </div>
              <div className="mt-4 bg-islamic-50 rounded-xl p-4 border border-islamic-100">
                <p className="font-cinzel font-bold text-islamic-700 mb-1">🚗 Parking</p>
                <p className="text-gray-600 text-sm">
                  Free parking available on-site. Additional street parking on W Dobbins Rd.
                  Please carpool when possible for large events.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div data-aos="fade-left">
              <h2 className="font-cinzel font-bold text-2xl text-islamic-700 mb-5">Send a Message</h2>
              <form
                action={`mailto:${MASJID_EMAIL}`}
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ahmed"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Khan"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ahmed@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <select
                    name="subject"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>School Enrollment</option>
                    <option>Donation Question</option>
                    <option>Membership</option>
                    <option>Volunteer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="body"
                    required
                    rows={5}
                    placeholder="Assalamu Alaikum, I would like to ask about..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-islamic-400 focus:ring-2 focus:ring-islamic-100 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold py-4 rounded-xl transition-colors shadow-sm"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  This opens your email client. Alternatively, email us directly at{" "}
                  <a href={`mailto:${MASJID_EMAIL}`} className="text-islamic-600 underline">{MASJID_EMAIL}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Masjid hours */}
      <section className="py-14 bg-islamic-50">
        <div className="max-w-3xl mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="font-cinzel font-bold text-2xl text-islamic-700 mb-8">Masjid Hours</h2>
          <div className="bg-white rounded-2xl border border-islamic-100 overflow-hidden shadow-sm">
            {[
              { days: "Monday – Friday", hours: "Open for all 5 prayers" },
              { days: "Saturday", hours: "Open for all 5 prayers + Youth Halaqa" },
              { days: "Sunday", hours: "Open for all 5 prayers + Islamic School" },
              { days: "Friday", hours: "Jumu'ah at 12:30 PM & 1:30 PM" },
            ].map((row, i) => (
              <div
                key={row.days}
                className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-islamic-50/50"}`}
              >
                <span className="font-cinzel font-semibold text-islamic-700">{row.days}</span>
                <span className="text-gray-600 text-sm">{row.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            The masjid is open daily for all five prayers. Office hours vary — call ahead for administrative matters.
          </p>
        </div>
      </section>
    </>
  );
}
