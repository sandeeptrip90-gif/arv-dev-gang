import React from 'react';
import { Product } from '../data/products';
import { Check, ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { Card3D } from './animations/Card3D';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onInstantBuy: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onInstantBuy,
}) => {
  return (
    <Card3D maxTilt={7} className="h-full">
      <div className="h-full group relative rounded-2xl bg-[#0a0914] border border-purple-500/25 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:border-arv-gold/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(168,85,247,0.25)] overflow-hidden">
        {/* Subtle background glow on card hover */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-600/10 group-hover:bg-purple-600/20 blur-3xl transition-all duration-500 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-amber-500/5 group-hover:bg-amber-500/15 blur-3xl transition-all duration-500 pointer-events-none" />

        <div>
          {/* Top Header & Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            {product.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-black bg-gold-metallic px-2.5 py-0.5 rounded-full shadow-gold-sm">
                <Sparkles className="w-2.5 h-2.5" />
                {product.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-podium font-bold text-xl sm:text-2xl text-white group-hover:text-gold-gradient transition-all tracking-wide mb-2.5">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-inter line-clamp-3">
            {product.description}
          </p>

          {/* Feature Bullets */}
          <div className="space-y-2.5 border-t border-purple-500/15 pt-5 mb-6">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                <div className="w-4 h-4 rounded-full bg-purple-950 border border-arv-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-arv-gold stroke-[3]" />
                </div>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer: Pricing & Action */}
        <div className="border-t border-purple-500/20 pt-5 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Starting At</span>
              <div className="flex items-baseline gap-1">
                <span className="font-podium font-extrabold text-2xl sm:text-3xl text-gold-gradient">
                  {product.price}
                </span>
                <span className="text-xs text-white/40 font-mono">USD</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-xs text-arv-gold justify-end">
                <Star className="w-3.5 h-3.5 fill-arv-gold text-arv-gold" />
                <span className="font-bold text-white">{product.rating}</span>
              </div>
              <span className="text-[10px] text-white/50">{product.salesCount}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onViewDetails(product)}
              className="w-full py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300"
            >
              VIEW DETAILS
            </button>
            <button
              onClick={() => onInstantBuy(product)}
              className="w-full py-2.5 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1 shadow-gold-sm transition-all duration-300 active:scale-95"
            >
              <span>BUY NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Card3D>
  );
};
