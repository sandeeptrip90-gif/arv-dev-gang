import React from 'react';
import { CATEGORIES, Category } from '../data/categories';
import { Crown, Gamepad2, Zap, BarChart3, Smartphone, Code2, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

interface CategoriesProps {
  onSelectCategory: (category: Category) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return Crown;
      case 'Gamepad2':
        return Gamepad2;
      case 'Zap':
        return Zap;
      case 'BarChart3':
        return BarChart3;
      case 'Smartphone':
        return Smartphone;
      case 'Code2':
        return Code2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="categories" className="relative py-12 sm:py-16 lg:py-20 bg-[#050508] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
              COMPREHENSIVE GAMING ECOSYSTEM
            </span>
          </div>

          <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
            PRODUCT <span className="text-gold-gradient">CATEGORIES</span>
          </h2>

          <p className="font-inter text-sm sm:text-base text-white/60">
            From certified RNG casino suites to high-concurrency esports engines and institutional telemetry dashboards.
          </p>
        </FadeIn>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const IconComp = getIcon(cat.iconName);
            return (
              <FadeIn key={cat.id} delay={idx * 0.1}>
                <Card3D maxTilt={7} className="h-full">
                  <div
                    onClick={() => onSelectCategory(cat)}
                    className="h-full group relative rounded-2xl bg-[#090812] border border-purple-500/25 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:border-arv-gold/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(168,85,247,0.2)] cursor-pointer overflow-hidden"
                  >
                    {/* Background Card Ambient Glow on Hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 group-hover:bg-purple-600/25 blur-2xl transition-all duration-500 pointer-events-none" />

                    <div>
                      {/* Top Row: Icon & Mascot Thumbnail Preview if available */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center group-hover:border-arv-gold group-hover:shadow-gold-sm transition-all duration-300">
                          <IconComp className="w-6 h-6 text-arv-gold group-hover:scale-110 transition-transform" />
                        </div>

                        {cat.mascotImage && (
                          <div className="relative group/mascot">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-500/40 group-hover:border-arv-gold transition-colors">
                              <img
                                src={cat.mascotImage}
                                alt={cat.characterTitle || cat.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            {cat.characterTitle && (
                              <span className="absolute -bottom-2 -left-2 bg-black/90 border border-arv-gold/40 text-[7px] text-arv-gold px-1.5 py-0.5 rounded-full font-mono uppercase whitespace-nowrap shadow-sm">
                                {cat.characterTitle}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Category Name & Subtitle */}
                      <div className="space-y-1 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-arv-gold block">
                          {cat.subtitle}
                        </span>
                        <h3 className="font-podium font-bold text-xl sm:text-2xl text-white group-hover:text-gold-gradient transition-colors">
                          {cat.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5 font-inter">
                        {cat.description}
                      </p>

                      {/* Feature Checkmarks */}
                      <div className="space-y-2 border-t border-purple-500/15 pt-4 mb-6">
                        {cat.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/75">
                            <Check className="w-3.5 h-3.5 text-arv-gold" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Link */}
                    <div className="border-t border-purple-500/20 pt-4 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-mono text-purple-300/80">
                        {cat.itemCount}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-arv-gold transition-colors">
                        <span>EXPLORE CATALOG</span>
                        <ArrowUpRight className="w-4 h-4 text-arv-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
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
