"use client";

import { announcement } from "@/lib/iqama-config";

export default function AnnouncementBanner() {
  return (
    <div className="bg-islamic-700 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="shrink-0 bg-islamic-900 text-gold-400 font-semibold text-sm px-4 py-1 z-10">
          📢 Announcements
        </span>
        <div className="overflow-hidden flex-1 relative">
          <p className="ticker-content text-sm font-medium px-4">
            {announcement}
          </p>
        </div>
      </div>
    </div>
  );
}
