import React, { useState } from 'react';
import { Search, Bell, Wallet, Shield, Flame, Play, Trophy, Sparkles } from 'lucide-react';

export const DeviceMockupLaptop: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'slots' | 'live' | 'tournaments'>('slots');
  const [demoSpinning, setDemoSpinning] = useState(false);
  const [slotValues, setSlotValues] = useState(['7', '👑', '7']);

  const handleQuickSpin = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (demoSpinning) return;
    setDemoSpinning(true);
    const symbols = ['7', '👑', '💎', '🍒', 'BAR', '777'];
    let counter = 0;
    const interval = setInterval(() => {
      setSlotValues([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        setSlotValues(['7', '7', '7']);
        setDemoSpinning(false);
      }
    }, 90);
  };

  return (
    <div className="relative group/laptop select-none">
      {/* Laptop Outer Bezel */}
      <div className="relative mx-auto rounded-t-xl bg-[#12111d] p-2.5 sm:p-3 border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(168,85,247,0.2)]">
        {/* Webcam */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-950 border border-purple-500/40" />
          <div className="w-1 h-1 rounded-full bg-green-500/60" />
        </div>

        {/* Display Screen */}
        <div className="relative rounded-lg bg-[#07060c] overflow-hidden border border-white/5 text-[10px] sm:text-xs">
          
          {/* Top Bar */}
          <div className="bg-[#0b0914] px-3 py-1.5 border-b border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <div className="h-3 w-px bg-white/10 mx-1" />
              <span className="font-podium font-bold tracking-wider text-[11px] text-white">
                ARV <span className="text-arv-gold">ROYALE</span>
              </span>
            </div>

            {/* Browser URL bar representation */}
            <div className="hidden sm:flex items-center gap-1.5 bg-black/50 px-3 py-0.5 rounded-full border border-purple-500/20 text-white/50 text-[10px]">
              <Shield className="w-3 h-3 text-arv-gold" />
              <span>https://client-casino.arv-solutions.io/lobby</span>
            </div>

            {/* Wallet & Profile */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-purple-950/70 border border-purple-500/40 px-2 py-0.5 rounded text-[10px]">
                <Wallet className="w-2.5 h-2.5 text-arv-gold" />
                <span className="font-semibold text-arv-gold">$1,482,900</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-700 to-amber-500 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                VIP
              </div>
            </div>
          </div>

          {/* Software Content Layout */}
          <div className="flex min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] bg-[#07060c]">
            {/* Sidebar */}
            <div className="w-14 sm:w-28 bg-[#0a0815] border-r border-purple-500/15 p-2 flex flex-col justify-between">
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveTab('slots')}
                  className={`w-full text-left px-2 py-1 rounded flex items-center gap-1.5 font-medium transition-all ${
                    activeTab === 'slots' 
                      ? 'bg-purple-600/30 text-arv-gold border-l-2 border-arv-gold' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Flame className="w-3 h-3 text-arv-gold shrink-0" />
                  <span className="hidden sm:inline">Slots 777</span>
                </button>
                <button 
                  onClick={() => setActiveTab('live')}
                  className={`w-full text-left px-2 py-1 rounded flex items-center gap-1.5 font-medium transition-all ${
                    activeTab === 'live' 
                      ? 'bg-purple-600/30 text-arv-gold border-l-2 border-arv-gold' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Play className="w-3 h-3 text-purple-400 shrink-0" />
                  <span className="hidden sm:inline">Live Tables</span>
                </button>
                <button 
                  onClick={() => setActiveTab('tournaments')}
                  className={`w-full text-left px-2 py-1 rounded flex items-center gap-1.5 font-medium transition-all ${
                    activeTab === 'tournaments' 
                      ? 'bg-purple-600/30 text-arv-gold border-l-2 border-arv-gold' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Trophy className="w-3 h-3 text-arv-gold shrink-0" />
                  <span className="hidden sm:inline">Jackpots</span>
                </button>
              </div>

              <div className="hidden sm:block p-1.5 rounded bg-purple-900/20 border border-purple-500/20 text-[9px] text-white/70">
                <div className="text-arv-gold font-bold">RTP 98.6%</div>
                <div>Provably Fair</div>
              </div>
            </div>

            {/* Main Stage */}
            <div className="flex-1 p-2 sm:p-3 overflow-hidden flex flex-col justify-between">
              {/* Promo Banner with Interactive Mini-Reel */}
              <div className="relative rounded-lg bg-gradient-to-r from-purple-950/80 via-black to-[#190a2a] p-2 sm:p-3 border border-purple-500/30 overflow-hidden">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1 text-[9px] text-arv-gold font-semibold uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" /> Jackpots Progressive
                    </div>
                    <div className="font-podium font-bold text-white text-xs sm:text-sm tracking-wide">
                      ROYAL PHOENIX <span className="text-arv-gold">MEGA-777</span>
                    </div>
                    <div className="text-white/60 text-[9px]">Prize Pool: $4,850,230.00</div>
                  </div>

                  {/* Interactive Mini Slot Display */}
                  <div className="flex items-center gap-1.5 bg-black/70 px-2 py-1 rounded-md border border-purple-500/40">
                    <div className="flex items-center gap-1 font-mono font-bold text-xs">
                      {slotValues.map((v, i) => (
                        <span key={i} className={`w-5 h-6 rounded bg-purple-900/60 border border-purple-500/30 flex items-center justify-center ${
                          v === '7' ? 'text-arv-gold' : 'text-purple-300'
                        }`}>
                          {v}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={handleQuickSpin}
                      disabled={demoSpinning}
                      className="px-2 py-0.5 rounded bg-gold-metallic hover:bg-gold-metallic-hover text-black font-bold text-[9px] tracking-wider transition-transform active:scale-95 disabled:opacity-50"
                    >
                      {demoSpinning ? '...' : 'SPIN'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Game Cards Row */}
              <div className="grid grid-cols-3 gap-1.5 mt-2">
                {[
                  { name: 'Crown 777', type: 'Slot', rtp: '98.8%', color: 'from-amber-600/30' },
                  { name: 'Velvet Live', type: 'Roulette', rtp: '97.3%', color: 'from-purple-600/30' },
                  { name: 'Cyber Crash', type: 'Instant', rtp: '99.0%', color: 'from-fuchsia-600/30' }
                ].map((game, i) => (
                  <div 
                    key={i} 
                    className="group relative rounded-md bg-[#0f0d1a] border border-purple-500/20 p-1.5 hover:border-arv-gold/50 transition-all hover:-translate-y-0.5"
                  >
                    <div className={`h-12 rounded bg-gradient-to-b ${game.color} to-black/60 flex items-center justify-center relative overflow-hidden`}>
                      <span className="font-podium font-bold text-[11px] text-white/90">{game.name}</span>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Play className="w-3.5 h-3.5 text-arv-gold fill-arv-gold" />
                      </div>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[8px] text-white/60">
                      <span>{game.type}</span>
                      <span className="text-arv-gold">{game.rtp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Ticker */}
              <div className="mt-1.5 flex items-center justify-between text-[8px] text-white/50 border-t border-white/5 pt-1">
                <span className="flex items-center gap-1 text-green-400">
                  <span className="w-1 h-1 rounded-full bg-green-400 animate-ping" />
                  Live Feeds 28ms
                </span>
                <span className="text-purple-300">Player @Roy*** won $12,400 on Crown 777</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Laptop Keyboard Base & Reflection */}
      <div className="relative mx-auto w-[105%] -mt-1 h-3 sm:h-4 bg-gradient-to-b from-[#262438] via-[#1a1828] to-[#0a0815] rounded-b-xl border-t border-purple-500/40 shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex items-center justify-center">
        <div className="w-14 sm:w-20 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
};
