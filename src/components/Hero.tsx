import React from 'react';
import { PERSONAL_INFO, CORE_KPIS } from '../data/portfolioData';
import { 
  FileText, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  TrendingUp,
  Database,
  BarChart2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges & Availability */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300 glass-pill">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300 glass-pill">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Placement & Fresher Ready</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div>
              <p className="text-sm font-mono text-cyan-400 font-medium tracking-wider uppercase mb-2">
                // Executive Analytics Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-text-emerald">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 mt-2 flex items-center gap-3">
                <span>Data Analyst & BI Specialist</span>
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Contact & Verified Profile Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-dark-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm group"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-dark-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-emerald-500/50 transition-all shadow-sm group"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>GitHub Repositories</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-dark-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-dark-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 transition-all"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-dark-900 transition-all shadow-lg shadow-emerald-500/25 active:scale-95 group"
              >
                <span>Explore BI Dashboards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#sql-sandbox"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-800 hover:bg-dark-750 text-slate-200 border border-slate-700 hover:border-cyan-500/60 transition-all shadow-md group"
              >
                <Database className="w-4 h-4 text-cyan-400" />
                <span>Interactive SQL Inspector</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="R_Naveen_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-dark-900/60 hover:bg-dark-800/60 transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Data Terminal Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/90 relative group hover:border-emerald-500/40 transition-all">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">naveen_analytics.sql</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="py-4 space-y-2 text-xs font-mono text-slate-300">
                <p className="text-slate-500">// Analytical capabilities ready for deployment</p>
                <p><span className="text-cyan-400">SELECT</span> candidate_name, core_role,</p>
                <p className="pl-4"><span className="text-emerald-400">status</span>, target_focus</p>
                <p><span className="text-cyan-400">FROM</span> data_analysts_market</p>
                <p><span className="text-cyan-400">WHERE</span> skills <span className="text-cyan-400">CONTAINS ALL</span> (</p>
                <p className="pl-4 text-amber-300">'SQL', 'Python', 'Power BI', 'Excel'</p>
                <p>) <span className="text-cyan-400">AND</span> verified = <span className="text-emerald-400">TRUE</span>;</p>
              </div>

              {/* Verified Result Output */}
              <div className="mt-2 p-3 rounded-xl bg-dark-900/90 border border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                  <span>QUERY EXECUTION</span>
                  <span className="text-emerald-400 font-mono">0.004 ms</span>
                </div>
                <div className="pt-2 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Candidate:</span>
                    <span className="font-semibold text-white">R. Naveen</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Specialization:</span>
                    <span className="text-cyan-300 font-mono">EDA & BI Reporting</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Degree:</span>
                    <span className="text-slate-300">BCA (Periyar Univ - 7.1)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Decision Value:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> High Actionability
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tool Badges */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> KPI Focused
                </span>
                <span className="flex items-center gap-1">
                  <BarChart2 className="w-3.5 h-3.5 text-cyan-400" /> Interactive BI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live KPI Metric Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_KPIS.map((kpi, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                  {kpi.value}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mt-2">
                {kpi.label}
              </h3>
              <p className="text-xs text-cyan-400 font-medium mt-0.5">
                {kpi.context}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {kpi.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
