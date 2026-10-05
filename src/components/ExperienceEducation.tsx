import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  TrendingUp, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>CAREER TRACK RECORD</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Work Experience
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Applying quantitative analysis to real customer pipelines and digital ad campaigns.
              </p>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 relative hover:border-slate-700 transition-all shadow-xl"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-emerald-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-5 space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Callout Metric Badge */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Key Volume Handled:
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-dark-900 text-emerald-300 border border-slate-750">
                      {exp.metricsNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Credentials & Education */}
          <div id="education" className="lg:col-span-5 space-y-6">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Education
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Formal training in computer applications, programming, and algorithms.
              </p>
            </div>

            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-800 relative hover:border-slate-700 transition-all shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-cyan-400">
                        {edu.period}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-slate-400">
                          {edu.university}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="px-3 py-1 rounded-xl bg-dark-900 border border-slate-700/80 text-center">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">
                          {edu.scoreType}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold font-mono text-emerald-400">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Graduated & Verified Record</span>
                  </div>
                </div>
              ))}

              {/* Placement & Role Fit Notice */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-dark-850 border border-emerald-500/20 text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs font-mono mb-1">
                  <Award className="w-4 h-4" />
                  <span>CANDIDATE SUITABILITY</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-300">
                  Ideal for <span className="text-white font-medium">Data Analyst, Junior BI Analyst, Analytics Internships, Business Analyst</span>, and fresher data engineering support roles.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
