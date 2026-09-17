import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Code, 
  Sliders, 
  Clock, 
  Tag, 
  CheckCircle2,
  ThumbsUp
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const getReasonIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
    case 'Smartphone': return <Smartphone className="w-5 h-5 text-emerald-400" />;
    case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    case 'Code': return <Code className="w-5 h-5 text-purple-400" />;
    case 'Sliders': return <Sliders className="w-5 h-5 text-teal-400" />;
    case 'Clock': return <Clock className="w-5 h-5 text-pink-400" />;
    case 'DollarSign': return <Tag className="w-5 h-5 text-emerald-400" />;
    default: return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why Choose Dhannjay Uphade</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Craftsmanship, Speed & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Reliable Technical Delivery
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Clear communication, direct access to the developer, and zero hidden complications.
          </p>
        </div>

        {/* 8 Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_DATA.whyChooseUs.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="p-5 rounded-2xl cyber-glass-card border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0a122e] border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getReasonIcon(reason.icon)}
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
