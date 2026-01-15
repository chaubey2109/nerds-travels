import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/prayagraj_hero.jpg";
import sangamImg from "@assets/stock_images/triveni_sangam.jpg";
import kumbhImg from "@assets/stock_images/kumbh.jpg";
import hanumanImg from "@assets/stock_images/hanuman_mandir.jpg";
import riverImg from "@assets/stock_images/yamuna_ganga.jpg";

export default function Prayagraj() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[65vh] sm:h-[75vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Prayagraj Sangam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 text-amber-200">
            Prayagraj
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2">
            The Sacred Confluence of Faith, Rivers, and Liberation
          </p>
          <p className="text-base sm:text-lg text-white/80 tracking-wide">
            Shuddhi • Sangam • Kumbh • Moksha
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img
            src={sangamImg}
            alt="Triveni Sangam"
            className="w-full h-64 sm:h-[45vh] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              About Prayagraj
            </h2>
            <p className="text-base sm:text-base sm:text-lg text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Prayagraj, the land of Triveni Sangam, is where the sacred rivers
              Ganga, Yamuna, and the invisible Saraswati unite. For thousands of
              years, saints, seekers, and pilgrims have gathered here to cleanse
              their sins and reconnect with the divine.
            </p>
            <p className="text-base sm:text-lg text-gray-600 text-sm sm:text-base leading-relaxed">
              Known as the king of pilgrimage sites, Prayagraj holds unmatched
              spiritual power — especially during the Kumbh Mela — where faith,
              renunciation, and devotion merge into one grand celebration of
              humanity.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Experiences in Prayagraj
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                img: kumbhImg,
                title: "Kumbh Mela",
                desc:
                  "Witness the world’s largest spiritual gathering where saints, akharas, and devotees come together in divine harmony.",
              },
              {
                img: hanumanImg,
                title: "Hanuman Mandir Darshan",
                desc:
                  "Visit the famous reclining Hanuman Ji temple, a powerful symbol of strength, devotion, and protection.",
              },
              {
                img: riverImg,
                title: "Sangam Snan",
                desc:
                  "Take a holy dip at Triveni Sangam — believed to wash away sins and guide the soul toward liberation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-52 sm:h-60 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Why Travel With Nerds Travel
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Authentic Pilgrimage",
                desc:
                  "Guides deeply familiar with Prayagraj’s rituals, sacred timings, and spiritual traditions.",
              },
              {
                title: "Kumbh Expertise",
                desc:
                  "Special planning for Kumbh and Magh Mela with crowd-aware itineraries and safety focus.",
              },
              {
                title: "Comfort & Care",
                desc:
                  "Thoughtful planning for elders, families, and long spiritual stays near the Sangam.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border p-8 text-center hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-extrabold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-16 md:py-24 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-10 md:mb-12">
            Prayagraj Itinerary (2 Days – Spiritual Focus)
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg sm:text-xl font-bold">
                Day 1 – Sangam & Temples
              </summary>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
                <li>• Triveni Sangam Snan</li>
                <li>• Hanuman Mandir & Alopi Devi Darshan</li>
                <li>• Akshayavat & Bade Hanuman Ji</li>
                <li>• Evening Ganga Aarti</li>
              </ul>
            </details>

            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg sm:text-xl font-bold">
                Day 2 – Culture & History
              </summary>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
                <li>• Anand Bhavan visit</li>
                <li>• Allahabad Fort & Akshayavat</li>
                <li>• Local markets & prasad shopping</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-16 md:py-24 px-4 bg-orange-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Plan Your Trip to Prayagraj
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10">
            Share your travel preferences with us and we’ll design a sacred
            Prayagraj experience tailored just for you.
          </p>

          <a
            href="/#enquiry"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-base sm:text-lg font-bold shadow-xl transition-transform hover:scale-105"
          >
            Book Now
          </a>

          <p className="mt-4 text-sm text-gray-500">
            You’ll be redirected to our main enquiry form
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
