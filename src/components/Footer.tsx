import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top Tier: Logo and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="text-5xl font-['Inria_Sans:Regular',sans-serif] tracking-tighter">
            LOGO
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-12 lg:gap-32 text-2xl lg:text-3xl font-['Satoshi:Medium',sans-serif] text-white">
            <a href="mailto:info@brand.com" className="hover:opacity-70 transition-opacity cursor-pointer">
              info@brand.com
            </a>
            <a href="tel:+6588082159" className="hover:opacity-70 transition-opacity cursor-pointer">
              +65 8808 2159
            </a>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-16" />

        {/* Middle Tier: Description and Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
          <div className="lg:col-span-2 space-y-10">
            <p className="text-lg text-white/60 leading-relaxed max-w-sm font-['Satoshi:Regular',sans-serif]">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elitctetur <br />
              adipiscing elit.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <div key={i} className="size-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                  <Icon className="size-5 text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-8">
            <h4 className="font-['Satoshi:Medium',sans-serif] text-white text-sm">Solutions</h4>
            <div className="flex flex-col gap-4 text-white/50 text-base font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:opacity-70 transition-opacity">Reyal</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Luminicell</a>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-8">
            <h4 className="font-['Satoshi:Medium',sans-serif] text-white text-sm">Quick links</h4>
            <div className="flex flex-col gap-4 text-white/50 text-base font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:opacity-70 transition-opacity">Get Started</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Technology</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Newsroom</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Careers</a>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-8">
            <h4 className="font-['Satoshi:Medium',sans-serif] text-white text-sm">Who are We</h4>
            <div className="flex flex-col gap-4 text-white/50 text-base font-['Satoshi:Regular',sans-serif]">
              <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Brand at a Glance</a>
              <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Mission & Vision</a>
              <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Our Team</a>
              <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Partnerships</a>
              <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Sustainability & Social Impact</a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="h-[1px] bg-white/10 w-full mb-8" />

        {/* Bottom Tier: Legal and Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-white/40 font-['Satoshi:Regular',sans-serif]">
          <p>© 2025 Brand. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <div className="tracking-wide">
            Designed and Powered by Quixta.
          </div>
        </div>
      </div>
    </footer>
  );
}
