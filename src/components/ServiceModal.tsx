import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem, SITE_DATA } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl cyber-glass-card rounded-2xl border border-cyan-400/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
              {service.category}
            </span>
            {service.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-400/40">
                {service.badge}
              </span>
            )}
          </div>

          {/* Service Title */}
          <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wide">
            {service.name}
          </h3>

          {/* Full Description */}
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Deliverables / Features */}
          <div className="mt-5 pt-4 border-t border-cyan-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> What Is Included:
            </h4>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Free Demo / Customization note */}
          <div className="mt-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Pre-built demo websites available for this service. Can be customized for your requirements.</span>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Pricing: <span className="text-white font-semibold">{service.pricingHint || "Custom Quote"}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={SITE_DATA.contact.getWhatsAppUrl(service.whatsappPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.35)] transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
