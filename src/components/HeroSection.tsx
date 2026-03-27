import heroVideo from "@/assets/hero-video.mp4";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Edge Gradients for Vignette Effect */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />

      {/* Central Radial Reveal */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,black_100%)] pointer-events-none opacity-90" />

      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-12 lg:px-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-['Satoshi:Bold',sans-serif] text-white mb-8 tracking-tight leading-[1.1]">
            Future of Advanced Materials
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-[rgba(248,249,250,0.8)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Pioneering luminescent materials that transform industries through innovation and excellence
          </p>
          <button className="bg-[#f8f9fa] text-[#070808] px-10 py-4 rounded-2xl font-['Satoshi:Medium',sans-serif] text-lg hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
