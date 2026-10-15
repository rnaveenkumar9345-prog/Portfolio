import React from 'react';
import { SKILL_CATEGORIES, CORE_COMPETENCIES } from '../data/portfolioData';
import {
  Database,
  Code2,
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-brand-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-ice-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-brand-300" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-3 font-semibold flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Data Analytics & BI Technology Stack
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Hands-on technical mastery across relational SQL querying, Python statistical manipulation, Power BI/Tableau data modeling, and executive reporting.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="supreme-panel supreme-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-brand-500/30 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-obsidian-900 border border-brand-500/20 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-brand-400 font-mono font-medium">
                      Project Verified Stack
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/20">
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
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-obsidian-950 text-slate-300 border border-slate-800 hover:border-brand-500/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Demonstrated in live case studies & SQL sandbox</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <div className="supreme-divider mb-10" />
          <div className="text-center mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              Core Analytical Competencies
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {CORE_COMPETENCIES.map((comp, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-obsidian-900/90 text-slate-300 hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 border border-slate-800 transition-all cursor-default shadow-sm"
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
