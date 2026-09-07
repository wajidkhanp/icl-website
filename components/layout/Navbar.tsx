"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";
import NextIqama from "@/components/layout/NextIqama";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prayer-times", label: "Prayer Times" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }} className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3">
      {/* Pill bar */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 py-2 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-islamic-900/10"
            : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Islamic Center of Laveen"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="block shrink-0 whitespace-nowrap font-cinzel text-[11px] font-bold leading-tight text-islamic-800 sm:text-sm">
              Islamic Center of Laveen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-5 justify-self-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-bold text-islamic-800 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center justify-self-end gap-3">
            <NextIqama />
            <a
              href={MOHID_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 min-w-28 shrink-0 items-center justify-center rounded-full bg-gold-400 px-5 text-center font-sans text-sm font-extrabold leading-none text-islamic-950 shadow-sm transition-colors hover:bg-gold-300"
            >
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden shrink-0 p-2 rounded-lg text-islamic-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <>
                <span className="block w-5 h-0.5 bg-current rotate-45 translate-y-[3px]" />
                <span className="block w-5 h-0.5 bg-current -rotate-45" />
              </>
            ) : (
              <>
                <span className="block w-5 h-0.5 bg-current mb-1" />
                <span className="block w-5 h-0.5 bg-current mb-1" />
                <span className="block w-5 h-0.5 bg-current" />
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-2 flex justify-center">
        <NextIqama mobile />
      </div>

      {/* Mobile dropdown — separate from the pill */}
      {menuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2">
          <nav id="mobile-navigation" className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-islamic-900/10 border border-islamic-100 px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm font-bold text-islamic-800 hover:text-gold-600 hover:bg-islamic-50 px-3 py-3 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={MOHID_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-gold-400 px-3 py-3 text-center font-sans text-sm font-extrabold text-islamic-950 transition-colors hover:bg-gold-300"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
