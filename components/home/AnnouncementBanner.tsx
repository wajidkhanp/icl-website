export default function AnnouncementBanner({ announcements }: { announcements: string[] }) {
  const visibleAnnouncements = announcements.filter((announcement) => announcement.trim());

  return (
    <section className="bg-white px-4 py-8 sm:py-10" aria-label="Community announcement">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold-300 bg-gold-100 shadow-lg shadow-gold-900/10" data-aos="fade-up">
        <div className="flex items-center gap-4 bg-islamic-800 px-5 py-4 text-white sm:px-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-xl shadow-sm" aria-hidden="true">
            📢
          </div>
          <div>
            <p className="font-cinzel text-lg font-bold">Community Announcement</p>
            <p className="mt-0.5 text-xs font-medium text-islamic-200">Latest updates from Islamic Center of Laveen</p>
          </div>
        </div>
        <div className="divide-y divide-gold-200 px-5 sm:px-7">
          {visibleAnnouncements.map((announcement, index) => (
            <div key={announcement} className="flex gap-3 py-4 first:pt-5 last:pb-5">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 font-cinzel text-xs font-bold text-islamic-900" aria-hidden="true">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-islamic-900 sm:text-base">{announcement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
