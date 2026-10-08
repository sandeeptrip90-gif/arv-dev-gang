import React, { useState } from 'react';
import { X, Search, ArrowRight, Sparkles } from 'lucide-react';
import { POPULAR_PRODUCTS, FEATURED_PRODUCT, Product } from '../data/products';
import { CATEGORIES, Category } from '../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: Category) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allProducts = [FEATURED_PRODUCT, ...POPULAR_PRODUCTS];

  const matchedProducts = query.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
      )
    : allProducts;

  const matchedCategories = query.trim()
    ? CATEGORIES.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : CATEGORIES;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-[#090814] border border-purple-500/40 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.3)] max-h-[80vh] overflow-y-auto space-y-5"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 bg-black/60 border border-purple-500/30 px-4 py-3 rounded-2xl focus-within:border-arv-gold">
          <Search className="w-5 h-5 text-arv-gold shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search casino platforms, sports betting, mobile apps, tech stack..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-sm placeholder:text-white/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/50 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results: Products */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-arv-gold block">
            Gaming Products ({matchedProducts.length})
          </span>

          <div className="space-y-2">
            {matchedProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/15 hover:border-arv-gold/60 hover:bg-purple-900/30 flex items-center justify-between cursor-pointer transition-all"
              >
                <div>
                  <div className="font-podium font-bold text-sm text-white">{prod.title}</div>
                  <div className="text-[11px] text-white/50">{prod.category} • Starting {prod.price}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-arv-gold" />
              </div>
            ))}
          </div>
        </div>

        {/* Results: Categories */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 block">
            Solutions & Categories ({matchedCategories.length})
          </span>

          <div className="grid grid-cols-2 gap-2">
            {matchedCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat);
                  onClose();
                }}
                className="p-2.5 rounded-xl bg-black/40 border border-purple-500/15 hover:border-purple-400 text-xs text-white/80 cursor-pointer transition-all"
              >
                <div className="font-bold text-white text-[11px]">{cat.name}</div>
                <div className="text-[9px] text-white/50">{cat.itemCount}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
