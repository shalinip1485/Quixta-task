import { ArrowRight } from "lucide-react";
import bgImage from "@/assets/Rectangle108.png";

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-[80vh] w-full overflow-hidden bg-black py-24 sm:py-32 px-6 sm:px-12 lg:px-20 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Card */}
          <div className="flex-[1.5] rounded-[40px] border-2 border-[#007AFF] bg-black/40 backdrop-blur-3xl p-10 sm:p-16 flex flex-col justify-between items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-['Satoshi:Bold',sans-serif] text-white mb-8 leading-[1.1]">
                Have Questions? <br />
                Let's Talk!
              </h2>
              <p className="text-lg text-white/70 font-['Satoshi:Regular',sans-serif] max-w-md leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <button className="bg-[#E5E7EB] text-black px-8 py-3.5 rounded-2xl font-['Satoshi:Bold',sans-serif] text-base hover:bg-white transition-all shadow-xl">
              Get Started
            </button>
          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            <div className="flex-1 rounded-[40px] bg-white/[0.05] border border-white/10 backdrop-blur-3xl p-10 flex items-center justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-['Satoshi:Bold',sans-serif] text-white">Partnerships</h3>
              <div className="size-14 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                <ArrowRight className="size-6" />
              </div>
            </div>

            <div className="flex-1 rounded-[40px] bg-white/[0.05] border border-white/10 backdrop-blur-3xl p-10 flex items-center justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-['Satoshi:Bold',sans-serif] text-white">Careers</h3>
              <div className="size-14 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                <ArrowRight className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
