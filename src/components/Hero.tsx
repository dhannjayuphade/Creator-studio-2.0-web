import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Download,
  MessageCircle,
  Eye
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { DeviceMockup } from './DeviceMockup';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenApkConverter?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenApkConverter }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Decorative Cyber Elements */}
      <div className="absolute inset-0 cyber-grid-bg opacity-35 pointer-events-none" />
      
      {/* Neon glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Tagline Pill: "Your Idea → My Code → Live Website 🚀" */}
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-purple-950/90 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs sm:text-sm font-black text-white tracking-widest uppercase">
              CREATOR STUDIO 2.0
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs sm:text-sm font-bold text-cyan-300">
              {SITE_DATA.brand.tagline}
            </span>
          </motion.div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Engineering by</span>
            <span className="text-white font-bold tracking-wide">DHANANJAY UPHADE</span>
            <span>•</span>
            <a
              href={SITE_DATA.contact.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1"
            >
              dhannjayuphade.github.io
            </a>
          </div>
        </div>

        {/* Main Headings Grid */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Marathi Supporting Slogan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-3"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0a142c] border border-cyan-500/40 text-xs sm:text-sm font-semibold text-cyan-300 shadow-sm">
              {SITE_DATA.brand.marathiTagline}
            </span>
          </motion.div>

          {/* Primary Big Headline */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
          >
            Creator Studio 2.0 <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Web & Android APK Development
            </span>
          </motion.h1>

          {/* Subheading text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Lead Developer <span className="text-cyan-300 font-semibold">Dhananjay Uphade</span> builds high-converting custom websites, modern web applications, and direct Android APK packages with free live demos for your business.
          </motion.p>

          {/* 4 Feature Badges (Matching Banner: Responsive, Fast, Secure, Modern UI/UX) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1430]/90 border border-cyan-500/30 text-xs text-cyan-200 shadow-sm">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">Responsive</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1430]/90 border border-purple-500/30 text-xs text-purple-200 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-semibold">Fast Loading</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1430]/90 border border-blue-500/30 text-xs text-blue-200 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">Secure Code</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1430]/90 border border-emerald-500/30 text-xs text-emerald-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">Modern UI/UX</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8"
          >
            {/* Start Your Website CTA */}
            <button
              id="hero-start-website-btn"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Start Your Website</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* View Projects Button */}
            <a
              id="hero-view-projects-btn"
              href="#projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl cyber-glass hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-cyan-400/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>View Projects</span>
            </a>

            {/* Free Demo Pill CTA */}
            <a
              id="hero-free-demo-pill-btn"
              href="#demo-section"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold text-sm sm:text-base border border-emerald-400/40 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Try Free Demo</span>
            </a>

            {/* Convert to APK Button */}
            {onOpenApkConverter && (
              <button
                id="hero-convert-apk-btn"
                onClick={onOpenApkConverter}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 text-emerald-300 font-bold text-sm sm:text-base border border-emerald-400/50 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.25)] cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Convert to APK</span>
              </button>
            )}
          </motion.div>

          {/* Quick contact strip */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>Direct WhatsApp:</span>
            <a
              href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I am interested in building a website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-2 flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              +91 8975881499
            </a>
          </div>
        </div>

        {/* 3D LAPTOP + SMARTPHONE MOCKUP DISPLAY */}
        <div className="mt-12 sm:mt-16">
          <DeviceMockup />
        </div>

        {/* Highlighted Banner Callout: "Website Already Created? Free Demos + Android APK Included" */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="cyber-glass-card rounded-2xl p-4 sm:p-6 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.3)] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-white text-base sm:text-lg">
                  Website Already Created? <span className="text-emerald-400">Try Free Demo</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready-to-use demo websites can be previewed immediately and tailored to your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#demo-section"
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-extrabold text-xs hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(34,197,94,0.35)]"
              >
                Explore Demos
              </a>
              {onOpenApkConverter ? (
                <button
                  onClick={onOpenApkConverter}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5"
                >
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Convert to APK</span>
                </button>
              ) : (
                <a
                  href="#apk-section"
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-semibold transition"
                >
                  Website → APK
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
