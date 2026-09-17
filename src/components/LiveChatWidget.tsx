import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Minimize2,
  HelpCircle,
  Settings
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actions?: { label: string; prompt: string; actionType?: 'whatsapp' | 'free-demo' | 'apk' }[];
}

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [showPromptBubble, setShowPromptBubble] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [customWidgetId, setCustomWidgetId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize initial greeting
  useEffect(() => {
    const initialTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([
      {
        id: 'msg-1',
        sender: 'bot',
        text: '👋 Hi! Welcome to Creator Studio 2.0 Web Development by Dhananjay Uphade. How can I assist you today?',
        time: initialTime,
        actions: [
          { label: '🌐 Try a Free Demo', prompt: 'I want to see a Free Demo website', actionType: 'free-demo' },
          { label: '📱 Create Android APK', prompt: 'I want to convert a website into an Android APK', actionType: 'apk' },
          { label: '💼 Get Website Quotation', prompt: 'I want a quotation for my website idea', actionType: 'whatsapp' },
          { label: '💬 Chat on WhatsApp', prompt: 'Connect with Dhananjay on WhatsApp', actionType: 'whatsapp' }
        ]
      }
    ]);

    // Show proactive popup after 3 seconds if not opened yet
    const timer = setTimeout(() => {
      if (!hasPrompted && !isOpen) {
        setShowPromptBubble(true);
        setHasPrompted(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPromptBubble(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const msg = (textToSend || inputMessage).trim();
    if (!msg) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: msg,
      time: userTime
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    // Generate intelligent developer response
    setTimeout(() => {
      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      let replyText = "Thank you for reaching out! Dhannjay is available for projects, free demos, and APK builds.";
      let actions: ChatMessage['actions'] = [
        { label: '👉 Chat Directly on WhatsApp', prompt: `Hi Dhannjay, regarding my query: "${msg}"`, actionType: 'whatsapp' }
      ];

      const lower = msg.toLowerCase();
      if (lower.includes('demo') || lower.includes('free')) {
        replyText = "Great! We have pre-built demo websites (Student Management, Dairy System, E-commerce, 3D Rocket) that you can explore for free and have customized for your needs.";
        actions = [
          { label: 'View Free Demos Section', prompt: 'Scroll to Demos', actionType: 'free-demo' },
          { label: 'Get Demo Link on WhatsApp', prompt: 'Hi Dhannjay, please send me the Free Demo website links.', actionType: 'whatsapp' }
        ];
      } else if (lower.includes('apk') || lower.includes('android') || lower.includes('app')) {
        replyText = "Our Android APK service packages any website into an installable mobile app (.apk) with a custom launcher icon and splash screen!";
        actions = [
          { label: 'Build My APK on WhatsApp', prompt: 'Hi Dhannjay, I want to build an Android APK from my website.', actionType: 'whatsapp' }
        ];
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) {
        replyText = "We offer transparent, affordable pricing with free demo testing before project kickoff! Tell us your requirements on WhatsApp for a fast quote.";
        actions = [
          { label: 'Get Instant WhatsApp Quote', prompt: 'Hi Dhannjay, what is the estimated cost for my project?', actionType: 'whatsapp' }
        ];
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          time: botTime,
          actions
        }
      ]);
    }, 600);
  };

  const handleActionClick = (action: { label: string; prompt: string; actionType?: string }) => {
    if (action.actionType === 'whatsapp') {
      window.open(SITE_DATA.contact.getWhatsAppUrl(action.prompt), '_blank');
    } else if (action.actionType === 'free-demo') {
      setIsOpen(false);
      const el = document.getElementById('demo-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action.actionType === 'apk') {
      setIsOpen(false);
      const el = document.getElementById('apk-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleSendMessage(action.prompt);
    }
  };

  return (
    <>
      {/* Floating Widget Container (Positioned at Bottom Right) */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
        
        {/* Proactive Inquiry Speech Bubble */}
        <AnimatePresence>
          {showPromptBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-3 max-w-xs p-3.5 rounded-2xl cyber-glass-card border-2 border-cyan-400 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.3)] text-left"
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                    Dhannjay Uphade • Live Support
                  </span>
                </div>
                <button
                  onClick={() => setShowPromptBubble(false)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-slate-200 leading-snug">
                👋 Need a custom website, web app, or Android APK? Try our free demo or ask anything!
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowPromptBubble(false);
                    setIsOpen(true);
                  }}
                  className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-[11px] shadow-sm cursor-pointer transition"
                >
                  Chat Now
                </button>
                <a
                  href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I would like to inquire about website development.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline font-bold"
                >
                  WhatsApp →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Chat Expanded Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-[92vw] sm:w-96 rounded-3xl cyber-glass-card border-2 border-cyan-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(0,240,255,0.35)] overflow-hidden flex flex-col mb-3 max-h-[560px] h-[520px]"
            >
              {/* Chat Header (Crisp / Tawk.to Style) */}
              <div className="px-4 py-3.5 bg-gradient-to-r from-[#0d173c] via-[#09112a] to-[#0d173c] border-b border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center font-black text-black text-[11px] shadow-[0_0_12px_#00f0ff]">
                      2.0
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
                      CREATOR STUDIO 2.0
                    </h4>
                    <p className="text-[10px] text-cyan-300 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                      Dhananjay Uphade • Fast Inquiries & Demos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowConfigModal(true)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition"
                    title="External Widget Integration (Tawk.to / Crisp)"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition cursor-pointer"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages Thread */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#060a17]/95">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-tr-none shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                          : 'bg-[#0e1634] text-slate-200 border border-cyan-500/20 rounded-tl-none leading-relaxed'
                      }`}
                    >
                      <p>{m.text}</p>
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 px-1">
                      {m.time}
                    </span>

                    {/* Action buttons embedded in message */}
                    {m.actions && m.actions.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                        {m.actions.map((act, i) => (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act)}
                            className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/40 text-cyan-300 hover:text-white transition shadow-sm flex items-center gap-1 cursor-pointer"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Direct WhatsApp Quick Bar */}
              <div className="px-3 py-1.5 bg-[#091128] border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">Prefer instant voice / chat?</span>
                <a
                  href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I am chatting with you via the live website widget.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" /> WhatsApp (+91 8975881499)
                </a>
              </div>

              {/* Chat Input Field */}
              <div className="p-2.5 bg-[#0a1024] border-t border-cyan-500/30">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message or project idea..."
                    className="flex-1 px-3 py-2 rounded-xl bg-[#060a17] border border-cyan-500/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition shadow-[0_0_10px_rgba(0,240,255,0.4)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Launcher Button (Tawk.to / Crisp Style) */}
        <motion.button
          id="live-chat-launcher-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-black shadow-[0_0_30px_rgba(0,240,255,0.5)] border-2 border-cyan-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] cursor-pointer transition-all flex items-center justify-center"
          aria-label="Open Live Chat"
        >
          {/* Notification Ping Dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black flex items-center justify-center shadow">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
          </span>

          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <MessageCircle className="w-6 h-6 text-black" />
          )}
        </motion.button>
      </div>

      {/* External Widget Configuration Modal (Tawk.to / Crisp options) */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md cyber-glass-card rounded-2xl border border-cyan-400/50 p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Live Chat Integration Settings
              </h3>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Built-in Cyber Chat:</strong> The embedded interactive chat is currently active and connects inquiries directly with your WhatsApp (+91 8975881499).
              </p>
              <p>
                <strong className="text-cyan-300">Third-Party Script (Optional):</strong> To connect an external Crisp or Tawk.to account, enter your Property / Website ID below:
              </p>
              
              <input
                type="text"
                placeholder="e.g. Crisp Website ID or Tawk.to Property ID"
                value={customWidgetId}
                onChange={(e) => setCustomWidgetId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#060a17] border border-cyan-500/30 text-xs text-white"
              />

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-200">
                ✓ Ready for zero-delay inquiries without third-party dependencies.<br />
                ✓ Formatted client messages forward directly to WhatsApp.
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
