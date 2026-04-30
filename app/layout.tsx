import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/layout/AOSProvider";
import {
  MASJID_NAME,
  MASJID_ADDRESS,
  MASJID_PHONE,
  MASJID_EMAIL,
} from "@/lib/iqama-config";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel-var",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${MASJID_NAME} | Masjid & Islamic Center`,
    template: `%s | ${MASJID_NAME}`,
  },
  description:
    "Islamic Center of Laveen (ICL) serves the Muslim community in Laveen, AZ with daily prayers, Quran education, youth programs, and social services.",
  keywords:
    "Islamic center Laveen, mosque Laveen AZ, ICL, Muslim community, prayer times, Quran classes, Noor Al-Quran School, Hifz, Jumu'ah",
  authors: [{ name: MASJID_NAME }],
  robots: "index, follow",
  openGraph: {
    title: `${MASJID_NAME} | Masjid & Islamic Center`,
    description:
      "A sanctuary of faith, learning, and community in Laveen, Arizona.",
    url: "https://www.islamiccenteroflaveen.org",
    siteName: MASJID_NAME,
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Mosque",
  "@id": "https://www.islamiccenteroflaveen.org/#organization",
  name: MASJID_NAME,
  alternateName: "ICL",
  url: "https://www.islamiccenteroflaveen.org",
  description:
    "Islamic Center of Laveen serves the Muslim community with daily prayers, Quran education, youth programs, and social services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5099 W Dobbins Rd #1",
    addressLocality: "Laveen Village",
    addressRegion: "AZ",
    postalCode: "85339",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.3742,
    longitude: -112.088,
  },
  telephone: MASJID_PHONE,
  email: MASJID_EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${manrope.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <AOSProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
