import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Shield, Calculator, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('Turnkey Casino Platform');
  const [concurrency, setConcurrency] = useState('10k - 50k CCU');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    notes: '',
  });

  if (!isOpen) return null;

  const projectTypes = [
    { title: 'Turnkey Casino Platform', base: 499 },
    { title: 'Custom Game Engine / Slots', base: 699 },
    { title: 'Live Sports Betting Suite', base: 449 },
    { title: '120Hz Mobile Gaming App', base: 299 },
    { title: 'Institutional Ops Backoffice', base: 399 },
    { title: 'Full Enterprise Custom Build', base: 899 },
  ];

  const currentType = projectTypes.find((p) => p.title === projectType) || projectTypes[0];
  const multiplier = concurrency === '100k+ CCU' ? 1.8 : concurrency === '10k - 50k CCU' ? 1.3 : 1.0;
  const estimatedCost = Math.round(currentType.base * multiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setTimeout(() => {
      // auto close or reset
    }, 4000);
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
          aria-label="Close quote modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-white/70 hover:text-white hover:border-arv-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {hasSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-900 to-amber-500 p-0.5 mx-auto shadow-gold-md">
              <div className="w-full h-full bg-[#07060d] rounded-[14px] flex items-center justify-center">
                <Check className="w-8 h-8 text-arv-gold" />
              </div>
            </div>

            <h3 className="font-podium font-extrabold text-2xl sm:text-3xl text-white">
              PROJECT BRIEF RECEIVED
            </h3>

            <p className="text-white/70 text-sm max-w-md mx-auto font-inter">
              Thank you, <span className="text-arv-gold font-semibold">{formData.name || 'Partner'}</span>. Our senior gaming systems architect will review your specifications and contact your Telegram/Email within 15 minutes.
            </p>

            <button
              onClick={() => {
                setHasSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-3 rounded-xl bg-gold-metallic text-black font-podium font-bold text-xs uppercase"
            >
              RETURN TO CATALOG
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-1.5 pr-10">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-arv-gold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Specification & Quote Estimator</span>
              </div>
              <h3 className="font-podium font-extrabold text-2xl sm:text-3xl text-white">
                REQUEST CUSTOM <span className="text-gold-gradient">DEVELOPMENT</span>
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-inter">
                Configure your required gaming architecture and receive an instant preliminary scope calculation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Platform Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block">
                  1. Select Gaming Architecture Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((p) => (
                    <button
                      type="button"
                      key={p.title}
                      onClick={() => setProjectType(p.title)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        projectType === p.title
                          ? 'bg-purple-950/80 border-arv-gold text-white font-semibold shadow-gold-sm'
                          : 'bg-black/50 border-purple-500/20 text-white/60 hover:text-white hover:border-purple-500/40'
                      }`}
                    >
                      <div className="font-podium text-[11px] truncate">{p.title}</div>
                      <div className="text-[10px] text-arv-gold mt-0.5">From ${p.base}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Scale */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70 block">
                  2. Target Concurrent Players (CCU Capacity):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1k - 10k CCU', '10k - 50k CCU', '100k+ CCU'].map((scale) => (
                    <button
                      type="button"
                      key={scale}
                      onClick={() => setConcurrency(scale)}
                      className={`p-2 rounded-xl text-center border text-xs transition-all ${
                        concurrency === scale
                          ? 'bg-purple-950/80 border-arv-gold text-arv-gold font-bold shadow-gold-sm'
                          : 'bg-black/50 border-purple-500/20 text-white/60 hover:text-white'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Preliminary Bracket */}
              <div className="p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-white/50 block">Preliminary Estimate</span>
                  <div className="font-podium font-extrabold text-2xl text-gold-gradient">
                    ${estimatedCost} - ${Math.round(estimatedCost * 1.35)} USD
                  </div>
                </div>
                <div className="text-right text-[10px] text-white/60">
                  <span className="text-green-400 font-bold block">✓ Full Source Code</span>
                  <span>Direct Dev Team Access</span>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer / Apex Gaming"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-arv-gold"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-white/70 block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="operator@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-arv-gold"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-white/70 block mb-1">Telegram / Discord Handle (for instant response)</label>
                <input
                  type="text"
                  placeholder="@your_telegram_id"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-arv-gold"
                />
              </div>

              <div>
                <label className="text-[11px] text-white/70 block mb-1">Project Notes / Specific Features</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your game ideas, target jurisdictions, or technical preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-arv-gold"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-md transition-all active:scale-95"
              >
                <span>TRANSMIT SPECIFICATION BRIEF</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40">
                <Shield className="w-3.5 h-3.5 text-arv-gold" />
                <span>Protected by Strict Mutual Non-Disclosure Agreement (NDA)</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
