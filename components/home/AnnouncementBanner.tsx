export default function AnnouncementBanner({ announcement }: { announcement: string }) {
  return (
    <section className="border-y-2 border-gold-400 bg-gold-100 px-4 py-6 sm:py-7" aria-label="Community announcement">
      <div className="mx-auto flex max-w-5xl items-center gap-4 sm:gap-6" data-aos="fade-up">
        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-2xl shadow-sm sm:flex" aria-hidden="true">
          📢
        </div>
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-600" aria-hidden="true" />
            <p className="font-cinzel text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Community Announcement</p>
          </div>
          <p className="max-w-4xl text-sm font-semibold leading-6 text-islamic-900 sm:text-base sm:leading-7">
            {announcement}
          </p>
        </div>
      </div>
    </section>
  );
}
