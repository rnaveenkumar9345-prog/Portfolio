export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Business Intelligence' | 'E-Commerce Analytics' | 'Sales Performance';
  tools: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  summary: string;
  datasetSize: string;
  keyInsights: string[];
  sqlHighlights: {
    queryTitle: string;
    code: string;
    description: string;
  };
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  chartData: {
    name: string;
    metricA: number;
    metricB?: number;
    unit?: string;
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    tags: string[];
    description: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  metricsNote: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
}
