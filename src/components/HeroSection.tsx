import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative w-full px-5 md:px-8 xl:px-16 py-12 xl:py-20 overflow-hidden bg-[#121314]"
    >
      {/* Ambient orange diffusion glow behind portrait */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#ff6409]/10 blur-[130px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center relative z-10">
        {/* Left Column: Typography & Identity */}
        <div className="lg:col-span-4 flex flex-col justify-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#292a2b] text-[#ffb597] font-mono text-[11px] uppercase tracking-widest self-start border border-[#5c4037]/40">
            <span className="text-[#ff6409]">✦</span>
            {HERO_DATA.subBadge}
          </div>

          <div className="relative mt-6">
            {/* Background geometric badge motif */}
            <div className="absolute -top-6 -left-4 sm:-left-6 w-32 sm:w-36 h-32 sm:h-36 bg-[#ff6409]/15 -rotate-12 pointer-events-none flex items-start justify-end p-2 border border-[#ff6409]/30">
              <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest font-bold">
                ✦ DS_01
              </span>
            </div>

            <h1 className="relative font-display-hero text-[clamp(2.75rem,7vw,5.5rem)] uppercase tracking-tighter text-[#e3e2e3] leading-[0.95] select-none">
              DAKSH
              <br />
              <span className="text-[#ff6409] drop-shadow-sm">SHINDE</span>
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#e5beb2]">
            {HERO_DATA.specTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#1f2021] border border-[#343536] text-[#e3e2e3] tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Center Column: Editorial Monochrome Cutout Portrait */}
        <div className="lg:col-span-4 flex justify-center items-end relative min-h-[440px] lg:min-h-[540px]">
          {/* Offset Graphic Frame */}
          <div className="absolute inset-x-6 bottom-0 top-10 bg-[#1b1c1d] border border-[#292a2b] -rotate-2 scale-95 pointer-events-none" />

          <div className="absolute -right-2 top-6 px-3 py-1 bg-[#ff6409] text-[#561c00] font-mono text-xs tracking-widest z-20 font-bold shadow-md">
            INDEX: 001_PORTRAIT
          </div>

          {/* Daksh Cutout Portrait */}
          <div className="relative z-10 w-full max-w-[360px] filter grayscale contrast-125 hover:contrast-100 transition-all duration-500">
            <img
              alt="Daksh Shinde Editorial Studio Portrait"
              className="w-full h-auto object-cover max-h-[560px] drop-shadow-[0_24px_36px_rgba(0,0,0,0.85)] select-none"
              src={HERO_DATA.portraitUrl}
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </div>

        {/* Right Column: Intent & Primary CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6 lg:pl-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1f2021] border border-[#343536] text-[#ac897e] font-mono text-[10px] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6409]" />
              {HERO_DATA.location}
            </div>

            <h2 className="mt-4 font-headline-md text-2xl lg:text-3xl tracking-tight uppercase text-[#e3e2e3] font-medium leading-tight">
              {HERO_DATA.headline}
            </h2>

            <p className="mt-4 font-body-lg text-[#e5beb2]/90 leading-relaxed text-base lg:text-lg">
              {HERO_DATA.summary}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => onNavigate('selected-work')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#ff6409] text-[#561c00] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#ff5708] transition-all duration-150 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#ff6409]/20 group"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('contact-hub')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#292a2b] hover:bg-[#39393a] text-[#e3e2e3] font-mono text-xs font-bold tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-2 border border-[#5c4037]/30"
            >
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Indicator */}
      <div className="mt-14 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0d0e0f] border border-[#292a2b] px-6 py-3.5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('about-section')}
            className="w-9 h-9 rounded-full bg-[#ff6409] text-[#561c00] flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
            aria-label="Scroll to About Section"
          >
            <ArrowDown className="w-5 h-5 stroke-[2.5]" />
          </button>
          <span className="font-mono text-[11px] tracking-widest text-[#e5beb2]/80 uppercase">
            SCROLL TO EXPLORE ARCHITECTURE
          </span>
        </div>

        <div className="font-mono text-[11px] text-[#ac897e] tracking-wider uppercase">
          SECTION [ 01 / 07 ] · PORTFOLIO SPECIFICATION © 2026
        </div>
      </div>
    </section>
  );
};
