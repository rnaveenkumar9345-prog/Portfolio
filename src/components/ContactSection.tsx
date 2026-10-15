import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Data Analyst Role Inquiry - R. Naveen'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-obsidian-950 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono text-brand-400 tracking-widest uppercase mb-3 font-semibold flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            Direct Engagement
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Let's Discuss Data & Business Opportunities
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Open for full-time Data Analyst roles, Business Intelligence positions, and analytics internships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email Card */}
            <div className="supreme-panel supreme-panel-hover p-5 rounded-2xl border border-slate-800/80 hover:border-brand-500/35 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-obsidian-900 border border-brand-500/25 text-brand-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-brand-300 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-slate-800 transition-all"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="supreme-panel supreme-panel-hover p-5 rounded-2xl border border-slate-800/80 hover:border-brand-500/35 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-obsidian-900 border border-brand-500/25 text-brand-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Phone / WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-white hover:text-brand-300 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-xl bg-obsidian-900 hover:bg-obsidian-850 text-slate-400 hover:text-white border border-slate-800 transition-all"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="supreme-panel p-5 rounded-2xl border border-slate-800/80 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-obsidian-900 border border-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location</div>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for relocation & remote roles
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="supreme-panel p-4 rounded-xl border border-slate-800 hover:border-brand-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="supreme-panel p-4 rounded-xl border border-slate-800 hover:border-brand-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-brand-500/25 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/25 text-brand-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Official Resume PDF</div>
                  <div className="text-[11px] text-slate-400">Verified Analytics Credentials</div>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="R_Naveen_Data_Analyst_Resume.pdf"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-md shadow-brand-500/20 active:scale-95 border border-brand-400/30"
              >
                Download
              </a>
            </div>

          </div>

          {/* Right Column: Direct In-Browser Email Composer */}
          <div className="lg:col-span-7">
            <div className="supreme-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-800">
                <MessageSquare className="w-4 h-4 text-brand-400" />
                <h3 className="text-base font-bold text-white font-sans">
                  Send a Direct Message / Role Inquiry
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Data Analyst Role / Interview Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Naveen, we reviewed your analytics case studies and would like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all resize-none placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-400 text-white transition-all shadow-lg shadow-brand-500/25 active:scale-98 border border-brand-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client ({PERSONAL_INFO.email})</span>
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-1 font-mono">
                  Opens your default email client with pre-populated message fields.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
