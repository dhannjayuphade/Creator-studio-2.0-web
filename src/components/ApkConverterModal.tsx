import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Download, 
  X, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Globe, 
  Code2, 
  Settings, 
  MessageCircle, 
  RefreshCw, 
  FolderArchive, 
  Wifi, 
  ShieldCheck, 
  Camera, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  ApkConfig, 
  DEFAULT_APK_CONFIG, 
  generateAndroidStudioProjectZip, 
  downloadBlob, 
  downloadDirectDemoApk 
} from '../utils/apkProjectGenerator';
import { SITE_DATA } from '../data/siteData';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ApkConverterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const ApkConverterModal: React.FC<ApkConverterModalProps> = ({ 
  isOpen, 
  onClose, 
  onShowToast 
}) => {
  const [config, setConfig] = useState<ApkConfig>(() => ({
    ...DEFAULT_APK_CONFIG,
    targetUrl: typeof window !== 'undefined' ? window.location.href : 'https://dhannjayuphade.github.io/'
  }));

  const [activeTab, setActiveTab] = useState<'build' | 'install' | 'cloud' | 'custom'>('build');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const { isInstallable, isInstalled, install, isAndroid, isIOS } = usePWAInstall();

  if (!isOpen) return null;

  const handleUseCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      setConfig(prev => ({ ...prev, targetUrl: window.location.href }));
      onShowToast("Loaded current website URL!");
    }
  };

  const handleDownloadZip = async () => {
    try {
      setIsGenerating(true);
      const zipBlob = await generateAndroidStudioProjectZip(config);
      const filename = `${config.appName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-android-studio-project.zip`;
      downloadBlob(zipBlob, filename);
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onShowToast(`Downloaded Android Studio Project for ${config.appName}!`);
    } catch (err) {
      console.error(err);
      onShowToast("Error generating project ZIP.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadDirectApk = async () => {
    try {
      setIsGenerating(true);
      await downloadDirectDemoApk(config);
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 }
      });
      onShowToast(`Downloading ${config.appName} .APK bundle!`);
    } catch (err) {
      console.error(err);
      onShowToast("Error generating APK package.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInstallWebApk = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        onShowToast("WebAPK installation initiated!");
      }
    } else {
      // Guide fallback
      onShowToast("To install: Open Chrome on Android -> Tap ⋮ menu -> 'Install app'");
    }
  };

  const handleOrderCustomApkWhatsApp = () => {
    const text = `Hi Dhananjay, I used Creator Studio 2.0 Web to APK Converter!
I want to order a custom-signed Android APK for my website:
📱 App Name: ${config.appName}
🌐 Website URL: ${config.targetUrl}
📦 Package ID: ${config.packageName}
🎨 Primary Color: ${config.primaryColor}
Please let me know the timeframe and delivery details.`;

    const url = SITE_DATA.contact.getWhatsAppUrl(text);
    window.open(url, '_blank');
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(config.targetUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
    onShowToast("Target URL copied to clipboard!");
  };

  const colorPresets = [
    { name: 'Cyber Teal', hex: '#00f0ff' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Neon Blue', hex: '#3b82f6' },
    { name: 'Purple Neon', hex: '#a855f7' },
    { name: 'Amber Gold', hex: '#f59e0b' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl rounded-2xl bg-[#080d22] border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.3)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0b1638] via-[#091129] to-[#07132a] border-b border-emerald-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-black text-white">
                    Web-to-Android APK Converter Studio
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 uppercase font-bold">
                    v2.0 PRO
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Convert live websites into standalone Android .APK packages &amp; installable WebAPKs
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-white/10 bg-[#060a1a] px-4 overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveTab('build')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'build'
                  ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FolderArchive className="w-4 h-4" />
              <span>1. Generate &amp; Download APK</span>
            </button>

            <button
              onClick={() => setActiveTab('install')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'install'
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>2. Install WebAPK (PWA)</span>
            </button>

            <button
              onClick={() => setActiveTab('custom')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'custom'
                  ? 'border-purple-400 text-purple-300 bg-purple-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>3. Order Custom Signed APK</span>
            </button>

            <button
              onClick={() => setActiveTab('cloud')}
              className={`px-4 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition whitespace-nowrap ${
                activeTab === 'cloud'
                  ? 'border-blue-400 text-blue-300 bg-blue-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>4. Cloud APK Builders</span>
            </button>
          </div>

          {/* Modal Body: Two-Column Form & Phone Live Preview */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Configuration Controls */}
            <div className="lg:col-span-7 space-y-4">

              {/* Target Website URL */}
              <div className="p-4 rounded-xl bg-[#0b132e] border border-cyan-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" /> Website URL to Convert
                  </label>
                  <button
                    onClick={handleUseCurrentUrl}
                    className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Use Current App
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type="url"
                    value={config.targetUrl}
                    onChange={(e) => setConfig({ ...config, targetUrl: e.target.value })}
                    placeholder="https://your-website.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060a17] border border-cyan-500/40 text-white text-xs sm:text-sm font-mono focus:border-cyan-400 focus:outline-none pr-10"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-white"
                    title="Copy URL"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  The Android APK will wrap this live URL inside hardware-accelerated WebView.
                </p>
              </div>

              {/* App Basic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">App Name (Launcher Title)</label>
                  <input
                    type="text"
                    value={config.appName}
                    onChange={(e) => setConfig({ ...config, appName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0b132e] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Package ID (Unique Namespace)</label>
                  <input
                    type="text"
                    value={config.packageName}
                    onChange={(e) => setConfig({ ...config, packageName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0b132e] border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* App Version & Orientation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Version String</label>
                  <input
                    type="text"
                    value={config.versionName}
                    onChange={(e) => setConfig({ ...config, versionName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0b132e] border border-slate-700 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Screen Orientation</label>
                  <select
                    value={config.orientation}
                    onChange={(e) => setConfig({ ...config, orientation: e.target.value as ApkConfig['orientation'] })}
                    className="w-full px-3 py-2 rounded-lg bg-[#0b132e] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="portrait">Portrait (Standard Phone)</option>
                    <option value="landscape">Landscape (Horizontal / Tablet)</option>
                    <option value="unspecified">Auto-Rotate (Sensor)</option>
                  </select>
                </div>
              </div>

              {/* Color Presets */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Theme &amp; Status Bar Accent Color</label>
                <div className="flex items-center gap-2 flex-wrap">
                  {colorPresets.map(preset => (
                    <button
                      key={preset.hex}
                      type="button"
                      onClick={() => setConfig({ ...config, primaryColor: preset.hex })}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition cursor-pointer ${
                        config.primaryColor === preset.hex
                          ? 'border-white text-white bg-white/10'
                          : 'border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.hex }} />
                      <span>{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Hardware / WebView Capabilities */}
              <div className="p-3.5 rounded-xl bg-[#091024] border border-white/10 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-cyan-400" /> Android Hardware &amp; WebView Capabilities
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enablePullToRefresh}
                      onChange={(e) => setConfig({ ...config, enablePullToRefresh: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span>Pull-To-Refresh Support</span>
                  </label>

                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.offlineCache}
                      onChange={(e) => setConfig({ ...config, offlineCache: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span>Offline Caching Engine</span>
                  </label>

                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableFileUploads}
                      onChange={(e) => setConfig({ ...config, enableFileUploads: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span>Camera &amp; File Picker API</span>
                  </label>

                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableGeolocation}
                      onChange={(e) => setConfig({ ...config, enableGeolocation: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-400"
                    />
                    <span>Geolocation / GPS Sensors</span>
                  </label>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="modal-download-apk-zip-btn"
                  onClick={handleDownloadZip}
                  disabled={isGenerating}
                  className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <FolderArchive className="w-4 h-4" />
                  <span>{isGenerating ? "Compiling..." : "Download Android Studio Project (.ZIP)"}</span>
                </button>

                <button
                  id="modal-download-direct-apk-btn"
                  onClick={handleDownloadDirectApk}
                  disabled={isGenerating}
                  className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-emerald-400/40 text-emerald-300 font-bold text-xs sm:text-sm transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download .APK Package</span>
                </button>
              </div>

            </div>

            {/* Right Column: Live Smartphone Preview & Quick Options */}
            <div className="lg:col-span-5 flex flex-col items-center justify-between space-y-4">
              
              {/* Phone Device Mockup */}
              <div className="relative w-64 sm:w-68">
                {/* Glow ring */}
                <div 
                  className="absolute inset-0 rounded-[38px] blur-xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: config.primaryColor }}
                />

                {/* Outer Phone Bezel */}
                <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-[#182342] via-[#0e172e] to-[#080d1e] border-2 border-emerald-400/60 shadow-2xl">
                  {/* Speaker & Sensor Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <div className="w-1 h-1 rounded-full bg-slate-600" />
                  </div>

                  {/* Screen Display */}
                  <div className="relative rounded-[26px] bg-[#060a17] overflow-hidden border border-white/10 h-[380px] flex flex-col justify-between text-white">
                    {/* Android Status Bar */}
                    <div className="flex items-center justify-between text-[9px] text-slate-400 px-3 pt-2.5 pb-1 bg-[#040714]">
                      <span>09:41</span>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <Wifi className="w-2.5 h-2.5" />
                        <span className="font-mono text-[8px] font-bold">APK LIVE</span>
                      </div>
                    </div>

                    {/* App Title Bar */}
                    <div 
                      className="px-3 py-2 border-b border-white/10 flex items-center gap-2"
                      style={{ backgroundColor: `${config.primaryColor}15` }}
                    >
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[9px] font-black text-slate-950">
                        2.0
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-bold text-white truncate">{config.appName}</div>
                        <div className="text-[8px] font-mono text-cyan-300 truncate">{config.packageName}</div>
                      </div>
                    </div>

                    {/* Phone Screen Body Content */}
                    <div className="p-3 text-center space-y-3 my-auto">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0f1d47] to-[#070d20] border border-cyan-400/50 flex flex-col items-center justify-center shadow-lg">
                        <Smartphone className="w-6 h-6 text-emerald-400" />
                        <span className="text-[7px] font-mono text-cyan-300 font-bold mt-0.5">APK v{config.versionName}</span>
                      </div>

                      <div>
                        <div className="text-xs font-black text-white">{config.appName}</div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[200px] mx-auto mt-0.5 font-mono">
                          {config.targetUrl}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-semibold border border-emerald-400/30">
                        <ShieldCheck className="w-3 h-3" /> Signed &amp; Verified WebView
                      </div>
                    </div>

                    {/* Android Navigation Pill */}
                    <div className="py-2 flex items-center justify-center bg-[#040714]">
                      <div className="w-24 h-1 rounded-full bg-slate-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Order Card */}
              <div className="w-full p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/50 to-[#0a1835] border border-emerald-500/30 text-center space-y-2">
                <div className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Want Dhananjay to compile &amp; sign it?</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Get a production-grade signed APK with Play Store bundle delivered directly to your WhatsApp!
                </p>
                <button
                  onClick={handleOrderCustomApkWhatsApp}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send Specs to Dhananjay Uphade (+91 8975881499)</span>
                </button>
              </div>

            </div>

          </div>

          {/* Footer Bar with Instructions */}
          <div className="p-4 bg-[#050817] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Includes full Gradle scripts, AndroidManifest, and Java WebView source.</span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400">
              Compatible with Android 5.0+ (Lollipop) up to Android 14+ (SDK 34)
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
