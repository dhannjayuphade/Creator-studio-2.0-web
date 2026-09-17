import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Sliders, 
  MessageCircle, 
  ShieldAlert, 
  Eye,
  Info,
  Check,
  Zap
} from 'lucide-react';
import { SITE_DATA, ProjectItem } from '../data/siteData';

export const FreeDemoSection: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<ProjectItem | null>(null);

  // Filter projects that have free demo available
  const demoProjects = SITE_DATA.projects.filter(p => p.isFreeDemo);

  return (
    <section id="demo-section" className="relative py-20 lg:py-24 bg-gradient-to-b from-[#060a17] via-[#091128] to-[#060a17] border-y border-emerald-500/20">
      {/* Radiant ambient glow */}
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Header Box */}
        <div className="cyber-glass rounded-3xl p-6 sm:p-10 border-2 border-emerald-400/40 shadow-[0_0_40px_rgba(34,197,94,0.25)] mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Featured Offer</span>
                <span className="bg-emerald-400 text-black px-2 py-0.5 rounded-full text-[10px] font-black ml-1">
                  100% Free Demo
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Website Already Created? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Try a Free Demo!
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                Already-created functional websites can be previewed immediately. You can test the user interface, workflows, and features live. If it matches your vision, we can customize it with your branding, data, and requirements!
              </p>

              {/* Free vs Paid Clarity Checklist (strictly addressing prompt instruction) */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-300 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Free Demo:</strong> Preview live site & code inspection</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30">
                  <Sliders className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Customization:</strong> Affordable tailored development</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="shrink-0 flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0a1532] border border-cyan-500/30 text-center max-w-xs w-full">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-200">Want a personalized live walkthrough?</span>
              <p className="text-[11px] text-slate-400 mt-1">Connect on WhatsApp for direct demo links</p>
              
              <a
                href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I would like to explore your Free Demo websites and discuss customization.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Free Demo Link</span>
              </a>
            </div>

          </div>
        </div>

        {/* Demo Website Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <div
              key={project.id}
              id={`demo-card-${project.id}`}
              className="cyber-glass-card rounded-2xl overflow-hidden border border-emerald-500/30 hover:border-emerald-400 transition-all flex flex-col justify-between group"
            >
              {/* Card Image / Preview Banner */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091128] via-transparent to-black/40" />
                
                {/* Free Demo Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500 text-black shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Free Demo Available</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/70 text-cyan-300 border border-cyan-400/30 backdrop-blur-sm">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-cyan-200 border border-cyan-500/20">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1 text-[10px] text-slate-400 font-mono">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="text-emerald-300">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Live Demo, Details, Customize) */}
                <div className="mt-5 pt-3 border-t border-emerald-500/20 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={project.liveUrl || SITE_DATA.contact.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold flex items-center justify-center gap-1.5 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <button
                      onClick={() => setSelectedDemo(project)}
                      className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Customize Button */}
                  <a
                    href={SITE_DATA.contact.getWhatsAppUrl(`Hi Dhannjay, I tried the demo for "${project.title}". I want to customize this for my requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(34,197,94,0.3)] transition"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Customize This Project</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-[#091228] border border-cyan-500/20 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Note on Demo vs. Custom:</strong> Exploring live demos and GitHub source code is 100% free with no obligation. Tailored development, custom branding, domain deployment, or adding new features is provided as an affordable paid service.
          </p>
        </div>

      </div>

      {/* Demo Details Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg cyber-glass-card rounded-2xl border border-emerald-400/50 p-6 shadow-2xl text-left">
            <h3 className="font-display text-xl font-bold text-white">
              {selectedDemo.title}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold mt-1">
              Category: {selectedDemo.categoryLabel}
            </p>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {selectedDemo.description}
            </p>

            <div className="mt-4 pt-3 border-t border-white/10">
              <h4 className="text-xs font-bold text-cyan-300 uppercase mb-2">Key Features:</h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedDemo.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedDemo(null)}
                className="px-4 py-2 rounded-xl bg-white/10 text-slate-300 text-xs font-medium hover:bg-white/20 transition cursor-pointer"
              >
                Close
              </button>

              <a
                href={SITE_DATA.contact.getWhatsAppUrl(`Hi Dhannjay, let's talk about customizing ${selectedDemo.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center gap-1.5 transition shadow"
              >
                <MessageCircle className="w-4 h-4" /> Customize on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
