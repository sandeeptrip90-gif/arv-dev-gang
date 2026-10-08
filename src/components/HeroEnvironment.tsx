import React, { useEffect, useRef } from 'react';
import { DeviceMockupLaptop } from './DeviceMockupLaptop';
import { DeviceMockupPhone } from './DeviceMockupPhone';
import { Sparkles } from 'lucide-react';

export const HeroEnvironment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      container.style.setProperty('--mx', currentX.toFixed(4));
      container.style.setProperty('--my', currentY.toFixed(4));
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl lg:max-w-none lg:h-[560px] xl:h-[600px] flex items-center justify-center select-none"
    >
      <div
        style={{
          transform: 'translate3d(calc(var(--mx, 0) * 8px), calc(var(--my, 0) * 8px), 0)',
          willChange: 'transform',
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none -top-10 -right-10 animate-pulse-glow"
      />
      <div
        style={{
          transform: 'translate3d(calc(var(--mx, 0) * -12px), calc(var(--my, 0) * -12px), 0)',
          willChange: 'transform',
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-amber-500/15 blur-[90px] pointer-events-none bottom-10 left-10"
      />

      {/* Primary: enlarged laptop mockup */}
      <div
        style={{
          transform: 'translate3d(calc(var(--mx, 0) * 8px), calc(var(--my, 0) * 8px), 0)',
          willChange: 'transform',
        }}
        className="relative z-10 w-full max-w-[560px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[760px] xl:max-w-[820px]"
      >
        <DeviceMockupLaptop />
      </div>

      {/* Founder / mascot overlay */}
      <div
        style={{
          transform: 'translate3d(calc(var(--mx, 0) * 16px), calc(var(--my, 0) * 16px), 0)',
          willChange: 'transform',
        }}
        className="absolute -right-2 sm:right-0 md:-right-4 lg:-right-8 bottom-0 z-30 w-32 sm:w-40 md:w-48 lg:w-56 pointer-events-none"
      >
        <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_25px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(168,85,247,0.3)] bg-gradient-to-t from-black via-transparent to-transparent">
          <img
            src="/assets/images/hero_mascot.jpg"
            alt="ARV Dev-gang Lead Architect"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md border border-purple-500/40 p-2 rounded-xl text-left pointer-events-auto">
            <div className="flex items-center gap-1 text-[8px] text-arv-gold font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-2.5 h-2.5" /> Founder & Lead Architect
            </div>
            <div className="font-podium font-bold text-white text-[11px]">
              READY-TO-DEPLOY SUITES
            </div>
          </div>
        </div>
      </div>

      {/* Phone overlay */}
      <div
        style={{
          transform: 'translate3d(calc(var(--mx, 0) * 14px), calc(var(--my, 0) * 14px), 0)',
          willChange: 'transform',
        }}
        className="absolute left-2 sm:left-4 md:-left-2 lg:-left-6 -bottom-6 sm:-bottom-2 z-30 hidden sm:block"
      >
        <DeviceMockupPhone />
      </div>
    </div>
  );
};
