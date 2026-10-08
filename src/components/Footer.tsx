import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Github, Twitter, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#030305] text-white pt-20 pb-12 overflow-hidden border-t border-purple-500/20">
      
      {/* Top Subtle Metallic Gold Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-arv-gold/80 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.5)]" />

      {/* Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-purple-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-purple-500/15">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center">
              <span className="brand-logo relative inline-flex shrink-0">
                <img
                  src="/assets/brand/dev-gang-arv.jpg"
                  alt="ARV Dev-gang"
                />
              </span>
            </div>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm font-inter">
              Pioneering turnkey casino suites, high-concurrency gaming platforms, proprietary mathematical engines, and white-label iGaming ecosystems for visionary operators globally.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#custom-dev"
                className="w-9 h-9 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-arv-gold hover:border-arv-gold transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#custom-dev"
                className="w-9 h-9 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-arv-gold hover:border-arv-gold transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#custom-dev"
                className="w-9 h-9 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-arv-gold hover:border-arv-gold transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Products & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-podium font-bold text-xs uppercase tracking-[0.2em] text-arv-gold">
              GAMING SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#products" className="hover:text-white hover:text-arv-gold transition-colors">
                  Premium Casino Platform Pro
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:text-arv-gold transition-colors">
                  Multi-Game Tournament Hub
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:text-arv-gold transition-colors">
                  Live Sports Betting Engine
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:text-arv-gold transition-colors">
                  120Hz Mobile Gaming App
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white hover:text-arv-gold transition-colors">
                  Next-Gen White-Label Suite
                </a>
              </li>
              <li>
                <a href="#providers" className="hover:text-white hover:text-arv-gold transition-colors">
                  APIs &amp; Games
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-white hover:text-arv-gold transition-colors">
                  Industry Awards
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Services & Architecture (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-podium font-bold text-xs uppercase tracking-[0.2em] text-arv-gold">
              SERVICES & OPS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#custom-dev" className="hover:text-white hover:text-arv-gold transition-colors">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white hover:text-arv-gold transition-colors">
                  RNG Mathematics
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white hover:text-arv-gold transition-colors">
                  Admin Backoffices
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:text-arv-gold transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white hover:text-arv-gold transition-colors">
                  GLI Certification Prep
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-podium font-bold text-xs uppercase tracking-[0.2em] text-arv-gold">
              ENTERPRISE DESK
            </h4>
            <div className="space-y-3 text-xs text-white/60 font-inter">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-arv-gold shrink-0" />
                <span className="font-mono text-[11px]">enterprise@arv-solutions.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>London • Dubai • Singapore</span>
              </div>
              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-[10px] text-white/50">
                <span className="text-green-400 font-bold block mb-0.5">● 24/7 Live Desk</span>
                Response time under 15 minutes.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-arv-gold" />
            <span>© {new Date().getFullYear()} ARV DEV-GANG LLC. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Commercial Licensing</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white transition-colors">Security Whitepaper</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
