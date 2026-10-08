import React, { useState } from 'react';
import { POPULAR_PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

interface PopularProductsProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: () => void;
}

export const PopularProducts: React.FC<PopularProductsProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Casino Platforms', 'Gaming Platforms', 'Sports Betting UI', 'Mobile Apps'];

  const filteredProducts = selectedCategory === 'All'
    ? POPULAR_PRODUCTS
    : POPULAR_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="relative py-12 sm:py-16 lg:py-20 bg-[#050508] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 font-mono">
                PROVEN TURNKEY ENGINES
              </span>
            </div>
            
            <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
              POPULAR <span className="text-gold-gradient">PRODUCTS</span>
            </h2>
            
            <p className="font-inter text-sm sm:text-base text-white/60 max-w-xl">
              Most in-demand gaming solutions for your business. Certified algorithms, automated backoffices, and zero-day white-label deployment.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gold-metallic text-black font-semibold shadow-gold-sm'
                    : 'bg-purple-950/30 hover:bg-purple-900/40 text-white/70 hover:text-white border border-purple-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Product Cards Grid with FadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredProducts.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.1}>
              <ProductCard
                product={product}
                onViewDetails={onSelectProduct}
                onInstantBuy={onSelectProduct}
              />
            </FadeIn>
          ))}
        </div>

        {/* Bottom Banner */}
        <FadeIn delay={0.3} className="mt-10 rounded-2xl bg-gradient-to-r from-purple-950/50 via-[#0e0c1a] to-purple-950/50 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-podium font-bold text-lg sm:text-xl text-white">
              Need a tailored gaming architecture or custom mathematics?
            </h4>
            <p className="text-xs sm:text-sm text-white/60">
              Our engineering studio builds proprietary game engines and custom gambling platforms from scratch.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/70 border border-arv-gold text-white font-podium font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-gold-sm transition-colors"
          >
            <span>TALK TO AN ARCHITECT</span>
            <ArrowRight className="w-4 h-4 text-arv-gold" />
          </button>
        </FadeIn>

      </div>
    </section>
  );
};
