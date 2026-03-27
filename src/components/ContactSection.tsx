import { ArrowRight } from "lucide-react";
import liquidVideo from "@/assets/liquid_Iridescent.mp4";

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-[80vh] w-full overflow-hidden bg-black py-24 sm:py-32 px-6 sm:px-12 lg:px-20 flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={liquidVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Card */}
          <div className="flex-[1.5] rounded-[32px] sm:rounded-[48px] bg-[#F8F9FA1A] border border-white/10 backdrop-blur-[60px] p-10 sm:p-16 flex flex-col justify-between items-start">
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
            <div className="flex-1 rounded-[32px] sm:rounded-[48px] bg-[#F8F9FA1A] border border-white/10 backdrop-blur-[60px] p-10 flex items-center justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-['Satoshi:Bold',sans-serif] text-white">Partnerships</h3>
              <div className="size-14 rounded-full border border-white flex items-center justify-center transition-all">
                <ArrowRight className="size-6 text-white" />
              </div>
            </div>

            <div className="flex-1 rounded-[32px] sm:rounded-[48px] bg-[#F8F9FA1A] border border-white/10 backdrop-blur-[60px] p-10 flex items-center justify-between group cursor-pointer hover:bg-white/[0.08] transition-all">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-['Satoshi:Bold',sans-serif] text-white">Careers</h3>
              <div className="size-14 rounded-full border border-white flex items-center justify-center transition-all">
                <ArrowRight className="size-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
