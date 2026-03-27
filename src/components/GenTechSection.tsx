import videoBubble from "@/assets/Soap_Bubble_1280x720.mp4";

export default function GenTechSection() {
  return (
    <section className="relative h-[600px] sm:h-[720px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoBubble} type="video/mp4" />
        </video>
      </div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 sm:px-12 lg:px-20 text-center mx-auto">
        <h2 className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[80px] font-['Satoshi:Medium',sans-serif] text-[rgba(248,249,250,0.9)] leading-[1.1] max-w-5xl mx-auto tracking-tight">
          Revolutionizing luminescence to power the next generation of technology
        </h2>
      </div>

      {/* Subtle top/bottom borders as seen in assignment */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-white/10" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10" />
    </section>
  );
}
