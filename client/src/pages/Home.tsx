// import { Navigation } from "@/components/Navigation";
// import { EnquiryForm } from "@/components/EnquiryForm";
// import { Footer } from "@/components/Footer";
// import { ArrowRight } from "lucide-react";
// import { Link } from "wouter";

// // Images
// import heroImg from "@assets/stock_images/varanasi-ayodhya-prayagraj-tour-banner.jpg";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background font-sans">
//       <Navigation />

// <section className="relative h-screen overflow-hidden bg-black">
//   {/* ===== Background Fill (SOFT blur) ===== */}
//   <div className="absolute inset-0">
//     <img
//       src={heroImg}
//       alt="Background fill"
//       className="w-full h-full object-cover scale-105 blur-md opacity-65"
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60" />
//   </div>

//   {/* ===== Main Image (NO CUT) ===== */}
//   <div className="absolute inset-0 flex items-center justify-center">
//     <img
//       src={heroImg}
//       alt="Uttar Pradesh Spiritual Tours"
//       // className="max-w-full max-h-full object-contain"
//       className="max-w-full max-h-full object-cover scale-110"
//     />
//   </div>

//   {/* ===== Content ===== */}
//   <div className="relative z-10 h-full flex items-center justify-center px-3">
//     <div
//       className="max-w-1xl text-center px-6 py-9 rounded-2xl bg-black/0 greydrop-blur-sm shadow-xl border border-white/10"
//     >
//       <span className="inline-block mb-5 px-5 py-2 rounded-full
//                        bg-white/50 text-[#F4A261] text-sm font-semibold uppercase tracking-wider">
//         Uttar Pradesh Spiritual Tours
//       </span>

//       <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5
//                      leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)]">
//         Explore the Spiritual Heart of India <br />
//         <span className="text-[#EDEDED]">With Nerds Travel</span>
//       </h1>

//       <p className="text-base md:text-lg text-[#F1F1F1] max-w-3xl mx-auto mb-8
//                     leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
//         From the timeless ghats of Kashi to the sacred land of Ayodhya and the holy
//         confluence at Prayagraj, Nerds Travel curates soulful spiritual journeys
//         rooted in devotion, culture, and local wisdom.
//       </p>

//       <button
//         onClick={() =>
//           document.getElementById("enquiry")
//             ?.scrollIntoView({ behavior: "smooth" })
//         }
//         className="px-9 py-4 bg-[#E36414] hover:bg-[#D3540F]
//                    text-white font-bold rounded-full text-lg
//                    shadow-xl transition-all duration-300 hover:scale-105">
//         Plan Your Spiritual Journey
//       </button>
//     </div>
//   </div>
// </section>


//       {/* SPIRITUAL LEGACY (CLICKABLE CARDS) */}
//       <section className="py-24 bg-white px-4">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl font-display font-bold mb-6">
//             The Spiritual Legacy of Uttar Pradesh
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Uttar Pradesh forms the sacred spiritual circuit of India — a land
//             where devotion, purification, and liberation have flowed for
//             thousands of years.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {/* KASHI */}
//           <Link href="/kashi">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Kashi (Varanasi)
//               </h3>
//               <p className="text-gray-700 text-lg">
//                 The city of Shiva — where the Ganga flows, souls seek moksha, and
//                 devotion lives in every ghat and temple.
//               </p>
//               <p className="mt-3 font-semibold text-gray-600">
//                 Moksha • Ganga Aarti • Shiva • Ghats
//               </p>
//             </div>
//           </Link>

//           {/* AYODHYA */}
//           <Link href="/ayodhya">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Ayodhya
//               </h3>
//               <p className="text-gray-700 text-lg">
//                 The birthplace of Lord Ram — a city of bhakti, maryada, and divine
//                 devotion rooted in Ramayana.
//               </p>
//               <p className="mt-3 font-semibold text-gray-600">
//                 Bhakti • Ram • Dharma
//               </p>
//             </div>
//           </Link>

//           {/* PRAYAGRAJ */}
//           <Link href="/prayagraj">
//             <div className="bg-orange-50 p-8 rounded-2xl text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
//               <h3 className="text-2xl font-bold mb-3 text-orange-700">
//                 Prayagraj
//               </h3>
//               <p className="text-gray-700 text-lg">
//                 The sacred confluence of Ganga, Yamuna, and Saraswati — a land of
//                 purification and spiritual awakening.
//               </p>
//               <p className="mt-3 font-semibold text-gray-600">
//                 Shuddhi • Sangam • Kumbh
//               </p>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* WHAT WE DO */}
//       <section className="py-24 bg-orange-50 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-display font-bold mb-6">
//             What We Do
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//             We design thoughtfully planned spiritual journeys across Uttar
//             Pradesh — connecting sacred cities into one meaningful experience.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               "Single-city and multi-city spiritual circuits",
//               "Guided temple visits, ghats, rituals & sacred sites",
//               "Comfort-focused planning for families and elders",
//             ].map((text, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow text-lg text-gray-700"
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ENQUIRY */}
//       <section id="enquiry" className="py-24 bg-orange-50 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-4xl font-display font-bold mb-6">
//               Plan Your Spiritual Journey
//             </h2>
//             <p className="text-lg text-gray-600">
//               Tell us which cities you wish to explore — Kashi, Ayodhya,
//               Prayagraj, or a complete spiritual circuit — and we’ll design a
//               journey that truly resonates with you.
//             </p>
//           </div>

//           <EnquiryForm />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

// Images
import heroImg from "@assets/stock_images/varanasi-ayodhya-prayagraj-tour-banner.jpg";

export default function Home() {
  useEffect(() => {
    const scrollToEnquiry = () => {
      if (window.location.hash !== "#enquiry") return;
      const target = document.getElementById("enquiry");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timeoutId = setTimeout(scrollToEnquiry, 0);
    window.addEventListener("hashchange", scrollToEnquiry);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToEnquiry);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen overflow-hidden bg-black"
      >
        {/* Background Fill */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Background fill"
            className="w-full h-full object-cover scale-105 blur-md opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60" />
        </div>

        {/* Main Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={heroImg}
            alt="Uttar Pradesh Spiritual Tours"
            className="max-w-full max-h-full object-cover scale-110"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-3">
          <div className="max-w-1xl text-center px-6 py-9 rounded-2xl bg-black/0 shadow-xl border border-white/10">
            <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/50 text-[#F4A261] text-sm font-semibold uppercase tracking-wider">
              Uttar Pradesh Spiritual Tours
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-Brown mb-5 leading-tight">
              Explore the Spiritual Heart of India <br />
              <span className="text-[#EDEDED] text-Brown">With Nerds Travel</span>
            </h1>

            <p className="text-base md:text-lg text-[#F1F1F1] max-w-3xl mx-auto mb-8 leading-relaxed">
              From the timeless ghats of Kashi to the sacred land of Ayodhya and the
              holy confluence at Prayagraj, Nerds Travel curates soulful spiritual
              journeys rooted in devotion, culture, and local wisdom.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("enquiry")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-9 py-4 bg-[#E36414] hover:bg-[#D3540F] text-white font-bold rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              Plan Your Spiritual Journey
            </button>
          </div>
        </div>
      </section>

      {/* ================= SPIRITUAL LEGACY ================= */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-6">
            The Spiritual Legacy of Uttar Pradesh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uttar Pradesh forms the sacred spiritual circuit of India — a land
            where devotion, purification, and liberation have flowed for
            thousands of years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  <Link href="/kashi">
    <div className="h-60 bg-orange-50 p-8 rounded-2xl text-center
                    cursor-pointer hover:shadow-xl hover:-translate-y-1
                    transition-all flex flex-col justify-between min-h-[280px]">
      <div>
        <h3 className="text-2xl font-bold mb-3 text-orange-700">
          Kashi (Varanasi)
        </h3>
        <p className="text-gray-700 text-lg">
          Kashi is the city of Shiva, sacred ghats and divine Ganga Aarti,
          where devotees seek peace and moksha.
        </p>
      </div>

      <p className="mt-6 font-semibold text-gray-600">
        Moksha • Ganga Aarti • Shiva • Ghats
      </p>
    </div>
  </Link>

  <Link href="/ayodhya">
    <div className="h-60 bg-orange-50 p-8 rounded-2xl text-center
                    cursor-pointer hover:shadow-xl hover:-translate-y-1
                    transition-all flex flex-col justify-between min-h-[280px]">
      <div>
        <h3 className="text-2xl font-bold mb-3 text-orange-700">
          Ayodhya
        </h3>
        <p className="text-gray-700 text-lg">
          Ayodhya, the birthplace of Lord Ram, represents bhakti and dharma.
          A sacred city rooted in devotion and righteousness.
        </p>
      </div>

      <p className="mt-6 font-semibold text-gray-600">
        Bhakti • Ram • Dharma
      </p>
    </div>
  </Link>

  <Link href="/prayagraj">
    <div className="h-60 bg-orange-50 p-8 rounded-2xl text-center
                    cursor-pointer hover:shadow-xl hover:-translate-y-1
                    transition-all flex flex-col justify-between min-h-[280px]">
      <div>
        <h3 className="text-2xl font-bold mb-3 text-orange-700">
          Prayagraj
        </h3>
        <p className="text-gray-700 text-lg">
          Prayagraj, the sacred confluence of rivers, symbolizes purification and spiritual awakening.
          Home to the holy Sangam and the legendary Kumbh Mela.
        </p>
      </div>

      <p className="mt-6 font-semibold text-gray-600">
        Shuddhi • Sangam • Kumbh
      </p>
    </div>
  </Link>
</div>

      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 bg-orange-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We design thoughtfully planned spiritual journeys across Uttar
            Pradesh.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Single-city and multi-city spiritual circuits",
              "Guided temple visits & rituals",
              "Comfort-focused planning for families",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow text-lg text-gray-700"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY ================= */}
      <section id="enquiry" className="py-24 bg-orange-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              Plan Your Spiritual Journey
            </h2>
            <p className="text-lg text-gray-600">
              Tell us which cities you wish to explore and we’ll design it for
              you.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
