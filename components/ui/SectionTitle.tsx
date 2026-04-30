interface SectionTitleProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  titleHighlight,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`} data-aos="fade-up">
      {badge && (
        <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-4 leading-tight">
        {title}
        {titleHighlight && (
          <span className="text-islamic-400"> {titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
