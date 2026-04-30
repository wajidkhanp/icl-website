"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

const slides = [
  {
    titleStart: "Welcome to",
    titleHighlight: "Islamic Center",
    titleEnd: "of Laveen",
    subtitle:
      "A sanctuary of faith, learning, and community serving Muslim families in Laveen, AZ with daily prayers, Quran education, and social programs.",
    cta: "Donate Now",
    ctaLink: MOHID_DONATION_URL,
    secondaryCta: "Prayer Times",
    secondaryCtaLink: "/prayer-times",
    image: "https://www.islamiccenteroflaveen.org/masjid-pics/slide1.jpeg",
  },
  {
    titleStart: "Help Build",
    titleHighlight: "Our Masjid",
    titleEnd: "for Generations",
    subtitle:
      "Your donation helps lay the foundation of a masjid that will serve generations through prayer halls, education, and social welfare. Every dollar is sadaqah jariyah.",
    cta: "Support the Build",
    ctaLink: MOHID_DONATION_URL,
    secondaryCta: "Construction Updates",
    secondaryCtaLink: "/construction",
    image: "https://www.islamiccenteroflaveen.org/masjid-pics/slide2.jpeg",
  },
  {
    titleStart: "Noor Al-Quran",
    titleHighlight: "Hifz School",
    titleEnd: "for Kids & Adults",
    subtitle:
      "Join our comprehensive Quran Hifz Programs led by Sheikh Mahmud Iddrisu. Building huffadh and scholars rooted in knowledge and taqwa.",
    cta: "Enroll Now",
    ctaLink: "/education",
    secondaryCta: "Learn More",
    secondaryCtaLink: "/education",
    image: "https://www.islamiccenteroflaveen.org/masjid-pics/quran.jpeg",
  },
  {
    titleStart: "More Than a Masjid,",
    titleHighlight: "We Are",
    titleEnd: "a Community",
    subtitle:
      "From weekly halaqas to youth programs and women's Quran classes — ICL is your extended family in Laveen. Come as you are.",
    cta: "Our Programs",
    ctaLink: "#programs",
    secondaryCta: "Contact Us",
    secondaryCtaLink: "/contact",
    image: "https://www.islamiccenteroflaveen.org/masjid-pics/slide3.jpeg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 200);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images (all preloaded, only current visible) */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.titleHighlight}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Deep green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-islamic-950/95 via-islamic-900/80 to-islamic-800/50" />

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
        <div
          className={`max-w-3xl transition-all duration-300 ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Bismillah */}
          <p className="text-gold-400 text-xl mb-6 font-cinzel arabic-text">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>

          {/* Title */}
          <h1 className="font-cinzel font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            {slide.titleStart}{" "}
            <span className="text-islamic-400">{slide.titleHighlight}</span>{" "}
            {slide.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={slide.ctaLink}
              className="inline-block bg-islamic-500 hover:bg-islamic-400 text-white font-cinzel font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-islamic-900/40 hover:shadow-xl"
            >
              {slide.cta}
            </a>
            <a
              href={slide.secondaryCtaLink}
              className="inline-block border-2 border-white text-white hover:bg-white/10 font-cinzel font-semibold px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              {slide.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "bg-islamic-400 w-8 h-2"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-cinzel tracking-widest rotate-90 mb-4">SCROLL</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}
