import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/prayagraj_hero.jpg";
import sangamImg from "@assets/stock_images/triveni_sangam.jpg";
import kumbhImg from "@assets/stock_images/kumbh.jpg";
import hanumanImg from "@assets/stock_images/hanuman_mandir.jpg";
import riverImg from "@assets/stock_images/yamuna_ganga.jpg";

const highlights = [
  {
    title: "Triveni Sangam",
    desc:
      "Boat ride to the sacred confluence of Ganga, Yamuna, and Saraswati for a holy dip.",
    image: sangamImg,
  },
  {
    title: "Akbar Fort and Patalpuri",
    desc:
      "Explore the historic fort, underground temple, and the immortal Akshayavat tree.",
    image: riverImg,
  },
  {
    title: "Lete Hanuman Mandir",
    desc:
      "Visit the rare reclining Hanuman temple near the Sangam.",
    image: hanumanImg,
  },
  {
    title: "Kumbh and Magh Mela",
    desc:
      "Witness the world's largest spiritual gathering during the mela season.",
    image: kumbhImg,
  },
];

const packages = [
  {
    name: "Prayagraj: The Holy Confluence",
    duration: "01 Night / 02 Days",
    theme: "Spiritual Cleansing and Colonial History",
    image: sangamImg,
    days: [
      {
        title: "Day 1: Sangam and Ancient Fort",
        points: [
          "Early boat ride to Triveni Sangam for the holy dip",
          "Bade Hanuman Temple (reclining Hanuman) visit",
          "Allahabad Fort, Patalpuri Temple, and Akshayavat",
          "Evening Ganga Aarti on the river banks",
        ],
      },
      {
        title: "Day 2: Freedom and Heritage",
        points: [
          "Anand Bhawan and Swaraj Bhawan",
          "Jawahar Planetarium sky show",
          "Chandrashekhar Azad Park and Allahabad Museum",
          "All Saints Cathedral visit",
          "Drop at airport or railway station",
        ],
      },
    ],
    included: [
      "01 night AC hotel stay",
      "Daily breakfast",
      "Private AC vehicle for sightseeing",
      "Boat ride at Sangam",
    ],
    excluded: [
      "Entry tickets to museums",
      "Personal ritual or puja costs",
      "Lunch and dinner",
    ],
    tips: [
      "January to March is Magh Mela or Kumbh season with heavy crowds.",
    ],
  },
  {
    name: "The Ramayana Trail: Prayagraj and Chitrakoot",
    duration: "02 Nights / 03 Days",
    theme: "Pilgrimage and Forest Retreat",
    image: riverImg,
    days: [
      {
        title: "Day 1: Prayagraj Sangam",
        points: [
          "Arrival and hotel check-in",
          "Triveni Sangam boat ride",
          "Lete Hanuman Temple and Patalpuri Temple",
          "Anand Bhawan and Azad Park visit",
        ],
      },
      {
        title: "Day 2: Prayagraj to Chitrakoot",
        points: [
          "Drive to Chitrakoot (approx 3.5 hours)",
          "Gupt Godavari caves",
          "Sati Anusuya Ashram",
          "Ram Ghat evening Aarti and boat ride",
        ],
      },
      {
        title: "Day 3: Chitrakoot Darshan and Return",
        points: [
          "Kamadgiri Parikrama and Hanuman Dhara",
          "Bharat Milap Temple and Sphatik Shila",
          "Drive back to Prayagraj for drop",
        ],
      },
    ],
    included: [
      "1N Prayagraj and 1N Chitrakoot AC stay",
      "Daily breakfast",
      "Private AC vehicle for all transfers",
      "Sangam boat ride",
    ],
    excluded: [
      "Guide charges and ritual costs",
      "Entry tickets",
      "Lunch and dinner",
    ],
    tips: [
      "Start early for the Prayagraj to Chitrakoot drive to avoid traffic.",
      "Chitrakoot is peaceful and simple, expect a rural spiritual vibe.",
      "Be careful with belongings around monkeys at Hanuman Dhara and Kamadgiri.",
    ],
  },
  {
    name: "The Moksha and Maryada Trail",
    duration: "04 Nights / 05 Days",
    theme: "Prayagraj - Chitrakoot - Varanasi",
    image: kumbhImg,
    days: [
      {
        title: "Day 1: Prayagraj Arrival",
        points: [
          "Sangam boat ride and holy dip",
          "Lete Hanuman Temple and Patalpuri",
          "Anand Bhawan and Azad Park",
        ],
      },
      {
        title: "Day 2: Prayagraj to Chitrakoot",
        points: [
          "Drive to Chitrakoot",
          "Gupt Godavari caves and Sati Anusuya Ashram",
          "Ram Ghat evening Aarti",
        ],
      },
      {
        title: "Day 3: Chitrakoot to Varanasi",
        points: [
          "Kamadgiri Parikrama and Hanuman Dhara",
          "Sphatik Shila visit",
          "Drive to Varanasi and check-in",
        ],
      },
      {
        title: "Day 4: The Soul of Kashi",
        points: [
          "Sunrise boat ride in Varanasi",
          "Kashi Vishwanath, Annapurna, Vishalakshi temples",
          "Sarnath visit and evening Ganga Aarti",
        ],
      },
      {
        title: "Day 5: BHU Tour and Departure",
        points: [
          "New Vishwanath Temple (BHU)",
          "Sankat Mochan Temple and Bharat Mata Mandir",
          "Shopping and final drop",
        ],
      },
    ],
    included: [
      "AC accommodation (1N Prayagraj, 1N Chitrakoot, 2N Varanasi)",
      "Daily breakfast",
      "Private AC vehicle for transfers",
      "Boat rides in Sangam and Varanasi",
    ],
    excluded: [
      "Entry fees to monuments",
      "Ritual or puja charges",
      "Lunch and dinner",
    ],
  },
];

export default function Prayagraj() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Prayagraj" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-200">
            The Holy Confluence
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mt-4">
            Prayagraj
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mt-6">
            Sangam rituals, living heritage, and the timeless spirit of faith.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-orange-50">
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
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Prayagraj is where the sacred rivers Ganga, Yamuna, and Saraswati meet. The Sangam draws pilgrims, seekers, and history lovers who want to witness the spiritual heart of India.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              It is also home to forts, museums, and colonial landmarks that tell the story of freedom and faith in the same landscape.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Top Highlights in Prayagraj
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover rounded-2xl"
                />
                <h3 className="text-lg font-bold mt-4">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {item.desc}
                </p>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Spiritual Planning",
                desc:
                  "We align rituals and visits with the best timings at Sangam and temples.",
              },
              {
                title: "Heritage Focus",
                desc:
                  "Fort walks, museums, and freedom-era landmarks with local stories.",
              },
              {
                title: "Comfort and Care",
                desc:
                  "Smooth transport, calm pacing, and support for senior travelers.",
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
                Prayagraj Tour Packages
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Sacred Sangam rituals, heritage walks, and connected circuits.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-orange-900">
              Private cars and verified boat operators for a smooth visit.
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-3xl border border-orange-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition"
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
                    Theme: {pkg.theme}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">
                    Itinerary Details
                  </p>
                  <div className="mt-3 space-y-3">
                    {pkg.days.map((day) => (
                      <details
                        key={day.title}
                        className="rounded-2xl border border-orange-100 bg-white p-4"
                      >
                        <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                          <span>{day.title}</span>
                          <span className="text-orange-600">&rsaquo;</span>
                        </summary>
                        <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                          {day.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </details>
                    ))}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-orange-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.included.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-orange-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Not Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.excluded.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {pkg.tips ? (
                      <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                        <h4 className="font-semibold">Pro Tips</h4>
                        <ul className="mt-3 space-y-2 text-orange-900 text-sm sm:text-base">
                          {pkg.tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Plan Your Prayagraj Trip
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Share your travel dates and preferences, and we will build the right itinerary.
          </p>
          <a
            href="/#enquiry"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-base sm:text-lg font-bold shadow-xl transition-transform hover:scale-105"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
