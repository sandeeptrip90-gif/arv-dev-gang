import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Search, Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoPop, setLogoPop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'APIs & Games', href: '#providers' },
    { label: 'Awards', href: '#awards' },
    { label: 'Solutions', href: '#categories' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#custom-dev' },
    { label: 'Why Us', href: '#why-us' },
  ];

  return (
    <>
      <header
        style={{ transform: 'translateZ(0)' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#050508]/92 backdrop-blur-xl border-b border-purple-500/25 shadow-[0_10px_30px_rgba(0,0,0,0.85)] py-2 sm:py-2.5'
            : 'bg-[#050508]/40 backdrop-blur-md border-b border-purple-500/10 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12 flex items-center gap-5 xl:gap-6 2xl:gap-8">
          
          {/* Brand Logo (Left) */}
          <a
            href="#"
            className="shrink-0 inline-flex items-center"
            aria-label="ARV Dev-gang"
            onClick={() => {
              setLogoPop(false);
              window.requestAnimationFrame(() => setLogoPop(true));
            }}
          >
            <span
              className={`brand-logo relative inline-flex shrink-0 ${logoPop ? 'is-popping' : ''}`}
              onAnimationEnd={() => setLogoPop(false)}
            >
              <img
                src="/assets/brand/dev-gang-arv.jpg"
                alt="ARV Dev-gang"
              />
            </span>
          </a>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-evenly gap-1 xl:gap-2 bg-black/50 backdrop-blur-md px-3 xl:px-5 2xl:px-7 py-2 rounded-full border border-purple-500/25 shadow-purple-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] 2xl:text-xs uppercase tracking-[0.1em] 2xl:tracking-[0.14em] text-white/70 hover:text-white font-medium transition-all relative py-1 px-1 xl:px-1.5 whitespace-nowrap group/link"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-1 right-1 xl:left-1.5 xl:right-1.5 w-auto h-0.5 bg-gradient-to-r from-arv-purple to-arv-gold scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Action (Right) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Platforms"
              className="hidden xl:flex w-9 h-9 2xl:w-10 2xl:h-10 rounded-full bg-purple-950/40 border border-purple-500/25 items-center justify-center text-white/60 hover:text-arv-gold hover:border-arv-gold/50 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* GET STARTED Pill Button */}
            <button
              onClick={onOpenQuote}
              className="group relative px-4 xl:px-6 py-2 xl:py-2.5 rounded-full border border-arv-gold/60 bg-gradient-to-r from-[#170e28] to-[#120a1f] text-white font-semibold text-[11px] xl:text-xs tracking-wider uppercase flex items-center gap-1.5 xl:gap-2 hover:border-arv-gold hover:shadow-gold-md transition-colors duration-300"
            >
              <span className="text-white group-hover:text-arv-gold transition-colors font-podium">
                GET STARTED
              </span>
              <ArrowUpRight className="w-4 h-4 text-arv-gold" />
              <div className="absolute inset-0 rounded-full bg-arv-gold/15 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2.5 ml-auto">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-full bg-gold-metallic text-black font-podium font-bold text-xs uppercase flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
            >
              <span>START</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
              className="w-9 h-9 rounded-lg bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-white hover:text-arv-gold transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuote={onOpenQuote}
        navLinks={navLinks}
      />
    </>
  );
};
