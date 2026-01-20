import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Lang = "hi" | "en";

type NavItem = {
  name: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Puja List", href: "#puja-list" },
  { name: "Jyotish", href: "#jyotish" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function PujaNavigation({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/puja"
            className="flex items-center gap-2 font-extrabold text-orange-600 tracking-wide"
          >
            <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">
              NT
            </span>
            <span className="text-base sm:text-lg">
              {lang === "hi" ? "Vedic Rituals " : "Vedic Rituals"}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-orange-600 transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/"
              className="rounded-full border border-orange-200 px-4 py-2 text-orange-700 hover:bg-orange-50 transition"
            >
              {lang === "hi" ? "Back to Home" : "Back to Home"}
            </a>
          </div>

          <button
            className="md:hidden rounded-md border border-orange-200 p-2 text-orange-700"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="puja-nav-mobile"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="puja-nav-mobile" className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-700 hover:text-orange-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block font-semibold text-orange-700"
            >
              {lang === "hi" ? "Back to Home" : "Back to Home"}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
