import { Navigation } from "@/components/Navigation";
// import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/kashi_hero.jpg";
import ghatImg from "@assets/stock_images/dashaswmedh ghat.jpg";
import mandirImg from "@assets/stock_images/vishwanath mandir.jpg";
import artiImg from "@assets/stock_images/arti_1.jpg";
import boatImg from "@assets/stock_images/boat.jpg";

export default function Kashi() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kashi Varanasi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-amber-200">
            Kashi (Varanasi)
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            The Eternal City of Light on the Sacred Banks of the Ganga
          </p>
          <p className="text-lg text-white/80 tracking-wide">
            Moksha • Bhakti • Ganga • Shiva
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src={ghatImg}
            alt="Kashi Ghats"
            className="w-full h-[45vh] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              About Kashi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Kashi, the City of Shiva, is where legends, devotion, and romance
              flow like the sacred waters of the Ganga. Nestled between the holy
              rivers Varuna and Assi, its ghats—Manikarnika and Harishchandra—
              whisper tales of sacrifice, love, and unwavering faith.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Believed to grant moksha, Kashi is not just a city—it is a living
              story where souls and emotions meet eternity, where devotion and
              romance feel inseparable.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-14">
            Experiences in Kashi
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: mandirImg,
                title: "Temple Darshan",
                desc:
                  "Guided visits to Kashi Vishwanath, Annapurna, Kal Bhairav and other sacred temples with deep spiritual insights from local guides.",
              },
              {
                img: artiImg,
                title: "Ganga Aarti",
                desc:
                  "Witness the divine evening ritual at Assi and Dashashwamedh Ghats — chants, lamps, devotion and a soul-stirring atmosphere.",
              },
              {
                img: boatImg,
                title: "Boat Rides",
                desc:
                  "Glide along the Ganga from Assi to Rajghat, passing all 84 ghats as the rising sun paints the city in golden hues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-14">
            Why Travel With Nerds Travel
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Temple Tours",
                desc:
                  "Local guides born and raised in Kashi, sharing authentic rituals, legends, and history.",
              },
              {
                title: "Ghat Boat Rides",
                desc:
                  "Carefully curated river journeys covering all major ghats with sunrise and sunset experiences.",
              },
              {
                title: "Cultural Experiences",
                desc:
                  "Old city walks, Banarasi food, silk lanes, and cultural photography for a complete experience.",
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
      <section className="py-24 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Kashi Itinerary (2 Days – Local Style)
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-xl font-bold">
                Day 1 – Ghats, Temples & Ganga Aarti
              </summary>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Morning Aarti at Assi Ghat</li>
                <li>• Ghat walk till Dashashwamedh</li>
                <li>• Kashi Vishwanath & Kal Bhairav Darshan</li>
                <li>• Evening Ganga Aarti & street food</li>
              </ul>
            </details>

            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-xl font-bold">
                Day 2 – Boat Ride & Culture
              </summary>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Sunrise boat ride on Ganga</li>
                <li>• BHU & Vishwanath Temple</li>
                <li>• Sankat Mochan & Tulsi Manas Mandir</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
<section className="py-24 px-4 bg-orange-50 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
      Plan Your Trip to Kashi
    </h2>

    <p className="text-lg text-gray-600 mb-10">
      Share your travel preferences with us and we’ll design a soulful Kashi
      experience tailored just for you.
    </p>

    <a
      href="/#enquiry"
      className="inline-block px-12 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold shadow-xl transition-transform hover:scale-105"
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
