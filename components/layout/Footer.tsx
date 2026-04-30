import Link from "next/link";
import {
  MASJID_NAME,
  MASJID_ADDRESS,
  MASJID_PHONE,
  MASJID_EMAIL,
  MOHID_DONATION_URL,
} from "@/lib/iqama-config";

const quickLinks = [
  { href: "/donate", label: "Donations" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About Us" },
  { href: "/education", label: "Noor Al-Quran School" },
  { href: "/events", label: "Events" },
  { href: "/construction", label: "Construction Updates" },
];

const importantLinks = [
  { href: "https://www.islamicfinder.org/islamic-calendar/", label: "Islamic Calendar" },
  { href: "https://www.muslim-library.com/?lang=English", label: "Muslim e-Library" },
  { href: "https://quran.com/", label: "Noble Quran" },
  { href: "https://www.azmuslims.org/list-of-mosques-in-arizona.html", label: "Masjids in Arizona" },
];

export default function Footer() {
  return (
    <footer className="bg-islamic-900 text-white">
      {/* Donation CTA strip */}
      <div className="bg-islamic-700 py-6 px-4 text-center">
        <p className="font-cinzel text-lg font-bold text-white mb-2">
          Support Your Masjid
        </p>
        <p className="text-islamic-200 text-sm mb-4 max-w-xl mx-auto">
          Every dollar you give is an ongoing sadaqah jariyah for you and your family.
        </p>
        <a
          href={MOHID_DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-islamic-700 font-cinzel font-bold px-8 py-3 rounded-full hover:bg-islamic-50 transition-colors"
        >
          Donate Now
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        {/* Contact */}
        <div>
          <h3 className="font-cinzel font-bold text-lg text-islamic-300 mb-4">
            {MASJID_NAME}
          </h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>📍 {MASJID_ADDRESS}</p>
            <p>📞 <a href={`tel:${MASJID_PHONE}`} className="hover:text-islamic-300 transition-colors">{MASJID_PHONE}</a></p>
            <p>✉️ <a href={`mailto:${MASJID_EMAIL}`} className="hover:text-islamic-300 transition-colors">{MASJID_EMAIL}</a></p>
          </div>
          <div className="mt-6">
            <a
              href="https://maps.google.com/?q=5099+W+Dobbins+Rd,+Laveen+Village,+AZ+85339"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-islamic-400 hover:text-islamic-300 font-semibold transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-cinzel font-bold text-lg text-islamic-300 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-islamic-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important links */}
        <div>
          <h3 className="font-cinzel font-bold text-lg text-islamic-300 mb-4">Important Links</h3>
          <ul className="space-y-2">
            {importantLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-islamic-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-islamic-800 py-4 px-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {MASJID_NAME} | All rights reserved.
      </div>
    </footer>
  );
}
