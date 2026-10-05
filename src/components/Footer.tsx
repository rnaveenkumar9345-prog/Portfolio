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
    <footer className="py-12 bg-dark-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold flex items-center justify-center text-xs">
              RN
            </div>
            <div>
              <div className="font-bold text-slate-200">
                {PERSONAL_INFO.name} • Data Analyst
              </div>
              <div className="text-[11px] text-slate-500">
                SQL • Python • Power BI • Tableau • Excel
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-emerald-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 px-3"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Note & Data Integrity Badge */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Authentic Profile • Zero fabricated testimonials or statistics</span>
          </div>

          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All analytical case studies verified.
          </div>
        </div>

      </div>
    </footer>
  );
};
