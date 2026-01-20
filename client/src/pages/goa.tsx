import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/main_goa.jpg";
import beachImg from "@assets/stock_images/travel-front_1.jpg";
import cultureImg from "@assets/stock_images/travel-front.jpg";
import nightImg from "@assets/stock_images/MixCollage-25-Jul-2025-08-48-PM-378-1024x1024.jpg";

const faces = [
  {
    title: "North Goa",
    vibe: "High-energy, lively, and social",
    bestFor: "Nightlife, water sports, and markets",
    beaches: "Baga, Calangute, Anjuna, Vagator",
    attractions: "Fort Aguada, Chapora Fort, nightclubs",
  },
  {
    title: "South Goa",
    vibe: "Serene, peaceful, and romantic",
    bestFor: "Luxury resorts, quiet walks, and yoga",
    beaches: "Palolem, Agonda, Colva, Benaulim",
    attractions: "Cabo de Rama Fort, silent discos",
  },
];

const experiences = [
  {
    title: "Heritage and Culture",
    desc:
      "Old Goa churches, Basilica of Bom Jesus, Se Cathedral, and the colorful Fontainhas lanes.",
  },
  {
    title: "Thrill and Adventure",
    desc:
      "Parasailing, jet skiing, scuba at Grand Island, and the Dudhsagar waterfall trek.",
  },
  {
    title: "The Spice Trail",
    desc:
      "Ponda spice plantations with guided walks and traditional Goan meals.",
  },
  {
    title: "Nightlife and Casinos",
    desc:
      "Tito's Lane clubs and floating casinos on the Mandovi River.",
  },
  {
    title: "Shopping",
    desc:
      "Anjuna Flea Market and Arpora Saturday Night Market for crafts and boho finds.",
  },
];

const seasons = [
  {
    title: "Peak Season",
    months: "November to February",
    reason: "Best weather, festivals, and lively beach energy.",
  },
  {
    title: "Shoulder Season",
    months: "March to May",
    reason: "Quieter beaches and great value stays.",
  },
  {
    title: "Monsoon",
    months: "June to September",
    reason: "Lush hinterlands and dramatic green landscapes.",
  },
];

const connectivity = [
  {
    title: "Air",
    desc: "Dabolim Airport (South) and Manohar International Airport, Mopa (North).",
  },
  {
    title: "Rail",
    desc: "Madgaon (South) and Thivim (North) stations connect major cities.",
  },
  {
    title: "Local Transport",
    desc:
      "Scooter or car rentals are popular; Goa Miles and local pilots are available.",
  },
];

const packages = [
  {
    name: "The Premium Goa Escape",
    duration: "03 Nights / 04 Days",
    route: "North Goa (Private) + South Goa (Private) + Mandovi Dinner Cruise (SIC)",
    pickup: "Goa Airport (Dabolim or Mopa) / Railway Station",
    image: beachImg,
    days: [
      {
        title: "Day 1: Private Arrival and Leisure",
        points: [
          "Personalized pickup and private transfer to your North Goa resort",
          "Check-in and evening at leisure",
          "Optional walk at Calangute beach or a local shack",
        ],
      },
      {
        title: "Day 2: North Goa and Dinner Cruise",
        points: [
          "Fort Aguada and Sinquerim Beach",
          "Anjuna and Vagator with Chapora Fort",
          "Evening shared Mandovi Dinner Cruise with DJ and buffet",
        ],
      },
      {
        title: "Day 3: South Goa Heritage",
        points: [
          "Old Goa churches and Basilica of Bom Jesus",
          "Mangueshi Temple and Dona Paula viewpoint",
          "Miramar Beach and Fontainhas drive",
        ],
      },
      {
        title: "Day 4: Private Departure",
        points: [
          "Relaxed morning and check-out",
          "Private drop to airport or railway station",
        ],
      },
    ],
    included: [
      "03 nights AC resort stay",
      "Private AC transport for transfers and sightseeing",
      "Daily breakfast",
      "Mandovi dinner cruise ticket with buffet (SIC)",
      "Fuel, tolls, parking, and driver allowance",
    ],
    excluded: [
      "Water sports and scuba diving",
      "Entry fees for forts or museums",
      "Personal expenses and beverages",
    ],
  },
  {
    name: "The Ultimate Goan Grandeur",
    duration: "04 Nights / 05 Days",
    route: "North Goa (Private) + South Goa (Private) + Dudhsagar Falls (SIC)",
    pickup: "Goa Airport (Dabolim or Mopa) / Railway Station",
    image: cultureImg,
    days: [
      {
        title: "Day 1: Arrival and Beachside Chill",
        points: [
          "Private transfer to North Goa hotel",
          "Evening beach walk at Calangute or Baga",
        ],
      },
      {
        title: "Day 2: North Goa and Dinner Cruise",
        points: [
          "Fort Aguada, Candolim, Sinquerim",
          "Vagator Beach and Chapora Fort sunset",
          "Dinner cruise on Mandovi River (SIC)",
        ],
      },
      {
        title: "Day 3: South Goa Heritage",
        points: [
          "Old Goa UNESCO churches",
          "Mangueshi Temple and Dona Paula",
          "Miramar and Fontainhas",
        ],
      },
      {
        title: "Day 4: Dudhsagar Falls and Spice Plantation",
        points: [
          "Shared coach pickup early morning",
          "Jeep safari inside Mollem National Park",
          "Dudhsagar waterfall stop and spice plantation lunch",
        ],
      },
      {
        title: "Day 5: Departure",
        points: [
          "Breakfast and check-out",
          "Private drop to airport or railway station",
        ],
      },
    ],
    included: [
      "04 nights AC hotel stay",
      "Private AC transfers and 2 days local sightseeing",
      "SIC dinner cruise and Dudhsagar trip",
      "Jeep safari, forest entry, and spice plantation lunch",
      "Daily breakfast",
    ],
    excluded: [
      "Water sports and adventure activities",
      "Entry fees for museums or forts",
      "Lunch and dinner except cruise and plantation",
    ],
  },
  {
    name: "The Goa Adventure and Heritage Trail",
    duration: "04 Nights / 05 Days",
    route: "Private sightseeing + SIC cruise and water sports",
    pickup: "Goa Airport (Dabolim or Mopa) / Railway Station",
    image: nightImg,
    days: [
      {
        title: "Day 1: Welcome to Goa",
        points: [
          "Meet and greet at airport or station",
          "Private transfer to North Goa hotel",
          "Evening at leisure and nightlife options",
        ],
      },
      {
        title: "Day 2: North Goa and Dinner Cruise",
        points: [
          "Fort Aguada and Candolim",
          "Vagator and Chapora Fort",
          "Mandovi dinner cruise (SIC)",
        ],
      },
      {
        title: "Day 3: South Goa Heritage",
        points: [
          "Old Goa churches",
          "Mangueshi Temple and Dona Paula",
          "Miramar and Fontainhas",
        ],
      },
      {
        title: "Day 4: Scuba and Water Sports",
        points: [
          "Shared pickup for water sports",
          "Scuba dive with instructor and photos",
          "Parasailing, jet ski, banana ride",
          "Snacks and lunch included",
        ],
      },
      {
        title: "Day 5: Departure",
        points: [
          "Breakfast and check-out",
          "Private drop to airport or railway station",
        ],
      },
    ],
    included: [
      "04 nights AC resort stay",
      "Private transfers and 2 days sightseeing",
      "SIC dinner cruise and water sports combo",
      "Water sports kit and instructor",
      "Daily breakfast + 1 cruise dinner + 1 lunch",
    ],
    excluded: [
      "Personal expenses and beverages",
      "Entry tickets for specific monuments",
      "Optional photos or videos if not included",
    ],
  },
];

export default function Goa() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Goa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-200">
            Tropical Paradise
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mt-4">
            Goa
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mt-6">
            Sun-kissed beaches, Portuguese heritage, nightlife, and slow susegad living.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img
            src={cultureImg}
            alt="Goa heritage"
            className="w-full h-64 sm:h-[45vh] object-cover rounded-3xl shadow-xl"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              Discover Goa
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Goa blends sunlit shores, ancient cathedrals, and a relaxed lifestyle. It is a destination for beach lovers, history buffs, and anyone who wants to slow down and enjoy the moment.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From nightlife and water sports in the North to romantic beaches and wellness retreats in the South, Goa offers a soul for every traveler.
            </p>
          </div>
        </div>
      </section>

      {/* TWO FACES */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            The Two Faces of Goa
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faces.map((face) => (
              <div
                key={face.title}
                className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{face.title}</h3>
                <div className="mt-4 space-y-2 text-sm sm:text-base text-gray-700">
                  <p><span className="font-semibold">Vibe:</span> {face.vibe}</p>
                  <p><span className="font-semibold">Best For:</span> {face.bestFor}</p>
                  <p><span className="font-semibold">Key Beaches:</span> {face.beaches}</p>
                  <p><span className="font-semibold">Attractions:</span> {face.attractions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              Top Experiences in Goa
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-amber-100 bg-white p-5"
                >
                  <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src={beachImg}
              alt="Goa beach"
              className="w-full h-64 sm:h-[40vh] object-cover rounded-3xl shadow-xl"
            />
            <img
              src={nightImg}
              alt="Goa nightlife"
              className="w-full h-56 sm:h-[35vh] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* TRAVEL ESSENTIALS */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Travel Essentials
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {seasons.map((season) => (
              <div
                key={season.title}
                className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{season.title}</h3>
                <p className="text-amber-600 font-semibold mt-2">{season.months}</p>
                <p className="text-gray-600 text-sm sm:text-base mt-3">
                  {season.reason}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {connectivity.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-amber-100 bg-amber-50 p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Why Travel With Nerds Travel
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Curated Stays",
                desc:
                  "Boutique heritage villas in the North and eco-resorts in the South.",
              },
              {
                title: "Local Experts",
                desc:
                  "Insider guides for hidden beaches and authentic seafood spots.",
              },
              {
                title: "Safe and Verified",
                desc:
                  "Trusted water sports operators and reliable transport.",
              },
              {
                title: "Susegad Planning",
                desc:
                  "Relaxed itineraries with enough time to unwind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                Goa Tour Packages
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Premium itineraries designed for comfort, nightlife, and beach time.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Private cars and verified operators for a smooth Goa stay.
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-3xl border border-amber-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-48 w-full object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-3 mt-5">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Duration: {pkg.duration}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Route: {pkg.route}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Pickup/Drop: {pkg.pickup}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wide text-amber-700 font-semibold">
                    Itinerary Details
                  </p>
                  <div className="mt-3 space-y-3">
                    {pkg.days.map((day) => (
                      <details
                        key={day.title}
                        className="rounded-2xl border border-amber-100 bg-white p-4"
                      >
                        <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                          <span>{day.title}</span>
                          <span className="text-amber-600">&rsaquo;</span>
                        </summary>
                        <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                          {day.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </details>
                    ))}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-amber-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.included.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-amber-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Not Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.excluded.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Plan Your Goa Trip
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Tell us your dates and preferences, and we will craft your perfect Goa escape.
          </p>
          <a
            href="/#enquiry"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-base sm:text-lg font-bold shadow-xl transition-transform hover:scale-105"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
