"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MOHID_DONATION_URL } from "@/lib/iqama-config";

const slides = [
  {
    titleStart: "Your Home Away",
    titleHighlight: "From Home —",
    titleEnd: "Islamic Center of Laveen",
    subtitle:
      "You searched for a masjid close to your family. Alhamdulillah — you found your community. Join us for Fajr in the quiet of dawn, for Jumu'ah shoulder to shoulder, and for a life rooted in faith.",
    cta: "Donate Now",
    ctaLink: MOHID_DONATION_URL,
    secondaryCta: "Prayer Times",
    secondaryCtaLink: "/prayer-times",
    image: "/masjidICL1.jpg",
  },
  {
    titleStart: "Every Dollar You Give",
    titleHighlight: "Lives On",
    titleEnd: "After You're Gone",
    subtitle:
      "The Prophet ﷺ said: whoever builds a masjid for Allah, Allah builds for him a house in Jannah. Help us raise these walls — your sadaqah jariyah will outlast you and intercede for you.",
    cta: "Build Our Masjid",
    ctaLink: MOHID_DONATION_URL,
    secondaryCta: "Ways to Give",
    secondaryCtaLink: "/donate",
    image: "/masjidICL2.jpeg",
  },
  {
    titleStart: "Give Your Child",
    titleHighlight: "the Quran —",
    titleEnd: "Give Them Everything",
    subtitle:
      "The best gift you can give your child is a heart connected to the Book of Allah. Our Noor Al-Quran School shapes huffadh and scholars who carry the Quran with pride.",
    cta: "Enroll Now",
    ctaLink: "/education",
    secondaryCta: "Our Programs",
    secondaryCtaLink: "/education",
    image: "/masjidICL3.jpeg",
  },
  {
    titleStart: "You Don't Have to",
    titleHighlight: "Walk This Path",
    titleEnd: "Alone",
    subtitle:
      "Whether you just moved to Laveen or have lived here for years — this masjid is your family. Come for dhikr, stay for community, and leave knowing you belong.",
    cta: "Join Our Community",
    ctaLink: "/membership",
    secondaryCta: "Contact Us",
    secondaryCtaLink: "/contact",
    image: "/masjidICL4.jpeg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (!paused && !preference.matches) {
        timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
      }
    };
    sync();
    preference.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", sync);
    };
  }, [paused]);

  const goTo = (index: number) => {
    setPaused(true);
    setCurrent(index);
  };

  const slide = slides[current];

  return (
    <section aria-label="Community highlights" aria-roledescription="carousel" onFocusCapture={(event) => { if (!event.target.hasAttribute("data-rotation-control")) setPaused(true); }} className="relative flex min-h-[580px] items-center overflow-hidden md:min-h-[640px]">
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
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Deep green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-islamic-950/90 via-islamic-900/75 to-islamic-700/35" />

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Bismillah */}
          <h2 className="text-gold-400 text-3xl md:text-4xl font-bold mb-4 font-cinzel arabic-text text-center w-full">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </h2>

          {/* Title */}
          <h1 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {slide.titleStart}{" "}
            <span className="text-islamic-400">{slide.titleHighlight}</span>{" "}
            {slide.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={slide.ctaLink}
              className="inline-block bg-gold-400 hover:bg-gold-300 text-islamic-950 font-cinzel font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-islamic-900/40 hover:shadow-xl"
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

      <button type="button" data-rotation-control onClick={() => setPaused((value) => !value)} aria-pressed={paused} className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-white text-sm bg-black/30 rounded-full px-4 py-2">
        {paused ? "Resume slideshow" : "Pause slideshow"}
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
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
