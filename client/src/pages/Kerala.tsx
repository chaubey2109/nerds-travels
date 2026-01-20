import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import heroImg from "@assets/stock_images/main_kerala.jpg";
// import backwaterImg from "@assets/stock_images/travel-front_1.jpg";
import teaImg from "@assets/stock_images/Kerala/image_11.jpg";
// import cultureImg from "@assets/stock_images/MixCollage-25-Jul-2025-08-48-PM-378-1024x1024.jpg";
import munnarImg from "@assets/stock_images/Kerala/image_1.jpg";
import alleppeyImg from "@assets/stock_images/Kerala/image_2.jpg";
import thekkadyImg from "@assets/stock_images/Kerala/image_3.jpg";
import backwaterImg from "@assets/stock_images/Kerala/image_4.jpg";
import cultureImg from "@assets/stock_images/Kerala/image_9.jpg";
import hillsImg from "@assets/stock_images/Kerala/image_10.jpg";
import image1Img from "@assets/stock_images/Kerala/image_7.jpg";
import image2Img from "@assets/stock_images/Kerala/image_8.jpg";

const destinations = [
  {
    title: "Munnar",
    subtitle: "Hill Station",
    desc:
      "Tea estates, cool weather, waterfalls, and Eravikulam National Park make it perfect for nature and honeymoon trips.",
  },
  {
    title: "Alleppey",
    subtitle: "Backwaters",
    desc:
      "Cruise through palm-lined canals on a private houseboat with fresh Kerala meals and slow life views.",
  },
  {
    title: "Thekkady",
    subtitle: "Wildlife Hub",
    desc:
      "Periyar National Park, spice plantations, boat safaris, and forest trails for wildlife lovers.",
  },
  {
    title: "Kochi",
    subtitle: "Heritage City",
    desc:
      "Colonial streets, Chinese fishing nets, Jew Town, and lively art and culture scenes.",
  },
  {
    title: "Wayanad",
    subtitle: "Hidden Gem",
    desc:
      "Trekking, ancient Edakkal caves, dams, and waterfalls with quiet mountain escapes.",
  },
  {
    title: "Varkala and Kovalam",
    subtitle: "Beaches",
    desc:
      "Cliff beaches, lighthouses, and calm waters for relaxation and surfing.",
  },
];

const experiences = [
  {
    title: "Ayurvedic Healing",
    desc:
      "Authentic Ayurveda therapies for rejuvenation, guided by trained experts and trusted clinics.",
  },
  {
    title: "Houseboat Stay",
    desc:
      "Overnight on a traditional kettuvallam with a private chef and serene backwater views.",
  },
  {
    title: "Cultural Arts",
    desc:
      "Kathakali dance drama and Kalaripayattu martial arts performances with rich storytelling.",
  },
  {
    title: "Spice Tours",
    desc:
      "Walk through cardamom, pepper, cinnamon, and clove plantations with local guides.",
  },
  {
    title: "Authentic Cuisine",
    desc:
      "Taste a Kerala sadya on banana leaf and regional seafood specialties.",
  },
];

const seasons = [
  {
    title: "Peak Season",
    months: "September to March",
    reason: "Pleasant weather for houseboats, beaches, and hill stations.",
  },
  {
    title: "Monsoon Season",
    months: "June to August",
    reason: "Best for Ayurveda and lush green landscapes, with heavy rain expected.",
  },
  {
    title: "Summer Season",
    months: "April to May",
    reason: "Warm but good for budget travel and hill station escapes.",
  },
];

const packages = [
  {
    name: "Magical Munnar: Tea Garden Escape",
    duration: "02 Nights / 03 Days",
    route: "Kochi - Munnar (2N) - Kochi",
    pickup: "Kochi Airport (COK) or Railway Station",
    image: munnarImg,
    days: [
      {
        title: "Day 1: The Scenic Climb to Munnar",
        points: [
          "Pickup at Kochi Airport or Railway Station",
          "Drive to Munnar with spice gardens and mountain views",
          "Cheeyappara Waterfalls and Valara Waterfalls photo stops",
          "Karadippara Viewpoint for the first valley view",
          "Hotel check-in and evening at leisure",
        ],
      },
      {
        title: "Day 2: Full Day Munnar Sightseeing",
        points: [
          "Eravikulam National Park and Rajamalai view points",
          "Mattupetty Dam with optional speed boat ride",
          "Echo Point and Kundala Lake",
          "Optional Tea Museum or cultural show",
        ],
      },
      {
        title: "Day 3: Spice Gardens and Departure",
        points: [
          "Spice plantation tour",
          "Pothamedu Viewpoint",
          "Return drive to Kochi for drop",
        ],
      },
    ],
    included: [
      "02 nights AC hotel or resort stay",
      "Daily breakfast",
      "Private AC vehicle for transfers and sightseeing",
      "Fuel, tolls, and driver allowance",
    ],
    excluded: [
      "Entry tickets and boat rides",
      "Lunch and dinner",
      "Personal expenses",
    ],
  },
  {
    name: "Glimpses of Kerala: Munnar and Alleppey",
    duration: "03 Nights / 04 Days",
    route: "Kochi - Munnar (2N) - Alleppey (1N) - Kochi",
    pickup: "Kochi Airport (COK) or Railway Station",
    image: alleppeyImg,
    days: [
      {
        title: "Day 1: Kochi to Munnar",
        points: [
          "Pickup and drive to Munnar (approx 4 hours)",
          "Cheeyappara and Valara waterfall stops",
          "Tea Museum visit",
          "Hotel check-in and overnight stay",
        ],
      },
      {
        title: "Day 2: Munnar Tea Gardens",
        points: [
          "Eravikulam National Park",
          "Mattupetty Dam and Echo Point",
          "Flower Garden and town market",
        ],
      },
      {
        title: "Day 3: Munnar to Alleppey Houseboat",
        points: [
          "Drive to Alleppey (approx 4.5 hours)",
          "Private houseboat check-in around 12:30 PM",
          "Backwater cruise with village views",
          "All meals on board",
          "Overnight stay on the houseboat",
        ],
      },
      {
        title: "Day 4: Kochi Departure",
        points: [
          "Breakfast on the boat and check-out",
          "Drive back to Kochi",
          "Drop at airport or station",
        ],
      },
    ],
    included: [
      "02 nights AC hotel stay in Munnar with breakfast",
      "01 night private AC houseboat with all meals",
      "Private AC vehicle for the entire trip",
      "Fuel, tolls, parking, and driver allowance",
    ],
    excluded: [
      "Airfare or train tickets",
      "Entry tickets and boating charges",
      "Ayurvedic massages or personal expenses",
    ],
    tips: [
      "Houseboats cruise from 12:00 PM to 5:30 PM and anchor overnight.",
      "Munnar evenings can be cool, carry a light sweater.",
      "Plan Kochi departure with a buffer for traffic.",
    ],
  },
  {
    name: "Kerala Classics: Hills, Wilds and Backwaters",
    duration: "04 Nights / 05 Days",
    route: "Kochi - Munnar (2N) - Thekkady (1N) - Alleppey (1N) - Kochi",
    pickup: "Kochi Airport (COK) or Railway Station",
    image: thekkadyImg,
    days: [
      {
        title: "Day 1: Kochi to Munnar",
        points: [
          "Arrival meet and greet at Kochi",
          "Scenic drive to Munnar with waterfall stops",
          "Check-in and evening at leisure",
        ],
      },
      {
        title: "Day 2: Munnar High Peaks",
        points: [
          "Eravikulam National Park and Anamudi views",
          "Mattupetty Dam and Echo Point",
          "Tea Museum visit",
        ],
      },
      {
        title: "Day 3: Munnar to Thekkady",
        points: [
          "Drive to Thekkady (approx 3.5 hours)",
          "Periyar Lake boat safari",
          "Optional elephant ride or shower",
          "Kalaripayattu or Kathakali show",
        ],
      },
      {
        title: "Day 4: Thekkady to Alleppey",
        points: [
          "Drive to Alleppey (approx 4 hours)",
          "Houseboat check-in at 12:30 PM",
          "Backwater cruise with meals on board",
        ],
      },
      {
        title: "Day 5: Kochi Heritage and Departure",
        points: [
          "Breakfast on the boat and return to Kochi",
          "Fort Kochi walk with Chinese fishing nets and churches",
          "Drop at airport or station",
        ],
      },
    ],
    included: [
      "2N Munnar, 1N Thekkady, 1N private houseboat",
      "All meals on houseboat and daily breakfast at hotels",
      "Private AC vehicle for transfers and sightseeing",
    ],
    excluded: [
      "Park entry fees and boat tickets",
      "Elephant rides and personal activities",
      "Lunch and dinner at hotels",
    ],
  },
  {
    name: "Ultimate Kerala Circuit: Hills, Wilds and Backwaters",
    duration: "05 Nights / 06 Days",
    route: "Kochi (1N) - Munnar (2N) - Thekkady (1N) - Alleppey (1N)",
    pickup: "Kochi Airport (COK) or Railway Station",
    image: hillsImg,
    days: [
      {
        title: "Day 1: Arrival and Kochi Heritage",
        points: [
          "Transfer to hotel and rest",
          "Fort Kochi walk with Chinese fishing nets",
          "Optional Kathakali show",
        ],
      },
      {
        title: "Day 2: Kochi to Munnar",
        points: [
          "Drive to Munnar with waterfall stops",
          "Spice plantation visit",
          "Evening at leisure",
        ],
      },
      {
        title: "Day 3: The Best of Munnar",
        points: [
          "Eravikulam National Park",
          "Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake",
          "Munnar market time",
        ],
      },
      {
        title: "Day 4: Munnar to Thekkady",
        points: [
          "Drive to Thekkady",
          "Periyar boat safari",
          "Optional elephant ride or shower",
        ],
      },
      {
        title: "Day 5: Thekkady to Alleppey",
        points: [
          "Drive to Alleppey",
          "Private houseboat check-in at 12:00 PM",
          "Backwater cruise with meals",
        ],
      },
      {
        title: "Day 6: Departure",
        points: [
          "Breakfast on the houseboat",
          "Drive to Kochi for drop",
        ],
      },
    ],
    included: [
      "04 nights AC hotel or resort stay",
      "01 night private AC houseboat",
      "Daily breakfast at hotels",
      "All meals on the houseboat",
      "Private AC vehicle for the entire trip",
      "Fuel, tolls, parking, and driver allowance",
    ],
    excluded: [
      "Airfare or train tickets",
      "Entry fees, boating, and cultural shows",
      "Ayurvedic massages and personal expenses",
      "Lunch and dinner at hotels",
    ],
  },
  {
    name: "The Grand Kerala Trail: Munnar to Trivandrum",
    duration: "06 Nights / 07 Days",
    route: "Kochi - Munnar (2N) - Thekkady (1N) - Alleppey (1N) - Kovalam (2N)",
    pickup: "Kochi Airport (COK)",
    image: backwaterImg,
    days: [
      {
        title: "Day 1: Arrival and Munnar",
        points: [
          "Pickup at Kochi and drive to Munnar",
          "Cheeyappara and Valara waterfalls",
          "Hotel check-in and evening at leisure",
        ],
      },
      {
        title: "Day 2: Munnar Tea and Nature",
        points: [
          "Eravikulam National Park",
          "Mattupetty Dam, Echo Point, Tea Museum",
          "Tea garden walk",
        ],
      },
      {
        title: "Day 3: Munnar to Thekkady",
        points: [
          "Drive to Thekkady",
          "Periyar boat safari",
          "Kalaripayattu show and spice plantation",
        ],
      },
      {
        title: "Day 4: Thekkady to Alleppey",
        points: [
          "Drive to Alleppey",
          "Private houseboat cruise with meals",
          "Overnight on the houseboat",
        ],
      },
      {
        title: "Day 5: Alleppey to Kovalam via Varkala",
        points: [
          "Varkala Cliff and Papanasam Beach stop",
          "Sunset at Kovalam Lighthouse Beach",
        ],
      },
      {
        title: "Day 6: Trivandrum Sightseeing",
        points: [
          "Sree Padmanabhaswamy Temple",
          "Kuthira Malika Palace and museums",
          "Evening at Hawa Beach or Samudra Beach",
        ],
      },
      {
        title: "Day 7: Departure",
        points: [
          "Optional Aazhimala Shiva Temple visit",
          "Drop at Trivandrum Airport",
        ],
      },
    ],
    included: [
      "02 nights Munnar, 01 night Thekkady, 01 night houseboat, 02 nights Kovalam",
      "Houseboat meals included",
      "Daily breakfast at hotels",
      "Private AC vehicle for the entire tour",
      "Fuel, tolls, parking, and driver allowance",
    ],
    excluded: [
      "Entry fees for parks, museums, and shows",
      "Airfare or train tickets",
      "Personal expenses and treatments",
    ],
  },
  {
    name: "The Southern Tip Trail: Trivandrum and Kanyakumari",
    duration: "02 Nights / 03 Days",
    route: "Trivandrum (1N) - Kanyakumari (1N) - Trivandrum",
    pickup: "Trivandrum Airport (TRV) or Railway Station (TVC)",
    image: cultureImg,
    days: [
      {
        title: "Day 1: Trivandrum City Tour",
        points: [
          "Arrival and hotel check-in",
          "Sree Padmanabhaswamy Temple visit (dress code applies)",
          "Kuthira Malika Palace and Napier Museum",
          "Sunset at Shanghumukham Beach",
        ],
      },
      {
        title: "Day 2: Trivandrum to Kanyakumari",
        points: [
          "Drive to Kanyakumari with Padmanabhapuram Palace stop",
          "Vivekananda Rock Memorial ferry",
          "Thiruvalluvar Statue and Bhagavathi Amman Temple",
          "Sunset at the confluence",
        ],
      },
      {
        title: "Day 3: Sunrise and Departure",
        points: [
          "Sunrise view over the ocean",
          "Gandhi Memorial and Kamarajar Mani Mandapam",
          "Return drive to Trivandrum for drop",
        ],
      },
    ],
    included: [
      "01 night Trivandrum stay and 01 night Kanyakumari stay",
      "Daily breakfast",
      "Private AC vehicle for all transfers and sightseeing",
      "Fuel, tolls, parking, and driver allowance",
    ],
    excluded: [
      "Entry fees for palaces and museums",
      "Ferry tickets to Rock Memorial",
      "VIP darshan or special puja charges",
      "Personal expenses and meals not mentioned",
    ],
  },
];

export default function Kerala() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kerala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-200">
            God's Own Country
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mt-4 text-orange-100">
            Kerala
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mt-6">
            Misty hills, emerald tea gardens, serene backwaters, and golden beaches in one journey.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <img
            src={teaImg}
            alt="Kerala tea gardens"
            className="w-full h-64 sm:h-[45vh] object-cover rounded-3xl shadow-xl"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              About Kerala
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Kerala is a land of tropical beauty, ancient traditions, and world-class hospitality. Known as God's Own Country, it blends hill stations, backwaters, wildlife, beaches, and Ayurveda in one destination.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Travelers love Kerala for its lush landscapes, safe and friendly atmosphere, and experiences like houseboat cruises, tea garden walks, and cultural arts that feel truly immersive.
            </p>
          </div>
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Top Destinations in Kerala
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-xl transition"
              >
                <p className="text-xs uppercase tracking-wide text-orange-600 font-semibold">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KERALA EXPERIENCE */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              The Kerala Experience
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Kerala is not just sightseeing. It is about healing, culture, flavors, and the slow rhythm of backwater life. Every journey blends nature, heritage, and comfort.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-100 bg-white p-5"
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
              src={image1Img}
              alt="Kerala backwaters"
              className="w-full h-64 sm:h-[40vh] object-cover rounded-3xl shadow-xl"
            />
            <img
              src={image2Img}
              alt="Kerala culture"
              className="w-full h-56 sm:h-[35vh] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Best Time to Visit Kerala
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {seasons.map((season) => (
              <div
                key={season.title}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{season.title}</h3>
                <p className="text-orange-600 font-semibold mt-2">{season.months}</p>
                <p className="text-gray-600 text-sm sm:text-base mt-3">
                  {season.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 md:mb-14">
            Why Travel With Nerds Travel
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Curated Local Knowledge",
                desc:
                  "Quiet tea trails, authentic backwaters, and local insights beyond the crowded routes.",
              },
              {
                title: "Verified Houseboats",
                desc:
                  "Premium, hygienic, and safe houseboats with trusted operators only.",
              },
              {
                title: "Comfortable Transfers",
                desc:
                  "Experienced drivers for long hill drives and smooth journeys.",
              },
              {
                title: "Transparent Pricing",
                desc:
                  "No hidden commissions or surprise fuel charges.",
              },
              {
                title: "24/7 Ground Support",
                desc:
                  "Local support from arrival to departure for any requests.",
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
                Kerala Tour Packages
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Premium itineraries designed for comfort, culture, and nature.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              Customizations available for couples, families, and groups.
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-48 w-full object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-3">
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
                  <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
                    Itinerary Details
                  </p>
                  <div className="mt-3 space-y-3">
                    {pkg.days.map((day) => (
                      <details
                        key={day.title}
                        className="rounded-2xl border border-emerald-100 bg-white p-4"
                      >
                        <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-base font-semibold text-gray-800">
                          <span>{day.title}</span>
                          <span className="text-emerald-600">&rsaquo;</span>
                        </summary>
                        <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                          {day.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </details>
                    ))}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.included.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-emerald-100 bg-white p-5">
                        <h4 className="font-semibold mb-3">Not Included</h4>
                        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                          {pkg.excluded.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {pkg.tips ? (
                      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                        <h4 className="font-semibold">Pro Tips</h4>
                        <ul className="mt-3 space-y-2 text-emerald-900 text-sm sm:text-base">
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
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Plan Your Kerala Trip
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            Share your travel dates and preferences, and we will design the perfect Kerala itinerary for you.
          </p>
          <a
            href="/#enquiry"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-base sm:text-lg font-bold shadow-xl transition-transform hover:scale-105"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
