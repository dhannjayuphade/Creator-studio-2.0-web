import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Download, X, Sparkles, ArrowRight, Share } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallBannerProps {
  onOpenApkConverter: () => void;
  onShowToast: (msg: string) => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ 
  onOpenApkConverter,
  onShowToast 
}) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showIOSPrompt, setShowIOSPrompt] = useState(false);

  // If already running as installed app or dismissed, hide banner
  if (isInstalled || isDismissed) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const result = await install();
      if (result) {
        onShowToast("Android App / WebAPK installation started!");
      }
    } else if (isIOS) {
      setShowIOSPrompt(true);
    } else {
      // Fallback: Open the full APK converter
      onOpenApkConverter();
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-36 sm:bottom-28 lg:bottom-6 left-3 sm:left-6 right-3 sm:right-auto sm:w-96 z-40"
        >
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0a1538] via-[#071129] to-[#0a1e38] border-2 border-emerald-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border border-black animate-ping" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Android APK Ready
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono">
                      v2.0
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Install as Android App / APK
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setIsDismissed(true)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-slate-300 mt-2 leading-snug">
              Install Creator Studio 2.0 directly on your home screen or convert any website into a standalone APK.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <button
                id="pwa-quick-install-btn"
                onClick={handleInstallClick}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isInstallable ? "Install App Now" : "Install WebAPK"}</span>
              </button>

              <button
                onClick={onOpenApkConverter}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-cyan-400/40 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer whitespace-nowrap"
              >
                <span>Convert to APK</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* iOS Safari Guide Modal */}
      {showIOSPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-[#091129] border border-cyan-500/40 p-5 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <Share className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Install on iPhone / iPad</h3>
            <p className="text-xs text-slate-300 text-left space-y-1.5">
              1. Tap the <strong>Share</strong> button at the bottom of Safari.<br />
              2. Scroll down and tap <strong>'Add to Home Screen'</strong>.<br />
              3. Tap <strong>'Add'</strong> in the top right to install!
            </p>
            <button
              onClick={() => setShowIOSPrompt(false)}
              className="w-full py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
