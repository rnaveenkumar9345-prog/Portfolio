import React from 'react';
import { PERSONAL_INFO, CORE_KPIS } from '../data/portfolioData';
import {
  FileText,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Database,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-obsidian-950 bg-grid-supreme">
      {/* Supreme ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-brand-500/12 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-ice-400/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 supreme-pill">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-brand-300 bg-brand-500/10 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>SQL • Python • Power BI • Tableau</span>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Headline area */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-3 font-semibold flex items-center gap-2">
                <span className="w-6 h-px bg-brand-500" />
                Data Analyst Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-sans leading-[1.08]">
                R. <span className="gradient-text-blue">Naveen</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mt-4 tracking-tight">
                Transforming Complex Data into <span className="text-white font-bold">Actionable Strategy</span>
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick contact tags */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-obsidian-900/80 hover:bg-obsidian-850 border border-slate-800 hover:border-brand-500/40 hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-obsidian-900/80 hover:bg-obsidian-850 border border-slate-800 hover:border-brand-500/40 hover:text-white transition-all group"
              >
                <GithubIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-obsidian-900/80 border border-slate-800 hover:border-brand-500/30 transition-all font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-obsidian-900/80 border border-slate-800 hover:border-brand-500/30 transition-all font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-400 text-white transition-all shadow-lg shadow-brand-500/25 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] active:scale-[0.98] group border border-brand-400/30"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#sql-sandbox"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-slate-800 hover:border-brand-500/40 hover:text-white bg-obsidian-900/90 transition-all group hover:bg-obsidian-850"
              >
                <Database className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>SQL Simulator</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="R_Naveen_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-brand-300 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right: Modern High-Tech Terminal card */}
          <div className="lg:col-span-5">
            <div className="supreme-panel p-6 rounded-2xl border border-brand-500/20 relative group hover:border-brand-500/40 shadow-2xl shadow-brand-950/60 transition-all">

              {/* Card header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">analyst_profile.sql</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  READY
                </span>
              </div>

              {/* Code snippet */}
              <div className="py-4 space-y-1.5 text-xs font-mono text-slate-300">
                <p className="text-slate-500">-- Executive candidate profile query</p>
                <p><span className="text-brand-400 font-semibold">SELECT</span> candidate_name, role,</p>
                <p className="pl-4"><span className="text-ice-400 font-semibold">status</span>, key_competencies</p>
                <p><span className="text-brand-400 font-semibold">FROM</span> verified_data_analysts</p>
                <p><span className="text-brand-400 font-semibold">WHERE</span> core_stack <span className="text-brand-400 font-semibold">CONTAINS</span> (</p>
                <p className="pl-4 text-ice-300">'SQL', 'Python', 'Power BI', 'Excel'</p>
                <p>) <span className="text-brand-400 font-semibold">AND</span> verified = <span className="text-emerald-400 font-semibold">TRUE</span>;</p>
              </div>

              {/* Result display */}
              <div className="mt-2 p-4 rounded-xl bg-obsidian-950/90 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
                  <span className="font-mono text-brand-400 font-semibold">QUERY RESULT</span>
                  <span className="text-emerald-400 font-mono font-semibold">0.003 ms • OK</span>
                </div>
                <div className="pt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Candidate</span>
                    <span className="font-bold text-white">R. Naveen</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Specialization</span>
                    <span className="text-brand-300 font-mono text-[11px]">EDA & BI Dashboarding</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education</span>
                    <span className="text-slate-200">BCA (B.Sc Computer Apps) — 7.1 CGPA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Verification</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> High Business Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mt-20">
          <div className="supreme-divider mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_KPIS.map((kpi, idx) => (
              <div
                key={idx}
                className="supreme-panel supreme-panel-hover p-6 rounded-2xl border border-slate-800/80 hover:border-brand-500/30"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-white tracking-tight font-sans">
                    {kpi.value}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-400/40" />
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mt-2 font-sans">
                  {kpi.label}
                </h3>
                <p className="text-xs text-brand-400 font-semibold mt-1">
                  {kpi.context}
                </p>
                <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">
                  {kpi.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
