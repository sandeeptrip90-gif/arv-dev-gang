import React from 'react';
import { Activity, Users, DollarSign, TrendingUp, Cpu, Server, CheckCircle2 } from 'lucide-react';

export const DeviceMockupTablet: React.FC = () => {
  return (
    <div className="relative select-none">
      {/* Tablet Body Frame */}
      <div className="rounded-2xl bg-[#141222] p-2.5 sm:p-3 border border-purple-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(168,85,247,0.2)]">
        {/* Camera Pin */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-950 border border-purple-500/30" />

        {/* Screen */}
        <div className="rounded-xl bg-[#090812] border border-white/5 p-2.5 sm:p-3 text-[10px] space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-[8px]">
                A
              </div>
              <span className="font-podium font-bold text-white text-[11px] tracking-wide">
                OPS <span className="text-arv-gold">TELEMETRY</span>
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              128,450 CCU Live
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/20">
              <div className="text-white/50 text-[8px] flex items-center justify-between">
                <span>24h GGR</span>
                <DollarSign className="w-2.5 h-2.5 text-arv-gold" />
              </div>
              <div className="font-bold text-arv-gold text-[11px] mt-0.5">$842.5K</div>
              <div className="text-[7px] text-green-400 flex items-center gap-0.5">
                <TrendingUp className="w-2 h-2" /> +24.8%
              </div>
            </div>

            <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/20">
              <div className="text-white/50 text-[8px] flex items-center justify-between">
                <span>Active Bets</span>
                <Activity className="w-2.5 h-2.5 text-purple-400" />
              </div>
              <div className="font-bold text-white text-[11px] mt-0.5">34.2K/m</div>
              <div className="text-[7px] text-purple-300">RTP 96.4%</div>
            </div>

            <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/20">
              <div className="text-white/50 text-[8px] flex items-center justify-between">
                <span>Security</span>
                <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
              </div>
              <div className="font-bold text-green-400 text-[11px] mt-0.5">Optimal</div>
              <div className="text-[7px] text-white/50">Shield Active</div>
            </div>
          </div>

          {/* Realtime Graph Simulation */}
          <div className="p-2 rounded bg-[#0d0b1a] border border-purple-500/20">
            <div className="flex items-center justify-between text-[8px] text-white/60 mb-1">
              <span>Concurrent Player Volatility</span>
              <span className="text-arv-gold">Tokyo • London • NY</span>
            </div>
            
            {/* SVG Wave chart */}
            <div className="h-12 w-full flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,35 Q 25,12 50,22 T 100,8 T 150,18 T 200,4 L 200,40 L 0,40 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M 0,35 Q 25,12 50,22 T 100,8 T 150,18 T 200,4"
                  fill="none"
                  stroke="#EAB308"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          </div>

          {/* Node Clusters Status */}
          <div className="flex items-center justify-between text-[8px] text-white/50 pt-0.5">
            <div className="flex items-center gap-1">
              <Server className="w-2.5 h-2.5 text-purple-400" />
              <span>EU-Central Cluster: 12ms</span>
            </div>
            <div className="flex items-center gap-1">
              <Cpu className="w-2.5 h-2.5 text-arv-gold" />
              <span>Load: 31%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
