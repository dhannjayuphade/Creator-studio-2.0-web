import React from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Download, 
  Image, 
  Zap, 
  Wifi, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  FolderArchive
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface ApkSectionProps {
  onOpenApkConverter?: () => void;
}

export const ApkSection: React.FC<ApkSectionProps> = ({ onOpenApkConverter }) => {
  return (
    <section id="apk-section" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#060a17] via-[#07132a] to-[#060a17] border-y border-cyan-500/20">
      {/* Background cyber glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Workflow Banner: Website → Android App → APK */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 rounded-full bg-[#081534] border border-emerald-400/40 shadow-[0_0_25px_rgba(34,197,94,0.3)] text-xs sm:text-sm font-black">
            <span className="text-cyan-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Live Website
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-blue-300 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" /> Android App
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 flex items-center gap-1.5 bg-emerald-500/20 px-2 py-0.5 rounded-full">
              <Download className="w-3.5 h-3.5" /> Standalone APK
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: APK Content & Features */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                Specialized Service
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3 leading-tight">
                Website + <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Android APK Creation
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-xl">
                Convert your live web application or business portal into an installable Android APK. Your users can download and install it directly on any Android smartphone, complete with custom app launcher icon, offline caching, and full-screen experience!
              </p>
            </div>

            {/* Feature Checklist (strictly matching prompt) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl cyber-glass-card border border-cyan-500/20 flex items-start gap-3 text-left">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Image className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Custom App Icon</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">High-res branded launcher icon appearing on phone home screen.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl cyber-glass-card border border-cyan-500/20 flex items-start gap-3 text-left">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Splash Screen</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Branded opening screen while your app initializes smoothly.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl cyber-glass-card border border-cyan-500/20 flex items-start gap-3 text-left">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Responsive App UI</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Full-screen immersive view without browser address bars.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl cyber-glass-card border border-cyan-500/20 flex items-start gap-3 text-left">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Website Integration</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">WebView-based sync: updates on your site reflect in the app.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl cyber-glass-card border border-emerald-500/30 sm:col-span-2 flex items-start gap-3 text-left bg-emerald-950/20">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-300">Fast APK Delivery &amp; Instant Generator</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">We compile, test, and deliver signed .apk packages ready to share, or you can use our instant Web-to-APK Studio tool below!</p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Open Converter Studio & WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              {onOpenApkConverter && (
                <button
                  id="open-apk-converter-tool-btn"
                  onClick={onOpenApkConverter}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-black text-sm sm:text-base shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Smartphone className="w-5 h-5 text-slate-950" />
                  <span>Launch Web-to-APK Converter</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              )}

              <a
                id="create-apk-cta-btn"
                href={SITE_DATA.contact.getWhatsAppUrl(SITE_DATA.apkDetails.whatsappPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-emerald-400/40 text-emerald-300 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order Signed APK via WhatsApp</span>
              </a>
            </div>
            
            <p className="text-xs text-slate-400">
              Direct consultation with Dhananjay Uphade (+91 8975881499)
            </p>
          </div>

          {/* Right Column: Animated Smartphone Mockup Displaying APK in Action */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72">
              {/* Phone glow */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-[40px] blur-2xl pointer-events-none" />

              {/* Phone Outer Chassis */}
              <div className="relative rounded-[38px] p-3 bg-gradient-to-b from-[#1c294d] via-[#101934] to-[#0a0f24] border-2 border-emerald-400 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(34,197,94,0.35)]">
                
                {/* Phone Speaker & Camera Bar */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                </div>

                {/* Phone Screen Viewport */}
                <div className="relative rounded-[28px] bg-[#070b1a] overflow-hidden border border-emerald-500/30 pt-6 pb-4 px-3 min-h-[440px] flex flex-col justify-between text-white">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 px-2 pt-1">
                    <span className="font-semibold">09:41</span>
                    <div className="flex items-center gap-1 text-emerald-400">
                      <Wifi className="w-3 h-3" />
                      <span className="font-bold text-[9px]">100% APK</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="mt-4 p-3 rounded-2xl bg-gradient-to-br from-[#0c183a] to-[#070d22] border border-cyan-500/30 text-center shadow-inner">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center text-black font-black text-base shadow-[0_0_15px_rgba(0,240,255,0.4)] mb-2">
                      2.0
                    </div>
                    <h5 className="font-display font-extrabold text-xs sm:text-sm text-white">CREATOR STUDIO 2.0</h5>
                    <p className="text-[10px] text-emerald-300 font-medium">Android APK &amp; Web App</p>
                  </div>

                  {/* App UI items simulation */}
                  <div className="space-y-2 my-auto py-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">App Version</span>
                      <span className="text-emerald-400 font-mono font-bold">v2.0 (APK)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Offline Fallback</span>
                      <span className="text-cyan-400 font-bold">Configured ✓</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Push Notice Ready</span>
                      <span className="text-purple-300 font-bold">Firebase FCM</span>
                    </div>
                  </div>

                  {/* Install Simulation CTA */}
                  <div className="space-y-2">
                    {onOpenApkConverter ? (
                      <button
                        onClick={onOpenApkConverter}
                        className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer"
                      >
                        <FolderArchive className="w-3.5 h-3.5" />
                        <span>Convert to APK Now</span>
                      </button>
                    ) : (
                      <a
                        href={SITE_DATA.contact.getWhatsAppUrl(SITE_DATA.apkDetails.whatsappPrompt)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download APK Sample</span>
                      </a>
                    )}
                    <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto" />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

