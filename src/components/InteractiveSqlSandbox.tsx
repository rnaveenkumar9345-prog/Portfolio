import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Database,
  Table,
  Check,
  Copy,
  Terminal
} from 'lucide-react';

interface PredefinedQuery {
  id: string;
  title: string;
  database: string;
  description: string;
  sql: string;
  executionTime: string;
  rowCount: number;
  columns: string[];
  rows: (string | number)[][];
}

export const InteractiveSqlSandbox: React.FC = () => {
  const queries: PredefinedQuery[] = [
    {
      id: 'supermarket-margin',
      title: 'Branch & Product Margin Classification',
      database: 'MySQL · supermarket_db',
      description: 'Evaluates gross income, profit margin %, and applies CASE condition to assign performance tiers.',
      sql: `SELECT \n    branch,\n    product_line,\n    ROUND(SUM(total), 2) AS total_revenue,\n    ROUND(SUM(gross_income), 2) AS gross_profit,\n    ROUND((SUM(gross_income) / SUM(total)) * 100, 2) AS margin_pct,\n    CASE \n        WHEN SUM(gross_income) >= 1200 THEN 'Top Tier'\n        WHEN SUM(gross_income) >= 1000 THEN 'Optimal'\n        ELSE 'Under Review'\n    END AS tier\nFROM supermarket_sales\nGROUP BY branch, product_line\nHAVING total_revenue > 20000\nORDER BY gross_profit DESC;`,
      executionTime: '0.012s',
      rowCount: 4,
      columns: ['Branch', 'Product Line', 'Total Revenue (₹)', 'Gross Profit (₹)', 'Margin %', 'Tier'],
      rows: [
        ['Branch A', 'Electronic Accessories', '25,800.00', '1,228.00', '4.76%', 'Top Tier'],
        ['Branch C', 'Food & Beverages', '23,150.00', '1,102.00', '4.76%', 'Optimal'],
        ['Branch B', 'Sports & Travel', '22,400.00', '1,066.00', '4.76%', 'Optimal'],
        ['Branch A', 'Home & Lifestyle', '21,900.00', '1,042.00', '4.76%', 'Optimal'],
      ]
    },
    {
      id: 'olist-delay-review',
      title: 'Olist Multi-Table Join: Delay vs Review',
      database: 'MySQL · olist_ecommerce_db',
      description: 'Joins 5 relational tables to correlate average shipping delay with customer review scores.',
      sql: `SELECT \n    c.customer_state,\n    COUNT(DISTINCT o.order_id) AS total_orders,\n    ROUND(AVG(DATEDIFF(o.order_delivered_customer_date, o.order_estimated_delivery_date)), 1) AS avg_delay_days,\n    ROUND(AVG(r.review_score), 2) AS avg_review_rating\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.customer_id\nINNER JOIN order_reviews r ON o.order_id = r.order_id\nWHERE o.order_status = 'delivered'\nGROUP BY c.customer_state\nHAVING total_orders >= 500\nORDER BY avg_delay_days DESC;`,
      executionTime: '0.028s',
      rowCount: 4,
      columns: ['Customer State', 'Total Orders', 'Avg Delay (Days)', 'Avg Review Score (1-5)'],
      rows: [
        ['Rio de Janeiro (RJ)', 12850, '+3.4 days', '3.82 ★'],
        ['Bahia (BA)', 3380, '+2.1 days', '3.91 ★'],
        ['Minas Gerais (MG)', 11630, '-1.2 days (Early)', '4.18 ★'],
        ['São Paulo (SP)', 41746, '-3.5 days (Early)', '4.35 ★'],
      ]
    },
    {
      id: 'campaign-conversion',
      title: 'Lead Pipeline & Conversion Analysis',
      database: 'Excel / SQL · sales_records_db',
      description: 'Aggregates 3,000+ customer and lead records into campaign performance and conversion ratios.',
      sql: `SELECT \n    campaign_channel,\n    COUNT(lead_id) AS total_leads,\n    SUM(CASE WHEN status = 'Converted' THEN 1 ELSE 0 END) AS conversions,\n    ROUND((SUM(CASE WHEN status = 'Converted' THEN 1 ELSE 0 END) * 100.0 / COUNT(lead_id)), 2) AS conversion_rate_pct,\n    ROUND(SUM(deal_value), 2) AS pipeline_value\nFROM lead_tracking\nGROUP BY campaign_channel\nORDER BY conversion_rate_pct DESC;`,
      executionTime: '0.009s',
      rowCount: 3,
      columns: ['Campaign Channel', 'Total Leads', 'Conversions', 'Conversion Rate %', 'Pipeline Value'],
      rows: [
        ['Inbound Referral', 620, 198, '31.94%', '₹4,85,000'],
        ['Targeted Digital Ad', 1450, 312, '21.52%', '₹7,60,000'],
        ['Direct Outreach', 930, 145, '15.59%', '₹3,20,000'],
      ]
    }
  ];

  const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasExecuted, setHasExecuted] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const activeQuery = queries[selectedQueryIndex];

  const handleRunQuery = () => {
    setIsRunning(true);
    setHasExecuted(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasExecuted(true);
    }, 350);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sql-sandbox" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-3 font-semibold flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            Interactive SQL Simulator
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Query Architecture & SQL Lab
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Execute real queries demonstrating multi-table joins, conditional CASE classification, window functions, and business aggregation.
          </p>
        </div>

        {/* Sandbox Window */}
        <div className="supreme-panel rounded-2xl border border-brand-500/20 shadow-2xl overflow-hidden">

          {/* Query Bar */}
          <div className="bg-obsidian-900/90 p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1.5 font-medium">
                <Database className="w-3.5 h-3.5 text-brand-400" /> Scenario:
              </span>
              {queries.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQueryIndex(idx);
                    setHasExecuted(true);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedQueryIndex === idx
                      ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]'
                      : 'bg-obsidian-850 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {q.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-obsidian-850 hover:bg-obsidian-800 border border-slate-700 hover:border-brand-500/30 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunQuery}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white transition-all shadow-md shadow-brand-500/25 active:scale-[0.97] disabled:opacity-50 border border-brand-400/30"
              >
                {isRunning ? (
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>Run Query</span>
              </button>
            </div>
          </div>

          {/* DB info */}
          <div className="px-6 py-3 bg-obsidian-950/80 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-brand-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {activeQuery.database}
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              {activeQuery.description}
            </span>
          </div>

          {/* SQL Editor */}
          <div className="p-6 bg-obsidian-950 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed border-b border-slate-800">
            <pre>
              <code>{activeQuery.sql}</code>
            </pre>
          </div>

          {/* Results */}
          <div className="p-6 bg-obsidian-900/50">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-mono font-bold text-white">
                  RESULT SET
                </span>
                <span className="text-[11px] font-mono text-brand-300 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-full font-semibold">
                  {activeQuery.rowCount} rows returned
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Execution: {activeQuery.executionTime}
              </span>
            </div>

            {hasExecuted ? (
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-obsidian-950 text-slate-300 border-b border-slate-800">
                    <tr>
                      {activeQuery.columns.map((col, idx) => (
                        <th key={idx} className="py-3 px-4 font-semibold text-brand-300">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-obsidian-950/60">
                    {activeQuery.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-brand-500/5 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-4 text-slate-300">
                            {typeof cell === 'string' && (cell.includes('Tier') || cell.includes('Optimal')) ? (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/15 text-brand-300 border border-brand-500/25">
                                {cell}
                              </span>
                            ) : typeof cell === 'string' && cell.includes('★') ? (
                              <span className="text-amber-400 font-semibold">{cell}</span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-8 text-center text-xs font-mono text-slate-500">
                Executing query on simulated analytical database...
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
