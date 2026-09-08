import React, { useState } from 'react';
import { Mail, Phone, Share2, Terminal, ArrowUpRight, Check, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Quick message form state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !senderMessage) return;

    // Generate mailto link with prefilled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Daksh,\n\n${senderMessage}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section
      id="contact-hub"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#0d0e0f] border-b border-[#292a2b] relative"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
          <span>✦ GET IN TOUCH</span>
        </div>

        <h2 className="font-display-hero text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter text-[#e3e2e3] leading-[0.98] font-bold">
          HAVE AN IDEA?
          <br />
          <span className="text-[#ff6409]">LET’S TALK.</span>
        </h2>

        <p className="font-body-lg text-[#e5beb2]/90 max-w-xl leading-relaxed text-base lg:text-lg mt-1">
          Always open to learning, collaborating, discussing ideas, and exploring opportunities.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Email Card */}
        <div className="bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[160px] hover:border-[#ff6409]/40 transition-colors group">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#ac897e] uppercase tracking-wider">
              PRIMARY CONTACT
            </span>
            <Mail className="w-4 h-4 text-[#ffb597]" />
          </div>

          <div className="my-3">
            <div className="font-mono text-[10px] text-[#e5beb2]/70 uppercase">
              EMAIL ADDRESS
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-mono text-xs sm:text-sm text-[#e3e2e3] hover:text-[#ff6409] transition-colors truncate block mt-0.5 font-bold"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          <button
            onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
            className="text-left font-mono text-[10px] text-[#ff6409] hover:text-[#ffb59c] transition-colors uppercase tracking-wider flex items-center gap-1 font-bold"
          >
            {copiedField === 'email' ? (
              <>
                <Check className="w-3 h-3 text-[#ff6409]" /> [ COPIED! ]
              </>
            ) : (
              '[ COPY EMAIL ]'
            )}
          </button>
        </div>

        {/* Phone Card */}
        <div className="bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[160px] hover:border-[#ff6409]/40 transition-colors group">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#ac897e] uppercase tracking-wider">
              PHONE DIRECT
            </span>
            <Phone className="w-4 h-4 text-[#ffb597]" />
          </div>

          <div className="my-3">
            <div className="font-mono text-[10px] text-[#e5beb2]/70 uppercase">
              CALL / WHATSAPP
            </div>
            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="font-display-hero text-base sm:text-lg text-[#e3e2e3] hover:text-[#ff6409] transition-colors block mt-0.5 font-bold"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <button
            onClick={() => handleCopy(CONTACT_INFO.rawPhone, 'phone')}
            className="text-left font-mono text-[10px] text-[#ff6409] hover:text-[#ffb59c] transition-colors uppercase tracking-wider flex items-center gap-1 font-bold"
          >
            {copiedField === 'phone' ? (
              <>
                <Check className="w-3 h-3 text-[#ff6409]" /> [ COPIED! ]
              </>
            ) : (
              '[ COPY NUMBER ]'
            )}
          </button>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[160px] hover:border-[#ff6409]/40 transition-colors group">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#ac897e] uppercase tracking-wider">
              PROFESSIONAL NETWORK
            </span>
            <Share2 className="w-4 h-4 text-[#ffb597]" />
          </div>

          <div className="my-3">
            <div className="font-mono text-[10px] text-[#e5beb2]/70 uppercase">
              LINKEDIN PROFILE
            </div>
            <div className="font-display-hero text-base sm:text-lg text-[#e3e2e3] mt-0.5 font-bold">
              {CONTACT_INFO.linkedinHandle}
            </div>
          </div>

          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[#ff6409] hover:text-[#ffb59c] transition-colors uppercase tracking-wider flex items-center gap-1 font-bold"
          >
            VIEW LINKEDIN <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[160px] hover:border-[#ff6409]/40 transition-colors group">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#ac897e] uppercase tracking-wider">
              CODE REPOSITORY
            </span>
            <Terminal className="w-4 h-4 text-[#ffb597]" />
          </div>

          <div className="my-3">
            <div className="font-mono text-[10px] text-[#e5beb2]/70 uppercase">
              GITHUB REPOSITORIES
            </div>
            <div className="font-display-hero text-base sm:text-lg text-[#e3e2e3] mt-0.5 font-bold">
              {CONTACT_INFO.githubHandle}
            </div>
          </div>

          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-[#ff6409] hover:text-[#ffb59c] transition-colors uppercase tracking-wider flex items-center gap-1 font-bold"
          >
            OPEN GITHUB <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Quick Dispatch Form Panel */}
      <div className="mt-8 bg-[#1b1c1d] border border-[#292a2b] p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-[#ff6409] uppercase tracking-wider font-bold">
            [ DIRECT DISPATCH CONSOLE ]
          </span>
          <span className="font-mono text-[11px] text-[#ac897e]">
            ENCRYPTED DISPATCH → DAKSH
          </span>
        </div>

        <form onSubmit={handleQuickSend} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] text-[#ac897e] uppercase mb-1">
                Your Name / Identifier
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Elena Rostova"
                className="w-full bg-[#0d0e0f] border border-[#292a2b] px-3.5 py-2.5 text-xs font-mono text-[#e3e2e3] focus:border-[#ff6409] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] text-[#ac897e] uppercase mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="e.g. elena@research.org"
                className="w-full bg-[#0d0e0f] border border-[#292a2b] px-3.5 py-2.5 text-xs font-mono text-[#e3e2e3] focus:border-[#ff6409] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] text-[#ac897e] uppercase mb-1">
              Message / Research Collaboration / Inquiry *
            </label>
            <textarea
              required
              rows={3}
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
              placeholder="Outline your project idea, research proposal, or opportunity..."
              className="w-full bg-[#0d0e0f] border border-[#292a2b] px-3.5 py-2.5 text-xs font-mono text-[#e3e2e3] focus:border-[#ff6409] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <span className="text-[11px] font-mono text-[#ac897e]">
              Will open your email client pre-addressed to dakshshinde1144@gmail.com
            </span>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#ff6409] hover:bg-[#ff5708] text-[#561c00] font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 transition-all shadow-md shadow-[#ff6409]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>DISPATCH MESSAGE</span>
            </button>
          </div>

          {formSent && (
            <div className="p-2.5 bg-[#1f2021] border border-[#ff6409] text-xs font-mono text-[#ffb597] mt-2">
              Email client triggered! Thank you for reaching out.
            </div>
          )}
        </form>
      </div>

      {/* Monumental Action Banner */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#292a2b] border border-[#343536] p-6 sm:p-8">
        <div>
          <h4 className="font-display-hero text-lg sm:text-xl uppercase text-[#e3e2e3] font-bold">
            READY TO INITIATE A CONVERSATION?
          </h4>
          <p className="text-xs sm:text-sm text-[#e5beb2]/80 mt-1">
            Direct dispatch to Daksh Shinde · Typical reply within 24 hours.
          </p>
        </div>

        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="px-8 py-3.5 bg-[#ff6409] text-[#561c00] font-display-hero text-base uppercase font-bold hover:bg-[#ff5708] transition-all flex items-center gap-2 shadow-xl shadow-[#ff6409]/20 group shrink-0"
        >
          <span>LET’S CONNECT</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};
