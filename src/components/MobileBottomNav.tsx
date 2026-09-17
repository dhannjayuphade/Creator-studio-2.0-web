import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Layers, Smartphone, MessageSquare } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'apk-section', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home', href: '#home', icon: Home },
    { id: 'services', label: 'Services', href: '#services', icon: Briefcase },
    { id: 'projects', label: 'Projects', href: '#projects', icon: Layers },
    { id: 'apk-section', label: 'APK', href: '#apk-section', icon: Smartphone, highlight: true },
    { id: 'contact', label: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav
      id="mobile-bottom-navbar"
      className="lg:hidden fixed bottom-3 left-3 right-3 z-40"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="cyber-glass rounded-2xl px-3 py-2 border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.2)] flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'text-cyan-300 scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Active neon highlight dot */}
              {isActive && (
                <span className="absolute -top-1 w-5 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
              )}
              
              {/* Icon */}
              <div
                className={`p-1 rounded-lg transition-colors ${
                  item.highlight
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/40'
                    : isActive
                    ? 'bg-cyan-500/20 border border-cyan-400/40'
                    : ''
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Label */}
              <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'font-bold text-cyan-300' : 'font-medium'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
