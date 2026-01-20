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
      <section className="relative h-[65vh] sm:h-[75vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kashi Varanasi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 text-amber-200">
            Kashi (Varanasi)
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2">
            The Eternal City of Light on the Sacred Banks of the Ganga
          </p>
          <p className="text-base sm:text-lg text-white/80 tracking-wide">
            Moksha • Bhakti • Ganga • Shiva
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img
            src={ghatImg}
            alt="Kashi Ghats"
            className="w-full h-64 sm:h-[45vh] object-cover rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              About Kashi
            </h2>
            <p className="text-base sm:text-base sm:text-lg text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Kashi, the City of Shiva, is where legends, devotion, and romance
              flow like the sacred waters of the Ganga. Nestled between the holy
              rivers Varuna and Assi, its ghats—Manikarnika and Harishchandra—
              whisper tales of sacrifice, love, and unwavering faith.
            </p>
            <p className="text-base sm:text-lg text-gray-600 text-sm sm:text-base leading-relaxed">
              Believed to grant moksha, Kashi is not just a city—it is a living
              story where souls and emotions meet eternity, where devotion and
              romance feel inseparable.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Experiences in Kashi
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Why Travel With Nerds Travel
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
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
                <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
                  {item.title}
                </h3>
                <p className="text-Black-700 text-base sm:text-lg">
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
            Kashi Itinerary (2 Days – Local Style)
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg sm:text-xl font-bold">
                Day 1 – Ghats, Temples & Ganga Aarti
              </summary>
              <ul className="mt-4 space-y-2 text-Black-700 text-sm sm:text-base">
                <li>• Morning Aarti at Assi Ghat</li>
                <li>• Ghat walk till Dashashwamedh</li>
                <li>• Kashi Vishwanath & Kal Bhairav Darshan</li>
                <li>• Evening Ganga Aarti & street food</li>
              </ul>
            </details>

            <details className="bg-white p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg sm:text-xl font-bold">
                Day 2 – Boat Ride & Culture
              </summary>
              <ul className="mt-4 space-y-2 text-Black-700 text-sm sm:text-base">
                <li>• Sunrise boat ride on Ganga</li>
                <li>• BHU & Vishwanath Temple</li>
                <li>• Sankat Mochan & Tulsi Manas Mandir</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Varanasi Tour Packages
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Curated spiritual circuits with trusted local support and smooth pacing.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-orange-900">
              Customizations available for families, seniors, and group travel.
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Package 1 */}
            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition">
              <img
                src={ghatImg}
                alt="Varanasi ghats"
                className="h-48 w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-2xl font-bold">Varanasi (Kashi) Tour Package</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Duration: 02 Nights / 03 Days
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Route: Varanasi - Sarnath - Varanasi
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">Itinerary Details</p>
                <div className="mt-3 space-y-3">
                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 1: Arrival and Evening Ganga Aarti</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Pickup from Varanasi airport/railway station</li>
                      <li>Hotel check-in and rest</li>
                      <li>Dashashwamedh Ghat or Namo Ghat for Ganga Aarti</li>
                      <li>Boat ride to view the Aarti from the river</li>
                      <li>Overnight stay in Varanasi</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 2: Spiritual Morning and Sarnath Tour</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Sunrise boat ride (Subah-e-Banaras)</li>
                      <li>Kashi Vishwanath, Annapurna, Vishalakshi temples</li>
                      <li>Sarnath: Dhamekh Stupa, museum, Buddhist temples</li>
                      <li>Free time for shopping or local food</li>
                      <li>Overnight stay in Varanasi</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 3: BHU Temple and Departure</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>New Vishwanath Temple (BHU)</li>
                      <li>Sankat Mochan Temple, Durga Temple, Tulsi Manas Mandir</li>
                      <li>Drop at airport/railway station</li>
                    </ul>
                  </details>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>02 nights hotel stay</li>
                        <li>Daily breakfast</li>
                        <li>Private AC vehicle for transfers and sightseeing</li>
                        <li>Morning and evening boat rides</li>
                        <li>Tolls, parking, driver allowance</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Not Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Flight or train tickets</li>
                        <li>Entry tickets to temples or museums</li>
                        <li>Lunch and dinner</li>
                        <li>Personal expenses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition">
              <img
                src={artiImg}
                alt="Ganga aarti"
                className="h-48 w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-2xl font-bold">Complete Kashi and Sarnath Tour</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Duration: 03 Nights / 04 Days
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Route: Varanasi - Sarnath - Ramnagar - Varanasi
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">Itinerary Details</p>
                <div className="mt-3 space-y-3">
                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 1: Arrival and Grand Ganga Aarti</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Pickup and hotel check-in</li>
                      <li>Dashashwamedh Ghat for Ganga Aarti</li>
                      <li>Boat ride for Aarti view</li>
                      <li>Overnight stay in Varanasi</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 2: Spiritual Morning and Sarnath Heritage</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Sunrise boat ride (Subah-e-Banaras)</li>
                      <li>Kashi Vishwanath, Annapurna, Vishalakshi temples</li>
                      <li>Sarnath: Stupa, Ashoka Pillar, museum, temples</li>
                      <li>Overnight stay in Varanasi</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 3: Fort, University and Culture</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Ramnagar Fort visit</li>
                      <li>BHU campus and New Vishwanath Temple</li>
                      <li>Sankat Mochan and Durga Temple</li>
                      <li>Shopping time for silk and handicrafts</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 4: Final Prayers and Departure</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Bharat Mata Mandir visit</li>
                      <li>Local food and last-minute shopping</li>
                      <li>Drop at airport/railway station</li>
                    </ul>
                  </details>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>03 nights hotel stay</li>
                        <li>Daily breakfast</li>
                        <li>Private AC vehicle for transfers and sightseeing</li>
                        <li>Morning and evening boat rides</li>
                        <li>Tolls, parking, driver allowance</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Not Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Flight or train tickets</li>
                        <li>Entry fees to monuments or museums</li>
                        <li>Lunch and dinner</li>
                        <li>Guide charges (on request)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition">
              <img
                src={mandirImg}
                alt="Kashi temple"
                className="h-48 w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-2xl font-bold">Grand Kashi (Varanasi) In-Depth Tour</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Duration: 04 Nights / 05 Days
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Route: Varanasi - Sarnath - Ramnagar - Local Village - Varanasi
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">Itinerary Details</p>
                <div className="mt-3 space-y-3">
                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 1: Arrival and Evening Ganga Aarti</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Pickup and hotel check-in</li>
                      <li>Dashashwamedh Ghat for Ganga Aarti</li>
                      <li>Boat ride for evening city lights</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 2: Sunrise and Holy Temples</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Sunrise boat ride and Manikarnika Ghat</li>
                      <li>Kashi Vishwanath, Annapurna, Vishalakshi temples</li>
                      <li>Kal Bhairav Temple visit</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 3: Sarnath and Namo Ghat</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Sarnath: Stupa, museum, Ashoka Pillar</li>
                      <li>Namo Ghat visit</li>
                      <li>Evening free time for local food</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 4: Ramnagar Fort and Silk Weaving</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Ramnagar Fort and museum</li>
                      <li>Banarasi silk weaving center visit</li>
                      <li>BHU campus and New Vishwanath Temple</li>
                      <li>Sankat Mochan and Tulsi Manas Mandir</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 5: Shopping and Departure</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Bharat Mata Mandir visit</li>
                      <li>Local markets for souvenirs and silk</li>
                      <li>Drop at airport/railway station</li>
                    </ul>
                  </details>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>04 nights hotel stay</li>
                        <li>Daily breakfast</li>
                        <li>Private AC vehicle for transfers and sightseeing</li>
                        <li>Morning and evening boat rides</li>
                        <li>Tolls, parking, driver allowance</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Not Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Flight or train tickets</li>
                        <li>Entry tickets to museums or forts</li>
                        <li>Lunch and dinner</li>
                        <li>Personal expenses and tips</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 4 */}
            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition">
              <img
                src={boatImg}
                alt="Varanasi boat ride"
                className="h-48 w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-3 mt-5">
                <h3 className="text-2xl font-bold">The Grand Holy Triangle Tour</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Duration: 04 Nights / 05 Days
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Route: Varanasi (2N) - Prayagraj - Ayodhya (2N)
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  This spiritual circuit connects Varanasi, Prayagraj, and Ayodhya.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">Itinerary Details</p>
                <div className="mt-3 space-y-3">
                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 1: Arrival in Varanasi and Ganga Aarti</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Pickup and hotel check-in</li>
                      <li>Dashashwamedh Ghat Ganga Aarti</li>
                      <li>Evening boat ride</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 2: Varanasi temples and Sarnath tour</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Sunrise boat ride</li>
                      <li>Kashi Vishwanath, Annapurna, Vishalakshi temples</li>
                      <li>Sarnath: Stupa and museum</li>
                      <li>BHU and Sankat Mochan Temple</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 3: Varanasi - Prayagraj - Ayodhya</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Drive to Prayagraj and Triveni Sangam</li>
                      <li>Hanuman Temple and Anand Bhawan</li>
                      <li>Drive to Ayodhya and hotel check-in</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 4: Full day Ayodhya sightseeing</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Shri Ram Janmabhoomi (Ram Mandir) darshan</li>
                      <li>Hanuman Garhi and Kanak Bhawan</li>
                      <li>Dashrath Mahal and Ram Ki Paidi</li>
                      <li>Saryu Aarti and evening show</li>
                    </ul>
                  </details>

                  <details className="rounded-2xl border border-orange-100 bg-white p-4">
                    <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span>Day 5: Guptar Ghat and departure</span>
                      <span className="text-orange-600">&rsaquo;</span>
                    </summary>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>Guptar Ghat visit</li>
                      <li>Drop at Ayodhya airport/station or Varanasi/Lucknow</li>
                    </ul>
                  </details>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>04 nights hotel stay (2N Varanasi + 2N Ayodhya)</li>
                        <li>Daily breakfast</li>
                        <li>Private AC vehicle for transfers and sightseeing</li>
                        <li>Boat rides in Varanasi (morning and evening)</li>
                        <li>Tolls, parking, driver allowance</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-orange-100 bg-white p-5">
                      <h4 className="font-semibold mb-3">Not Included</h4>
                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <li>Flight or train tickets</li>
                        <li>Entry fees to monuments or museums</li>
                        <li>Lunch and dinner</li>
                        <li>Boat charges at Triveni Sangam</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Why Book with Nerds Travel</h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>Varanasi based local experts for best timings</li>
                <li>Clear pricing with no hidden costs</li>
                <li>Professional, safe and polite drivers</li>
                <li>Customizable timings and locations</li>
                <li>Direct hotel and transport rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
<section className="py-16 md:py-24 px-4 bg-orange-50 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
      Plan Your Trip to Kashi
    </h2>

    <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10">
      Share your travel preferences with us and we’ll design a soulful Kashi
      experience tailored just for you.
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
