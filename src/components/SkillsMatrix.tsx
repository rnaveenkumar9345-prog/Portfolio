import React from 'react';
import { SKILL_CATEGORIES, CORE_COMPETENCIES } from '../data/portfolioData';
import { 
  Database, 
  Code2, 
  BarChart3, 
  FileSpreadsheet, 
  CheckCircle2, 
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-teal-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-850/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Data Analytics & BI Technology Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Hands-on expertise across querying, statistical manipulation, automated dashboard modeling, and business intelligence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-750 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Production & Project Tested
                    </p>
                  </div>
                </div>

                {/* Skills within category */}
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {skill.level}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-900 text-slate-300 border border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Verified in portfolio projects and live reporting pipelines</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Cloud */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300">
              Core Competencies & Analytical Methodologies
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {CORE_COMPETENCIES.map((comp, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-dark-800/80 text-slate-200 hover:text-emerald-300 hover:border-emerald-500/40 border border-slate-700/80 transition-all cursor-default shadow-sm"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
