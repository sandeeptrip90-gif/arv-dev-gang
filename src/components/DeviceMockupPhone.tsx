import React, { useState } from 'react';
import { Smartphone, Zap, Trophy, User, Home, Dice5, ChevronRight } from 'lucide-react';

export const DeviceMockupPhone: React.FC = () => {
  const [activeBottomTab, setActiveBottomTab] = useState<'lobby' | 'games' | 'wallet'>('lobby');

  return (
    <div className="relative select-none w-44 sm:w-52">
      {/* Smartphone Chassis */}
      <div className="rounded-[2.2rem] bg-[#161426] p-2 border-2 border-purple-500/40 shadow-[0_25px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(168,85,247,0.25)]">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full flex items-center justify-end px-2 z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Screen Display */}
        <div className="rounded-[1.8rem] bg-[#07060e] overflow-hidden border border-white/5 pt-5 pb-2 px-2.5 text-[9px] flex flex-col justify-between min-h-[280px]">
          
          {/* Mobile App Header */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-white/60 text-[8px]">
              <span className="font-semibold text-white">9:41</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-1.5 border border-white/40 rounded-sm inline-block" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/50 text-[7px] uppercase tracking-wider">Mobile Arena</div>
                <div className="font-podium font-bold text-white text-[11px]">
                  ARV <span className="text-arv-gold">MOBILE</span>
                </div>
              </div>
              <div className="bg-purple-950/70 border border-purple-500/30 px-2 py-0.5 rounded-full text-arv-gold font-semibold text-[8px]">
                $24,850.00
              </div>
            </div>
          </div>

          {/* Quick Categories Pill */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {['🔥 Hot', '🎰 Slots', '⚡ Crash', '🃏 Live'].map((cat, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-full text-[8px] whitespace-nowrap ${
                  i === 0
                    ? 'bg-gold-metallic text-black font-bold'
                    : 'bg-purple-950/40 text-white/70 border border-purple-500/20'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Mobile Featured Game Card */}
          <div className="rounded-xl bg-gradient-to-br from-purple-900/70 via-[#180a29] to-black p-2 border border-purple-500/30 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="bg-arv-gold/20 text-arv-gold px-1.5 py-0.5 rounded text-[7px] font-bold">
                120 FPS
              </span>
              <span className="text-white/60 text-[7px]">x5000 Max</span>
            </div>
            
            <div className="mt-1 font-podium font-bold text-white text-[11px]">
              CYBER VEGAS 777
            </div>
            <div className="text-white/50 text-[7px] line-clamp-1">
              Low-latency native touch spins
            </div>

            <button className="mt-2 w-full py-1 rounded bg-gold-metallic hover:bg-gold-metallic-hover text-black font-bold text-[8px] flex items-center justify-center gap-1 shadow-sm">
              <Zap className="w-2.5 h-2.5 fill-current" />
              QUICK LAUNCH
            </button>
          </div>

          {/* Mini Tournament Banner */}
          <div className="p-1.5 rounded-lg bg-[#0e0c1a] border border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Trophy className="w-3 h-3 text-arv-gold" />
              <div>
                <div className="font-semibold text-white text-[8px]">Daily High-Roller</div>
                <div className="text-purple-300 text-[7px]">$50,000 Pool</div>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-white/40" />
          </div>

          {/* Bottom App Bar */}
          <div className="border-t border-purple-500/20 pt-1.5 flex items-center justify-around text-white/40 text-[7px]">
            <button 
              onClick={() => setActiveBottomTab('lobby')}
              className={`flex flex-col items-center gap-0.5 ${activeBottomTab === 'lobby' ? 'text-arv-gold' : ''}`}
            >
              <Home className="w-3 h-3" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => setActiveBottomTab('games')}
              className={`flex flex-col items-center gap-0.5 ${activeBottomTab === 'games' ? 'text-arv-gold' : ''}`}
            >
              <Dice5 className="w-3 h-3" />
              <span>Games</span>
            </button>
            <button 
              onClick={() => setActiveBottomTab('wallet')}
              className={`flex flex-col items-center gap-0.5 ${activeBottomTab === 'wallet' ? 'text-arv-gold' : ''}`}
            >
              <User className="w-3 h-3" />
              <span>Profile</span>
            </button>
          </div>

          {/* iOS Home Indicator */}
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
};
