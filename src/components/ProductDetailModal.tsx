import React from 'react';
import { Product } from '../data/products';
import { X, CheckCircle, ArrowUpRight, Shield, Star, Play, Layers, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onInstantBuy: (product: Product) => void;
  onOpenLiveDemo: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInstantBuy,
  onOpenLiveDemo,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      {/* Modal Dialog Card */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-[#090814] border border-purple-500/40 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.3)] max-h-[90vh] overflow-y-auto space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-white hover:border-arv-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-12">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-arv-gold bg-arv-gold/10 border border-arv-gold/30 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            {product.badge && (
              <span className="text-[10px] font-bold text-black bg-gold-metallic px-2.5 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <h3 className="font-podium font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
            {product.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-white/60">
            <div className="flex items-center gap-1 text-arv-gold">
              <Star className="w-4 h-4 fill-arv-gold text-arv-gold" />
              <span className="font-bold text-white">{product.rating} / 5.0</span>
            </div>
            <span>•</span>
            <span>{product.salesCount}</span>
            <span>•</span>
            <span className="text-green-400">Ready for Instant Deployment</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/75 leading-relaxed font-inter">
          {product.description}
        </p>

        {/* Key Features Grid */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-purple-500/20 space-y-3">
          <h4 className="font-podium font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
            Core Architecture Deliverables:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                <CheckCircle className="w-4 h-4 text-arv-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="font-podium font-bold text-xs uppercase tracking-wider text-white/70">
            Technology Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-950/60 text-purple-200 border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-arv-gold shrink-0" />
            <span>Full uncompiled source code + 12-month commercial license included.</span>
          </div>
        </div>

        {/* Pricing & CTA Actions */}
        <div className="border-t border-purple-500/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase text-white/50 block">Commercial License Fee</span>
            <div className="flex items-baseline gap-2">
              <span className="font-podium font-extrabold text-3xl sm:text-4xl text-gold-gradient">
                {product.price}
              </span>
              <span className="text-xs text-white/50 font-mono">USD ONE-TIME</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenLiveDemo(product)}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-purple-900/60 hover:bg-purple-800/70 border border-purple-500/40 text-white font-podium font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-arv-gold fill-arv-gold" />
              <span>TEST LIVE SANDBOX</span>
            </button>

            <button
              onClick={() => onInstantBuy(product)}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-sm transition-all"
            >
              <span>PURCHASE LICENSE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
