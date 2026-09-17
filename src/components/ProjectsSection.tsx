import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Eye, 
  Sparkles, 
  Code2, 
  FolderGit2, 
  CheckCircle2,
  Filter
} from 'lucide-react';
import { SITE_DATA, ProjectItem } from '../data/siteData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'management', label: 'Management Systems' },
    { id: 'creative-3d', label: '3D & Creative Web' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'utility', label: 'Quiz & Utility' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Gallery</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Featured Real-World <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Projects & Web Applications
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Engineered with modern frontend architectures, interactive state engines, and cloud persistence.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-[#0b122c] text-slate-300 hover:text-white border border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="cyber-glass-card rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
              >
                {/* Project Image & Overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091128] via-transparent to-black/50" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/70 text-cyan-300 border border-cyan-400/30 backdrop-blur-sm">
                    {project.categoryLabel}
                  </div>

                  {project.isFreeDemo && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-500 text-black shadow">
                      Demo Ready
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Live Demo & GitHub */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/15 flex items-center justify-between gap-2.5">
                    {/* Live Demo Button */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold flex items-center justify-center gap-1.5 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex-1 py-2 px-3 rounded-xl bg-slate-800/40 text-slate-500 text-xs text-center">
                        Demo Upon Request
                      </span>
                    )}

                    {/* GitHub Button */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs font-medium flex items-center justify-center gap-1.5 transition"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="py-2 px-3 rounded-xl bg-slate-800/40 text-slate-500 text-xs">
                        Private Repo
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Direct Link Banner */}
        <div className="mt-12 text-center">
          <a
            href={SITE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#091128] hover:bg-[#0f1b3e] border border-cyan-500/30 hover:border-cyan-400 text-xs sm:text-sm font-semibold text-slate-200 transition-all shadow-md group"
          >
            <Github className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Explore More Repositories on GitHub: github.com/dhannjayuphade</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
