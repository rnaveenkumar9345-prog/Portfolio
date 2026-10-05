import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveAnalyticsBanner } from './components/InteractiveAnalyticsBanner';
import { ProjectShowcase } from './components/ProjectShowcase';
import { InteractiveSqlSandbox } from './components/InteractiveSqlSandbox';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InteractiveAnalyticsBanner />
        <ProjectShowcase />
        <InteractiveSqlSandbox />
        <SkillsMatrix />
        <ExperienceEducation />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
