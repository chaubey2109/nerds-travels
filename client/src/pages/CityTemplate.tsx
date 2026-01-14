import { Button } from "@/components/ui/button";

interface CityProps {
  city: string;
  tagline: string;
  description: string;
}

export default function CityTemplate({
  city,
  tagline,
  description,
}: CityProps) {
  return (
    <div className="pt-28">
      {/* HERO */}
      <section className="text-center px-6 py-20 bg-gradient-to-b from-orange-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {city}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{tagline}</p>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">
          About {city}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Experiences in {city}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["Temple Visits", "Spiritual Rituals", "Local Culture"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-600">
                    Curated experiences guided by local experts.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-20">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Plan Your Trip to {city}
          </h2>

          <form className="space-y-4">
            <input
              type="hidden"
              value={city}
              name="destination"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />

            <select className="w-full border rounded-lg px-4 py-3">
              <option>Choose Tour Type</option>
              <option>Temple Darshan</option>
              <option>Ganga Aarti</option>
              <option>Food Walk</option>
              <option>Custom Tour</option>
            </select>

            <Button className="w-full bg-primary text-white">
              Send Enquiry
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
