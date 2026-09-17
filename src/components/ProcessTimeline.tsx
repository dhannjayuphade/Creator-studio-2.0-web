import React from 'react';
import { motion } from 'motion/react';
import { 
  GitCommit, 
  ArrowRight, 
  Lightbulb, 
  MessageSquare, 
  Code2, 
  CheckCircle, 
  Rocket
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="relative py-20 lg:py-24 bg-gradient-to-b from-[#060a17] via-[#081026] to-[#060a17] border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured Workflow</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How We Work Together in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              5 Simple Steps
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            From initial concept discussion to live domain deployment and APK delivery.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 -translate-y-6 z-0" />

          {SITE_DATA.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative z-10 p-5 rounded-2xl cyber-glass-card border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {step.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#00f0ff]" />
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/70">
                Phase {idx + 1} of 5
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
