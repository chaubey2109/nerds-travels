import { PujaNavigation } from "../components/PujaNavigation";
import { PujaFooter } from "../components/PujaFooter";
import { ChevronLeft, ChevronRight, ShieldCheck, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

type PujaItem = {
  title: string;
  subtitle: string;
  duration: string;
  bestFor: string;
};

type JyotishItem = {
  title: string;
  desc: string;
};

const PUJAS: PujaItem[] = 
 [
  {
    title: "Satyanarayan Puja(सत्यनारायण पूजा)",
    subtitle: "For happiness, peace and prosperity at home",
    duration: "2 to 3 hours",
    bestFor: "New home, family harmony, success",
  },
  {
    title: "Ganesh Puja(गणेश पूजा)",
    subtitle: "For removing obstacles and auspicious beginnings",
    duration: "60 to 90 minutes",
    bestFor: "New projects, exams, business start",
  },
  {
    title: "Navgrah Shanti Puja(नवग्रह शांति पूजा)",
    subtitle: "To pacify planetary doshas and maintain balance",
    duration: "3 to 4 hours",
    bestFor: "Kalsarpa Dosha, Shani Dosha, planetary obstacles",
  },
  {
    title: "Mahamrityunjay Jap(महामृत्युंजय जाप)",
    subtitle: "For health, protection and longevity",
    duration: "2 to 3 hours",
    bestFor: "Disease relief, mental peace, health",
  },
  {
    title: "Rudrabhishek(रुद्राभिषेक)",
    subtitle: "For Lord Shiva's blessings",
    duration: "90 to 120 minutes",
    bestFor: "Spiritual growth, stress relief",
  },
  {
    title: "Griha Pravesh Puja(गृह प्रवेश पूजा)",
    subtitle: "For positive energy in a new house",
    duration: "2 to 4 hours",
    bestFor: "New home entry",
  },
  {
    title: "Saraswati Puja(सरस्वती पूजा)",
    subtitle: "For education, intelligence, and knowledge",
    duration: "1.5 to 2 hours",
    bestFor: "Students, education, knowledge growth",
  },
  {
    title: "Ramayan / Ramcharitmanas Path & Kirtan(रामायण / रामचरितमानस पाठ एवं कीर्तन)",
    subtitle: "For peace, devotion, and harmony at home",
    duration: "2 to 3 hours",
    bestFor: "Family peace, mental comfort",
  },
  {
    title: "Complete Marriage Ceremony(संपूर्ण विवाह संस्कार)",
    subtitle: "Complete wedding including Tilak, Haldi, Barccha, and Vedic rituals",
    duration: "2 to 4 days",
    bestFor: "All wedding rituals from Tilak to marriage",
  },
  {
    title: "Janeu / Upanayan Sanskar(जनेऊ / उपनयन संस्कार)",
    subtitle: "Sacred yajna and rituals for children",
    duration: "3 to 4 hours",
    bestFor: "Religious education, disciplined life",
  },
  {
    title: "Bhoomi Puja(भूमि पूजा)",
    subtitle: "For auspicious beginning before construction",
    duration: "1.5 to 2 hours",
    bestFor: "Land purchase, house construction",
  },
  {
    title: "Annaprashan Sanskar(अन्नप्राशन संस्कार)",
    subtitle: "Child's first solid food ceremony",
    duration: "1 to 1.5 hours",
    bestFor: "Child's first rice/food ceremony",
  },
  {
    title: "Namkaran Sanskar(नामकरण संस्कार)",
    subtitle: "For naming a newborn baby",
    duration: "1 to 1.5 hours",
    bestFor: "Newborn child",
  },
  {
    title: "Mundan Sanskar(मुंडन संस्कार)",
    subtitle: "Child's first hair-cutting ceremony",
    duration: "1.5 to 2 hours",
    bestFor: "Child's health and growth",
  },
  {
    title: "Vastu Shanti Puja(वास्तु शांति पूजा)",
    subtitle: "To remove Vastu defects and bring positivity",
    duration: "3 to 4 hours",
    bestFor: "Home, office, land Vastu correction",
  },
  {
    title: "Lakshmi Puja(लक्ष्मी पूजा)",
    subtitle: "For wealth, prosperity, and abundance",
    duration: "1.5 to 2 hours",
    bestFor: "Financial growth, business progress",
  },
  {
    title: "Pitru Dosha Nivaran Puja(पितृ दोष निवारण पूजा)",
    subtitle: "For ancestors' peace and blessings",
    duration: "2 to 3 hours",
    bestFor: "Family obstacles, Pitru dosha",
  },
  {
    title: "Pind Daan(पिंड दान)",
    subtitle: "For ancestors’ peace and Pitru debt relief",
    duration: "2 to 3 hours",
    bestFor: "Pitru dosha remedy, family relief, child blessings",
  },
];


const JYOTISH: JyotishItem[] = [
  {
    title: "Kundli Reading",
    desc: "Personalized analysis for life direction and timing.",
  },
  {
    title: "Marriage Matching",
    desc: "Compatibility review with dosha guidance.",
  },
  {
    title: "Career Guidance",
    desc: "Best periods and remedies for growth.",
  },
  {
    title: "Health Guidance",
    desc: "Astro insights with practical options.",
  },
  {
    title: "Vastu Consultation",
    desc: "Home and office energy balance tips.",
  },
  {
    title: "Business Muhurat",
    desc: "Auspicious dates for launches.",
  },
];

const STEPS = [
  {
    title: "Share your details",
    desc: "Tell us the puja, city, and preferred date.",
  },
  {
    title: "Pandit assigned",
    desc: "We connect you with a verified acharya.",
  },
  {
    title: "Puja at your place",
    desc: "Samagri list and guided ritual support.",
  },
];

const TESTIMONIALS = [
  {
    name: "Aman S.",
    city: "Lucknow",
    quote: "Smooth booking and authentic rituals. Highly recommended.",
  },
  {
    name: "Neha K.",
    city: "Delhi",
    quote: "Pandit was on time and explained everything clearly.",
  },
  {
    name: "Rohit V.",
    city: "Mumbai",
    quote: "Great experience with samagri guidance and support.",
  },
];

const FAQS = [
  {
    q: "How do I book a puja?",
    a: "Share your details and we will confirm availability and pricing.",
  },
  {
    q: "Is samagri included?",
    a: "We provide a full samagri list and can arrange items on request.",
  },
  {
    q: "Do you provide services outside Kashi?",
    a: "Yes, we arrange pujas across major cities in India.",
  },
  {
    q: "Can I customize the puja?",
    a: "Yes, timing and ritual preferences can be adjusted.",
  },
];

function PujaCarousel({ items }: { items: PujaItem[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 2000);
    return () => clearInterval(id);
  }, [total]);

  const visibleDesktop = [
    items[index % total],
    items[(index + 1) % total],
    items[(index + 2) % total],
  ];
  const currentMobile = items[index % total];

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-6">
        {visibleDesktop.map((puja) => (
          <div
            key={puja.title}
            className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
          >
            {/* <h3 className="font-bold text-lg">{puja.title}</h3> */}
            <h3 className="font-bold text-lg">
  {puja.title.includes("(") ? (
    <>
      {puja.title.substring(0, puja.title.indexOf("("))}
      <span className="block text-base font-medium text-gray-600">
        {puja.title.substring(puja.title.indexOf("("))}
      </span>
    </>
  ) : (
    puja.title
  )}
</h3>


            <p className="text-sm text-gray-600 mt-2">{puja.subtitle}</p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <b>Duration:</b> {puja.duration}
              </p>
              <p>
                <b>Best for:</b> {puja.bestFor}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-block text-orange-600 font-semibold text-sm"
            >
              Book this puja
            </a>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div className="relative px-2">
          <div className="bg-white rounded-2xl border p-6 shadow">
            {/* <h3 className="font-bold text-lg">{currentMobile.title}</h3> */}
            <h3 className="font-bold text-lg">
  {currentMobile.title.includes("(") ? (
    <>
      {currentMobile.title.substring(
        0,
        currentMobile.title.indexOf("(")
      )}
      <span className="block text-base font-medium text-gray-600">
        {currentMobile.title.substring(
          currentMobile.title.indexOf("(")
        )}
      </span>
    </>
  ) : (
    currentMobile.title
  )}
</h3>

            <p className="text-sm text-gray-600 mt-2">
              {currentMobile.subtitle}
            </p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <b>Duration:</b> {currentMobile.duration}
              </p>
              <p>
                <b>Best for:</b> {currentMobile.bestFor}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-block text-orange-600 font-semibold text-sm"
            >
              Book this puja
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            className="absolute -left-1 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-200 rounded-full p-2 shadow"
            aria-label="Previous puja"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="absolute -right-1 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-200 rounded-full p-2 shadow"
            aria-label="Next puja"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <span
              key={`dot-${i}`}
              className={`h-2 w-2 rounded-full ${
                i === index % total ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function PujaTitle({ title }: { title: string }) {
  if (!title.includes("(")) {
    return <>{title}</>;
  }

  return (
    <>
      {title.substring(0, title.indexOf("("))}
      <span className="block text-base font-medium text-gray-600">
        {title.substring(title.indexOf("("))}
      </span>
    </>
  );
}

export default function Puja() {
  const [showAllPujas, setShowAllPujas] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <PujaNavigation lang="en" />

      {/* HERO */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-orange-600 font-semibold uppercase text-sm">
              Trusted Puja and Jyotish Services
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
              Book Kashi pandit for puja in any city
            </h1>
            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              Verified acharyas, clear pricing, and complete guidance for every
              ritual. We arrange puja and anusthan across India with support before,
              during, and after the ceremony.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#puja-list"
                className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold text-center"
              >
                Explore Puja List
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-orange-200 text-orange-700 rounded-full font-semibold text-center"
              >
                Talk to Expert
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-600" />
                Verified pandit team
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-600" />
                Transparent pricing
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-orange-600" />
                On-time ritual support
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Quick Jyotish Services</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "Kundli Reading",
                "Vastu Advice",
                "Marriage Matching",
                "Career Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-orange-50 p-4 text-center font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Same day consultation available in select cities.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-orange-700 font-semibold"
            >
              <PhoneCall size={16} />
              Call for guidance
            </a>
          </div>
        </div>
      </section>

      {/* PUJA LIST */}
      <section id="puja-list" className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-3xl font-bold">Popular Pujas</h2>
              <p className="text-gray-600 mt-2">
                Choose a puja and we will arrange an acharya for you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAllPujas((prev) => !prev)}
              className="text-sm font-semibold text-orange-600"
            >
              {showAllPujas ? "View Carousel" : "View All"}
            </button>
          </div>
          <div className="mt-10">
            {showAllPujas ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PUJAS.map((puja) => (
                  <div
                    key={puja.title}
                    className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
                  >
                    <h3 className="font-bold text-lg">
                      <PujaTitle title={puja.title} />
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {puja.subtitle}
                    </p>
                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                      <p>
                        <b>Duration:</b> {puja.duration}
                      </p>
                      <p>
                        <b>Best for:</b> {puja.bestFor}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="mt-5 inline-block text-orange-600 font-semibold text-sm"
                    >
                      Book this puja
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <PujaCarousel items={PUJAS} />
            )}
          </div>
        </div>
      </section>

      {/* JYOTISH */}
      <section id="jyotish" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">Jyotish Consultations</h2>
              <p className="text-gray-600 mt-2">
                Personalized guidance for life events, timing, and remedies.
              </p>
            </div>
            <a
              href="#contact"
              className="text-sm font-semibold text-orange-600"
            >
              Book a consultation
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JYOTISH.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">How it works</h2>
          <p className="text-gray-600 text-center mt-2">
            Simple steps to book your puja.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border p-6 text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-semibold mt-4 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Testimonials</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border p-6 shadow-sm"
              >
                <p className="text-gray-600 text-sm">"{t.quote}"</p>
                <div className="mt-4 font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">FAQs</h2>
          <div className="mt-8 grid gap-4">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-2xl border p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Contact for puja booking</h2>
            <p className="text-gray-600 mt-2">
              Call or message us to confirm availability and pricing.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:9838615376"
                className="px-6 py-3 bg-orange-600 text-white rounded-full text-center font-semibold"
              >
                Call 9838615376
              </a>
              <a
                href="https://wa.me/919838615376?text=Hello%20Nerds%20Travel,%20I%20want%20to%20book%20a%20puja."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-orange-300 text-orange-700 rounded-full text-center font-semibold"
              >
                WhatsApp for Puja
              </a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="font-semibold">What you will get</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>Verified acharyas and clear guidance</li>
              <li>Samagri list and optional arrangement</li>
              <li>Transparent pricing and timelines</li>
              <li>Support before and after the puja</li>
            </ul>
          </div>
        </div>
      </section>

      <PujaFooter />
    </div>
  );
}
