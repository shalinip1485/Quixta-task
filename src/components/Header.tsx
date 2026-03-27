import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "Technnology", href: "#technology" },
    { name: "Solutions", href: "#solutions" },
    { name: "Newsroom", href: "#newsroom" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 sm:px-12 py-5 sm:py-7 ${
        scrolled ? "bg-black/60 backdrop-blur-3xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-['Inria_Sans:Regular',sans-serif] text-white tracking-tighter">
          LOGO
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-['Satoshi:Medium',sans-serif] text-white/50 hover:text-white transition-all tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2.5 rounded-xl font-['Satoshi:Medium',sans-serif] text-sm hover:bg-gray-200 transition-all flex items-center gap-2 group">
            Get Started
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-black/95 backdrop-blur-3xl z-[90] lg:hidden flex flex-col items-center justify-start pt-20 px-6 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-['Satoshi:Bold',sans-serif] text-white/70 hover:text-white transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 bg-white text-black w-full py-5 rounded-[20px] font-['Satoshi:Bold',sans-serif] text-lg flex items-center justify-center gap-2">
            Get Started
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </header>
  );
}
