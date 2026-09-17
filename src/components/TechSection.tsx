import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Flame, 
  GitBranch, 
  Terminal, 
  Smartphone, 
  Boxes, 
  Layout, 
  Layers, 
  Sparkles, 
  Globe,
  Palette,
  FileCode,
  Cpu
} from 'lucide-react';
import { SITE_DATA, TechnologyItem } from '../data/siteData';

const getTechIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code': return <Code2 className="w-6 h-6" />;
    case 'Palette': return <Palette className="w-6 h-6" />;
    case 'FileCode': return <FileCode className="w-6 h-6" />;
    case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
    case 'GitBranch': return <GitBranch className="w-6 h-6 text-slate-200" />;
    case 'Terminal': return <Terminal className="w-6 h-6 text-blue-400" />;
    case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-400" />;
    case 'Boxes': return <Boxes className="w-6 h-6 text-cyan-400" />;
    case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
    case 'Layers': return <Layers className="w-6 h-6 text-sky-400" />;
    case 'Globe': return <Globe className="w-6 h-6 text-teal-400" />;
    default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
  }
};

export const TechSection: React.FC = () => {
  return (
    <section id="technologies" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Modern Tech Stack</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technologies I Use to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Build & Ship Live Systems
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            Carefully selected modern frameworks, backend cloud integrations, and mobile APK packaging pipelines.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SITE_DATA.technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className="p-4 rounded-2xl cyber-glass-card border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col items-center text-center group"
            >
              <div 
                className="w-12 h-12 rounded-xl bg-[#091128] border border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                style={{ color: tech.color }}
              >
                {getTechIcon(tech.icon)}
              </div>

              <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h4>

              <span className="text-[10px] text-slate-400 mt-0.5">
                {tech.level}
              </span>

              <span className="mt-2 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/5 text-cyan-300 border border-white/10">
                {tech.badge}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
