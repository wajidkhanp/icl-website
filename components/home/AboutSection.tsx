import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-islamic-50">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* Community block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Image
              src="https://www.islamiccenteroflaveen.org/masjid-pics/slide2.jpeg"
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
              More Than a Masjid —<br />
              <span className="text-islamic-400">We Are a Community</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At ICL, we are committed to helping our community and the people within it. The Islamic Center of Laveen is a place of worship, learning, and growth for every Muslim family in the Laveen area.
              </p>
              <p className="italic border-l-4 border-gold-500 pl-4 text-gray-500">
                &quot;Be kind, for whenever kindness becomes part of something, it beautifies it. Whenever it is taken from something, it leaves it tarnished.&quot;
                <br />
                <span className="text-gold-600 font-semibold not-italic text-sm">— Prophet Muhammad ﷺ</span>
              </p>
              <p>
                We believe that the masjid should be more than a gathering of the faithful — it should be a gathering of people looking to beautify both themselves and the world around them.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block bg-islamic-700 hover:bg-islamic-600 text-white font-cinzel font-bold px-8 py-4 rounded-full transition-colors"
              >
                About Us →
              </a>
            </div>
          </div>
        </div>

        {/* Hifz School block */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <span className="inline-block bg-islamic-100 text-islamic-700 font-cinzel font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Islamic Education
            </span>
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-islamic-700 mb-5 leading-tight">
              Noor Al-Quran<br />
              <span className="text-islamic-400">Hifz School at ICL</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to the Noor Al-Quran School — providing comprehensive Quran education for kids and adults in our community. Our programs combine memorization (Hifz), recitation (Tajweed), and Islamic studies.
              </p>
              <p>
                Led by our dedicated Imam, Sheikh Mahmud Iddrisu, the school serves students of all ages and backgrounds. Whether you&apos;re beginning your journey or working toward completing your Hifz, there&apos;s a place for you here.
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
                Learn More →
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <Image
              src="https://www.islamiccenteroflaveen.org/masjid-pics/quran.jpeg"
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
