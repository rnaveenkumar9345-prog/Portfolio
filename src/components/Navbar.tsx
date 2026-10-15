import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  FileText,
  Menu,
  X,
  Database,
  Briefcase,
  GraduationCap,
  Layers,
  Terminal,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'SQL Lab', href: '#sql-sandbox', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Database },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-brand-500/15 shadow-xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent border border-brand-500/30 flex items-center justify-center font-bold text-brand-400 text-base group-hover:border-brand-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all">
              RN
            </div>
            <div>
              <span className="font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors text-sm font-sans">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Data Analyst
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-obsidian-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-brand-500/15 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-brand-500/40 hover:bg-obsidian-900/80 transition-all"
            >
              Contact
              <ArrowRight className="w-3 h-3 text-brand-400" />
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              download="R_Naveen_Data_Analyst_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-400 text-white transition-all shadow-lg shadow-brand-500/25 active:scale-95 border border-brand-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="R_Naveen_Resume.pdf"
              className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-obsidian-900 border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl supreme-panel border border-brand-500/20 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-500/15 transition-all"
                >
                  <link.icon className="w-4 h-4 text-brand-400" />
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="R_Naveen_Data_Analyst_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold text-slate-300 border border-slate-800 hover:bg-obsidian-900"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
