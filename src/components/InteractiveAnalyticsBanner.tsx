import React, { useState } from 'react';
import { 
  Activity, 
  Calculator,
  Layers,
  ArrowUpRight
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
    <section className="py-12 bg-dark-850/60 border-y border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>DATA ARCHITECTURE & FORMULA INSPECTOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Analytical Thinking in Action
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Real calculations, DAX formulations, and SQL aggregations applied across projects.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {formulas.map((f, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-dark-800 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                {f.title.split(' ')[0]} {f.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Formula Breakdown Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-700/70 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Layers className="w-4 h-4" />
                <span>{formulas[activeTab].application}</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {formulas[activeTab].title}
              </h3>

              {/* Code Formula Box */}
              <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto">
                <code>{formulas[activeTab].formula}</code>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-100">Business Impact: </span>
                {formulas[activeTab].insight}
              </p>
            </div>

            <div className="lg:col-span-5 bg-dark-900/80 p-5 rounded-xl border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">FRAMEWORK INTEGRATION</span>
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" /> Active
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-400">Technologies Employed:</div>
                <div className="flex flex-wrap gap-2">
                  {formulas[activeTab].tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-800 text-cyan-300 border border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Methodology:</span>
                <span className="text-slate-200 font-medium">Data Modeling & KPI Synthesis</span>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:text-white transition-all group"
              >
                <span>View Full Project Implementations</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
