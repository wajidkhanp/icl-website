import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-spacing bg-islamic-50">
      <div className="max-w-7xl mx-auto px-4 space-y-10 md:space-y-12">
        {/* Community block */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div data-aos="fade-right">
            <Image
              src="/masjidICL1.jpg"
              alt="Islamic Center of Laveen Community"
              width={640}
              height={430}
              className="rounded-3xl object-cover w-full shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
              About ICL
            </span>
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-5 leading-tight">
              A Place Where Every<br />
              <span className="text-islamic-600">Muslim Belongs</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                When Muslim families first settled in Laveen, they longed for what every believer needs — a masjid to call home. A place to pray Fajr before sunrise, to hear the adhan echo through the neighborhood, and to raise children who know their deen.
              </p>
              <p className="italic border-l-4 border-gold-500 pl-4 text-gray-500">
                &quot;The believers in their mutual kindness, compassion, and sympathy are just like one body — when any part of the body suffers, the whole body feels pain.&quot;
                <br />
                <span className="text-gold-600 font-semibold not-italic text-sm">— Prophet Muhammad ﷺ (Bukhari &amp; Muslim)</span>
              </p>
              <p>
                That dream became the Islamic Center of Laveen. Today, ICL is more than a prayer space — it is a living, breathing community of families, neighbors, and brothers and sisters in faith.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold px-8 py-4 rounded-full transition-colors"
              >
                Our Story →
              </a>
            </div>
          </div>
        </div>

        {/* Hifz School block */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Islamic Education
            </span>
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-5 leading-tight">
              Plant the Quran<br />
              <span className="text-islamic-600">in Their Hearts Early</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Imagine your child standing on the Day of Judgment, placing a crown of light on your head — the crown gifted to the parents of a hafidh. That is the promise of the Quran. It begins with a single class, a single teacher, a single step.
              </p>
              <p>
                The Noor Al-Quran School at ICL offers structured Hifz, Tajweed, and Islamic studies for children and adults — led with patience and love by Imam Sheikh Mahmud Iddrisu. You don&apos;t have to send your child far for this. It&apos;s right here in Laveen.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: "Students Enrolled", value: "50+" },
                { label: "Programs Offered", value: "4" },
                { label: "Years Serving Laveen", value: "4+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white rounded-xl p-4 border border-islamic-100">
                  <p className="font-cinzel font-bold text-2xl text-islamic-700">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/education"
                className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold px-8 py-4 rounded-full transition-colors"
              >
                Enroll Today →
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <Image
              src="/masjidICL1.jpg"
              alt="Noor Al-Quran Hifz School"
              width={640}
              height={430}
              className="rounded-3xl object-cover w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
