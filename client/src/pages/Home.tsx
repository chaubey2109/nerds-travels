// import { useEffect } from "react";
// import { Navigation } from "@/components/Navigation";
// import { EnquiryForm } from "@/components/EnquiryForm";
// import { Footer } from "@/components/Footer";
// import { Link } from "wouter";

// // Images
// import heroImg from "@assets/stock_images/varanasi-ayodhya-prayagraj-tour-banner.jpg";

// export default function Home() {
//   useEffect(() => {
//     const scrollToEnquiry = () => {
//       if (window.location.hash !== "#enquiry") return;
//       const target = document.getElementById("enquiry");
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     const timeoutId = setTimeout(scrollToEnquiry, 0);
//     window.addEventListener("hashchange", scrollToEnquiry);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("hashchange", scrollToEnquiry);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-background font-sans">
//       <Navigation />

//       {/* ================= HERO ================= */}
//       <section
//         id="home"
//         className="relative h-screen overflow-hidden bg-black"
//       >
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src={heroImg}
//             alt="Spiritual Tours"
//             className="w-full h-full object-cover scale-105  opacity-150"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex items-center justify-center px-4">
//           <div className="max-w-4xl text-center px-6 py-10 rounded-2xl border border-white/10">
//             <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/40 text-orange-400 text-sm font-semibold uppercase">
//               Uttar Pradesh Spiritual Tours
//             </span>

//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//               Explore the Spiritual Heart of India <br />
//               <span className="text-gray-200">with Nerds Travel</span>
//             </h1>

//             <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
//               From Kashi to Ayodhya and Prayagraj, we design soulful spiritual
//               journeys rooted in devotion, culture, and comfort.
//             </p>

//             <button
//               onClick={() =>
//                 document
//                   .getElementById("enquiry")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="px-9 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full text-lg shadow-xl transition"
//             >
//               Plan Your Spiritual Journey
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= GALLERY ================= */}
//       <section id="gallery" className="py-16 md:py-24 bg-white px-4">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Spiritual Destinations
//           </h2>
//           <p className="text-xl text-gray-600">
//             Explore the sacred cities of Uttar Pradesh
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <Link href="/kashi">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-xl transition cursor-pointer">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Kashi (Varanasi)
//               </h3>
//               <p className="text-gray-700">
//                 The city of Shiva, sacred ghats and divine Ganga Aarti.
//               </p>
//             </div>
//           </Link>

//           <Link href="/ayodhya">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-xl transition cursor-pointer">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Ayodhya
//               </h3>
//               <p className="text-gray-700">
//                 Birthplace of Lord Ram, symbol of bhakti and dharma.
//               </p>
//             </div>
//           </Link>

//           <Link href="/prayagraj">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-xl transition cursor-pointer">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Prayagraj
//               </h3>
//               <p className="text-gray-700">
//                 Sacred Sangam and land of Kumbh Mela.
//               </p>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* ================= WHY US ================= */}
//       <section id="why-us" className="py-16 md:py-24 bg-orange-50 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12">
//             Why Choose Nerds Travel
//           </h2>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               "Local spiritual guides & pandits",
//               "Senior-friendly planning",
//               "Custom itineraries",
//               "Transparent pricing & support",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow text-base sm:text-lg text-gray-700"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= EXPERIENCES ================= */}
//       <section id="experiences" className="py-16 md:py-24 bg-white px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Spiritual Experiences
//           </h2>
//           <p className="text-xl text-gray-600 mb-12">
//             Handcrafted experiences for peace and devotion
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "Ganga Aarti & temple rituals",
//               "Sangam Snan & holy baths",
//               "Guided darshan & satsang",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-orange-50 p-6 rounded-2xl shadow text-base sm:text-lg text-gray-700"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PACKAGES ================= */}
//       <section id="packages" className="py-16 md:py-24 bg-orange-50 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//             Popular Spiritual Packages
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "Kashi Darshan – 2D / 3N",
//               "Kashi – Ayodhya Circuit",
//               "Complete UP Spiritual Circuit",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow text-base sm:text-lg text-gray-700"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= ENQUIRY ================= */}
//       <section id="enquiry" className="py-16 md:py-24 bg-white px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//               Plan Your Spiritual Journey
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600">
//               Share your preferred destinations and we’ll design the perfect
//               spiritual trip for you.
//             </p>
//           </div>

//           <EnquiryForm />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { Navigation } from "@/components/Navigation";
// import { EnquiryForm } from "@/components/EnquiryForm";
// import { Footer } from "@/components/Footer";
// import { Link } from "wouter";

// /* ================= IMAGES (LOCAL) ================= */
// import heroImg from "@assets/stock_images/varanasi-ayodhya-prayagraj-tour-banner.jpg";

// import kashiImg from "@assets/stock_images/main_kashi.jpg";
// import ayodhyaImg from "@assets/stock_images/main_ayodhya.jpg";
// import prayagrajImg from "@assets/stock_images/main_prayagraj.jpg";
// import keralaImg from "@assets/stock_images/main_kerala.jpg";
// import goaImg from "@assets/stock_images/main_goa.jpg";
// import kashmirImg from "@assets/stock_images/main_kashmir.jpg";
// import jaipurImg from "@assets/stock_images/main_jaipur.jpg";
// import manaliImg from "@assets/stock_images/main_manali.jpg";

// /* ================= WHATSAPP PREFILLED MESSAGE ================= */
// const WHATSAPP_LINK =
//   "https://wa.me/918601079823?text=" +
//   encodeURIComponent(
//     "Hello Nerds Travel 👋\n\n" +
//       "I’m interested in a tour package.\n\n" +
//       "Please help me with a complete plan including:\n" +
//       "Hotel 🏨 | Meals 🍽️ | Travel 🚗 | Sightseeing 📍\n\n" +
//       "Trip details:\n" +
//       "• Destination / City:\n" +
//       "• Trip Type (Family / Couple / Group):\n" +
//       "• Number of Days:\n" +
//       "• Number of Travellers:\n" +
//       "• Budget Range:\n" +
//       "• Travel Month:\n" +
//       "• Pickup City:\n\n" +
//       "Thanks!"
//   );

// /* ================= TYPEWRITER HOOK ================= */
// function useTypewriter(words: string[], speed = 55, pause = 1200) {
//   const [wordIndex, setWordIndex] = useState(0);
//   const [text, setText] = useState("");
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const current = words[wordIndex];

//     // typing
//     if (!deleting && text.length < current.length) {
//       const t = setTimeout(
//         () => setText(current.slice(0, text.length + 1)),
//         speed
//       );
//       return () => clearTimeout(t);
//     }

//     // pause after full word
//     if (!deleting && text.length === current.length) {
//       const t = setTimeout(() => setDeleting(true), pause);
//       return () => clearTimeout(t);
//     }

//     // deleting
//     if (deleting && text.length > 0) {
//       const t = setTimeout(
//         () => setText(current.slice(0, text.length - 1)),
//         Math.max(25, speed - 15)
//       );
//       return () => clearTimeout(t);
//     }

//     // next word
//     if (deleting && text.length === 0) {
//       setDeleting(false);
//       setWordIndex((i) => (i + 1) % words.length);
//     }
//   }, [words, wordIndex, text, deleting, speed, pause]);

//   return text;
// }

// /* ================= CITY DATA ================= */
// type CityCard = {
//   title: string;
//   subtitle: string;
//   highlights: string[];
//   image: string;
//   href: string;
// };

// const CITIES: CityCard[] = [
//   {
//     title: "Kashi (Varanasi)",
//     subtitle: "Ghats • Ganga Aarti • Temples",
//     highlights: ["Ganga Aarti", "Sunrise boat ride", "Kashi Vishwanath"],
//     image: kashiImg,
//     href: "/kashi",
//   },
//   {
//     title: "Ayodhya",
//     subtitle: "Shri Ram Mandir • Sarayu",
//     highlights: ["Ram Mandir Darshan", "Sarayu Aarti", "Spiritual circuit"],
//     image: ayodhyaImg,
//     href: "/ayodhya",
//   },
//   {
//     title: "Prayagraj",
//     subtitle: "Triveni Sangam • Kumbh",
//     highlights: ["Sangam snan", "Akshayavat", "Kumbh sites"],
//     image: prayagrajImg,
//     href: "/prayagraj",
//   },
//   {
//     title: "Kerala",
//     subtitle: "Backwaters • Munnar • Thekkady",
//     highlights: ["Houseboat stay", "Tea gardens", "Nature views"],
//     image: keralaImg,
//     href: "/kerala",
//   },
//   {
//     title: "Goa",
//     subtitle: "Beaches • Nightlife",
//     highlights: ["Beach resort", "Water sports", "North & South Goa"],
//     image: goaImg,
//     href: "/goa",
//   },
//   {
//     title: "Kashmir",
//     subtitle: "Srinagar • Gulmarg",
//     highlights: ["Shikara ride", "Snow activities", "Valley sightseeing"],
//     image: kashmirImg,
//     href: "/kashmir",
//   },
//   {
//     title: "Jaipur",
//     subtitle: "Palaces • Forts",
//     highlights: ["Amber Fort", "City Palace", "Local markets"],
//     image: jaipurImg,
//     href: "/jaipur",
//   },
//   {
//     title: "Manali",
//     subtitle: "Snow • Mountains",
//     highlights: ["Solang Valley", "Rohtang (seasonal)", "Cafes"],
//     image: manaliImg,
//     href: "/manali",
//   },
// ];

// /* ================= CAROUSEL (DESKTOP = EXACT 3 CARDS) ================= */
// function CityCarousel({ cities }: { cities: CityCard[] }) {
//   const [index, setIndex] = useState(0);
//   const total = cities.length;

//   const next = () => setIndex((i) => (i + 1) % total);
//   const prev = () => setIndex((i) => (i - 1 + total) % total);

//   useEffect(() => {
//     const id = setInterval(next, 4000);
//     return () => clearInterval(id);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const visibleDesktop = [
//     cities[index % total],
//     cities[(index + 1) % total],
//     cities[(index + 2) % total],
//   ];

//   return (
//     <div className="relative">
//       {/* Buttons */}
//       <button
//         onClick={prev}
//         className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2
//                    h-10 w-10 rounded-full bg-white shadow border items-center justify-center"
//         aria-label="Previous"
//         title="Previous"
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2
//                    h-10 w-10 rounded-full bg-white shadow border items-center justify-center"
//         aria-label="Next"
//         title="Next"
//       >
//         ›
//       </button>

//       {/* Desktop: 3 cards */}
//       <div className="hidden md:grid grid-cols-3 gap-6">
//         {visibleDesktop.map((c) => (
//           <Link key={c.title} href={c.href}>
//             <div
//               className="cursor-pointer overflow-hidden rounded-2xl border bg-white
//                          hover:shadow-xl hover:-translate-y-1 transition-all"
//               style={{ height: 420 }}
//             >
//               {/* Image */}
//               <div className="relative h-44">
//                 <img
//                   src={c.image}
//                   alt={c.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-3 left-4">
//                   <h3 className="text-xl font-bold text-white">{c.title}</h3>
//                   <p className="text-sm text-white/90">{c.subtitle}</p>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 bg-orange-50 h-[calc(420px-176px)] flex flex-col">
//                 <p className="font-semibold text-orange-700 mb-3">
//                   Best Highlights
//                 </p>
//                 <ul className="text-gray-700 space-y-1">
//                   {c.highlights.map((h) => (
//                     <li key={h}>• {h}</li>
//                   ))}
//                 </ul>
//                 <span className="mt-auto text-sm font-semibold text-orange-700">
//                   View Details →
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Mobile note */}
//       <p className="md:hidden text-center mt-6 text-sm text-gray-500">
//         Desktop pe 3 cards show hote hain. (Mobile carousel next update me kar
//         denge)
//       </p>
//     </div>
//   );
// }

// /* ================= HOME ================= */
// export default function Home() {
//   const slogans = [
//     "Hotels • Meals • Travel — All Included",
//     "Custom Packages Across India",
//     "Family • Couple • Group Tours",
//     "Best Deals • Best Support",
//   ];
//   const typingText = useTypewriter(slogans, 55, 1200);

//   return (
//     <div className="min-h-screen bg-background font-sans">
//       <Navigation />

//       {/* HERO (Typing Slogan + Soft Animations) */}
//       <section className="relative h-screen overflow-hidden bg-black">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src={heroImg}
//             alt="India Tours"
//             className="w-full h-full object-cover scale-105 opacity-80"
//           />
//           <div className="absolute inset-0 bg-black/55" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />
//         </div>

//         {/* Soft glow blobs */}
//         <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl animate-pulse" />
//         <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl animate-pulse" />

//         {/* Content */}
//         <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//           <div className="max-w-4xl px-6 py-10 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-xl">
//             <span className="inline-block text-orange-300 text-xl italic font-semibold tracking-wide">
//               Nerds Travel — Where Every Journey Becomes a Story
//             </span>

//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//               Travel Smarter. <span className="text-orange-300">Pay Less.</span>
//             </h1>

//             {/* Typing slogan */}
//             <div className="text-lg md:text-2xl font-semibold text-gray-100 mb-8">
//               <span className="text-orange-200">{"< "}</span>
//               <span className="inline-block min-w-[12ch]">{typingText}</span>
//               <span className="inline-block w-[2px] h-6 md:h-7 bg-orange-300 align-[-4px] ml-1 animate-pulse" />
//               <span className="text-orange-200">{" />"}</span>
//             </div>

//             <p className="text-base md:text-lg text-gray-200 text-sm sm:text-base mb-8">
//               Complete travel packages with verified stays, meals, local
//               transfers and sightseeing—across India.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#enquiry"
//                 className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-[1.02]"
//               >
//                 Get Custom Quote
//               </a>
//               <a
//                 href={WHATSAPP_LINK}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold shadow-xl transition-all duration-300 hover:scale-[1.02]"
//               >
//                 WhatsApp Now
//               </a>
//             </div>

//             {/* Trust line */}
//             <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
//               <span>✅ Verified Hotels</span>
//               <span>✅ Meals Included</span>
//               <span>✅ Cab + Sightseeing</span>
//               <span>✅ 24×7 Support</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CITIES */}
//       <section className="py-16 md:py-24 bg-white px-4">
//         <div className="max-w-6xl mx-auto text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Popular Cities & Destinations
//           </h2>
//           <p className="text-xl text-gray-600">
//             Desktop pe sirf 3 cards, buttons se aage-piche
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <CityCarousel cities={CITIES} />
//         </div>
//       </section>

//       {/* ENQUIRY */}
//       <section id="enquiry" className="py-16 md:py-24 bg-orange-50 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//               Plan Your Perfect Trip
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600">
//               Tell us your travel plan — we’ll handle everything.
//             </p>
//           </div>
//           <EnquiryForm />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= IMAGES ================= */
import heroImg from "@assets/stock_images/travel-front.jpg";

import kashiImg from "@assets/stock_images/main_kashi.jpg";
import ayodhyaImg from "@assets/stock_images/main_ayodhya.jpg";
import prayagrajImg from "@assets/stock_images/main_prayagraj.jpg";
import keralaImg from "@assets/stock_images/main_kerala.jpg";
import goaImg from "@assets/stock_images/main_goa.jpg";
import kashmirImg from "@assets/stock_images/main_kashmir.jpg";
import jaipurImg from "@assets/stock_images/main_jaipur.jpg";
import manaliImg from "@assets/stock_images/main_manali.jpg";

/* ================= WHATSAPP ================= */
const WHATSAPP_LINK =
  "https://wa.me/918601079823?text=" +
  encodeURIComponent(
    "Hello Nerds Travel 👋\n\nI want a complete travel package.\nPlease guide me."
  );

/* ================= TYPEWRITER ================= */
function useTypewriter(words: string[], speed = 55, pause = 1200) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];

    if (!del && text.length < word.length) {
      const t = setTimeout(() => setText(word.slice(0, text.length + 1)), speed);
      return () => clearTimeout(t);
    }
    if (!del && text.length === word.length) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text.length > 0) {
      const t = setTimeout(
        () => setText(word.slice(0, text.length - 1)),
        speed - 20
      );
      return () => clearTimeout(t);
    }
    if (del && text.length === 0) {
      setDel(false);
      setI((p) => (p + 1) % words.length);
    }
  }, [text, del, i, words, speed, pause]);

  return text;
}

/* ================= DATA ================= */
type CityCard = {
  title: string;
  subtitle: string;
  highlights: string[];
  image: string;
  href: string;
};

const CITIES: CityCard[] = [
  {
    title: "Kashi (Varanasi)",
    subtitle: "Ghats • Ganga Aarti • Temples",
    highlights: ["Ganga Aarti", "Boat Ride", "Kashi Vishwanath"],
    image: kashiImg,
    href: "/kashi",
  },
  {
    title: "Ayodhya",
    subtitle: "Ram Mandir • Sarayu",
    highlights: ["Ram Mandir Darshan", "Sarayu Aarti", "Spiritual Tour"],
    image: ayodhyaImg,
    href: "/ayodhya",
  },
  {
    title: "Prayagraj",
    subtitle: "Triveni Sangam • Kumbh",
    highlights: ["Sangam Snan", "Akshayvat", "Kumbh Area"],
    image: prayagrajImg,
    href: "/prayagraj",
  },
  {
    title: "Kerala",
    subtitle: "Backwaters • Hills",
    highlights: ["Houseboat", "Munnar", "Nature"],
    image: keralaImg,
    href: "/Kerala",
  },
  {
    title: "Goa",
    subtitle: "Beaches • Nightlife",
    highlights: ["Resorts", "Water Sports", "Clubs"],
    image: goaImg,
    href: "/goa",
  },
  {
    title: "Kashmir",
    subtitle: "Snow • Valleys",
    highlights: ["Shikara", "Gulmarg", "Sonmarg"],
    image: kashmirImg,
    href: "/kashmir",
  },
  {
    title: "Jaipur",
    subtitle: "Forts • Palaces",
    highlights: ["Amber Fort", "City Palace", "Markets"],
    image: jaipurImg,
    href: "/jaipur",
  },
  {
    title: "Manali",
    subtitle: "Mountains • Snow",
    highlights: ["Solang Valley", "Rohtang", "Old Manali"],
    image: manaliImg,
    href: "/manali",
  },
];

/* ================= CAROUSEL ================= */
function CityCarousel({ cities }: { cities: CityCard[] }) {
  const [index, setIndex] = useState(0);
  const total = cities.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, []);

  const visibleDesktop = [
    cities[index % total],
    cities[(index + 1) % total],
    cities[(index + 2) % total],
  ];
  const currentMobile = cities[index % total];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {visibleDesktop.map((c) => (
          <Link key={c.title} href={c.href}>
            <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition h-[380px] lg:h-[420px] flex flex-col">
              <div className="h-44 relative">
                <img src={c.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <p className="text-sm">{c.subtitle}</p>
                </div>
              </div>
              <div className="p-5 bg-orange-50 flex-1 flex flex-col overflow-hidden">
                <p className="font-semibold text-orange-700 mb-2">
                  Best Highlights
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {c.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <div className="flex justify-end mt-12">
                  <p className="text-sm text-orange-700 font-semibold">
                    View Details →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="relative px-2">
          <Link href={currentMobile.href}>
            <div className="bg-white rounded-2xl shadow flex flex-col">
              <div className="h-48 relative">
                <img
                  src={currentMobile.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-3 left-4 rounded-lg bg-black/40 px-3 py-2 text-white">
                  <h3 className="font-bold text-white drop-shadow">
                    {currentMobile.title}
                  </h3>
                  <p className="text-sm text-white/90 drop-shadow">
                    {currentMobile.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-black/70">
                <ul className="text-sm text-white/90 space-y-1">
                  {currentMobile.highlights.map((h) => (
                    <li key={h}>•{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 rounded-full p-2 shadow"
            aria-label="Previous city"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 rounded-full p-2 shadow"
            aria-label="Next city"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {cities.map((_, i) => (
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

/* ================= HOME ================= */
export default function Home() {
  const slogans = [
    "Hotels • Meals • Cab • Sightseeing",
    "Custom Travel Packages Across India",
    "Spiritual • Leisure • Family Tours",
    "Trusted Travel Partner",
  ];
  const typing = useTypewriter(slogans);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      if (hash === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = window.setTimeout(scrollToHash, 0);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[80vh] bg-black">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-[100%] object-[center_50%] "
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl bg-grey/10 backdrop p-6 sm:p-8 md:p-10 rounded-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-4xl text-italic font-bold mb-4 text-white">
              Nerds Travel, Where Every Journey Becomes a Story
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6">{typing}</p>
            <p className="text-gray-200 text-sm sm:text-base mb-8">
              Nerds Travel offers complete tour solutions including hotels,
              meals, transportation, sightseeing and expert guidance for
              spiritual, leisure and cultural destinations across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#enquiry"
                className="w-full sm:w-auto px-8 py-3 bg-orange-600 rounded-full font-semibold"
              >
                Get Custom Quote
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="w-full sm:w-auto px-8 py-3 bg-green-600 rounded-full font-semibold"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 md:py-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Popular Cities & Destinations
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-10 md:mb-12">
          Spiritual journeys, hill stations, beach holidays & cultural tours
        </p>
        <div className="max-w-6xl mx-auto">
          <CityCarousel cities={CITIES} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Travel Services</h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Complete travel assistance from planning to journey completion
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            ["🛕", "Temple Darshan"],
            ["🧭", "Tour Guide"],
            ["🚢", "Cruise Booking"],
            ["💸", "Budget Packages"],
            ["🏨", "Hotel Reservation"],
            ["🚗", "Transport Booking"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="bg-orange-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Nerds Travel</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              Nerds Travel is a trusted Indian travel agency specializing in
              spiritual tours, family holidays, leisure trips and customized
              travel packages. We focus on comfort, safety, affordability and
              customer satisfaction.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              From sacred destinations like Varanasi, Ayodhya and Prayagraj to
              scenic locations like Kashmir, Kerala, Manali and Goa, we design
              memorable journeys for travellers of all age groups.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow">
            <ul className="space-y-4 text-base sm:text-lg text-gray-700">
              <li>✅ Peace of Mind Travel</li>
              <li>✅ Transparent Pricing</li>
              <li>✅ Trusted Services</li>
              <li>✅ 100% Satisfaction Focus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12">
            Have Questions? We’ve Got Answers
          </h2>

          <div className="space-y-6">
            {[
              [
                "Why choose Nerds Travel?",
                "We offer reliable services, expert planning, verified hotels and end-to-end support.",
              ],
              [
                "Can I customize my trip?",
                "Yes, all packages are fully customizable.",
              ],
              [
                "Is it suitable for senior citizens?",
                "Absolutely. We design comfortable and safe itineraries.",
              ],
              [
                "Do you provide spiritual tours?",
                "Yes, we specialize in spiritual destinations across India.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="py-16 md:py-24 bg-orange-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Plan Your Perfect Trip
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Share your travel plan and get a customized package designed just
              for you.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
