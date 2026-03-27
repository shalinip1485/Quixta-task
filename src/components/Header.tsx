import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Who We Are", href: "#who-we-are" },
  { name: "Technology", href: "#technology" },
  { name: "Solutions", href: "#solutions" },
  { name: "Newsroom", href: "#newsroom" },
  { name: "Careers", href: "#careers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 px-6 sm:px-12 py-5 sm:py-6 ${
          scrolled || menuOpen
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-['Inria_Sans:Regular',sans-serif] text-white tracking-tighter z-[201] relative">
            LOGO
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-['Satoshi:Medium',sans-serif] text-white/50 hover:text-white transition-colors tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-3 rounded-2xl text-sm font-['Satoshi:Medium',sans-serif] hover:bg-white hover:text-black transition-all duration-300 group whitespace-nowrap"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            className="lg:hidden relative z-[201] text-white p-2 rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — rendered outside header so it truly covers everything */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[199] bg-black lg:hidden flex flex-col items-center justify-center gap-10 px-6"
          style={{ backgroundColor: "#000000" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-3xl font-['Satoshi:Bold',sans-serif] text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 w-full max-w-xs bg-transparent text-white border border-white/20 py-4 rounded-2xl text-lg font-['Satoshi:Bold',sans-serif] hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>
      )}
    </>
  );
}
