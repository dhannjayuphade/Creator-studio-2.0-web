import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Code2, 
  Terminal, 
  Smartphone, 
  CheckCircle2, 
  Flame, 
  Github, 
  ExternalLink,
  MessageCircle,
  Sparkles,
  Globe,
  Instagram,
  Mail
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Developer Monogram Card with Cyber Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-xl" />

              <div className="relative cyber-glass-card rounded-3xl p-6 sm:p-8 border-2 border-cyan-400/40 text-center">
                {/* Stylized Monogram Profile Visual */}
                <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow" />
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0c1638] via-[#080e22] to-[#040816] border-2 border-cyan-400 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <span className="font-display font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                      2.0
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      STUDIO
                    </span>
                  </div>
                  <div className="absolute bottom-1 right-1 p-2 rounded-full bg-cyan-500 text-black shadow-lg">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Developer Name & Title */}
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 font-semibold mb-1">
                  FOUNDER & DEVELOPER
                </div>
                <h3 className="font-display text-2xl font-black text-white tracking-wide">
                  DHANANJAY UPHADE
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mt-1">
                  Creator Studio 2.0 Web Development
                </p>

                {/* Marathi Quote Slogan */}
                <div className="mt-4 p-2.5 rounded-xl bg-[#09122c] border border-cyan-500/20 text-xs text-cyan-200 font-medium">
                  {SITE_DATA.brand.marathiTagline}
                </div>

                {/* Official Links & Touchpoints */}
                <div className="mt-5 space-y-2 text-left text-xs">
                  <a
                    href={SITE_DATA.contact.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-slate-200 hover:text-cyan-300 transition"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Official Website: <strong className="text-white">dhannjayuphade.github.io</strong></span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>

                  <a
                    href={SITE_DATA.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/30 text-slate-200 hover:text-pink-300 transition"
                  >
                    <span className="flex items-center gap-2">
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                      <span>Instagram: <strong className="text-white">@dhannjayuphade</strong></span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-pink-400" />
                  </a>

                  <a
                    href={SITE_DATA.contact.featuredPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-400/30 text-slate-200 hover:text-white transition"
                  >
                    <span className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold text-white">Featured Project Instagram Post</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-pink-300" />
                  </a>
                </div>

                {/* Action Links */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2.5">
                  <a
                    href={SITE_DATA.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${SITE_DATA.contact.email}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition"
                    title={SITE_DATA.contact.email}
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </a>
                  <a
                    href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhananjay, let's discuss a web development project with Creator Studio 2.0.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Honest Profile Description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                Creator Studio 2.0
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                Modern Web Development & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Android APK Applications
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Welcome to <strong className="text-cyan-300">Creator Studio 2.0 Web Development</strong>! I am <strong className="text-white">Dhananjay Uphade</strong>, lead developer and founder, committed to transforming your visionary concepts into high-performing, interactive websites and web applications.
              </p>
              <p>
                Whether you need a sleek personal portfolio, an intuitive student management system, a commercial showcase, or a full-stack Firebase cloud application, Creator Studio 2.0 provides custom architecture built with clean code and modern aesthetics.
              </p>
              <p>
                With our specialized <strong className="text-emerald-300">Android APK packaging service</strong>, every web product can seamlessly be compiled into an installable Android APK complete with dedicated launch icons, offline caching, and responsive mobile-first performance.
              </p>
            </div>

            {/* Practical Core Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Responsive Web Design (Mobile, Tablet, Desktop)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Single Page & Dynamic Web Applications</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Firebase Authentication & Cloud Storage</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Android APK Packaging & Distribution</span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition"
              >
                Let's Build Your Website
              </a>
              <a
                href="#demo-section"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 text-xs sm:text-sm font-semibold transition"
              >
                Explore Free Demos
              </a>
              <a
                href={SITE_DATA.contact.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/30 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>dhannjayuphade.github.io</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

