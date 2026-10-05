import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  RotateCcw, 
  Database, 
  Table, 
  Check, 
  Copy
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
      database: 'MySQL • supermarket_db',
      description: 'Evaluates gross income, profit margin %, and applies CASE condition to assign performance tiers.',
      sql: `SELECT 
    branch,
    product_line,
    ROUND(SUM(total), 2) AS total_revenue,
    ROUND(SUM(gross_income), 2) AS gross_profit,
    ROUND((SUM(gross_income) / SUM(total)) * 100, 2) AS margin_pct,
    CASE 
        WHEN SUM(gross_income) >= 1200 THEN 'Top Tier'
        WHEN SUM(gross_income) >= 1000 THEN 'Optimal'
        ELSE 'Under Review'
    END AS tier
FROM supermarket_sales
GROUP BY branch, product_line
HAVING total_revenue > 20000
ORDER BY gross_profit DESC;`,
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
      title: 'Olist Multi-Table Join: Freight Delay vs Review Score',
      database: 'MySQL • olist_ecommerce_db',
      description: 'Joins 5 relational tables to correlate average shipping delay with customer review scores.',
      sql: `SELECT 
    c.customer_state,
    COUNT(DISTINCT o.order_id) AS total_orders,
    ROUND(AVG(DATEDIFF(o.order_delivered_customer_date, o.order_estimated_delivery_date)), 1) AS avg_delay_days,
    ROUND(AVG(r.review_score), 2) AS avg_review_rating
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN order_reviews r ON o.order_id = r.order_id
WHERE o.order_status = 'delivered'
GROUP BY c.customer_state
HAVING total_orders >= 500
ORDER BY avg_delay_days DESC;`,
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
      title: 'Lead Pipeline & Campaign Conversion Analysis',
      database: 'Excel / SQL • sales_records_db',
      description: 'Aggregates 3,000+ customer and lead records into campaign performance and conversion ratios.',
      sql: `SELECT 
    campaign_channel,
    COUNT(lead_id) AS total_leads,
    SUM(CASE WHEN status = 'Converted' THEN 1 ELSE 0 END) AS conversions,
    ROUND((SUM(CASE WHEN status = 'Converted' THEN 1 ELSE 0 END) * 100.0 / COUNT(lead_id)), 2) AS conversion_rate_pct,
    ROUND(SUM(deal_value), 2) AS pipeline_value
FROM lead_tracking
GROUP BY campaign_channel
ORDER BY conversion_rate_pct DESC;`,
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
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sql-sandbox" className="py-20 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE SQL & QUERY ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore My Real Query Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Click through my actual queries to see how I handle multi-table joins, conditional CASE classifications, and statistical aggregations.
          </p>
        </div>

        {/* Sandbox Window */}
        <div className="glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Query Selection Bar */}
          <div className="bg-dark-850 p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> Query Scenario:
              </span>
              {queries.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQueryIndex(idx);
                    setHasExecuted(true);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedQueryIndex === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'bg-dark-800 text-slate-400 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {q.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-dark-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunQuery}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-dark-900 transition-all shadow-md shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
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

          {/* Query Information Box */}
          <div className="px-6 py-3 bg-dark-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {activeQuery.database}
            </span>
            <span className="text-[11px] text-slate-500 italic hidden sm:inline">
              {activeQuery.description}
            </span>
          </div>

          {/* SQL Editor View */}
          <div className="p-6 bg-dark-950 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed border-b border-slate-800">
            <pre>
              <code>{activeQuery.sql}</code>
            </pre>
          </div>

          {/* Results Table Section */}
          <div className="p-6 bg-dark-900">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  QUERY RESULTSET
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-dark-800 px-2 py-0.5 rounded">
                  {activeQuery.rowCount} rows returned
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                Execution Time: {activeQuery.executionTime}
              </span>
            </div>

            {/* Rendered Table */}
            {hasExecuted ? (
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-dark-850 text-slate-300 border-b border-slate-800">
                    <tr>
                      {activeQuery.columns.map((col, idx) => (
                        <th key={idx} className="py-3 px-4 font-semibold text-cyan-300">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-dark-900/60">
                    {activeQuery.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-4 text-slate-300">
                            {typeof cell === 'string' && (cell.includes('Tier') || cell.includes('Optimal')) ? (
                              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
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
                Executing SQL query on schema...
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
