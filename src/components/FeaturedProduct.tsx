import React, { useState } from 'react';
import { FEATURED_PRODUCT, Product } from '../data/products';
import { CheckCircle2, Play, ArrowUpRight, Cpu, Layers, Server, Shield, Sparkles, Terminal, Flame } from 'lucide-react';
import { DeviceMockupLaptop } from './DeviceMockupLaptop';
import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

interface FeaturedProductProps {
  onLiveDemo: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  onLiveDemo,
  onBuyNow,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'license'>('overview');

  return (
    <section id="featured" className="relative py-12 sm:py-16 lg:py-20 bg-[#07060d] overflow-hidden border-t border-purple-500/15">
      
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Eyebrow and Title */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/40 px-3.5 py-1.5 rounded-full shadow-purple-sm">
            <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
              FLAGSHIP ENTERPRISE RELEASE
            </span>
          </div>

          <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-white">
            NEXT-GEN <span className="text-gold-gradient">CASINO PLATFORM</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-white/70">
            Engineered for high-volume international operators. Uncompromised speed, military-grade cryptographic verification, and breathtaking visual luxury.
          </p>
        </FadeIn>

        {/* Central Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Hardware Preview & Live Feed */}
          <FadeIn className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-br from-purple-950/40 via-[#0d0b1a] to-black border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(168,85,247,0.25)]">
              {/* Device Mockup */}
              <DeviceMockupLaptop />

              {/* Hardware Overlay Highlights */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
                <div className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/20">
                  <div className="text-white/50 text-[9px]">Throughput</div>
                  <div className="font-bold text-arv-gold mt-0.5">100k+ CCU</div>
                </div>
                <div className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/20">
                  <div className="text-white/50 text-[9px]">Latency Target</div>
                  <div className="font-bold text-green-400 mt-0.5">&lt; 15ms Socket</div>
                </div>
                <div className="p-2 rounded-xl bg-purple-950/50 border border-purple-500/20">
                  <div className="text-white/50 text-[9px]">Fairness</div>
                  <div className="font-bold text-purple-300 mt-0.5">SHA-256 Proven</div>
                </div>
              </div>
            </div>

            {/* Technology Stack Panel */}
            <div className="rounded-2xl glass-dark p-5 sm:p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-arv-gold" />
                  <span className="font-podium font-bold text-xs sm:text-sm text-white tracking-wider uppercase">
                    PRODUCTION TECH STACK
                  </span>
                </div>
                <span className="text-[10px] text-white/50 font-mono">Modern Microservices</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {FEATURED_PRODUCT.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-black/50 border border-purple-500/15 hover:border-arv-gold/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-arv-gold" />
                    <span className="text-xs text-white/85 font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Specifications & Commercial Action */}
          <FadeIn delay={0.2} className="lg:col-span-5 space-y-6">
            
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-purple-950/40 border border-purple-500/20">
              {(['overview', 'architecture', 'license'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-gold-metallic text-black shadow-gold-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Description Card with Card3D */}
            <Card3D maxTilt={6}>
              <div className="rounded-2xl glass-dark-gold p-6 sm:p-7 border border-arv-gold/30 shadow-card-glow space-y-6">
                
                <div className="flex items-baseline justify-between border-b border-purple-500/20 pb-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Turnkey Enterprise Price</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-podium font-extrabold text-3xl sm:text-4xl text-gold-gradient">
                        {FEATURED_PRODUCT.price}
                      </span>
                      <span className="text-xs text-white/50 font-mono">ONE-TIME / SOURCE CODE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-arv-gold block">★ 4.99 / 5.0</span>
                    <span className="text-[10px] text-white/40">{FEATURED_PRODUCT.salesCount}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3">
                  <span className="text-xs font-podium font-bold uppercase tracking-wider text-white block">
                    Enterprise Feature Inclusions:
                  </span>
                  {FEATURED_PRODUCT.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-arv-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights Strip */}
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs text-white/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-arv-gold font-bold text-[11px] uppercase">
                    <Shield className="w-3.5 h-3.5" /> Commercial License Guarantee
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed">
                    Includes unrestricted white-label rights, uncompiled source code, automated database migration scripts, and 12-month security updates.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onLiveDemo(FEATURED_PRODUCT)}
                    className="w-full py-4 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-md transition-colors"
                  >
                    <Play className="w-4 h-4 fill-black" />
                    <span>TEST LIVE DEMO SANDBOX</span>
                  </button>

                  <button
                    onClick={() => onBuyNow(FEATURED_PRODUCT)}
                    className="w-full py-3.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 hover:border-arv-gold text-white font-podium font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>ACQUIRE ENTERPRISE SUITE</span>
                    <ArrowUpRight className="w-4 h-4 text-arv-gold" />
                  </button>
                </div>

              </div>
            </Card3D>

          </FadeIn>

        </div>

      </div>
    </section>
  );
};
