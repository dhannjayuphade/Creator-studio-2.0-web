import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  MessageCircle, 
  Send, 
  ExternalLink,
  Smartphone,
  Globe,
  Sparkles,
  Instagram
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onRequestQuote: () => void;
  onOpenWelcomeAnimation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  onToggleTheme, 
  onRequestQuote,
  onOpenWelcomeAnimation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'demo-section', 'projects', 'apk-section', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Free Demos', href: '#demo-section', id: 'demo-section', badge: 'Free' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'APK App', href: '#apk-section', id: 'apk-section' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'cyber-glass border-b border-cyan-500/20 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Creator Studio 2.0 - Web Development Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e1c45] to-[#070b1c] border border-cyan-400/70 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:border-cyan-300 transition-all">
              <span className="font-display font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                2.0
              </span>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full p-0.5 shadow">
                <Code2 className="w-2.5 h-2.5" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-extrabold tracking-wide text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                <span>CREATOR STUDIO 2.0</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  DEV
                </span>
              </span>
              <span className="text-[10px] tracking-wider text-cyan-400 uppercase font-semibold flex items-center gap-1">
                <span>BY DHANANJAY UPHADE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a1026]/80 border border-cyan-500/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Welcome Intro, Official Site, WhatsApp, Theme Toggle, Request CTA */}
          <div className="flex items-center gap-2">
            {/* Replay Welcome Intro */}
            {onOpenWelcomeAnimation && (
              <button
                id="nav-replay-welcome-btn"
                onClick={onOpenWelcomeAnimation}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold transition cursor-pointer"
                title="Watch Welcome Animation"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Welcome Intro</span>
              </button>
            )}

            {/* Official Website Link */}
            <a
              id="nav-official-site-btn"
              href={SITE_DATA.contact.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition"
              title="Visit Official Website"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Site</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            {/* Quick WhatsApp Pill */}
            <a
              id="nav-whatsapp-cta"
              href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhananjay, I am contacting Creator Studio 2.0 regarding a website/app.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold transition shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-xl bg-[#0d1430] hover:bg-[#152047] border border-cyan-500/25 text-cyan-300 transition hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-300" />}
            </button>

            {/* Request a Website Main CTA */}
            <button
              id="request-website-nav-btn"
              onClick={onRequestQuote}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black font-extrabold text-xs tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Website</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl bg-[#0d1430] border border-cyan-500/25 text-slate-200 hover:text-cyan-300 transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (For top navigation on mobile if opened) */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-5 cyber-glass border-b border-cyan-500/30 max-w-lg mx-auto mt-2 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/20 transition"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
              
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                {onOpenWelcomeAnimation && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenWelcomeAnimation();
                    }}
                    className="w-full py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Replay Welcome Intro
                  </button>
                )}

                <a
                  href={SITE_DATA.contact.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-white/5 text-slate-200 border border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" /> Visit Official Website (dhannjayuphade.github.io)
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <Send className="w-3.5 h-3.5" /> Request a Website
                </button>
                <a
                  href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhananjay, I am contacting Creator Studio 2.0 regarding a website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp (+91 8975881499)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
