// import { Link } from "wouter";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Food & Culture", href: "#food" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const scrollToSection = (id: string) => {
//     setIsOpen(false);
//     if (id === "/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     const element = document.querySelector(id);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-md shadow-md py-3"
//           : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="cursor-pointer group">
//             <span
//               className={`text-2xl font-display font-bold ${
//                 scrolled ? "text-primary" : "text-white"
//               } group-hover:text-orange-300 transition-colors`}
//             >
//               Nerds Travel
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className={`text-sm font-medium transition-colors hover:text-orange-400 ${
//                   scrolled ? "text-gray-800" : "text-white/90"
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}

//             {/* 🌍 EXPLORE DROPDOWN */}
//             <div className="relative group">
//               <div
//                 className={`flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors hover:text-orange-400 ${
//                   scrolled ? "text-gray-800" : "text-white/90"
//                 }`}
//               >
//                 Explore
//                 <ChevronDown
//                   size={16}
//                   className="transition-transform duration-300 group-hover:rotate-180"
//                 />
//               </div>

//               <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
//                 <div className="bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
//                   {[
//                     ["Kashi", "/kashi"],
//                     ["Prayagraj", "/prayagraj"],
//                     ["Ayodhya", "/ayodhya"],
//                     ["Mathura – Vrindavan", "/mathura-vrindavan"],
//                   ].map(([name, href]) => (
//                     <Link
//                       key={name}
//                       href={href}
//                       className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
//                     >
//                       {name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Admin */}
//             <Link
//               href="/admin"
//               className={`text-sm font-semibold transition-colors ${
//                 scrolled ? "text-orange-600" : "text-white"
//               } hover:text-orange-400`}
//             >
//               Admin
//             </Link>

//             <Button
//               onClick={() => scrollToSection("#contact")}
//               className={`bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-lg hover:shadow-orange-500/25 transition-all ${
//                 !scrolled &&
//                 "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30"
//               }`}
//             >
//               Book Now
//             </Button>
//           </div>

//           {/* Mobile button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`md:hidden p-2 rounded-md ${
//               scrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl">
//           <div className="px-6 py-6 space-y-2 text-center">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => scrollToSection(link.href)}
//                 className="block w-full py-3 text-base font-medium text-gray-800 hover:text-primary hover:bg-orange-50 rounded-lg"
//               >
//                 {link.name}
//               </button>
//             ))}

//             {/* Mobile Explore */}
//             <div className="pt-4 border-t border-orange-100">
//               <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
//                 Explore
//               </p>
//               {[
//                 ["Kashi", "/kashi"],
//                 ["Prayagraj", "/prayagraj"],
//                 ["Ayodhya", "/ayodhya"],
//                 ["Mathura – Vrindavan", "/mathura-vrindavan"],
//               ].map(([name, href]) => (
//                 <Link
//                   key={name}
//                   href={href}
//                   onClick={() => setIsOpen(false)}
//                   className="block py-3 text-base text-gray-800 hover:bg-orange-50 rounded-lg"
//                 >
//                   {name}
//                 </Link>
//               ))}
//             </div>

//             <Link
//               href="/admin"
//               onClick={() => setIsOpen(false)}
//               className="block py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 rounded-lg"
//             >
//               Admin
//             </Link>

//             <Button
//               onClick={() => scrollToSection("#contact")}
//               className="w-full mt-4 bg-primary text-white"
//             >
//               Book Your Trip
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type NavLink = {
  name: string;
  id: string;
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [exploreOpen, setExploreOpen] = useState<boolean>(false);

  const exploreRef = useRef<HTMLDivElement | null>(null);

  /* ===== Scroll Background ===== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Outside Click Close (Explore) ===== */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(e.target as Node)
      ) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "Gallery", id: "gallery" },
    { name: "Food & Culture", id: "food" },
    { name: "Contact", id: "enquiry" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl shadow-lg py-3"
          : "bg-black/20 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <span className="text-2xl font-bold text-white cursor-pointer">
              Nerds Travel
            </span>
          </Link>

          {/* ===== DESKTOP ===== */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-white/80 hover:text-orange-400 transition"
              >
                {link.name}
              </button>
            ))}

            {/* ===== EXPLORE CLICK DROPDOWN ===== */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm text-white/80 hover:text-orange-400 transition"
              >
                Explore
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    exploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {exploreOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {[
                      ["Kashi", "/kashi"],
                      ["Ayodhya", "/ayodhya"],
                      ["Prayagraj", "/prayagraj"],
                      ["Mathura – Vrindavan", "/mathura-vrindavan"],
                    ].map(([name, href]) => (
                      <Link
                        key={name}
                        href={href}
                        onClick={() => setExploreOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-50"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ADMIN */}
            <Link
              href="/admin"
              className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition"
            >
              Admin
            </Link>

            <Button
              onClick={() => scrollToSection("enquiry")}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-lg"
            >
              Book Now
            </Button>
          </div>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-3 text-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full py-2 text-white/90"
              >
                {link.name}
              </button>
            ))}

            <div className="border-t border-white/10 pt-3">
              {[
                ["Kashi", "/kashi"],
                ["Ayodhya", "/ayodhya"],
                ["Prayagraj", "/prayagraj"],
                ["Mathura – Vrindavan", "/mathura-vrindavan"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white/80"
                >
                  {name}
                </Link>
              ))}
            </div>

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-orange-400 font-semibold"
            >
              Admin
            </Link>

            <Button
              onClick={() => scrollToSection("enquiry")}
              className="w-full mt-4 bg-orange-500 text-white"
            >
              Book Your Trip
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
