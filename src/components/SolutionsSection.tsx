import { motion } from "motion/react";
import imgImage42 from "@/assets/6cf7bc35191fce57f6e7cec8c210a9b2c9aae7f6.png";
import imgImage43 from "@/assets/ca0655b7b0fe7896d3989815ebd3179ddd04ffd6.png";

export default function SolutionsSection() {
  const solutions = [
    {
      logo: imgImage42,
      name: "idylle",
      title: "Securing every physical product for counterfeit protection",
      description: "Reyal™ makes it easy for brand owners and governments to effectively identify counterfeits, secure revenues and preserve brand integrity.",
      buttonText: "Learn More",
    },
    {
      logo: imgImage43,
      name: "labscoop",
      title: "Accelerating biomedical research with next-generation bio-probes",
      description: "Luminicell empowers researchers to achieve breakthroughs at a faster pace by powering long live-cell tracking and deep tissue bio-imaging.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-black overflow-hidden relative px-6 sm:px-12 lg:px-20">
      {/* Decorative flow line – desktop only */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Satoshi:Bold',sans-serif] text-white tracking-tight leading-[1.1] max-w-2xl">
            Advanced Materials and <br />
            Integrative Solutions
          </h2>
        </div>

        <div className="space-y-32">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24">
              <div className="w-full md:w-1/3 flex justify-start">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 md:h-24 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>

              <div className="w-full md:w-2/3 pr-6 sm:pr-12 lg:pr-32">
                <h3 className="text-2xl sm:text-3xl font-['Satoshi:Bold',sans-serif] text-white mb-6 leading-tight">
                  {item.title}
                </h3>

                <p className="text-lg text-white/60 leading-relaxed font-['Satoshi:Regular',sans-serif] max-w-xl mb-8">
                  {item.description}
                </p>

                <button className="bg-[#FF7300] text-white px-8 py-4 rounded-[12px] font-['Satoshi:Medium',sans-serif] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg text-sm tracking-wide">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
