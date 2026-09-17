import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Github, 
  Globe, 
  ArrowUp,
  Heart,
  Smartphone,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Check,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_DATA } from '../data/siteData';

interface FooterProps {
  onShowToast?: (msg: string) => void;
  onOpenWelcomeAnimation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast, onOpenWelcomeAnimation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');

  useEffect(() => {
    try {
      const savedEmail = localStorage.getItem('dhannjay_newsletter_email');
      if (savedEmail) {
        setIsSubscribed(true);
        setSubscribedEmail(savedEmail);
      }
    } catch {
      // Storage access gracefully handled
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (val: string): string | null => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter your email address.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address (e.g. name@example.com).';
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate network transmission for high-tech feedback
    setTimeout(() => {
      const cleanEmail = email.trim();
      setIsSubmitting(false);
      setIsSubscribed(true);
      setSubscribedEmail(cleanEmail);
      setEmail('');

      try {
        localStorage.setItem('dhannjay_newsletter_email', cleanEmail);
      } catch {
        // Safe fallback
      }

      const toastText = `🎉 Subscribed! Welcome to Dhannjay's Tech Dispatch (${cleanEmail}).`;
      if (onShowToast) {
        onShowToast(toastText);
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubscribed(false);
    setError(null);
    setEmail('');
  };

  return (
    <footer className="relative bg-[#03060f] text-slate-400 pt-16 pb-24 lg:pb-12 border-t border-cyan-500/20 overflow-hidden">
      {/* Background cyber accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Sleek Cyber Glass Newsletter Signup Section */}
        <div 
          id="newsletter-section" 
          className="mb-14 relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 border border-cyan-500/30 bg-gradient-to-br from-[#0c163b]/90 via-[#070e28]/95 to-[#040817]/95 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_30px_rgba(0,240,255,0.1)] backdrop-blur-xl"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle cyber grid pattern inside */}
          <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] font-semibold tracking-wider text-cyan-300 uppercase">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>Developer Dispatch & VIP Demo Alerts</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight leading-snug">
                Stay Ahead in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">Web & App Innovation</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Subscribe for early access to freshly deployed interactive website demos, speed benchmarks, Android APK workflows, and exclusive project discount codes.
              </p>

              {/* Guarantees / Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Monthly High-Signal Digest
                </span>
                <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Spam • 100% Privacy
                </span>
                <span className="flex items-center gap-1.5 text-blue-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Instant Free Demo Access
                </span>
              </div>
            </div>

            {/* Right Column: Form with Validation & Feedback */}
            <div className="lg:col-span-6">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#061029]/80 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>You're Subscribed!</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">ACTIVE</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Delivering exclusive tech updates & free demo drops to <span className="text-cyan-300 font-mono font-medium">{subscribedEmail}</span>.
                      </p>
                    </div>
                  </div>

                  <button
                    id="newsletter-change-email-btn"
                    onClick={handleReset}
                    type="button"
                    className="text-xs text-slate-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer transition shrink-0 self-end sm:self-center"
                  >
                    Change email
                  </button>
                </motion.div>
              ) : (
                <form 
                  id="newsletter-signup-form"
                  onSubmit={handleSubmit} 
                  noValidate
                  className="space-y-3"
                >
                  <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4 text-cyan-400/80" />
                      </div>
                      <input
                        id="newsletter-email-input"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Enter your email (e.g. alex@example.com)"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#040817]/95 border ${
                          error 
                            ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                            : 'border-cyan-500/30 hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        } text-white placeholder-slate-500 text-xs sm:text-sm font-medium outline-none transition-all shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]`}
                        disabled={isSubmitting}
                      />
                    </div>

                    <button
                      id="newsletter-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_28px_rgba(0,240,255,0.65)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe Free</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Validation Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-1.5 text-xs text-rose-400 font-medium px-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-[11px] text-slate-500">
                    No spam ever. Unsubscribe with 1 click at any time. We respect your developer inbox.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Existing Navigation and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c1c45] to-[#060a1c] border border-cyan-400/60 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <span className="font-display font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                  2.0
                </span>
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-black text-white tracking-wider">
                  CREATOR STUDIO 2.0
                </h3>
                <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-bold">
                  WEB DEVELOPMENT • DHANANJAY UPHADE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Creator Studio 2.0 provides custom websites, interactive web applications, and standalone Android APK creation by Dhananjay Uphade.
            </p>

            {/* Official Website Badge */}
            <a
              href={SITE_DATA.contact.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 hover:border-cyan-400 transition"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Website: <strong>dhannjayuphade.github.io</strong></span>
            </a>

            {/* Slogan from Banner */}
            <div className="block">
              <span className="inline-block px-3 py-1 rounded-lg bg-[#0a122e] border border-cyan-500/30 text-xs text-cyan-300 font-medium">
                Simple • Modern • Fast • Secure
              </span>
            </div>

            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <span>Your Success is My Priority</span>
              <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {onOpenWelcomeAnimation && (
                <li>
                  <button
                    onClick={onOpenWelcomeAnimation}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Watch Welcome Intro</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">Services (12 Core)</a>
              </li>
              <li>
                <a href="#demo-section" className="hover:text-cyan-400 transition text-emerald-400 font-semibold">Free Demo Websites</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">Project Portfolio</a>
              </li>
              <li>
                <a href="#apk-section" className="hover:text-cyan-400 transition">Android APK Creation</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">Developer Profile</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">Contact & Quotation</a>
              </li>
            </ul>
          </div>

          {/* Core Services list */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Personal / Portfolio Site</li>
              <li>Business Website</li>
              <li>School / College Portal</li>
              <li>E-Commerce Storefront</li>
              <li>Firebase Auth & Database</li>
              <li>Website to Android APK</li>
            </ul>
          </div>

          {/* Connect & Contact */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhananjay, contacting Creator Studio 2.0 from website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>+91 8975881499</span>
              </a>

              <a
                href={`mailto:${SITE_DATA.contact.email}`}
                className="flex items-center gap-2 hover:text-cyan-300 truncate"
              >
                <Mail className="w-4 h-4 shrink-0 text-cyan-400" />
                <span className="truncate">{SITE_DATA.contact.email}</span>
              </a>

              <a
                href={SITE_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400"
              >
                <Instagram className="w-4 h-4 shrink-0 text-pink-400" />
                <span>@dhannjayuphade</span>
              </a>

              <a
                href={SITE_DATA.contact.featuredPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200"
              >
                <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Featured Project Reel</span>
              </a>

              <a
                href={SITE_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github className="w-4 h-4 shrink-0 text-slate-300" />
                <span>github.com/dhannjayuphade</span>
              </a>

              <a
                href={SITE_DATA.contact.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>dhannjayuphade.github.io</span>
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} CREATOR STUDIO 2.0 Web Development by Dhananjay Uphade – All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="text-cyan-400 font-mono">“Your Idea → My Code → Live Website”</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
