import journeyVideo from "@/assets/about-video.mp4";

export default function JourneySection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={journeyVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Content Card with Enhanced Glassmorphism */}
      <div className="relative z-10 w-full max-w-5xl bg-white/[0.03] border border-white/10 backdrop-blur-[30px] sm:backdrop-blur-[60px] rounded-[40px] sm:rounded-[60px] p-10 sm:p-20 lg:p-28 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-4xl lg:text-8xl font-['Satoshi:Bold',sans-serif] text-white leading-[1.1] mb-10 tracking-tight">
          Our Journey Towards <br className="hidden sm:block" />
          Innovation and Excellence
        </h2>

        <p className="text-lg sm:text-1xl text-[rgba(248,249,250,0.8)] max-w-2xl mx-auto leading-relaxed font-['Satoshi:Regular',sans-serif] mb-14 px-4 sm:px-0">
          Brand is an advanced luminescent materials company, leveraging synergies of cutting-edge chemistries to deliver solutions, not just products.
        </p>

        <button className="bg-white text-black px-12 py-4 rounded-2xl font-['Satoshi:Medium',sans-serif] hover:bg-[#d6d6d6] transition-all hover:scale-105 active:scale-95 shadow-2xl text-lg mt-4">
          About Brand
        </button>
      </div>
    </section>
  );
}
