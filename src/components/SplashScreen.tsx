import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Instagram, 
  Mail, 
  Layers, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Flame, 
  ExternalLink,
  Smartphone,
  Zap
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [countdown, setCountdown] = useState(6);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // High-tech sound chime using Web Audio API
  const playCyberChime = () => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.3); // C6

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {
      // Audio context might be restricted before interaction; safe fallback
    }
  };

  const steps = [
    { label: "Initializing Studio Architecture", icon: Code2, tech: "React 19 + TypeScript + Tailwind" },
    { label: "Mounting 12+ Core Web Services", icon: Layers, tech: "Portfolios, Portals, E-Com & Full-Stack" },
    { label: "Bundling Android APK Engine", icon: Smartphone, tech: "Cross-Platform Web-to-APK Runtime" },
    { label: "Creator Studio 2.0 Ready!", icon: Sparkles, tech: "Crafted & Engineered by Dhananjay Uphade" },
  ];

  // Sequence progression
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1400);

    return () => clearInterval(stepInterval);
  }, [steps.length]);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onComplete]);

  const handleEnterStudio = () => {
    playCyberChime();
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        id="welcome-animation-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#040714] text-white overflow-y-auto px-4 py-6 sm:py-10"
      >
        {/* Background Cyber Atmosphere */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Cyber matrix grid */}
          <div className="absolute inset-0 cyber-grid-bg opacity-30" />
          
          {/* Neon pulsating orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[100px] animate-pulse" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-32 left-1/3 w-[500px] h-72 rounded-full bg-blue-600/15 blur-[110px]" />
          
          {/* Subtle horizontal scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent h-32 w-full animate-scanline" />
        </div>

        {/* Top Floating Utility Bar */}
        <div className="relative z-10 w-full max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081026]/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>CREATOR STUDIO v2.0 // SYSTEM BOOT</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(prev => !prev)}
              aria-label={isMuted ? "Unmute intro sounds" : "Mute intro sounds"}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 border border-white/10 transition cursor-pointer text-xs flex items-center gap-1"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
            </button>

            <button
              id="skip-welcome-btn"
              onClick={handleEnterStudio}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/15 text-xs font-semibold tracking-wide transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Central Core Welcome Card */}
        <div className="relative z-10 w-full max-w-2xl my-auto text-center py-4">
          
          {/* Animated 3D Holographic Crest */}
          <motion.div
            initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center"
          >
            {/* Outer spinning radar border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.3)]"
            />
            {/* Middle counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-purple-500/40"
            />

            {/* Core Cyber Shield */}
            <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-2xl bg-gradient-to-br from-[#0e1c45] via-[#091129] to-[#040817] border-2 border-cyan-400 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,240,255,0.5)] transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                2.0
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                STUDIO
              </span>

              {/* Glowing Corner Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg p-1.5 shadow-lg border border-[#040714]">
                <Code2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Holographic Studio Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-950/90 to-blue-950/90 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Release</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              CREATOR STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">2.0</span>
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold tracking-widest text-cyan-400 uppercase">
              <span>WEB DEVELOPMENT</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-300">ANDROID APK CREATION</span>
            </div>
          </motion.div>

          {/* Developer Attribution Box */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 p-4 rounded-2xl bg-[#0a1432]/70 border border-cyan-500/25 max-w-xl mx-auto backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="text-xs text-slate-400 font-medium">
              Architected & Developed by
            </div>
            <div className="font-display text-lg sm:text-xl font-black text-white tracking-wide mt-0.5 flex items-center justify-center gap-2">
              <span>DHANANJAY UPHADE</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-400/30">
                PRO VERIFIED
              </span>
            </div>
            <p className="text-xs sm:text-sm text-cyan-200/90 mt-1 font-medium">
              {SITE_DATA.brand.marathiTagline}
            </p>

            {/* Quick Touchpoints Bar */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px]">
              <a
                href={SITE_DATA.contact.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition"
              >
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>dhannjayuphade.github.io</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={SITE_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 transition"
              >
                <Instagram className="w-3 h-3 text-pink-400" />
                <span>@dhannjayuphade</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={SITE_DATA.contact.featuredPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 text-white border border-pink-400/40 transition font-medium"
              >
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Featured Project Post</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-75" />
              </a>
            </div>
          </motion.div>

          {/* Dynamic System Boot Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 max-w-md mx-auto"
          >
            <div className="flex items-center justify-between text-xs mb-1.5 px-1 font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {steps[currentStep].label}
              </span>
              <span className="text-cyan-400 font-bold">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>

            {/* Glowing Progress bar */}
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_#00f0ff]"
                initial={{ width: "20%" }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="text-[10px] font-mono text-slate-400 mt-1 truncate">
              {steps[currentStep].tech}
            </div>
          </motion.div>

          {/* Big High-Impact Enter Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              id="enter-creator-studio-btn"
              onClick={handleEnterStudio}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>ENTER CREATOR STUDIO 2.0</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <span className="text-xs text-slate-400 font-mono">
              Auto-entering in <strong className="text-cyan-300">{countdown}s</strong>
            </span>
          </motion.div>

        </div>

        {/* Bottom Bar: Developer Credentials & Tagline */}
        <div className="relative z-10 w-full max-w-5xl pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">Creator Studio 2.0 Web Development</span>
            <span>•</span>
            <span className="text-cyan-400">{SITE_DATA.contact.email}</span>
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            “Your Idea → My Code → Live Website”
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
