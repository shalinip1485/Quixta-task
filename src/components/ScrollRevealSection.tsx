import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import flowLine from "@/assets/flow-1.png";

export default function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod sectetuer adipiscing elit. Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet.".split(" ");

  const cards = [
    { src: company1 },
    { src: company2 },
    { src: company3 },
    { src: company2 },
  ];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black relative overflow-hidden">
      {/* Decorative flow line image – desktop only */}
      <img
        src={flowLine}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute left-32 top-0 h-full w-auto object-fill pointer-events-none z-0 select-none"
      />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mb-24 ml-auto px-6 lg:px-0">
          <p className="text-3xl sm:text-5xl lg:text-5xl font-['Satoshi:Medium',sans-serif] leading-[1.1] flex flex-wrap gap-x-[0.3em] gap-y-2">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <motion.span
                  key={i}
                  style={{ opacity }}
                  className="text-white"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] max-w-4xl ml-auto px-6 lg:px-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-[24px] md:rounded-[40px] lg:rounded-[40px] overflow-hidden aspect-square flex flex-col justify-start p-8 sm:p-10 lg:p-14 bg-[#F8F9FA0D] transition-all duration-500 shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl sm:text-2xl font-['Satoshi:Bold',sans-serif] text-white mb-2">{card.title}</h3>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed font-['Satoshi:Regular',sans-serif] whitespace-pre-line text-white/70 group-hover:text-white transition-all duration-500 max-w-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
