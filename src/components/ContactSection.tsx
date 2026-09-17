import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Github, 
  Globe, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Personal / Portfolio Website');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!email.trim() && !phone.trim()) {
      errs.email = 'Please provide an email or WhatsApp number';
    } else if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!message.trim()) errs.message = 'Please describe your project or requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare WhatsApp URL with complete structured message
    const formattedPrompt = `*New Website Inquiry from Website Form*
*Name:* ${name}
*Email:* ${email || 'Not provided'}
*Phone/WhatsApp:* ${phone || 'Not provided'}
*Project Type:* ${projectType}
*Message:* ${message}`;

    const waUrl = SITE_DATA.contact.getWhatsAppUrl(formattedPrompt);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onShowToast('Inquiry ready! Redirecting to WhatsApp for instant chat...');
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#060a17] via-[#08122d] to-[#050814]">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 cyber-grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Create Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Amazing Together!
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Have a website idea, need a custom web app, or want an Android APK? Reach out directly via WhatsApp, email, or send an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <div className="p-5 rounded-2xl cyber-glass-card border border-emerald-500/30 hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                      Primary Contact (Fastest)
                    </span>
                    <h4 className="font-display font-bold text-base text-white">WhatsApp</h4>
                    <p className="text-xs text-slate-300 font-mono">{SITE_DATA.contact.whatsappDisplay}</p>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(SITE_DATA.contact.whatsapp, 'WhatsApp number')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                  title="Copy WhatsApp number"
                >
                  {copiedField === 'WhatsApp number' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-whatsapp-btn"
                href={SITE_DATA.contact.getWhatsAppUrl("Hi Dhannjay, I am contacting you from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.35)] transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl cyber-glass-card border border-cyan-500/20 hover:border-cyan-400/40 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Email Inquiries
                    </span>
                    <h4 className="font-display font-bold text-base text-white">Email Address</h4>
                    <p className="text-xs text-slate-300 font-mono truncate max-w-[200px]">{SITE_DATA.contact.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(SITE_DATA.contact.email, 'Email address')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'Email address' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="contact-email-btn"
                href={`mailto:${SITE_DATA.contact.email}?subject=Website%20Inquiry%20-%20Dhannjay%20Uphade`}
                className="mt-4 w-full py-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-400/40 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Social Channels Row (Instagram, Featured Reel, GitHub) */}
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-instagram-btn"
                href={SITE_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl cyber-glass-card border border-pink-500/30 hover:border-pink-400 transition-all text-center group"
              >
                <Instagram className="w-6 h-6 mx-auto text-pink-400 group-hover:scale-110 transition-transform mb-1.5" />
                <h5 className="font-bold text-xs text-white">Instagram</h5>
                <p className="text-[10px] text-slate-400 font-mono">@dhannjayuphade</p>
              </a>

              <a
                id="contact-github-btn"
                href={SITE_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl cyber-glass-card border border-slate-600 hover:border-cyan-400 transition-all text-center group"
              >
                <Github className="w-6 h-6 mx-auto text-slate-200 group-hover:scale-110 transition-transform mb-1.5" />
                <h5 className="font-bold text-xs text-white">GitHub</h5>
                <p className="text-[10px] text-slate-400 font-mono">dhannjayuphade</p>
              </a>
            </div>

            {/* Featured Instagram Project Post Showcase Card */}
            <a
              id="contact-featured-instagram-post"
              href={SITE_DATA.contact.featuredPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-blue-950/40 border border-pink-400/40 hover:border-pink-300 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-pink-300 font-bold uppercase tracking-wider">
                    Instagram Showcase
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Featured Project & Demo Reel
                  </div>
                </div>
              </div>
              <span className="text-xs text-pink-300 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                <span>Watch</span> →
              </span>
            </a>

            {/* Portfolio Link Box */}
            <div className="p-4 rounded-xl bg-[#091128] border border-cyan-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="font-mono text-cyan-300">dhannjayuphade.github.io</span>
                  <p className="text-[10px] text-slate-400">Official Web Developer Portfolio</p>
                </div>
              </div>
              <a
                href={SITE_DATA.contact.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold transition"
              >
                Visit →
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="cyber-glass-card rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <div className="mb-6">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  Send a Project Inquiry
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill out this form to structure your request. It will directly prepare your message for instant WhatsApp connection or email dispatch.
                </p>
              </div>

              {submittedSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-400 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Thank You, {name}!</h4>
                  <p className="text-xs text-slate-200">
                    Your inquiry has been formatted. If WhatsApp did not open automatically, click the button below to connect with Dhannjay directly.
                  </p>
                  <a
                    href={SITE_DATA.contact.getWhatsAppUrl(`Hi Dhannjay, I am ${name}. I submitted an inquiry for ${projectType}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-black font-extrabold text-xs shadow"
                  >
                    <MessageCircle className="w-4 h-4" /> Open WhatsApp Now
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmittedSuccess(false)}
                      className="text-xs text-cyan-400 hover:underline cursor-pointer pt-2"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="input-name" className="block text-xs font-bold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#080d21] border text-slate-100 placeholder-slate-500 text-xs focus:outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Contact Info (Email & Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#080d21] border text-slate-100 placeholder-slate-500 text-xs focus:outline-none transition ${
                          errors.email ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp Number (Optional)
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080d21] border border-cyan-500/30 focus:border-cyan-400 text-slate-100 placeholder-slate-500 text-xs focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label htmlFor="select-project-type" className="block text-xs font-bold text-slate-300 mb-1">
                      Project Type
                    </label>
                    <select
                      id="select-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080d21] border border-cyan-500/30 focus:border-cyan-400 text-slate-100 text-xs focus:outline-none transition cursor-pointer"
                    >
                      {SITE_DATA.services.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[#0a1026] text-white">
                          {s.name}
                        </option>
                      ))}
                      <option value="Free Demo Consultation" className="bg-[#0a1026] text-white">
                        Free Demo Consultation
                      </option>
                      <option value="Android APK Only" className="bg-[#0a1026] text-white">
                        Android APK Only
                      </option>
                      <option value="Other Custom Project" className="bg-[#0a1026] text-white">
                        Other Custom Project
                      </option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="textarea-message" className="block text-xs font-bold text-slate-300 mb-1">
                      Message & Requirements *
                    </label>
                    <textarea
                      id="textarea-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your business, desired features, deadlines, or ask for a free demo link..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#080d21] border text-slate-100 placeholder-slate-500 text-xs focus:outline-none transition ${
                        errors.message ? 'border-red-500' : 'border-cyan-500/30 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Notice: No fake server submission */}
                  <p className="text-[10px] text-slate-400">
                    * Submitting will prepare your formatted inquiry and open an instant WhatsApp chat with Dhannjay Uphade without delays.
                  </p>

                  {/* Submit Button */}
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:opacity-95 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <span>Formatting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry via WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
