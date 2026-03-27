import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import rect12 from "@/assets/Group 744.svg";
import rect13 from "@/assets/Group 745.svg";
import rect14 from "@/assets/Group 746.svg";
import rect15 from "@/assets/Group 747.svg";

export default function ScrollRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod sectetuer adipiscing elit. Sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet.".split(" ");

  const cards = [
    { src: rect12 },
    { src: rect13 },
    { src: rect14 },
    { src: rect15 },
  ];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mb-24">
          <p className="text-3xl sm:text-5xl lg:text-7xl font-['Satoshi:Medium',sans-serif] leading-[1.1] flex flex-wrap gap-x-[0.3em] gap-y-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-[24px] md:rounded-[40px] lg:rounded-[40px] overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] flex flex-col justify-start p-8 sm:p-10 lg:p-14 bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/50"
            >
              <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
              />
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
