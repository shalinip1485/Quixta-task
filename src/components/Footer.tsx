import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-6 sm:px-12 lg:px-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Top Tier: Logo and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="text-3xl font-['Inria_Sans:Regular',sans-serif] tracking-tighter">
            LOGO
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-sm sm:text-base font-['Satoshi:Medium',sans-serif] text-white/50">
            <a href="mailto:info@brandtech.com" className="hover:text-white transition-colors cursor-pointer tracking-wider">
              info@brandtech.com
            </a>
            <a href="tel:+13455453432" className="hover:text-white transition-colors cursor-pointer tracking-widest">
              +1 (345) 545-3432
            </a>
          </div>
        </div>

        {/* Middle Tier: Description and Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 sm:gap-16 mb-20">
          <div className="lg:col-span-2 space-y-8 flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-lg text-white/40 leading-relaxed max-w-xs">
              Pioneering luminescent materials that transform industries through innovation.
            </p>
            <div className="flex gap-6">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/10 transition-all cursor-pointer hover:scale-110">
                  <Icon className="size-5 text-white/60" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6 text-center sm:text-left">
            <h4 className="font-['Satoshi:Bold',sans-serif] text-[#FF7300] tracking-widest text-sm uppercase">Solutions</h4>
            <div className="flex flex-col gap-4 text-white/30 text-sm font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:text-white transition-colors">Idylle</a>
              <a href="#" className="hover:text-white transition-colors">Luminicell</a>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6 text-center sm:text-left">
            <h4 className="font-['Satoshi:Bold',sans-serif] text-[#FF7300] tracking-widest text-sm uppercase">Quick Links</h4>
            <div className="flex flex-col gap-4 text-white/30 text-sm font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:text-white transition-colors">Technology</a>
              <a href="#" className="hover:text-white transition-colors">Newsroom</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">
            <h4 className="font-['Satoshi:Bold',sans-serif] text-[#FF7300] tracking-widest text-sm uppercase">About</h4>
            <div className="flex flex-col gap-4 text-white/30 text-sm font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:text-white transition-colors">Who are We</a>
              <a href="#" className="hover:text-white transition-colors">Our Mission</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal and Credits */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/20 text-center sm:text-left">
            © 2024 Brand Technology. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
          <div className="text-[10px] text-white/10 tracking-widest">
            DESIGNED BY <span className="text-white/30 hover:text-white transition-colors cursor-pointer ml-1">KODEX.DIGITAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
