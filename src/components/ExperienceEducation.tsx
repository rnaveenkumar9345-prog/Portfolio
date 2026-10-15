import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import {
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  CheckCircle2,
  FileCheck2,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Professional Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-8">
              <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-2 font-semibold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Career Background
              </p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">
                Professional Experience
              </h2>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Applying quantitative analysis to optimize customer sales funnels and digital ad campaigns.
              </p>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="supreme-panel supreme-panel-hover p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-brand-500/30 relative"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-lg font-bold text-white font-sans">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-brand-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-brand-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-md bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
                      Key Record Volume:
                    </span>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-obsidian-950 text-brand-300 border border-brand-500/20">
                      {exp.metricsNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education */}
          <div id="education" className="lg:col-span-5 space-y-6">
            <div className="mb-8">
              <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-2 font-semibold flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Credentials
              </p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">
                Education
              </h2>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Formal training in computer applications, programming, database systems, and algorithms.
              </p>
            </div>

            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="supreme-panel supreme-panel-hover p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/30 relative"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-brand-400 font-semibold">
                        {edu.period}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1 font-sans">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-medium">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-slate-500 mt-0.5">
                          {edu.university}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="px-3.5 py-1.5 rounded-xl bg-obsidian-950 border border-brand-500/25 text-center shadow-inner">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">
                          {edu.scoreType}
                        </span>
                        <span className="text-sm font-bold font-mono text-brand-300">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-400">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Graduated & Academically Verified</span>
                  </div>
                </div>
              ))}

              {/* Suitability Notice */}
              <div className="p-6 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-slate-300 shadow-lg shadow-brand-950/40">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xs font-mono mb-2">
                  <Award className="w-4 h-4" />
                  <span>TARGET ROLES & SUITABILITY</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Ideal fit for <span className="text-white font-bold">Data Analyst, Junior BI Analyst, Business Intelligence Associate</span>, and Analytics Internships ready for immediate impact.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
