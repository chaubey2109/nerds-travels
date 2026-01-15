import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";
import { Link } from "wouter";

export default function Kerala() {
  return (
    <div className="min-h-screen bg-background font-sans">

      <section className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-center max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
            <Clock className="text-white w-8 h-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kerala Packages
          </h1>

          <p className="text-orange-400 text-xl font-semibold mb-4">
            Coming Soon 🚧
          </p>

          <p className="text-gray-300 mb-8">
            We’re currently crafting exclusive Kerala tour packages including
            houseboats, hill stations, beaches, and curated local experiences.
            Stay tuned — exciting journeys are on the way!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Back to Home
            </Link>

            
          </div>
        </div>
      </section>

    </div>
  );
}
