import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-obsidian-950 border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">

          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent border border-brand-500/30 text-brand-400 font-bold flex items-center justify-center text-xs shadow-sm">
              RN
            </div>
            <div>
              <div className="font-bold text-white font-sans text-sm">
                {PERSONAL_INFO.name} <span className="text-brand-400">• Data Analyst</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                SQL • Python • Power BI • Tableau • Excel
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-slate-800 hover:border-brand-500/30 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-slate-800 hover:border-brand-500/30 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-300 hover:text-white border border-slate-800 hover:border-brand-500/30 transition-all flex items-center gap-1.5 px-3.5 font-medium"
            >
              <span className="font-mono text-xs">Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-400" />
            </button>
          </div>

        </div>

        {/* Bottom Note & Data Integrity Badge */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Authentic Profile • Real Datasets & Reproducible Code</span>
          </div>

          <div className="font-mono text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All analytical case studies documented.
          </div>
        </div>

      </div>
    </footer>
  );
};
