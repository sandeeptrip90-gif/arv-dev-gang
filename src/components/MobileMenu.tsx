import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenQuote, navLinks }) => {
  const navItems = [...navLinks, { label: 'Contact', href: '#custom-dev' }];

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
        isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-5">
        <a href="#" onClick={onClose} className="inline-flex items-center shrink-0" aria-label="ARV Dev-gang">
          <span className="brand-logo relative inline-flex shrink-0">
            <img
              src="/assets/brand/dev-gang-arv.jpg"
              alt="ARV Dev-gang"
            />
          </span>
        </a>

        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="w-10 h-10 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-white/80 hover:text-white hover:border-arv-gold transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Centered Navigation Links with Staggered Entrance */}
      <nav className="my-auto flex flex-col items-center justify-center gap-4 sm:gap-6 text-center">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            style={{
              transitionDelay: isOpen ? `${100 + idx * 70}ms` : '0ms',
            }}
            className={`font-podium text-3xl sm:text-4xl uppercase tracking-wider text-white/85 hover:text-white transition-all transform hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="border-t border-purple-500/20 pt-6 flex flex-col gap-3">
        <button
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          className="w-full py-4 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-md active:scale-95 transition-all"
        >
          <span>GET STARTED NOW</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>

        <div className="text-center text-xs text-white/40 tracking-widest uppercase">
          AAA Gaming Development Studio • 2026
        </div>
      </div>
    </div>
  );
};
