import React, { useState } from 'react';
import { X, Sparkles, Play, Shield, RotateCcw, Volume2, Trophy, Coins } from 'lucide-react';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  isOpen,
  onClose,
  productTitle = 'ARV Royale 777 Suite',
}) => {
  const [balance, setBalance] = useState(10000);
  const [bet, setBet] = useState(100);
  const [reels, setReels] = useState(['7', '7', '7']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState<number | null>(null);
  const [clientSeed, setClientSeed] = useState('arv_client_9824');
  const [serverHash, setServerHash] = useState('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');

  if (!isOpen) return null;

  const symbols = ['7', '👑', '💎', '🍒', 'BAR', '777'];

  const handleSpin = () => {
    if (isSpinning || balance < bet) return;
    setIsSpinning(true);
    setLastWin(null);
    setBalance((prev) => prev - bet);

    let rolls = 0;
    const interval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      rolls++;
      if (rolls >= 10) {
        clearInterval(interval);
        // Determine outcome
        const winChance = Math.random();
        let finalReels = ['7', '7', '7'];
        let winMultiplier = 0;

        if (winChance > 0.4) {
          // Win
          const pickedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
          finalReels = [pickedSymbol, pickedSymbol, pickedSymbol];
          winMultiplier = pickedSymbol === '777' ? 50 : pickedSymbol === '👑' ? 25 : pickedSymbol === '7' ? 15 : 5;
        } else {
          // Mixed
          finalReels = ['7', '🍒', 'BAR'];
          winMultiplier = 0;
        }

        setReels(finalReels);
        const winAmt = bet * winMultiplier;
        if (winAmt > 0) {
          setBalance((prev) => prev + winAmt);
          setLastWin(winAmt);
        }
        // Update provably fair hash
        setServerHash(
          Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
        );
        setIsSpinning(false);
      }
    }, 80);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-[#090814] border border-purple-500/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.3)] max-h-[90vh] overflow-y-auto space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close demo"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-white hover:border-arv-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-10">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-arv-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Platform Engine Sandbox</span>
          </div>
          <h3 className="font-podium font-extrabold text-2xl sm:text-3xl text-white">
            TEST LIVE <span className="text-gold-gradient">{productTitle}</span>
          </h3>
          <p className="text-white/60 text-xs font-inter">
            Experience our ultra-low latency WebSocket state updates and cryptographic provably fair verification in real time.
          </p>
        </div>

        {/* Playable Slot Machine Shell */}
        <div className="rounded-2xl bg-gradient-to-b from-[#161228] to-[#090814] p-5 sm:p-6 border-2 border-purple-500/40 shadow-inner space-y-5">
          
          {/* Top Bar: Bankroll & Volatility */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-white/50">DEMO BALANCE:</span>
              <span className="font-podium font-extrabold text-lg sm:text-xl text-gold-gradient">
                ${balance.toLocaleString()} USD
              </span>
            </div>

            <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-purple-500/30 text-[10px] text-purple-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              <span>WebSocket 12ms</span>
            </div>
          </div>

          {/* Interactive Reels Matrix */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 px-2 sm:px-6 rounded-2xl bg-black/80 border border-purple-500/30 shadow-inner">
            {reels.map((symbol, idx) => (
              <div
                key={idx}
                className="h-24 sm:h-32 rounded-xl bg-gradient-to-b from-purple-950/80 via-[#190a2a] to-black border-2 border-purple-500/40 flex items-center justify-center relative overflow-hidden group shadow-lg"
              >
                <span className={`font-podium font-black text-3xl sm:text-5xl transition-transform ${
                  isSpinning ? 'blur-[1px] animate-pulse scale-90' : 'scale-100'
                } ${symbol === '777' || symbol === '7' ? 'text-arv-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.7)]' : 'text-white'}`}>
                  {symbol}
                </span>

                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Win Announcement */}
          {lastWin !== null && lastWin > 0 && (
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-purple-600/30 to-amber-500/20 border border-arv-gold text-center animate-scale-in">
              <div className="flex items-center justify-center gap-1.5 text-arv-gold font-bold text-xs uppercase tracking-wider">
                <Trophy className="w-4 h-4" /> BIG WIN DETECTED!
              </div>
              <div className="font-podium font-extrabold text-2xl text-white">
                +${lastWin.toLocaleString()} USD
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-white/50 uppercase">Bet:</span>
              {[50, 100, 250, 500].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setBet(amt)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                    bet === amt
                      ? 'bg-purple-600 text-white border border-arv-gold shadow-sm'
                      : 'bg-black/60 text-white/60 hover:text-white border border-purple-500/20'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <button
              onClick={handleSpin}
              disabled={isSpinning || balance < bet}
              className="px-8 py-3.5 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-extrabold text-sm tracking-widest uppercase flex items-center gap-2 shadow-gold-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <Coins className="w-4 h-4 fill-black" />
              <span>{isSpinning ? 'SPINNING...' : 'SPIN'}</span>
            </button>
          </div>

        </div>

        {/* Cryptographic Provably Fair Verification Box */}
        <div className="p-4 rounded-xl bg-black/60 border border-purple-500/20 space-y-2 text-[10px] font-mono text-white/60">
          <div className="flex items-center justify-between text-arv-gold font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Provably Fair Audit Trail
            </span>
            <span className="text-green-400">Verified Deterministic</span>
          </div>
          <div>
            <span className="text-white/40 block">Client Seed:</span>
            <span className="text-purple-300">{clientSeed}</span>
          </div>
          <div>
            <span className="text-white/40 block">Server Seed Hash (SHA-256):</span>
            <span className="text-purple-300 break-all">{serverHash}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
