import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { ArrowRight, Utensils, Camera, Map, Flame } from "lucide-react";

// Images imports (Static imports as per instruction)
import heroImg from "@assets/stock_images/varanasi_kashi_ghats_71026982.jpg";
import ghatsDay from "@assets/stock_images/varanasi_kashi_ghats_9830dd20.jpg";
import ghatsEve from "@assets/stock_images/varanasi_kashi_ghats_13c093ee.jpg";
import food1 from "@assets/stock_images/varanasi_street_food_6c29f242.jpg";
import food2 from "@assets/stock_images/varanasi_street_food_058f4f9a.jpg";
import street1 from "@assets/stock_images/old_varanasi_narrow__8000c0b2.jpg";
import street2 from "@assets/stock_images/old_varanasi_narrow__cec793b7.jpg";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-200">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Ghats of Varanasi" 
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-orange-500/80 backdrop-blur-sm text-white text-sm font-bold tracking-wider mb-6 border border-white/20 uppercase">
              Welcome to the City of Light
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-xl">
              Explore the Mystical <br/> <span className="text-orange-400">Kashi</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Experience the spiritual heart of India with Nerd Travels. Where ancient traditions meet timeless devotion on the banks of the Ganges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full text-lg shadow-lg shadow-orange-900/40 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Plan Your Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-full text-lg transition-all hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-sm font-medium mb-2 uppercase tracking-widest text-xs">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* ABOUT KASHI: OLD VS NEW */}
      <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">A Tale of Two Cities</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Varanasi is a city where time stands still yet moves forward. Witness the beautiful contrast between the ancient spiritual capital and the evolving modern city.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Old Kashi */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="image-hover-zoom aspect-[4/3] shadow-2xl shadow-orange-900/20 rounded-2xl relative group">
                <img src={street1} alt="Old Varanasi Streets" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-display font-bold mb-2">Old Kashi</h3>
                  <p className="text-white/80">Narrow Galis, Ancient Temples & Tradition</p>
                </div>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <p className="text-gray-700 leading-relaxed">
                  Get lost in the labyrinth of narrow alleys (galis) where life has continued unchanged for centuries. Smell the incense, hear the temple bells, and witness a civilization that breathes spirituality.
                </p>
              </div>
            </motion.div>

            {/* New Kashi */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6 lg:mt-24"
            >
               <div className="image-hover-zoom aspect-[4/3] shadow-2xl shadow-blue-900/10 rounded-2xl relative group">
                <img src={street2} alt="Modern Varanasi" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-display font-bold mb-2">New Perspectives</h3>
                  <p className="text-white/80">Modern Corridor, Clean Ghats & Comfort</p>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  Experience the transformation with the new Kashi Vishwanath Corridor, cleaner ghats, and improved infrastructure that makes your spiritual journey comfortable without losing its soul.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Visual Journey</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2">Glimpses of Divinity</h2>
            </div>
            <p className="text-gray-500 max-w-md mt-4 md:mt-0">
              From the morning Aarti to the evening lights on the Ganges, every moment in Varanasi is a picture waiting to be captured.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            {/* Gallery Item 1 - Large */}
            <motion.div variants={fadeInUp} className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
              <img src={ghatsEve} alt="Ganga Aarti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-orange-400 font-bold text-sm uppercase">Evening Ritual</span>
                <h3 className="text-white text-3xl font-display font-bold">Ganga Aarti at Dashashwamedh</h3>
              </div>
            </motion.div>

            {/* Gallery Item 2 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-3xl shadow-lg">
              <img src={ghatsDay} alt="Boats on Ganga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Camera size={24} />
                </div>
              </div>
            </motion.div>

            {/* Gallery Item 3 */}
            <motion.div variants={fadeInUp} className="relative group overflow-hidden rounded-3xl shadow-lg bg-orange-100 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                  <Map size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guided Tours</h3>
                <p className="text-gray-600 text-sm">Let us guide you through the 84 ghats and their stories.</p>
              </div>
            </motion.div>

            {/* Gallery Item 4 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
              <img src={heroImg} alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-orange-400 font-bold text-sm uppercase">Architecture</span>
                <h3 className="text-white text-2xl font-display font-bold">Timeless Structures</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOD & CULTURE */}
      <section id="food" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="text-orange-500" />
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Taste of Banaras</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-none">
                Flavors that touch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Soul</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A trip to Kashi is incomplete without indulging in its culinary heritage. From the creamy froth of the <span className="font-bold text-gray-800">Blue Lassi</span> to the tangy spice of <span className="font-bold text-gray-800">Tamatar Chaat</span>, every bite tells a story.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Banarasi Paan", desc: "The world-famous mouth freshener that melts in your mouth." },
                  { title: "Malaiyo", desc: "A winter delicacy made from milk foam, saffron, and pistachios." },
                  { title: "Kachori Sabzi", desc: "The classic Banarasi breakfast served in leaf bowls." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 mr-4 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Utensils size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50" />
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-4 mt-12"
                >
                  <img src={food1} alt="Street Food" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500" />
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <p className="font-display font-bold text-xl text-gray-800">Kachori Gali</p>
                    <p className="text-sm text-gray-500">Famous breakfast spot</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4"
                >
                   <div className="bg-orange-500 p-4 rounded-xl shadow-lg text-white text-center py-8">
                    <p className="font-display font-bold text-3xl">100+</p>
                    <p className="text-sm opacity-90">Food Varieties</p>
                  </div>
                  <img src={food2} alt="Lassi Shop" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 bg-orange-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mt-2 mb-6">Plan Your Pilgrimage</h2>
              <p className="text-lg text-gray-600 mb-10">
                Whether you want a spiritual tour, a food walk, or a photography expedition, Nerd Travels creates customized itineraries for an unforgettable Kashi experience.
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-8">
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Nerd Travels</h4>
                    <p className="text-gray-500 text-sm">Your Companion in Kashi</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                      <ArrowRight size={18} />
                    </div>
                    <p className="font-medium text-gray-700">+91 86010 79823</p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                      <ArrowRight size={18} />
                    </div>
                    <p className="font-medium text-gray-700">info@nerdstravel.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Component */}
            <div className="relative">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
