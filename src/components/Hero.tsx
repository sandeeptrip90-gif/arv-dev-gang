import React from 'react';
import { ArrowUpRight, Rocket, Code2, Settings, Headphones, ShieldCheck, Star, Users, CheckCircle } from 'lucide-react';
import { HeroEnvironment } from './HeroEnvironment';

interface HeroProps {
  onBrowseProducts: () => void;
  onRequestCustomDev: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseProducts, onRequestCustomDev }) => {
  const trustFeatures = [
    { icon: Rocket, title: 'Ready to Launch', subtitle: 'Deploy in 24 Hours' },
    { icon: Code2, title: 'Source Code Included', subtitle: 'Full 100% IP Ownership' },
    { icon: Settings, title: 'Fully Customizable', subtitle: 'Modular Architecture' },
    { icon: Headphones, title: 'Expert Support', subtitle: '24/7 Dedicated Engineers' },
  ];

  return (
    <section className="relative min-h-[auto] lg:min-h-[92vh] w-full flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12">
      
      {/* =================================================== */}
      {/* 1. CINEMATIC BACKGROUND VIDEO WITH LAYERED FILTERS  */}
      {/* =================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.78] contrast-110 saturate-[1.15]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Layer 1: Left-to-right wash — keep copy readable, let the video show on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/80 via-[#07050f]/40 to-transparent" />

        {/* Layer 2: Top and Bottom Vignette Transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/50 via-transparent to-[#050508]/65" />

        {/* Layer 3: Atmospheric Royal Purple Ambient Glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-purple-700/12 blur-[140px]" />
        <div className="absolute top-1/2 right-0 w-[650px] h-[650px] rounded-full bg-purple-900/15 blur-[150px]" />

        {/* Layer 4: Subtle Warm Champagne / Gold Glow Accent */}
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[130px]" />

        {/* Layer 5: Light vignette so the film still sits in the scene */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/40" />
      </div>

      {/* =================================================== */}
      {/* 2. SPLIT COMPOSITION HERO MAIN CONTENT              */}
      {/* =================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center py-6 sm:py-8">
          
          {/* =============================================== */}
          {/* LEFT COLUMN: BRAND / MESSAGE / CTA / TRUST      */}
          {/* =============================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 text-left">
            
            {/* Badges Row with Editor Award */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="animate-fade-up inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/40 px-3.5 py-1.5 rounded-full shadow-purple-sm">
                <span className="w-2 h-2 rounded-full bg-arv-gold animate-ping" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 font-mono">
                  PREMIUM GAMING SOLUTIONS
                </span>
              </div>

              {/* Editor Award Badge in Hero */}
              <a
                href="#awards"
                className="animate-fade-up inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 border border-arv-gold/50 px-3.5 py-1.5 rounded-full shadow-gold-sm transition-all hover:scale-105"
              >
                <img
                  src="/assets/awards/editor-choice.svg"
                  alt="Editor's Choice"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-white">
                  EDITOR&apos;S CHOICE <span className="text-arv-gold font-bold">2026 WINNER</span>
                </span>
              </a>
            </div>

            {/* Main Vanguard Headline (0.6s fade-up) */}
            <h1 className="animate-fade-up-delay-1 font-podium font-extrabold uppercase leading-[0.92] tracking-tight text-[clamp(2.4rem,5.6vw,6.4rem)] text-white">
              READY-MADE <br />
              <span className="text-gold-gradient relative inline-block drop-shadow-[0_0_35px_rgba(234,179,8,0.35)]">
                GAMING PLATFORMS
              </span> <br />
              <span className="text-white/95">&amp; CUSTOM DEVELOPMENT</span>
            </h1>

            {/* Body Copy (0.8s fade-up) */}
            <p className="animate-fade-up-delay-2 font-inter text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 max-w-xl">
              Launch faster with ready-made gaming platforms, 20+ provider APIs, 2,000+ games, premium interfaces, admin panels and mobile apps — or work with our engineering team to build a bespoke gaming platform.
            </p>

            {/* 4 Compact Trust Feature Points (1.0s fade-up) */}
            <div className="animate-fade-up-delay-3 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 max-w-lg">
              {trustFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2 rounded-lg bg-black/40 border border-purple-500/20 backdrop-blur-sm hover:border-arv-gold/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-md bg-purple-950/80 border border-arv-gold/40 flex items-center justify-center shrink-0 shadow-gold-sm">
                      <IconComponent className="w-4 h-4 text-arv-gold" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                        {feat.title}
                      </div>
                      <div className="text-[10px] text-white/50">
                        {feat.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBrowseProducts}
                className="sweep-container relative px-8 py-4 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-gold-md transition-colors duration-300 w-full sm:w-auto"
              >
                <span>BROWSE PRODUCTS</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </button>

              <button
                onClick={onRequestCustomDev}
                className="px-8 py-4 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/40 hover:border-arv-gold text-white font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-purple-sm transition-colors duration-300 w-full sm:w-auto"
              >
                <span>REQUEST CUSTOM DEV</span>
                <ArrowUpRight className="w-4 h-4 text-arv-gold" />
              </button>
            </div>

            {/* Hero Trust Strip (1.4s fade-up) */}
            <div className="pt-4 border-t border-purple-500/15 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-white/60">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-arv-gold" />
                <span className="font-medium text-white/80">500+ Clients Worldwide</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-arv-gold fill-arv-gold" />
                <span className="font-medium text-white/80">Editor&apos;s Pick Award</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-medium text-white/80">20+ Platform APIs</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-arv-gold" />
                <span className="font-medium text-white/80">GLI-19 Certified</span>
              </div>
            </div>

          </div>

          {/* =============================================== */}
          {/* RIGHT COLUMN: 3D HERO ENVIRONMENT & SHOWCASE     */}
          {/* =============================================== */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
            <HeroEnvironment />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator Cue */}
      <a
        href="#products"
        aria-label="Scroll to Products"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1 text-white/40 hover:text-arv-gold transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono">SCROLL TO EXPLORE</span>
        <div className="w-4 h-7 rounded-full border border-purple-500/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-arv-gold animate-bounce" />
        </div>
      </a>

    </section>
  );
};
