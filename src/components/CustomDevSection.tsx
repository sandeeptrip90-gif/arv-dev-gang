import React from 'react';
import { ArrowUpRight, Code2, Sparkles, Terminal, Shield, Cpu, Check, Layers } from 'lucide-react';
import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

interface CustomDevSectionProps {
  onBrowseProducts: () => void;
  onRequestQuote: () => void;
}

export const CustomDevSection: React.FC<CustomDevSectionProps> = ({
  onBrowseProducts,
  onRequestQuote,
}) => {
  return (
    <section id="custom-dev" className="relative py-12 sm:py-16 lg:py-20 bg-[#07060e] overflow-hidden border-t border-purple-500/15">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Conversion Message & Action */}
          <FadeIn className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/40 px-3.5 py-1.5 rounded-full shadow-purple-sm">
              <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
                BESPOKE GAMING SOFTWARE STUDIO
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-podium font-extrabold uppercase leading-[0.95] tracking-tight text-3xl sm:text-5xl lg:text-6xl text-white">
              READY TO BUILD YOUR <br />
              <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(234,179,8,0.35)]">
                GAMING PLATFORM?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="font-inter text-sm sm:text-base lg:text-lg leading-relaxed text-white/70 max-w-xl">
              Choose from our ready-made products or let our team create a custom solution built specifically for your business. We engineer custom game engines, bespoke math models, proprietary risk shields, and end-to-end white-label architectures.
            </p>

            {/* Studio Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              {[
                'Full IP & Source Code Transfer',
                'Custom Game Mathematics (RTP / Volatility)',
                'Dedicated High-Concurrency DevOps',
                'GLI & BMM Regulatory Alignment'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                  <div className="w-4 h-4 rounded-full bg-purple-950 border border-arv-gold/50 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-arv-gold stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="sweep-container relative px-8 py-4 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-gold-md transition-colors duration-300 w-full sm:w-auto"
              >
                <span>REQUEST CUSTOM DEVELOPMENT</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </button>

              <button
                onClick={onBrowseProducts}
                className="px-7 py-4 rounded-xl bg-purple-950/50 hover:bg-purple-900/50 border border-purple-500/40 hover:border-arv-gold text-white font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
              >
                <span>BROWSE ALL PRODUCTS</span>
                <ArrowUpRight className="w-4 h-4 text-arv-gold" />
              </button>
            </div>

            {/* Guarantee Pill */}
            <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20 max-w-md flex items-center gap-3">
              <Shield className="w-5 h-5 text-arv-gold shrink-0" />
              <div className="text-xs text-white/60">
                <span className="text-white font-semibold">Strict NDA Guarantee:</span> All custom architecture briefs are protected under institutional confidentiality agreements.
              </div>
            </div>

          </FadeIn>

          {/* Right Column: Character #2 Female Developer & Floating UI panels */}
          <FadeIn delay={0.2} className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Glow Ring */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />

            {/* Character Card Visual with Card3D */}
            <Card3D maxTilt={6}>
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_45px_rgba(168,85,247,0.3)] bg-gradient-to-t from-black via-transparent to-transparent group">
                <img
                  src="/assets/images/female_dev.jpg"
                  alt="ARV Dev-gang Lead Software Architect"
                  className="w-full max-w-[380px] h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07060e] via-[#07060e]/80 to-transparent" />

                {/* Character Floating Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-purple-500/40 p-3 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] text-arv-gold font-mono uppercase tracking-wider">
                        Engineering Director
                      </div>
                      <div className="font-podium font-bold text-white text-sm">
                        BESPOKE ENGINE ARCHITECTURE
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-arv-gold/40 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-arv-gold" />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-[9px] text-purple-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Accepting Custom Project Sprints Q4 2026</span>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Floating Floating Code Panel (Top Right) */}
            <div className="absolute -top-6 -right-4 sm:-right-8 bg-[#0b0a17]/90 backdrop-blur-md border border-purple-500/35 p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] hidden sm:block animate-float pointer-events-none z-20">
              <div className="flex items-center gap-2 border-b border-purple-500/20 pb-1.5 mb-1.5">
                <Terminal className="w-3.5 h-3.5 text-arv-gold" />
                <span className="text-[9px] font-mono text-white/70">GameLogic.engine.ts</span>
              </div>
              <pre className="text-[8px] font-mono text-purple-300">
                {`const spin = await engine.evalRNG({\n  rtp: 0.985,\n  volatility: 'HIGH',\n  seed: crypto.randomBytes(32)\n});`}
              </pre>
            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
};
