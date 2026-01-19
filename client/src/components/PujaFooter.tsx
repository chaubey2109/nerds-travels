import { FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

export function PujaFooter() {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-orange-400">Puja Services</h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Traditional rituals, verified acharyas, and complete support for
              your puja and jyotish needs across India.
            </p>
            <a
              href="https://wa.me/919838615376?text=Hello%20Acharya%20Ji,%20I%20want%20to%20book%20a%20puja%20from%20Nerds%20Travel."
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300"
            >
              <FaWhatsapp size={16} />
              WhatsApp for Puja
            </a>
          </div>

          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Top Pujas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Satyanarayan Puja</li>
              <li>Navagraha Shanti</li>
              <li>Mahamrityunjaya Jaap</li>
              <li>Griha Pravesh</li>
              <li>Rudrabhishek</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={28} className="text-orange-400 mt-0.5" />
                Chaubey Nivas, Vaishno Nagar, Chhitupur-Bhagwanpur, Lanka, Varanasi-221005, Uttar Pradesh, India
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <a
                  href="tel:9838615376"
                  className="hover:text-white transition"
                >
                  9838615376
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <a
                  href="mailto:info@nerdsstravel.in"
                  className="hover:text-white transition"
                >
                  info@nerdsstravel.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Nerds Travel | Puja. All rights reserved.</span>
          <span>Serving spiritual needs with care and authenticity.</span>
        </div>
      </div>
    </footer>
  );
}
