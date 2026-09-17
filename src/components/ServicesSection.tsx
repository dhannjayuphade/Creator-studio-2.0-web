import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  ShoppingCart, 
  LayoutDashboard, 
  HelpCircle, 
  Lock, 
  Database, 
  Smartphone, 
  Wrench, 
  Code2, 
  SmartphoneCharging,
  ArrowRight,
  Sparkles,
  Zap,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { SITE_DATA, ServiceItem } from '../data/siteData';
import { ServiceModal } from './ServiceModal';

// Icon mapper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'User': return <User className="w-6 h-6 text-cyan-400" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-400" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-400" />;
    case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-purple-400" />;
    case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-fuchsia-400" />;
    case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-pink-400" />;
    case 'Lock': return <Lock className="w-6 h-6 text-cyan-300" />;
    case 'Database': return <Database className="w-6 h-6 text-emerald-400" />;
    case 'Smartphone': return <Smartphone className="w-6 h-6 text-sky-400" />;
    case 'Wrench': return <Wrench className="w-6 h-6 text-amber-400" />;
    case 'Code2': return <Code2 className="w-6 h-6 text-teal-400" />;
    case 'SmartphoneCharging': return <SmartphoneCharging className="w-6 h-6 text-emerald-400" />;
    default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
  }
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-dots-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Services</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            High-Performance Web Solutions & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Android APK Development
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            From modern responsive personal portfolios to scalable school systems, e-commerce stores, and direct mobile APK packaging.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SITE_DATA.services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative cyber-glass-card rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col justify-between"
              >
                {/* Top Row: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#09112a] border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {service.category}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-white/5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row Actions */}
                <div className="mt-5 pt-3 border-t border-cyan-500/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={SITE_DATA.contact.getWhatsAppUrl(service.whatsappPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition shadow-sm"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner highlight reminder box */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Need something tailored or not listed above?{' '}
            <a
              href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I have a custom web project idea.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-4"
            >
              Contact me directly for custom architectural scoping →
            </a>
          </p>
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
