import { motion } from "motion/react";
import imgGroup1 from "../assets/Group1.png";
import imgGroup2 from "../assets/Group2.png";
import imgGroup3 from "../assets/Group3.png";
import imgGroup4 from "../assets/Group4.png";
import flowLine3 from "../assets/flow3.png";

export default function TechnologySection() {
  const techItems = [
    {
      title: "Synthesis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: imgGroup1
    },
    {
      title: "Formulations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      bgImage: imgGroup2
    },
    {
      title: "Diverse Materials",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgImage: imgGroup3
    },
    {
      title: "Manipulation of Light",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.\n\nconsectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      bgImage: imgGroup4
    }
  ];

  return (
    <section id="technology" className="pt-24 pb-32 sm:pt-32 sm:pb-48 bg-black overflow-hidden relative px-6 sm:px-12 lg:px-20">
      {/* Decorative flow line – right side, desktop only */}
      <img
        src={flowLine3}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute right-32 top-0 h-full w-auto object-fill pointer-events-none z-0 select-none"
      />
      <div className="mx-auto max-w-7xl relative z-10 sm:pr-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Satoshi:Bold',sans-serif] text-white tracking-tight leading-[1.1] max-w-2xl">
            The Science Behind Our <br />
            Innovative Solutions
          </h2>

          <button className="bg-[#FF7300] text-white px-8 py-4 rounded-[12px] font-['Satoshi:Medium',sans-serif] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg text-sm tracking-wide">
            Learn More
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[32px] sm:rounded-[48px] overflow-hidden flex flex-col justify-center px-10 py-14 sm:px-14 sm:py-20 lg:px-16 lg:py-24 border-[0.5px] border-[#F8F9FA33] h-full"
            >
              {/* Energy Background Image - Now Full Card */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-80 sm:opacity-90"
                />
                {/* Immersive Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-['Satoshi:Bold',sans-serif] text-white mb-8 sm:mb-12 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="text-lg sm:text-xl leading-relaxed font-['Satoshi:Regular',sans-serif] whitespace-pre-line text-white/70 group-hover:text-white transition-all duration-500 max-w-sm">
                  {/* Matching the screenshot's high-contrast style */}
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
