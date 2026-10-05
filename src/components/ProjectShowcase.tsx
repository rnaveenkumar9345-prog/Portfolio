import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { 
  ExternalLink, 
  BarChart3, 
  Code, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight
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

  // Max value calculation for bar chart rendering
  const maxMetricA = Math.max(...activeProject.chartData.map(d => d.metricA));

  return (
    <section id="projects" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>PORTFOLIO CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Analytics Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Real-world business intelligence and exploratory data analysis built with SQL, Python, Power BI, Tableau, and Excel.
            </p>
          </div>

          {/* Project Switcher Pill Tabs */}
          <div className="flex items-center gap-2 bg-dark-800/80 p-1.5 rounded-2xl border border-slate-700/80 self-start md:self-auto">
            {PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setCopiedQuery(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedProjectId === proj.id
                    ? 'bg-emerald-500 text-dark-900 shadow-md shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-dark-700'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Project Display Grid */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Project Card Header Ribbon */}
          <div className="p-6 sm:p-8 bg-dark-850/80 border-b border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {activeProject.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {activeProject.datasetSize}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {activeProject.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-dark-800 hover:bg-dark-750 text-slate-200 hover:text-white border border-slate-700 hover:border-emerald-500/50 transition-all shadow-sm group"
                >
                  <GithubIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Tools Array */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="text-xs text-slate-400 mr-2 font-mono">Tools:</span>
              {activeProject.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-dark-900/90 text-cyan-300 border border-slate-750 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Summary & Key Business Takeaways */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  // Executive Summary & Objective
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-dark-900/40 p-4 rounded-xl border border-slate-800/80">
                  {activeProject.summary}
                </p>
              </div>

              {/* Key Insights List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Business Insights Delivered
                </h4>
                <ul className="space-y-3">
                  {activeProject.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  // Core Dataset Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-dark-900/80 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold font-mono text-cyan-400 mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual Dashboard Preview & SQL Code Inspector */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* Tab selector for Visual vs SQL */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('visual')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'visual'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Visual Analytics Preview</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'sql'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>SQL Query Logic</span>
                  </button>
                </div>

                {activeTab === 'sql' && (
                  <button
                    onClick={() => handleCopyCode(activeProject.sqlHighlights.code)}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-dark-800 border border-slate-700"
                  >
                    {copiedQuery ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy SQL</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* View 1: Visual Interactive Chart */}
              {activeTab === 'visual' && (
                <div className="flex-1 bg-dark-900/90 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                      <span className="font-mono">
                        {activeProject.id === 'supermarket-sales' 
                          ? 'Product Line Revenue & Gross Profit Breakdown' 
                          : 'Order Volume by Product Category & Avg Rating'}
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Normalized Sample</span>
                    </div>

                    {/* Interactive Horizontal Bar Chart representation */}
                    <div className="mt-5 space-y-4">
                      {activeProject.chartData.map((item, idx) => {
                        const percentage = Math.round((item.metricA / maxMetricA) * 100);
                        return (
                          <div key={idx} className="space-y-1 group">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-300 font-medium group-hover:text-cyan-300 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-slate-400 font-mono text-[11px]">
                                {item.metricA.toLocaleString()} {item.unit || 'orders'}
                                {item.metricB && ` • Rating: ${item.metricB}★`}
                              </span>
                            </div>
                            <div className="w-full bg-dark-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-700 group-hover:from-emerald-400 group-hover:to-cyan-300"
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
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Interactive slicers mapped to Power BI model
                    </span>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 group"
                    >
                      Repo details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              )}

              {/* View 2: SQL Query Logic */}
              {activeTab === 'sql' && (
                <div className="flex-1 bg-dark-900 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-2">
                      {activeProject.sqlHighlights.queryTitle}
                    </div>
                    <pre className="text-xs font-mono text-emerald-300 bg-dark-950 p-4 rounded-xl border border-slate-800/90 overflow-x-auto max-h-[300px] leading-relaxed">
                      <code>{activeProject.sqlHighlights.code}</code>
                    </pre>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Technical Context: </span>
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
