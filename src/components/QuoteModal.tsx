import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Business Website');
  const [needApk, setNeedApk] = useState(true);
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `*Request for Website Consultation*
*Client Name:* ${name || 'Prospective Client'}
*Selected Service:* ${selectedService}
*Needs Android APK:* ${needApk ? 'Yes (Website + APK)' : 'No (Website only)'}
*Project Details:* ${note || 'Standard consultation requested'}`;

    const url = SITE_DATA.contact.getWhatsAppUrl(prompt);
    onSuccess('Consultation request structured! Connecting to WhatsApp...');
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg cyber-glass-card rounded-3xl border-2 border-cyan-400/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.3)] text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
              Fast Track Consultation
            </span>
          </div>

          <h3 className="font-display text-2xl font-black text-white">
            Request a Website / APK
          </h3>

          <p className="text-xs text-slate-300 mt-1">
            Let us know what you want to build. We will prepare free demo samples and a direct estimate.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-cyan-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Service Required
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-cyan-500/30 text-xs text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                {SITE_DATA.services.map((s) => (
                  <option key={s.id} value={s.name} className="bg-[#0b122c] text-white">
                    {s.name}
                  </option>
                ))}
                <option value="Free Demo Website Review" className="bg-[#0b122c] text-white">
                  Free Demo Website Review
                </option>
              </select>
            </div>

            {/* APK Checkbox option */}
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="include-apk-check"
                  type="checkbox"
                  checked={needApk}
                  onChange={(e) => setNeedApk(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-slate-700 cursor-pointer"
                />
                <label htmlFor="include-apk-check" className="text-xs text-emerald-300 font-semibold cursor-pointer">
                  Also package into Android APK (.apk file)
                </label>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                Recommended
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Quick Project Notes
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Mention any specific features or reference websites you like..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#080d21] border border-cyan-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer transition hover:opacity-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with Dhannjay on WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
