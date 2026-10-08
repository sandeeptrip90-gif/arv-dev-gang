import React, { useState } from 'react';
import { Code2, Zap } from 'lucide-react';

interface ProviderItem {
  id: string;
  name: string;
  tag: string;
  games: string;
  rtp: string;
  logo: string;
  color: string;
}

export const PROVIDERS_ROW_1: ProviderItem[] = [
  { id: 'pg-soft', name: 'PG Soft', tag: 'Pocket Games Soft', games: '140+ Games', rtp: '97.4%', logo: '/assets/logos/pg-soft.png', color: '#FF3366' },
  { id: 'pragmatic-play', name: 'Pragmatic Play', tag: 'Live & Slots Engine', games: '380+ Games', rtp: '96.8%', logo: '/assets/logos/pragmatic-play.svg', color: '#FF8A00' },
  { id: 'jili', name: 'JILI Games', tag: 'Asian Arcade & Slots', games: '110+ Games', rtp: '98.2%', logo: '/assets/logos/jili.png', color: '#FFD200' },
  { id: 'jdb', name: 'JDB Gaming', tag: 'Just Do Best', games: '120+ Games', rtp: '97.1%', logo: '/assets/logos/jdb.svg', color: '#00A2FF' },
  { id: 'cq9', name: 'CQ9 Gaming', tag: 'High Volatility Slots', games: '190+ Games', rtp: '96.9%', logo: '/assets/logos/cq9.png', color: '#FF1A4B' },
  { id: 'fc', name: 'Fa Chai (FC)', tag: 'Fortune & Fishing', games: '75+ Games', rtp: '97.8%', logo: '/assets/logos/fc.svg', color: '#FFDD44' },
  { id: 'tada', name: 'TaDa Gaming', tag: 'Next-Gen Mobile Arcade', games: '90+ Games', rtp: '97.5%', logo: '/assets/logos/tada.png', color: '#00F0FF' },
  { id: 'evolution', name: 'Evolution', tag: 'Live Casino Real-Time', games: '120+ Tables', rtp: '99.5%', logo: '/assets/logos/evolution.svg', color: '#D4AF37' },
  { id: 'spribe', name: 'Spribe', tag: 'Aviator Crash Pioneer', games: '15+ Crash Games', rtp: '97.0%', logo: '/assets/logos/spribe.svg', color: '#E50914' },
  { id: 'hacksaw', name: 'Hacksaw Gaming', tag: 'Dare2Win Scratch & Slots', games: '130+ Games', rtp: '96.5%', logo: '/assets/logos/hacksaw.png', color: '#FCEE21' },
  { id: 'nolimit-city', name: 'Nolimit City', tag: 'xWays Extreme Math', games: '85+ Games', rtp: '96.3%', logo: '/assets/logos/nolimit-city.svg', color: '#E6A100' },
  { id: 'playngo', name: 'Play\'n GO', tag: 'Omni-Channel Leader', games: '300+ Games', rtp: '96.6%', logo: '/assets/logos/playngo.webp', color: '#00AEEF' },
  { id: 'microgaming', name: 'Microgaming', tag: 'Global Mega Jackpots', games: '450+ Games', rtp: '96.2%', logo: '/assets/logos/microgaming.png', color: '#00E5FF' },
];

interface LanguageItem {
  id: string;
  name: string;
  tag: string;
  stack: string;
  logo: string;
}

export const LANGUAGES_ROW: LanguageItem[] = [
  { id: 'java', name: 'Java', tag: 'JVM Backend', stack: 'Custom Dev', logo: '/assets/logos/langs/java.svg' },
  { id: 'nodejs', name: 'Node.js', tag: 'Realtime APIs', stack: 'Custom Dev', logo: '/assets/logos/langs/nodejs.svg' },
  { id: 'javascript', name: 'JavaScript', tag: 'Client & Server', stack: 'Custom Dev', logo: '/assets/logos/langs/javascript.svg' },
  { id: 'typescript', name: 'TypeScript', tag: 'Typed Platforms', stack: 'Custom Dev', logo: '/assets/logos/langs/typescript.svg' },
  { id: 'python', name: 'Python', tag: 'AI & Automation', stack: 'Custom Dev', logo: '/assets/logos/langs/python.svg' },
  { id: 'php', name: 'PHP', tag: 'Web Platforms', stack: 'Custom Dev', logo: '/assets/logos/langs/php.svg' },
  { id: 'mongodb', name: 'MongoDB', tag: 'NoSQL Data', stack: 'Custom Dev', logo: '/assets/logos/langs/mongodb.svg' },
  { id: 'sql', name: 'SQL', tag: 'Relational DB', stack: 'Custom Dev', logo: '/assets/logos/langs/sql.svg' },
  { id: 'mysql', name: 'MySQL', tag: 'Transactional SQL', stack: 'Custom Dev', logo: '/assets/logos/langs/mysql.svg' },
  { id: 'postgresql', name: 'PostgreSQL', tag: 'Enterprise SQL', stack: 'Custom Dev', logo: '/assets/logos/langs/postgresql.svg' },
  { id: 'react', name: 'React', tag: 'Product UI', stack: 'Custom Dev', logo: '/assets/logos/langs/react.svg' },
  { id: 'go', name: 'Go', tag: 'High-Concurrency', stack: 'Custom Dev', logo: '/assets/logos/langs/go.svg' },
  { id: 'csharp', name: 'C#', tag: '.NET Services', stack: 'Custom Dev', logo: '/assets/logos/langs/csharp.svg' },
  { id: 'redis', name: 'Redis', tag: 'In-Memory Speed', stack: 'Custom Dev', logo: '/assets/logos/langs/redis.svg' },
  { id: 'kotlin', name: 'Kotlin', tag: 'Android & JVM', stack: 'Custom Dev', logo: '/assets/logos/langs/kotlin.svg' },
  { id: 'docker', name: 'Docker', tag: 'Deploy Anywhere', stack: 'Custom Dev', logo: '/assets/logos/langs/docker.svg' },
];

const CARD_CLASS =
  'group relative w-[240px] sm:w-[270px] h-[92px] rounded-2xl bg-black hover:bg-black border border-purple-500/25 hover:border-arv-gold/60 p-3 flex items-center justify-between transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(234,179,8,0.2)] select-none shrink-0 cursor-pointer';

const MarqueeCard: React.FC<{
  logo: string;
  name: string;
  headline: string;
  tag: string;
  status: string;
}> = ({ logo, name, headline, tag, status }) => (
  <div className={CARD_CLASS}>
    <div className="w-[125px] sm:w-[140px] h-[48px] flex items-center justify-center p-1.5 rounded-xl bg-black">
      <img
        src={logo}
        alt={`${name} Logo`}
        className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col text-right pl-2">
      <span className="text-[10px] font-mono text-arv-gold font-bold">{headline}</span>
      <span className="text-[9px] text-white/50 font-inter line-clamp-1">{tag}</span>
      <span className="text-[8px] font-mono text-green-400 mt-1 flex items-center justify-end gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        {status}
      </span>
    </div>
  </div>
);

const LanguageCard: React.FC<{ logo: string; name: string; tag: string }> = ({ logo, name, tag }) => (
  <div className="group relative w-[148px] sm:w-[160px] h-[56px] rounded-xl bg-black border border-arv-gold/45 hover:border-arv-gold p-2 flex items-center gap-2.5 transition-all duration-300 hover:shadow-gold-sm select-none shrink-0 cursor-pointer">
    <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#0a0a0a]">
      <img
        src={logo}
        alt={`${name} Logo`}
        className="max-h-8 max-w-8 object-contain group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div className="min-w-0 flex flex-col">
      <span className="text-[11px] font-mono text-arv-gold font-bold leading-tight truncate">{name}</span>
      <span className="text-[8px] text-white/55 font-inter leading-tight truncate">{tag}</span>
    </div>
  </div>
);

export const PROVIDERS_ROW_2: ProviderItem[] = [
  { id: 'netent', name: 'NetEnt', tag: 'Iconic Video Slots', games: '200+ Games', rtp: '96.9%', logo: '/assets/logos/netent.svg', color: '#88D800' },
  { id: 'red-tiger', name: 'Red Tiger', tag: 'Daily Drop Jackpots', games: '180+ Games', rtp: '96.4%', logo: '/assets/logos/red-tiger.svg', color: '#FF4444' },
  { id: 'playtech', name: 'Playtech', tag: 'Enterprise Omni-Channel', games: '350+ Games', rtp: '96.5%', logo: '/assets/logos/playtech.svg', color: '#00A3FF' },
  { id: 'yggdrasil', name: 'Yggdrasil', tag: 'Innovative Mechanics', games: '160+ Games', rtp: '96.7%', logo: '/assets/logos/yggdrasil.svg', color: '#E5A823' },
  { id: 'betsoft', name: 'Betsoft', tag: 'Cinematic 3D Graphics', games: '170+ Games', rtp: '97.0%', logo: '/assets/logos/betsoft.svg', color: '#FF5252' },
  { id: 'habanero', name: 'Habanero', tag: 'High-Speed Pure RNG', games: '140+ Games', rtp: '96.8%', logo: '/assets/logos/habanero.svg', color: '#FFA726' },
  { id: 'spadegaming', name: 'Spadegaming', tag: 'Asian Cultural Suites', games: '110+ Games', rtp: '97.2%', logo: '/assets/logos/spadegaming.svg', color: '#FFD700' },
  { id: 'saba-sports', name: 'Saba Sports', tag: 'Live Sportsbook Feed', games: '200+ Markets', rtp: '96.8%', logo: '/assets/logos/saba-sports.svg', color: '#E31C23' },
  { id: 'kingmaker', name: 'Kingmaker', tag: 'Virtual Table & Cards', games: '50+ Games', rtp: '98.1%', logo: '/assets/logos/kingmaker.png', color: '#FFD700' },
  { id: 'rich88', name: 'Rich88', tag: 'Multiplayer Casino', games: '80+ Games', rtp: '97.3%', logo: '/assets/logos/rich88.svg', color: '#FFD700' },
  { id: 'relax-gaming', name: 'Relax Gaming', tag: 'Money Train & Casino', games: '120+ Games', rtp: '96.5%', logo: '/assets/logos/relax-gaming.svg', color: '#B388FF' },
  { id: 'bgaming', name: 'BGaming', tag: 'Crypto-First Studios', games: '95+ Games', rtp: '97.1%', logo: '/assets/logos/bgaming.svg', color: '#E040FB' },
  { id: 'booongo', name: 'Booongo', tag: 'Hold & Win Specialists', games: '70+ Games', rtp: '96.4%', logo: '/assets/logos/booongo.svg', color: '#FF6D00' },
];

export const ProviderMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-[#06050b] overflow-hidden border-y border-purple-500/20">
      
      {/* 3D Background Lighting Ambient Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 mb-6 sm:mb-8">
        
        {/* Top Eyebrow & Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/40 px-3.5 py-1.5 rounded-full shadow-purple-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
                SINGLE-WALLET SEAMLESS AGGREGATION
              </span>
            </div>

            <h2 className="font-podium font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl text-white">
              20+ PLATFORM APIS &amp; <span className="text-gold-gradient">2,000+ GAMES</span>
            </h2>

            <p className="font-inter text-xs sm:text-sm lg:text-base text-white/70 max-w-2xl">
              Pre-integrated server-to-server gateway connecting every tier-1 gaming studio: <strong className="text-white">PG Soft, Pragmatic Play, JILI, JDB, CQ9, FC, TaDa</strong> and 20+ licensed platform APIs ready for instant white-label deployment.
            </p>
          </div>

          {/* Key Stat Cards Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-center">
              <div className="font-podium font-black text-lg sm:text-xl text-arv-gold">20+</div>
              <div className="text-[9px] uppercase font-mono text-white/50 tracking-wider">Platform APIs</div>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-center">
              <div className="font-podium font-black text-lg sm:text-xl text-white">2,000+</div>
              <div className="text-[9px] uppercase font-mono text-white/50 tracking-wider">Top Games</div>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-center">
              <div className="font-podium font-black text-lg sm:text-xl text-green-400">&lt;15ms</div>
              <div className="text-[9px] uppercase font-mono text-white/50 tracking-wider">Socket Speed</div>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-center">
              <div className="font-podium font-black text-lg sm:text-xl text-purple-300">100%</div>
              <div className="text-[9px] uppercase font-mono text-white/50 tracking-wider">Seamless Wallet</div>
            </div>
          </div>
        </div>

      </div>

      {/* Auto Scrollbar / Infinite Marquee Container */}
      <div
        className="relative w-full space-y-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left and Right Edge Vignette Shadows */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#06050b] via-[#06050b]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#06050b] via-[#06050b]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex gap-4 w-max marquee-track-left" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {[...PROVIDERS_ROW_1, ...PROVIDERS_ROW_1, ...PROVIDERS_ROW_1].map((p, idx) => (
            <MarqueeCard
              key={`${p.id}-r1-${idx}`}
              logo={p.logo}
              name={p.name}
              headline={p.games}
              tag={p.tag}
              status={`RTP ${p.rtp}`}
            />
          ))}
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex gap-4 w-max marquee-track-right" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {[...PROVIDERS_ROW_2, ...PROVIDERS_ROW_2, ...PROVIDERS_ROW_2].map((p, idx) => (
            <MarqueeCard
              key={`${p.id}-r2-${idx}`}
              logo={p.logo}
              name={p.name}
              headline={p.games}
              tag={p.tag}
              status={`RTP ${p.rtp}`}
            />
          ))}
        </div>

        <div className="relative overflow-hidden py-4 sm:py-5">
          <div className="absolute inset-0 bg-gradient-to-r from-arv-gold/0 via-arv-gold/12 to-arv-gold/0 pointer-events-none" />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(234,179,8,0.12)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arv-gold to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arv-gold/80 to-transparent" />

          <div className="relative z-10 flex items-center justify-center gap-2 mb-3 px-6">
            <Code2 className="w-3.5 h-3.5 text-arv-gold" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] uppercase text-arv-gold text-center">
              We create programs in every language
            </span>
            <span className="hidden sm:inline text-[9px] font-mono text-white/45 tracking-widest uppercase">
              • Full custom engineering
            </span>
          </div>

          <div className="flex gap-2.5 w-max marquee-track-right" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {[...LANGUAGES_ROW, ...LANGUAGES_ROW, ...LANGUAGES_ROW].map((lang, idx) => (
              <LanguageCard
                key={`${lang.id}-lang-${idx}`}
                logo={lang.logo}
                name={lang.name}
                tag={lang.tag}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Helper Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-6 flex items-center justify-between text-[11px] text-white/40 font-mono">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-arv-gold" />
          Seamless Single Wallet API • Custom code in Java, Node, Python, PHP & SQL
        </span>
        <span className="hidden sm:inline text-purple-300/60">
          Hover over logos to pause auto-scroll
        </span>
      </div>

    </section>
  );
};
