import videoIridescentAbstract from "@/assets/Iridescent_Abstract.mp4";
import imgGlassEffect from "../assets/Glass-effect.png";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 sm:py-32 bg-black px-6 sm:px-12 lg:px-20 relative overflow-hidden">

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Satoshi:Bold',sans-serif] text-white tracking-tight leading-[1.1] mb-12">
              Sustainability at the heart <br />
              of Innovation
            </h2>

            <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-['Satoshi:Regular',sans-serif] mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="bg-[#E5E7EB] text-black px-8 py-3.5 rounded-[12px] font-['Satoshi:Medium',sans-serif] hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-md text-sm tracking-wide">
              Get into Details
            </button>
          </div>

          {/* Right Image Content with Overlapping Glass Effect */}
          <div className="relative flex justify-center lg:justify-end items-center h-[350px] sm:h-[450px] lg:h-[500px] mt-12 lg:mt-0">
             {/* The iridescent bubble (was Rectangle1) is on the right */}
             <div className="relative z-0 scale-110 lg:scale-125 lg:translate-x-12 overflow-hidden rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
               <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="h-full w-full object-cover"
               >
                 <source src={videoIridescentAbstract} type="video/mp4" />
               </video>
             </div>
             
             {/* The Glass effect is on the LEFT of the bubble, overlapping it */}
             <div className="absolute left-[-50px] sm:left-[-100px] top-0 bottom-0 z-10 w-full pointer-events-none flex items-stretch overflow-visible">
               <img 
                 src={imgGlassEffect} 
                 alt="Glass Decoration" 
                 className="h-full w-auto object-cover opacity-70 mix-blend-lighten"
               />
             </div>
          </div>
        </div>
      </div>

      {/* Subtle border lines as seen in other sections */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/5" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/5" />
    </section>
  );
}
