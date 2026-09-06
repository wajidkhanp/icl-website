"use client";

import { useState } from "react";

export default function AnnouncementBanner({ announcement }: { announcement: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="bg-islamic-700 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="shrink-0 bg-islamic-900 text-gold-400 font-semibold text-sm px-4 py-1 z-10">
          📢 Announcements
        </span>
        <div className="overflow-hidden flex-1 relative">
          <p style={{ animationPlayState: paused ? "paused" : undefined }} className="ticker-content text-sm font-medium px-4">
            {announcement}
          </p>
        </div>
        <button type="button" aria-label={paused ? "Resume announcements" : "Pause announcements"} aria-pressed={paused} onClick={() => setPaused((value) => !value)} className="shrink-0 px-3 py-1 text-sm">
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
}
