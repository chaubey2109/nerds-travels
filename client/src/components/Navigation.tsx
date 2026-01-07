import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Kashi", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Food & Culture", href: "#food" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer group">
              <span className={`text-2xl font-display font-bold ${scrolled ? 'text-primary' : 'text-white'} group-hover:text-orange-300 transition-colors`}>
                Nerd Travels
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${
                  scrolled ? "text-gray-800" : "text-white/90"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className={`bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-lg hover:shadow-orange-500/25 transition-all ${!scrolled && 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30'}`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-xl border-b border-orange-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-primary w-full text-center hover:bg-orange-50/50 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 w-full px-4">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-orange-500/20"
              >
                Book Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
