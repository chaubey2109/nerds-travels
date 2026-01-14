import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/ayodhya_hero.jpg";
import ramMandirImg from "@assets/stock_images/ram_mandir.jpg";
import saryuImg from "@assets/stock_images/saryu_ghat.jpg";
import hanumanImg from "@assets/stock_images/hanuman_garhi.jpg";
// import kanakImg from "@assets/stock_images/kanak_bhawan.jpg";

export default function Ayodhya() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-4">
       <div className="absolute inset-0 overflow-hidden">
  <img
    src={heroImg}
    alt="Ayodhya"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30" />
</div>



        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-amber-200">
            Ayodhya
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            The Sacred Birthplace of Lord Ram
          </p>
          <p className="text-lg text-white/80 tracking-wide">
            Ram • Bhakti • Maryada • Dharma
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src={ramMandirImg}
            alt="Ram Mandir"
            className="w-full h-[45vh] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              About Ayodhya
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Ayodhya, the ancient city on the banks of the Sarayu river, is
              revered as the birthplace of Lord Ram. It represents the highest
              ideals of dharma, compassion, and righteous living.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every street of Ayodhya echoes with Ram Naam, making it a timeless
              destination for devotees seeking peace, devotion, and spiritual
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-14">
            Experiences in Ayodhya
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: ramMandirImg,
                title: "Ram Mandir Darshan",
                desc:
                  "Visit the grand Ram Janmabhoomi temple — the spiritual heart of Ayodhya.",
              },
              {
                img: hanumanImg,
                title: "Hanuman Garhi",
                desc:
                  "Seek blessings at the fortress temple of Lord Hanuman, protector of Ayodhya.",
              },
              {
                img: saryuImg,
                title: "Saryu Aarti",
                desc:
                  "Experience divine evening aarti on the sacred banks of the Sarayu river.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="h-60 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-24 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Ayodhya Itinerary (2 Days)
          </h2>

          <details className="bg-white p-6 rounded-2xl shadow mb-4">
            <summary className="cursor-pointer text-xl font-bold">
              Day 1 – Ram Mandir & Temples
            </summary>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Ram Janmabhoomi Darshan</li>
              <li>• Hanuman Garhi & Kanak Bhawan</li>
              <li>• Evening Saryu Aarti</li>
            </ul>
          </details>

          <details className="bg-white p-6 rounded-2xl shadow">
            <summary className="cursor-pointer text-xl font-bold">
              Day 2 – Ghats & Culture
            </summary>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Ram Ki Paidi</li>
              <li>• Guptar Ghat</li>
              <li>• Local markets</li>
            </ul>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-orange-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Plan Your Trip to Ayodhya
          </h2>

          <a
            href="/#enquiry"
            className="inline-block px-12 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold shadow-xl transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
