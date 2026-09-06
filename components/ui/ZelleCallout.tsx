import { MOHID_DONATION_URL } from "@/lib/iqama-config";

export default function ZelleCallout() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gold-400 bg-gold-100 px-5 py-5 text-center shadow-sm sm:px-8" data-aos="fade-up">
      <p className="font-cinzel text-sm font-bold uppercase tracking-wider text-gold-700">Donate with Zelle</p>
      <h3 className="mt-1 font-cinzel text-xl font-bold text-islamic-900 sm:text-2xl">Support Islamic Center of Laveen</h3>
      <p className="mt-2 text-sm text-gray-600">Send your donation securely to:</p>
      <p className="mt-1 break-all font-cinzel text-xl font-bold text-islamic-700 sm:text-2xl">finance@iclaveen.net</p>
      <p className="mt-2 text-xs text-gray-500">Please include your name and donation purpose in the memo.</p>
      <div className="mt-5 border-t border-gold-300 pt-4">
        <h3 className="font-cinzel text-lg font-bold text-islamic-900">Support Your Masjid</h3>
        <p className="mx-auto mt-1 max-w-xl text-sm text-gray-600">Every dollar you give is an ongoing sadaqah jariyah for you and your family.</p>
        <a
          href={MOHID_DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-full bg-islamic-700 px-6 py-2.5 font-cinzel text-sm font-bold text-white transition-colors hover:bg-islamic-600"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}