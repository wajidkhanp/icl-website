"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/prayer-times", label: "Prayer Times" },
  { href: "/education", label: "Education" },
  { href: "/events", label: "Events" },
  { href: "/construction", label: "Construction" },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 py-2 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-islamic-900/10"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://www.islamiccenteroflaveen.org/images/logo.jpg"
              alt="Islamic Center of Laveen"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <span className="hidden sm:block font-cinzel font-bold text-islamic-700 text-sm leading-tight">
              Islamic Center<br />of Laveen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-cinzel text-sm font-semibold text-gray-700 hover:text-islamic-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Donate CTA */}
          <a
            href={MOHID_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold text-sm px-5 py-2 rounded-full transition-colors shadow-sm"
          >
            Donate
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-islamic-700"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-islamic-100 pt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-sm font-semibold text-gray-700 hover:text-islamic-600 px-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
