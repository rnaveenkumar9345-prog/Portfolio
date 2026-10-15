import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import {
  ExternalLink,
  BarChart3,
  Code,
  Copy,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [activeTab, setActiveTab] = useState<'visual' | 'sql'>('visual');
  const [copiedQuery, setCopiedQuery] = useState(false);

  const activeProject: Project = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedQuery(true);
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  const maxMetricA = Math.max(...activeProject.chartData.map(d => d.metricA));

  return (
    <section id="projects" className="py-24 relative bg-obsidian-950 bg-grid-supreme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-3 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Featured Analytics Projects
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
              Real-world business intelligence and exploratory data analysis built with SQL, Python, Power BI, Tableau, and Excel.
            </p>
          </div>

          {/* Project Switcher */}
          <div className="flex items-center gap-1.5 bg-obsidian-900/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto backdrop-blur-md">
            {PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setCopiedQuery(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedProjectId === proj.id
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 border border-brand-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-obsidian-850'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Project Card */}
        <div className="supreme-panel rounded-2xl border border-brand-500/20 overflow-hidden shadow-2xl">

          {/* Header ribbon */}
          <div className="p-6 sm:p-8 bg-obsidian-900/80 border-b border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/25">
                    {activeProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                    {activeProject.datasetSize}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                  {activeProject.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 hover:text-white border border-slate-700 hover:border-brand-500/40 transition-all group shrink-0 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>Source Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="text-xs text-slate-400 mr-1 font-mono font-medium">Stack:</span>
              {activeProject.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-obsidian-950 text-brand-300 border border-brand-500/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Summary & Insights */}
            <div className="lg:col-span-6 space-y-6">

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  Executive Summary
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-obsidian-950/70 p-4 rounded-xl border border-slate-800/80">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  Key Business Insights
                </h4>
                <ul className="space-y-3">
                  {activeProject.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-lg bg-brand-500/10 border border-brand-500/25 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Dataset Metrics & KPIs
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-obsidian-950/80 border border-slate-800 text-center">
                      <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                      <div className="text-sm font-bold font-mono text-white mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Chart & SQL tabs */}
            <div className="lg:col-span-6 flex flex-col">

              {/* Tab selector */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('visual')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === 'visual'
                        ? 'bg-brand-500/15 text-brand-300 border border-brand-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Visual Analytics</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeTab === 'sql'
                        ? 'bg-brand-500/15 text-brand-300 border border-brand-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>SQL Query</span>
                  </button>
                </div>

                {activeTab === 'sql' && (
                  <button
                    onClick={() => handleCopyCode(activeProject.sqlHighlights.code)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-obsidian-900 border border-slate-700 hover:border-brand-500/30"
                  >
                    {copiedQuery ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Visual chart */}
              {activeTab === 'visual' && (
                <div className="flex-1 bg-obsidian-950/80 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800/80">
                      <span className="font-mono text-brand-400 font-semibold">
                        {activeProject.id === 'supermarket-sales'
                          ? 'Revenue & Gross Profit by Product Line'
                          : 'Order Volume by Category & Avg Rating'}
                      </span>
                    </div>

                    <div className="mt-5 space-y-4">
                      {activeProject.chartData.map((item, idx) => {
                        const percentage = Math.round((item.metricA / maxMetricA) * 100);
                        return (
                          <div key={idx} className="space-y-1.5 group">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-200 font-semibold group-hover:text-brand-300 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-slate-400 font-mono text-[11px]">
                                {item.metricA.toLocaleString()} {item.unit || 'orders'}
                                {item.metricB && ` · ${item.metricB}★`}
                              </span>
                            </div>
                            <div className="w-full bg-obsidian-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-ice-400 transition-all duration-700 group-hover:brightness-110"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                      Dynamic data model mapped to Power BI / Tableau
                    </span>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-400 hover:text-brand-300 font-semibold inline-flex items-center gap-1 group"
                    >
                      Details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* SQL view */}
              {activeTab === 'sql' && (
                <div className="flex-1 bg-obsidian-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="text-xs font-mono text-brand-400 mb-2 font-semibold">
                      {activeProject.sqlHighlights.queryTitle}
                    </div>
                    <pre className="text-xs font-mono text-ice-300 bg-obsidian-900/90 p-4 rounded-xl border border-slate-800 overflow-x-auto max-h-[300px] leading-relaxed shadow-inner">
                      <code>{activeProject.sqlHighlights.code}</code>
                    </pre>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">Context: </span>
                    {activeProject.sqlHighlights.description}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
