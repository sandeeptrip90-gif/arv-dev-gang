import React from 'react';
import { Award, Rocket, Headphones, Wrench, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Premium Quality',
      subtitle: 'AAA Engineering Standards',
      desc: 'High-performance, modern and scalable solutions designed to handle peak gaming traffic with zero frame drops or backend bottlenecks.',
      icon: Award,
      badge: '99.99% SLA'
    },
    {
      num: '02',
      title: 'Ready to Deploy',
      subtitle: 'Turnkey Launch in Hours',
      desc: 'Get your gaming platform up and running quickly. Dockerized microservices and automated database migrations streamline launch day.',
      icon: Rocket,
      badge: '< 24H Delivery'
    },
    {
      num: '03',
      title: 'Full Support',
      subtitle: 'Round-The-Clock Ops',
      desc: 'Dedicated support and regular updates. Direct Slack/Telegram engineering channels with senior gaming software architects.',
      icon: Headphones,
      badge: '24/7/365 On-Call'
    },
    {
      num: '04',
      title: 'Custom Solutions',
      subtitle: 'Proprietary IP Transfer',
      desc: 'Tailored development built around your exact commercial requirements. Custom math models, exclusive themes, and total IP ownership.',
      icon: Wrench,
      badge: '100% Bespoke'
    }
  ];

  return (
    <section id="why-us" className="relative py-12 sm:py-16 lg:py-20 bg-[#07060e] overflow-hidden border-t border-purple-500/15">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
              INSTITUTIONAL TRUST
            </span>
          </div>

          <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            WHY CHOOSE <span className="text-gold-gradient">ARV DEV-GANG</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-white/60">
            We are not gambling operators. We are a specialized gaming software engineering studio building high-performance platforms for global brands.
          </p>
        </FadeIn>

        {/* 4 Pillars Grid with FadeIn and Card3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <FadeIn key={pillar.num} delay={idx * 0.1}>
                <Card3D maxTilt={7} className="h-full">
                  <div className="h-full group relative rounded-2xl bg-[#0b0a17] border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:border-arv-gold/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(168,85,247,0.2)] overflow-hidden">
                    {/* Large Background Number Label */}
                    <span className="font-podium font-black text-6xl sm:text-7xl text-purple-950/40 group-hover:text-purple-900/50 transition-colors absolute top-4 right-4 pointer-events-none select-none">
                      {pillar.num}
                    </span>

                    <div>
                      {/* Top Icon and Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/35 flex items-center justify-center group-hover:border-arv-gold group-hover:shadow-gold-sm transition-all duration-300">
                          <IconComp className="w-6 h-6 text-arv-gold" />
                        </div>

                        <span className="text-[9px] font-mono uppercase tracking-wider text-arv-gold bg-arv-gold/10 border border-arv-gold/30 px-2 py-0.5 rounded-full">
                          {pillar.badge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="space-y-1 mb-3">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-purple-300/80 block">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-podium font-bold text-xl sm:text-2xl text-white group-hover:text-gold-gradient transition-colors">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-inter">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Bottom decorative bar */}
                    <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center gap-1.5 text-[11px] text-white/50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-arv-gold" />
                      <span>Enterprise Grade Certified</span>
                    </div>

                  </div>
                </Card3D>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
