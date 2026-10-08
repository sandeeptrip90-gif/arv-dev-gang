import React from 'react';
import { Trophy, Award, ShieldCheck, CheckCircle2, Star, Sparkles, ExternalLink } from 'lucide-react';
import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

interface AwardItem {
  id: string;
  name: string;
  category: string;
  year: string;
  logo: string;
  verdict: string;
  certificateId: string;
  accent: string;
  plate?: 'light' | 'dark';
}

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'editor-choice',
    name: "Editor's Choice Award",
    category: 'Best Turnkey iGaming Architecture & API',
    year: '2026 WINNER',
    logo: '/assets/awards/editor-choice.svg',
    verdict: 'Awarded Editors\' Choice for exceptional latency, fault-tolerant microservices, and unified wallet engineering.',
    certificateId: 'GGR-ED-2026-994',
    accent: '#FFD700',
  },
  {
    id: 'egr-b2b',
    name: 'EGR B2B Awards',
    category: 'Platform Provider of the Year',
    year: '2026 GOLD TROPHY',
    logo: '/assets/awards/egr-b2b.png',
    verdict: 'Recognized for 100k+ CCU concurrent throughput without degradation across 5 continents.',
    certificateId: 'EGR-B2B-PLAT-01',
    accent: '#E5B824',
  },
  {
    id: 'sbc-awards',
    name: 'SBC Awards Global',
    category: 'Best High-Concurrency Software Suite',
    year: '2026 EXCELLENCE',
    logo: '/assets/awards/sbc-awards.png',
    plate: 'light',
    verdict: 'Voted top infrastructure supplier for zero-drop websocket communication and real-time ledger settlement.',
    certificateId: 'SBC-2026-HC-77',
    accent: '#FF8A00',
  },
  {
    id: 'sigma-world',
    name: 'SiGMA World Gaming',
    category: 'Best Turnkey White-Label Solution',
    year: '2026 SUMMIT WINNER',
    logo: '/assets/awards/sigma-world.svg',
    plate: 'dark',
    verdict: 'Distinguished at SiGMA Global for comprehensive modular backoffices and fast-track 24H deployments.',
    certificateId: 'SIG-WL-2026-88',
    accent: '#00F0FF',
  },
  {
    id: 'iga-award',
    name: 'International Gaming Awards',
    category: 'Technology Provider of the Year',
    year: '2026 PRESTIGE',
    logo: '/assets/awards/iga-award.png',
    verdict: 'Honored for SHA-256 cryptographic provably fair engines and institutional risk-shield algorithms.',
    certificateId: 'IGA-TECH-2026-19',
    accent: '#D4AF37',
  },
];

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="relative py-12 sm:py-16 lg:py-20 bg-[#050508] overflow-hidden border-t border-purple-500/15">
      
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-arv-gold/40 px-4 py-1.5 rounded-full shadow-gold-sm">
            <Trophy className="w-4 h-4 text-arv-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
              GLOBAL INDUSTRY RECOGNITION &amp; ACCOLADES
            </span>
          </div>

          <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-white">
            EDITOR&apos;S CHOICE &amp; <span className="text-gold-gradient drop-shadow-[0_0_35px_rgba(234,179,8,0.35)]">INDUSTRY AWARDS</span>
          </h2>

          <p className="font-inter text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
            Engineered to exceed the highest compliance standards in global gambling jurisdictions. Celebrated by international gaming editors, testing labs, and technology summits.
          </p>
        </FadeIn>

        {/* Featured Centerpiece: Editor's Choice Spotlight Banner */}
        <FadeIn delay={0.2} className="mb-8 sm:mb-10">
          <Card3D maxTilt={6} className="w-full">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#161226] via-[#0d0a18] to-[#120a1c] border-2 border-arv-gold/50 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(234,179,8,0.25)] overflow-hidden">
              
              {/* Radial Highlight */}
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-arv-gold/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left: 3D Medallion Emblem */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
                  <div className="relative w-[150px] h-[278px] sm:w-[168px] sm:h-[312px] group/emblem transition-transform duration-500 hover:scale-105 flex items-center justify-center">
                    <img
                      src="/assets/awards/editor-choice.svg"
                      alt="Official Editors' Choice award badge"
                      className="w-full h-full object-contain drop-shadow-[0_18px_40px_rgba(223,0,35,0.45)]"
                    />
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-arv-gold/40 text-[10px] font-mono text-arv-gold uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-arv-gold" />
                    Verified Citation #GGR-ED-2026
                  </div>
                </div>

                {/* Right: Detailed Award Rationale & Spec */}
                <div className="lg:col-span-8 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arv-gold/15 border border-arv-gold/40 text-arv-gold text-xs font-mono font-bold uppercase tracking-wider">
                    ★ OFFICIAL 2026 EDITORIAL WINNER
                  </div>

                  <h3 className="font-podium font-extrabold uppercase text-2xl sm:text-4xl text-white">
                    BEST TURNKEY iGAMING PLATFORM &amp; API ARCHITECTURE
                  </h3>

                  <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed">
                    &ldquo;ARV Dev-gang has redefined what operators expect from ready-made gaming platforms. Their ultra-low latency WebSocket engines, certified RNG mathematics, and seamless single-wallet aggregation deliver an unmatched player experience and seamless commercial scalability.&rdquo;
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-black/50 border border-purple-500/20">
                      <div className="text-[10px] uppercase font-mono text-white/50">Audited Throughput</div>
                      <div className="font-podium font-bold text-base sm:text-lg text-arv-gold mt-0.5">100,000+ CCU</div>
                      <div className="text-[9px] text-green-400 mt-0.5">Zero Packet Loss</div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-purple-500/20">
                      <div className="text-[10px] uppercase font-mono text-white/50">Cryptographic Fairness</div>
                      <div className="font-podium font-bold text-base sm:text-lg text-purple-300 mt-0.5">SHA-256 Proven</div>
                      <div className="text-[9px] text-white/60 mt-0.5">Client &amp; Server Seeds</div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-purple-500/20">
                      <div className="text-[10px] uppercase font-mono text-white/50">API Response SLA</div>
                      <div className="font-podium font-bold text-base sm:text-lg text-green-400 mt-0.5">&lt; 15ms Socket</div>
                      <div className="text-[9px] text-white/60 mt-0.5">Global CDN Edge</div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/60">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-arv-gold" />
                      <span>Certified GLI-19 &amp; GLI-21 Compliant</span>
                    </div>
                    <span className="text-white/20">•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-arv-gold" />
                      <span>ISO/IEC 27001 Security Standard</span>
                    </div>
                    <span className="text-white/20 hidden sm:inline">•</span>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>Full Commercial IP Ownership</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </Card3D>
        </FadeIn>

        {/* 4 Additional Industry Awards in 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_LIST.slice(1).map((award, index) => (
            <FadeIn key={award.id} delay={0.15 * index}>
              <Card3D maxTilt={10} className="h-full">
                <div className="h-full rounded-2xl bg-[#0a0815]/90 border border-purple-500/25 p-6 flex flex-col justify-between transition-all duration-300 hover:border-arv-gold/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(234,179,8,0.2)] group">
                  
                  <div>
                    {/* Official organization logo */}
                    <div
                      className={`w-full h-[76px] mx-auto mb-4 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 ${
                        award.plate === 'light' ? 'bg-white p-3' : award.id === 'iga-award' ? 'bg-[#6b1c1c] p-0' : 'bg-black p-3'
                      }`}
                    >
                      <img
                        src={award.logo}
                        alt={`${award.name} official logo`}
                        className={award.id === 'iga-award' ? 'h-full w-full object-cover' : 'max-h-[58px] max-w-[90%] object-contain'}
                      />
                    </div>

                    {/* Year & Category */}
                    <div className="text-center space-y-1 mb-3">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-arv-gold uppercase block">
                        {award.year}
                      </span>
                      <h4 className="font-podium font-bold text-lg text-white group-hover:text-gold-gradient transition-colors">
                        {award.name}
                      </h4>
                      <p className="text-xs text-purple-300 font-mono">
                        {award.category}
                      </p>
                    </div>

                    {/* Verdict Description */}
                    <p className="text-white/60 text-xs leading-relaxed text-center font-inter mb-4">
                      {award.verdict}
                    </p>
                  </div>

                  {/* Footer Certificate ID */}
                  <div className="border-t border-purple-500/15 pt-3 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>ID: {award.certificateId}</span>
                    <span className="text-arv-gold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> VERIFIED
                    </span>
                  </div>

                </div>
              </Card3D>
            </FadeIn>
          ))}
        </div>

        {/* Regulatory & Security Compliance Ribbon */}
        <FadeIn delay={0.5} className="mt-8 sm:mt-10 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0a0814] to-purple-950/40 border border-purple-500/25 p-5 sm:p-6 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span>GLI-19 &amp; GLI-21 RNG CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-mono">
            <span className="w-2 h-2 rounded-full bg-arv-gold" />
            <span>BMM TESTLABS ACCREDITED MATH</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>ISO/IEC 27001 ISMS SECURE</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>MGA &amp; CURAÇAO LICENSE READY</span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
