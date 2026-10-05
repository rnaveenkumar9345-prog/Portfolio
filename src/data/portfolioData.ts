import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "R. Naveen",
  title: "Data Analyst",
  tagline: "Translating Complex Datasets into Actionable Business Intelligence & Interactive Dashboards",
  location: "Chennai, Tamil Nadu",
  phone: "+91 9345758077",
  email: "rnaveenkumar9345@gmail.com",
  linkedin: "https://www.linkedin.com/in/r-naveen126",
  github: "https://github.com/rnaveenkumar9345-prog",
  resumePath: "/resume.pdf",
  summary: "Detail-oriented and analytical Data Analyst with a strong foundation in SQL, Python, Excel, Power BI, and Tableau. Skilled in data cleaning, exploratory data analysis (EDA), data aggregation, KPI analysis, data visualization, and dashboard development. Experienced in analyzing e-commerce, customer, sales, and campaign data to identify trends and generate actionable business insights. Strong problem-solving skills with a keen interest in business intelligence, reporting, and data-driven decision-making.",
  status: "Available for Data Analyst & BI Roles",
};

export const CORE_KPIS = [
  {
    label: "Customer & Lead Records",
    value: "3,000+",
    context: "Analyzed at For You Trading",
    subtext: "Sales trend & campaign conversion analysis"
  },
  {
    label: "Orders Analyzed",
    value: "~100K",
    context: "Olist Brazilian E-Commerce",
    subtext: "Multi-table relational schema & EDA"
  },
  {
    label: "BI & Visualization Stack",
    value: "5+",
    context: "Power BI, Tableau, Excel, SQL, Python",
    subtext: "DAX, calculated fields & custom KPI charts"
  },
  {
    label: "Academic Foundation",
    value: "7.1 CGPA",
    context: "BCA Computer Applications",
    subtext: "Paavendhar College, Periyar University"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "supermarket-sales",
    title: "Supermarket Sales Analysis",
    subtitle: "End-to-End Business Performance & KPI Intelligence Dashboard",
    category: "Sales Performance",
    tools: ["SQL", "Excel", "Power BI", "DAX", "Tableau"],
    githubUrl: "https://github.com/rnaveenkumar9345-prog/Supermarket-Sales-dashboard",
    datasetSize: "Multi-Branch Retail Transaction Records",
    summary: "Cleaned and transformed retail sales data using Excel and MySQL. Formulated robust SQL aggregate queries, CASE statements, and HAVING clauses to evaluate branch profitability, customer types, payment modes, and product margins. Built interactive multi-filter dashboards in both Power BI and Tableau.",
    keyInsights: [
      "Identified top-revenue product lines and flagged lower-margin inventory for targeted promotions.",
      "Segmented customer types (Member vs. Normal) against payment channels (E-wallet, Cash, Credit Card) to pinpoint checkout preferences.",
      "Modeled monthly sales trends and gross income margins using custom DAX measures and Tableau calculated fields.",
      "Empowered branch managers to monitor hourly footfall peaks and optimize staff allocation."
    ],
    sqlHighlights: {
      queryTitle: "Branch Sales, Profit Margin & Customer Category Analysis",
      code: `SELECT 
    branch,
    customer_type,
    product_line,
    COUNT(invoice_id) AS total_orders,
    ROUND(SUM(total), 2) AS gross_sales,
    ROUND(SUM(gross_income), 2) AS total_profit,
    ROUND((SUM(gross_income) / SUM(total)) * 100, 2) AS profit_margin_pct,
    CASE 
        WHEN SUM(gross_income) >= 5000 THEN 'High Performer'
        WHEN SUM(gross_income) BETWEEN 2000 AND 4999 THEN 'Moderate'
        ELSE 'Review Margin'
    END AS performance_tier
FROM supermarket_sales
GROUP BY branch, customer_type, product_line
HAVING gross_sales > 1000
ORDER BY total_profit DESC;`,
      description: "Uses aggregate functions (COUNT, SUM, ROUND), CASE logic for tier classification, and HAVING clauses to filter viable revenue segments."
    },
    metrics: [
      { label: "Branch Tracking", value: "3 Branches" },
      { label: "Top Payment Mode", value: "E-Wallet (35%)" },
      { label: "Avg Gross Margin", value: "4.76%" },
      { label: "Key Dimensions", value: "6 Product Lines" }
    ],
    chartData: [
      { name: "Electronic Accessories", metricA: 25800, metricB: 1228, unit: "₹" },
      { name: "Food & Beverages", metricA: 23150, metricB: 1102, unit: "₹" },
      { name: "Sports & Travel", metricA: 22400, metricB: 1066, unit: "₹" },
      { name: "Home & Lifestyle", metricA: 21900, metricB: 1042, unit: "₹" },
      { name: "Fashion Accessories", metricA: 21100, metricB: 1004, unit: "₹" },
      { name: "Health & Beauty", metricA: 19950, metricB: 950, unit: "₹" },
    ]
  },
  {
    id: "olist-ecommerce",
    title: "Brazilian E-Commerce Sales & Customer Analysis",
    subtitle: "Multi-Table Public Dataset Analysis (~100,000 Orders)",
    category: "E-Commerce Analytics",
    tools: ["Python", "Pandas", "MySQL", "Excel", "Power BI"],
    githubUrl: "https://github.com/rnaveenkumar9345-prog/Olist-Ecommerce-Data-Analytics",
    datasetSize: "~100K Orders across 8 Relational Tables",
    summary: "Comprehensive Exploratory Data Analysis (EDA) on the Brazilian Olist e-commerce public dataset. Cleaned and preprocessed multi-table relational records using Python (Pandas) and MySQL. Analyzed customer purchase behavior, geographic shipping bottlenecks, delivery delays, payment installments, and review sentiment scores.",
    keyInsights: [
      "Extracted relational data across 100K orders, connecting customers, sellers, freight logs, product categories, and review ratings.",
      "Identified clear correlation between freight delivery delays and negative customer review scores (< 2.0 stars).",
      "Analyzed customer retention and repeat purchase frequencies across top Brazilian states (São Paulo, Rio de Janeiro, Minas Gerais).",
      "Constructed a dual-page Power BI dashboard detailing Executive Overview and Deep-Dive Product & Customer segmentation."
    ],
    sqlHighlights: {
      queryTitle: "Multi-Table Relational Join: Delivery Delay Impact on Customer Reviews",
      code: `SELECT 
    c.customer_state,
    p.product_category_name,
    COUNT(DISTINCT o.order_id) AS total_orders,
    ROUND(AVG(DATEDIFF(o.order_delivered_customer_date, o.order_estimated_delivery_date)), 1) AS avg_delay_days,
    ROUND(AVG(r.review_score), 2) AS avg_review_score,
    ROUND(SUM(pay.payment_value), 2) AS total_revenue
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id
INNER JOIN order_items oi ON o.order_id = oi.order_id
INNER JOIN products p ON oi.product_id = p.product_id
INNER JOIN order_reviews r ON o.order_id = r.order_id
INNER JOIN order_payments pay ON o.order_id = pay.order_id
WHERE o.order_status = 'delivered'
GROUP BY c.customer_state, p.product_category_name
HAVING total_orders >= 50
ORDER BY avg_delay_days DESC;`,
      description: "Demonstrates relational database mastery: 5-table INNER JOIN with date difference calculations (DATEDIFF), review score aggregations, and state-level categorization."
    },
    metrics: [
      { label: "Orders Analyzed", value: "~100,000" },
      { label: "Joined Tables", value: "8 Tables" },
      { label: "Delivery KPI", value: "Delay vs Rating" },
      { label: "Dashboards", value: "2 Power BI Views" }
    ],
    chartData: [
      { name: "Bed & Bath", metricA: 11115, metricB: 4.1 },
      { name: "Health & Beauty", metricA: 9670, metricB: 4.3 },
      { name: "Sports & Leisure", metricA: 8641, metricB: 4.2 },
      { name: "Computers & Acc", metricA: 7827, metricB: 4.0 },
      { name: "Furniture & Decor", metricA: 6512, metricB: 3.9 },
      { name: "Housewares", metricA: 5884, metricB: 4.1 },
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "SQL & Relational Databases",
    iconName: "Database",
    skills: [
      {
        name: "MySQL / Relational Queries",
        level: "Advanced",
        tags: ["Joins", "Subqueries", "GROUP BY", "HAVING", "CASE"],
        description: "Writing complex multi-table joins, subqueries, conditional CASE logic, and data aggregation for business reporting."
      },
      {
        name: "Data Aggregation & KPI Modeling",
        level: "Proficient",
        tags: ["COUNT", "SUM", "AVG", "ROUND", "DATEDIFF"],
        description: "Transforming raw transactional tables into structured executive summaries and KPI metrics."
      }
    ]
  },
  {
    title: "Python & Data Science Ecosystem",
    iconName: "Code2",
    skills: [
      {
        name: "Python (Pandas & NumPy)",
        level: "Proficient",
        tags: ["Data Cleaning", "Data Transformation", "Multi-table Merging", "Missing Value Imputation"],
        description: "Handling multi-table datasets, vector operations, outlier detection, and data structuring with Pandas."
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        level: "Proficient",
        tags: ["Matplotlib", "Seaborn", "Distribution Analysis", "Correlation Analysis"],
        description: "Visualizing customer cohorts, order distributions, delivery delays, and review sentiment patterns."
      }
    ]
  },
  {
    title: "Business Intelligence & Visualization",
    iconName: "BarChart3",
    skills: [
      {
        name: "Power BI",
        level: "Advanced",
        tags: ["DAX Measures", "Interactive Reports", "Slicers & Filters", "Data Modeling"],
        description: "Designing end-to-end interactive dashboards, DAX formulas for dynamic KPI calculation, and executive views."
      },
      {
        name: "Tableau",
        level: "Proficient",
        tags: ["Calculated Fields", "Parameters", "Interactive Visualizations", "Dashboard Layouts"],
        description: "Building responsive visualizations, trend lines, parameters, and interactive visual analytics."
      }
    ]
  },
  {
    title: "Spreadsheet & Business Reporting",
    iconName: "FileSpreadsheet",
    skills: [
      {
        name: "Microsoft Excel",
        level: "Advanced",
        tags: ["Pivot Tables", "Pivot Charts", "Data Cleaning", "Advanced Sorting & Filtering"],
        description: "High-speed data cleansing, dimensional slicing via Pivot Tables, and presentation-ready chart summaries."
      },
      {
        name: "Data Cleaning & Quality Assurance",
        level: "Proficient",
        tags: ["Deduplication", "Schema Normalization", "Anomaly Detection"],
        description: "Validating data integrity, resolving inconsistent formats, and preparing audit-ready reporting data."
      }
    ]
  }
];

export const CORE_COMPETENCIES = [
  "Data Analysis",
  "Data Cleaning",
  "Exploratory Data Analysis (EDA)",
  "Data Visualization",
  "KPI Analysis",
  "Business Intelligence",
  "Dashboard Development",
  "Data Aggregation",
  "Business Reporting",
  "Actionable Insights",
  "Problem Solving"
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Online Sales Executive",
    company: "For You Trading Company",
    location: "Chennai, Tamil Nadu",
    period: "May 2025 – May 2026",
    type: "Professional Experience",
    highlights: [
      "Analyzed 3,000+ customer and lead records to identify sales patterns, customer behavior trends, and lead-generation bottlenecks.",
      "Evaluated online advertising campaign performance and lead acquisition channels to help optimize marketing ROI.",
      "Tracked monthly customer sales pipelines, improving lead handling consistency and reporting clarity.",
      "Synthesized sales and campaign data into structured weekly summaries to support data-driven management decisions."
    ],
    metricsNote: "3,000+ Customer & Lead Records Analyzed"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Paavendhar College of Arts & Science",
    university: "Periyar University",
    period: "2021 – 2024",
    score: "7.1",
    scoreType: "CGPA"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School",
    period: "2019 – 2021",
    score: "80%",
    scoreType: "Percentage"
  }
];
