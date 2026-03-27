import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgGroupnew from "@/assets/Groupnew.png";

export default function NewsroomSection() {
  const articles = [
    {
      title: "How Brand Technology is Better and Safer than Existing",
      date: "24 April 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: true,
      image: imgGroupnew
    },
    {
      title: "Luminicell - Leading the Next Generation of Bio-imaging",
      date: "12 May 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: false
    },
    {
      title: "The Finalists - South West Asia and Gulf regional final",
      date: "05 June 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: false
    },
    {
      title: "Brand Tech Fast 50 winners across Asia Pacific",
      date: "18 July 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      featured: false
    }
  ];

  return (
    <section id="newsroom" className="py-24 sm:py-32 bg-black relative overflow-hidden px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-['Satoshi:Bold',sans-serif] text-white tracking-tight leading-[1.1]">
            What’s New at Brand
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`relative rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] min-h-[500px] flex flex-col justify-end p-10 sm:p-14 ${
                article.featured 
                  ? "bg-black" 
                  : "bg-white/[0.03] border border-white/10 backdrop-blur-md"
              }`}
            >
              {article.featured && article.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
              )}
              
              <div className="relative z-10">
                <p className="text-sm font-['Satoshi:Medium',sans-serif] text-[rgba(248,249,250,0.5)] mb-4 tracking-widest uppercase">
                  {article.date}
                </p>
                <h3 className="text-2xl sm:text-3xl font-['Satoshi:Bold',sans-serif] text-white mb-6 leading-tight">
                  {article.title}
                </h3>
                <p className="text-lg text-[rgba(248,249,250,0.7)] mb-10 line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
                <button
                  className={`${
                    article.featured
                      ? "bg-white text-black hover:bg-gray-200"
                      : "border border-white/20 text-white hover:bg-white/5"
                  } px-10 py-4 rounded-2xl transition-all duration-300 font-['Satoshi:Medium',sans-serif] text-sm tracking-wide`}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
