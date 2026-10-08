import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/projects';
import { ExternalLink, Sparkles, Eye, ArrowUpRight, CheckCircle, Shield } from 'lucide-react';
import { Card3D } from './animations/Card3D';
import { FadeIn } from './animations/FadeIn';

interface ProjectsProps {
  onLivePreview: (project: ProjectItem) => void;
  onCaseStudy: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onLivePreview, onCaseStudy }) => {
  const [activeProject, setActiveProject] = useState<string>(PORTFOLIO_PROJECTS[0].id);

  return (
    <section id="projects" className="relative py-12 sm:py-16 lg:py-20 bg-[#050508] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-purple-950/70 border border-purple-500/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-arv-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white font-mono">
                PROVEN DEPLOYMENTS
              </span>
            </div>

            <h2 className="font-podium font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white">
              OUR <span className="text-gold-gradient">PROJECTS</span>
            </h2>

            <p className="font-inter text-sm sm:text-base text-white/60 max-w-xl">
              Inspect real-world gaming ecosystems engineered and deployed by ARV DEV-GANG for commercial operators worldwide.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-arv-gold bg-black/40 border border-purple-500/20 px-4 py-2 rounded-xl">
            <span>6 PRODUCTION RELEASES</span>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_PROJECTS.map((proj, idx) => {
            const isActive = activeProject === proj.id;
            return (
              <FadeIn key={proj.id} delay={idx * 0.1}>
                <Card3D maxTilt={7} className="h-full">
                  <div
                    onMouseEnter={() => setActiveProject(proj.id)}
                    className={`h-full group relative rounded-2xl bg-[#0a0914] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'border-2 border-arv-gold shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(234,179,8,0.25)]'
                        : 'border border-purple-500/20 hover:border-purple-500/50'
                    }`}
                  >
                    {/* Background Atmosphere */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradientTheme} opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none`} />

                    <div className="relative z-10">
                      {/* Top Bar: Category & Year */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 bg-black/60 border border-purple-500/30 px-2.5 py-1 rounded-full">
                          {proj.category}
                        </span>
                        <span className="text-[11px] font-mono text-white/50">{proj.releaseYear}</span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-1 mb-3">
                        <h3 className="font-podium font-bold text-xl sm:text-2xl text-white group-hover:text-gold-gradient transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-arv-gold font-mono tracking-wide">
                          {proj.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-inter">
                        {proj.description}
                      </p>

                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/60 border border-purple-500/20 mb-6 text-center">
                        {proj.metrics.map((m, i) => (
                          <div key={i}>
                            <div className="font-bold text-xs sm:text-sm text-white font-mono">{m.value}</div>
                            <div className="text-[8px] text-white/40 uppercase tracking-wider">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-white/70 border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Buttons */}
                    <div className="relative z-10 border-t border-purple-500/20 pt-4 flex items-center gap-2 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLivePreview(proj);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-black font-podium font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold-sm transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>LIVE PREVIEW</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCaseStudy(proj);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-arv-gold text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-arv-gold" />
                      </button>
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
