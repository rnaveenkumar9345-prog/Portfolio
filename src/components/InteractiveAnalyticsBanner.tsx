import React, { useState } from 'react';
import {
  Activity,
  Layers,
  ArrowUpRight,
  Cpu
} from 'lucide-react';

interface MetricCalculator {
  title: string;
  formula: string;
  application: string;
  insight: string;
  tools: string[];
}

export const InteractiveAnalyticsBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const formulas: MetricCalculator[] = [
    {
      title: "Gross Margin % Calculation",
      formula: "ROUND((SUM(gross_income) / SUM(total)) * 100, 2)",
      application: "Supermarket Sales Analysis (SQL & DAX)",
      insight: "Identifies whether high volume product lines generate sufficient net profit after cost of goods sold.",
      tools: ["DAX", "SQL", "Excel"]
    },
    {
      title: "Freight Delay vs Sentiment Index",
      formula: "AVG(DATEDIFF(delivered_date, estimated_date)) GROUP BY state",
      application: "Olist E-Commerce Analytics",
      insight: "Proves that delivery delays exceeding 3 days result in a 65% drop in customer satisfaction ratings (< 3 stars).",
      tools: ["MySQL", "Python Pandas", "Power BI"]
    },
    {
      title: "Lead Conversion & Campaign Efficiency",
      formula: "COUNT(converted_leads) / COUNT(total_inbound_leads) * 100",
      application: "For You Trading Company (Sales & Advertising)",
      insight: "Tracked across 3,000+ customer records to optimize ad spend allocation towards highest-converting channels.",
      tools: ["Excel Pivot", "SQL", "Campaign Metrics"]
    }
  ];

  return (
    <section className="py-16 bg-obsidian-900/50 border-y border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-supreme opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-2 font-semibold flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              Analytical Framework
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Analytical Thinking in Action
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Real calculations, DAX formulations, and SQL aggregations engineered for business decision-making.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {formulas.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-brand-500/15 text-brand-300 border border-brand-500/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                    : 'bg-obsidian-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {f.title.split(' ')[0]} {f.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Formula Card */}
        <div className="supreme-panel p-6 sm:p-8 rounded-2xl border border-brand-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-400">
                <Layers className="w-4 h-4 text-brand-400" />
                <span>{formulas[activeTab].application}</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                {formulas[activeTab].title}
              </h3>

              {/* Formula box */}
              <div className="p-4 rounded-xl bg-obsidian-950 border border-brand-500/25 font-mono text-xs sm:text-sm text-ice-300 overflow-x-auto shadow-inner">
                <code>{formulas[activeTab].formula}</code>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Business Impact: </span>
                {formulas[activeTab].insight}
              </p>
            </div>

            <div className="lg:col-span-5 bg-obsidian-950/80 p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 font-semibold">APPLIED TECH STACK</span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                  <Activity className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {formulas[activeTab].tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-obsidian-900 text-brand-300 border border-brand-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Methodology</span>
                <span className="text-slate-200 font-medium">Data Modeling & KPI Synthesis</span>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-brand-500/10 hover:bg-brand-500/20 text-brand-300 border border-brand-500/30 hover:border-brand-400/50 transition-all group"
              >
                <span>View Full Case Studies</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
