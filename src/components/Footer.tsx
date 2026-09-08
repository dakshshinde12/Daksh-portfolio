import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="w-full bg-[#0d0e0f] border-t border-[#5c4037]/30 text-[#e5beb2]/80">
      <div className="w-full px-5 md:px-8 xl:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 border-b border-[#5c4037]/20 pb-10">
          <div className="md:col-span-6 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-hero text-2xl tracking-tight text-[#e3e2e3] font-bold">
                  DS
                </span>
                <span className="text-[#5c4037]">/</span>
                <span className="font-display-hero text-lg uppercase tracking-widest text-[#e3e2e3] font-bold">
                  DAKSH SHINDE
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#e5beb2]/70 mt-1">
                BENGALURU · INDIA
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#ac897e] max-w-md leading-relaxed">
              Undergraduate in Artificial Intelligence &amp; Data Science at REVA University. Developing strong fundamentals across C, Python, Data Structures &amp; Algorithms, and exploratory creative technology.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-6">
            <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider">
              <a
                href={CONTACT_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e3e2e3] hover:text-[#ff6409] transition-colors flex items-center gap-1"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e3e2e3] hover:text-[#ff6409] transition-colors flex items-center gap-1"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-[#e3e2e3] hover:text-[#ff6409] transition-colors flex items-center gap-1"
              >
                <span>EMAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-mono text-xs text-[#e5beb2]/80 text-left md:text-right">
                STATUS:{' '}
                <span className="text-[#ffb597] font-bold">
                  AVAILABLE FOR RESEARCH &amp; INTERNSHIPS
                </span>
              </div>

              <button
                onClick={onScrollToTop}
                className="w-8 h-8 rounded-full bg-[#1f2021] border border-[#343536] hover:bg-[#ff6409] hover:text-[#561c00] text-[#e3e2e3] flex items-center justify-center transition-colors focus:outline-none"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#ac897e]">
          <p>© 2026 DAKSH SHINDE · BUILDING. LEARNING. EXPLORING.</p>
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff6409] animate-pulse" />
            <span>REVA UNIVERSITY · SCHOOL OF C&amp;IT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
