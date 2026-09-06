"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      easing: "ease-out-cubic",
      duration: 800,
      once: true,
      offset: 80,
    });
    document.documentElement.classList.add("aos-enabled");
    return () => document.documentElement.classList.remove("aos-enabled");
  }, []);

  return <>{children}</>;
}
