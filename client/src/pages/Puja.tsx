import { PujaNavigation } from "@/components/PujaNavigation";
import { PujaFooter } from "@/components/PujaFooter";
import { Link } from "wouter";

type PujaItem = {
  title: string;
  subtitle: string;
  duration: string;
  bestFor: string;
};

const PUJAS: PujaItem[] = [
  {
    title: "सत्यनारायण पूजा",
    subtitle: "घर में सुख, शांति और समृद्धि के लिए",
    duration: "2–3 घंटे",
    bestFor: "नया घर, पारिवारिक शांति, सफलता",
  },
  {
    title: "गणेश पूजा",
    subtitle: "विघ्न बाधाओं से मुक्ति हेतु",
    duration: "60–90 मिनट",
    bestFor: "नए कार्य, परीक्षा, व्यापार",
  },
  {
    title: "नवग्रह शांति पूजा",
    subtitle: "ग्रह दोष शांति एवं संतुलन हेतु",
    duration: "3–4 घंटे",
    bestFor: "कालसर्प, शनि, राहु दोष",
  },
  {
    title: "महामृत्युंजय जाप",
    subtitle: "स्वास्थ्य एवं दीर्घायु के लिए",
    duration: "2–3 घंटे",
    bestFor: "रोग निवारण, मानसिक शांति",
  },
  {
    title: "रुद्राभिषेक",
    subtitle: "भगवान शिव की कृपा हेतु",
    duration: "90–120 मिनट",
    bestFor: "तनाव मुक्ति, आध्यात्मिक उन्नति",
  },
  {
    title: "गृह प्रवेश पूजा",
    subtitle: "नए घर में शुभ ऊर्जा हेतु",
    duration: "2–4 घंटे",
    bestFor: "नव निर्माण, गृह प्रवेश",
  },
  {
    title: "वास्तु शांति पूजा",
    subtitle: "वास्तु दोष निवारण हेतु",
    duration: "3–4 घंटे",
    bestFor: "घर, ऑफिस, प्लॉट",
  },
  {
    title: "पितृ दोष निवारण पूजा",
    subtitle: "पूर्वजों की शांति हेतु",
    duration: "2–3 घंटे",
    bestFor: "पारिवारिक बाधाएं",
  },
];

const STEPS = [
  {
    title: "अपनी जानकारी साझा करें",
    desc: "पूजा, शहर और तारीख बताएं",
  },
  {
    title: "पंडित जी असाइन",
    desc: "अनुभवी व सत्यापित आचार्य",
  },
  {
    title: "पूजा संपन्न",
    desc: "सम्पूर्ण विधि व सामग्री सहित",
  },
];

export default function Puja() {
  return (
    <div className="min-h-screen bg-white">
      <PujaNavigation />

      {/* HERO */}
      <section
        id="puja-home"
        className="pt-28 pb-20 bg-gradient-to-b from-orange-50 via-white to-white"
      >
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-orange-600 font-semibold uppercase text-sm">
              Trusted Puja & Jyotish Services
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
              घर बैठे <span className="text-orange-600">विश्वसनीय पंडित</span>{" "}
              के साथ पूजा बुक करें
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
               अनुभवी आचार्य, पारदर्शी शुल्क और सम्पूर्ण पूजा व्यवस्था —
              ताकि आप निश्चिंत होकर भक्ति कर सकें।
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#puja-list"
                className="px-7 py-3 bg-orange-600 text-white rounded-full font-semibold"
              >
                पूजा सूची देखें
              </a>
              <a
                href="#enquiry"
                className="px-7 py-3 border border-orange-300 text-orange-700 rounded-full font-semibold"
              >
                विशेषज्ञ से बात करें
              </a>
            </div>

            {/* TRUST */}
            <div className="mt-8 flex gap-6 text-sm text-gray-600">
              <div>✔️ सत्यापित पंडित</div>
              <div>✔️ पारदर्शी शुल्क</div>
              <div>✔️ सम्पूर्ण सामग्री</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">लोकप्रिय सेवाएं</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "कुंडली परामर्श",
                "वास्तु सलाह",
                "विवाह मिलान",
                "करियर मार्गदर्शन",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-orange-50 p-4 text-center font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-s text-dark black-500 mt-4">
              काशी के अनुभवी आचार्य एवं पंडित से पूजा करवाईए, चाहे आप काशी में हों या भारत के किसी भी शहर में। शुद्ध वैदिक विधि, उचित सामग्री एवं संपूर्ण मार्गदर्शन के साथ हम हर पूजा को सरल, पवित्र और मंगलमय बनाते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            बुकिंग प्रक्रिया
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border p-6 text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-semibold mt-4 text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUJA LIST */}
      <section id="puja-list" className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            लोकप्रिय पूजाएं
          </h2>
          <p className="text-gray-600 text-center mt-2">
            अपनी आवश्यकता अनुसार पूजा चुनें
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PUJAS.map((puja) => (
              <div
                key={puja.title}
                className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
              >
                <h3 className="font-bold text-lg">{puja.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {puja.subtitle}
                </p>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>
                    <b>अवधि:</b> {puja.duration}
                  </p>
                  <p>
                    <b>उपयुक्त:</b> {puja.bestFor}
                  </p>
                </div>

                <a
                  href="#enquiry"
                  className="mt-5 inline-block text-orange-600 font-semibold text-sm"
                >
                  इस पूजा के लिए संपर्क करें →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              अपनी आवश्यकता बताएं
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              पूजा का प्रकार, शहर, तारीख और संपर्क विवरण साझा करें।
              हमारी टीम शीघ्र ही आपसे संपर्क करेगी।
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✔️ अनुभवी पंडित</li>
              <li>✔️ स्पष्ट शुल्क</li>
              <li>✔️ पूजा पूर्व व पश्चात सहायता</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <p className="text-sm text-gray-600">
              कॉल या व्हाट्सएप करें:
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:9838615376"
                className="px-6 py-3 bg-orange-600 text-white rounded-full text-center font-semibold"
              >
                कॉल करें – 9838615376
              </a>

              <a
                href="https://wa.me/919838615376?text=Hello%20Nerds%20Travel,%20I%20want%20to%20book%20a%20puja."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-orange-300 text-orange-700 rounded-full text-center font-semibold"
              >
                WhatsApp पर संपर्क करें
              </a>
            </div>
          </div>
        </div>
      </section>

      <PujaFooter />
    </div>
  );
}
