interface PageHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  arabicText?: string;
  badge?: string;
}

export default function PageHero({
  title,
  titleHighlight,
  subtitle,
  arabicText,
  badge,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-islamic-900 via-islamic-700 to-islamic-500 pb-7 pt-24 md:pb-8 md:pt-28 overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-25" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-islamic-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {arabicText && (
          <p className="font-cinzel text-gold-400 text-xl md:text-2xl mb-4 arabic-text">
            {arabicText}
          </p>
        )}
        {badge && (
          <span className="inline-block bg-islamic-400/20 text-islamic-300 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            {badge}
          </span>
        )}
        <h1 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3 leading-tight">
          {title}
          {titleHighlight && (
            <span className="text-gold-300"> {titleHighlight}</span>
          )}
        </h1>
        {subtitle && (
          <p className="text-islamic-50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
