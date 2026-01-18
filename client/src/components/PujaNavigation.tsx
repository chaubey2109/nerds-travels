import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type NavItem = {
  name: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Puja List", href: "#puja-list" },
  { name: "Process", href: "#process" },
  { name: "Consult", href: "#enquiry" },
];

export function PujaNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/puja/"
              className="font-bold text-lg text-orange-600"
            >
            <span className="text-orange-900">Book Your Puja</span>
          </Link>


          <div className="hidden md:flex items-center gap-6 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/"
              className="px-4 py-2 rounded-full bg-orange-600 text-white font-semibold"
            >
              Back to Travel
            </a>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="puja-mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="puja-mobile-menu"
          className="md:hidden border-t border-orange-100 bg-white"
        >
          <div className="px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/"
              className="block text-orange-600 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Back to Travel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
