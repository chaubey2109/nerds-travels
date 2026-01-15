import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 md:pt-20 pb-8 md:pb-10 rounded-t-[3rem] mt-20 relative overflow-hidden">
      {/* Abstract decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-orange-400">Nerds Travel</h2>
            <p className="text-gray-400 leading-relaxed">
              Experience the spiritual capital of India with guides who know every narrow lane, ancient temple, and hidden gem of Kashi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-300 text-gray-400">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Varanasi</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-orange-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#food" className="text-gray-400 hover:text-orange-400 transition-colors">Food & Culture</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Book a Trip</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Temple Tours</li>
              <li className="text-gray-400">Ghat Boat Rides</li>
              <li className="text-gray-400">Street Food Walks</li>
              <li className="text-gray-400">Cultural Photography</li>
              <li className="text-gray-400">Heritage Stays</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-orange-500 mt-1 shrink-0" size={20} />
                <span className="text-gray-400">Sundarpur, Lanka, Varanasi, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <a href="tel:8601079823" className="text-gray-400 hover:text-white transition-colors">8601079823</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a href="mailto:info@nerdstravel.in" className="text-gray-400 hover:text-white transition-colors">info@nerdstravel.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nerds Travel. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
