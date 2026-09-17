import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Smartphone, ShieldCheck, Zap, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const DeviceMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center pt-4 select-none">
      {/* Radiant ambient underglow */}
      <div className="absolute -bottom-10 w-3/4 h-28 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-3xl pointer-events-none rounded-full" />

      {/* Main Container for Laptop + Smartphone Overlay */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* LAPTOP MOCKUP */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[540px] sm:max-w-[580px] perspective-1000"
        >
          {/* Laptop Screen Bezel */}
          <div className="relative rounded-t-2xl p-3 sm:p-3.5 bg-gradient-to-b from-[#1b2545] to-[#0a0f24] border-2 border-cyan-500/40 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.25)]">
            
            {/* Top Webcam Notch / Camera */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Laptop Display Inner Viewport */}
            <div className="relative rounded-lg bg-[#070b18] overflow-hidden border border-cyan-500/30 text-white min-h-[260px] sm:min-h-[300px]">
              
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#0c142e] border-b border-cyan-500/20 text-[10px] sm:text-xs">
                {/* Traffic dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#070c1e] text-slate-300 border border-cyan-500/20 max-w-[200px] truncate font-mono text-[10px]">
                  <span className="text-emerald-400">https://</span>
                  <span className="text-cyan-300">dhannjayuphade.live</span>
                </div>

                {/* View Switcher */}
                <div className="flex items-center gap-1 text-[10px]">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeTab === 'preview' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'}`}
                  >
                    UI
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-1.5 py-0.5 rounded transition-colors ${activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400'}`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Display Content Area */}
              {activeTab === 'preview' ? (
                <div className="p-4 sm:p-5 relative cyber-dots-bg h-full flex flex-col justify-between">
                  {/* Miniature Top Nav inside Laptop */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 text-[10px] font-bold">
                        DU
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-200">DHANNJAY</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-400">
                      <span className="text-cyan-400 font-medium">Home</span>
                      <span>Services</span>
                      <span>Projects</span>
                      <span>APK</span>
                    </div>
                    <a
                      href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I saw your live demo preview!")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded text-[9px] bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
                    >
                      Hire Me
                    </a>
                  </div>

                  {/* Inner Hero Content */}
                  <div className="py-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[9px] text-cyan-300 mb-2">
                      <Zap className="w-2.5 h-2.5 text-cyan-400" />
                      <span>100% Live Custom Websites</span>
                    </div>

                    <h3 className="font-display text-base sm:text-xl font-extrabold text-white leading-tight">
                      Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Dream Website</span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1 max-w-sm">
                      With Dhannjay Uphade • Fast, Modern, Secure & Mobile-First.
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <a
                        href="#contact"
                        className="px-3 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-[10px] sm:text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center gap-1"
                      >
                        Get Started <ArrowRight className="w-3 h-3" />
                      </a>
                      <a
                        href="#demo-section"
                        className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-cyan-500/30 text-[10px] sm:text-xs"
                      >
                        View Free Demos
                      </a>
                    </div>
                  </div>

                  {/* Inner Status Footer */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-2.5 h-2.5" /> 99.9% Uptime
                      </span>
                      <span className="flex items-center gap-1 text-cyan-400">
                        <Smartphone className="w-2.5 h-2.5" /> APK Ready
                      </span>
                    </div>
                    <span className="text-slate-500 font-mono">React 19 + Tailwind</span>
                  </div>
                </div>
              ) : (
                /* Interactive Code View Tab */
                <div className="p-4 bg-[#050914] font-mono text-[10px] text-cyan-200 overflow-x-auto space-y-1">
                  <p className="text-slate-500">// Dhannjay Uphade - Full Stack Architecture</p>
                  <p><span className="text-purple-400">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-amber-300">"Dhannjay Uphade"</span>,</p>
                  <p className="pl-4">services: [<span className="text-emerald-300">"Websites"</span>, <span className="text-emerald-300">"Web Apps"</span>, <span className="text-emerald-300">"Android APK"</span>],</p>
                  <p className="pl-4">tagline: <span className="text-cyan-300">"Your Idea → My Code → Live Website"</span>,</p>
                  <p className="pl-4">freeDemoAvailable: <span className="text-emerald-400">true</span>,</p>
                  <p className="pl-4">apkPackaging: <span className="text-emerald-400">true</span></p>
                  <p>&#125;;</p>
                  <p className="text-blue-400 font-semibold pt-1">export default developer;</p>
                </div>
              )}
            </div>
          </div>

          {/* Laptop Lower Base / Keyboard Chasis */}
          <div className="relative h-4 sm:h-5 bg-gradient-to-r from-[#18233f] via-[#24335c] to-[#18233f] rounded-b-xl border-t border-cyan-400/40 shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex items-center justify-center">
            {/* Laptop Notch opening */}
            <div className="w-16 h-1.5 bg-[#0b1021] rounded-b-md border-b border-cyan-400/40" />
          </div>
        </motion.div>

        {/* SMARTPHONE MOCKUP OVERLAY (Offset to the right, matching banner aesthetic!) */}
        <motion.div
          initial={{ x: 30, y: 30, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute -right-2 sm:-right-6 -bottom-6 sm:-bottom-8 w-32 sm:w-44 z-20"
        >
          {/* Phone Shell */}
          <div className="relative rounded-[26px] p-2 bg-gradient-to-b from-[#1b2545] to-[#0a0f24] border-2 border-cyan-400 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.3)]">
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-900 rounded-full flex items-center justify-center gap-1 z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
            </div>

            {/* Phone Screen */}
            <div className="relative rounded-[20px] bg-[#070c1c] overflow-hidden border border-cyan-500/40 pt-4 pb-3 px-2 text-center flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
              {/* Phone Status bar */}
              <div className="flex items-center justify-between text-[8px] text-slate-400 px-1">
                <span>12:00</span>
                <span className="text-emerald-400 font-semibold">5G • APK</span>
              </div>

              {/* App UI inside phone */}
              <div className="my-auto py-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-xs shadow-[0_0_12px_#00f0ff] mb-1">
                  DU
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                  Android APK
                </p>
                <p className="text-[8px] sm:text-[9px] text-cyan-300">Website → App</p>

                <div className="mt-2 flex flex-col gap-1 items-center">
                  <a
                    href="#apk-section"
                    className="px-2 py-1 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-[8px] sm:text-[9px] shadow-sm w-full max-w-[100px]"
                  >
                    Install APK
                  </a>
                </div>
              </div>

              {/* Android Bottom Navigation Bar */}
              <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
