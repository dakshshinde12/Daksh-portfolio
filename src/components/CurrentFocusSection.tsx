import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOCUS_AREAS } from '../data/portfolioData';
import { FocusAreaItem } from '../types';

interface CurrentFocusSectionProps {
  onSelectFocus: (item: FocusAreaItem) => void;
}

export const CurrentFocusSection: React.FC<CurrentFocusSectionProps> = ({ onSelectFocus }) => {
  return (
    <section
      id="current-focus"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#121314] border-b border-[#292a2b]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
        {/* Left Side Header */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
            02 / CURRENTLY BUILDING
          </span>

          <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#e3e2e3] font-semibold">
            ACTIVE AREAS OF DEVELOPMENT.
          </h2>

          <p className="text-sm md:text-base text-[#e5beb2]/90 leading-relaxed">
            These are the areas I’m actively developing as I build my technical foundation and explore new possibilities.
          </p>

          <div className="p-4 bg-[#1b1c1d] border border-[#292a2b] mt-4">
            <div className="text-[11px] font-mono text-[#ac897e] uppercase tracking-wider">
              EXECUTION POLICY
            </div>
            <div className="text-xs text-[#ffb597] mt-1 font-mono">
              Daily deliberate coding sessions, zero abstraction avoidance, raw data structuring.
            </div>
          </div>
        </div>

        {/* Right Side Stacked List */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          {FOCUS_AREAS.map((item) => (
            <div
              key={item.index}
              onClick={() => onSelectFocus(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectFocus(item);
                }
              }}
              className="group bg-[#1f2021] border border-[#292a2b] p-5 sm:p-6 hover:bg-[#292a2b] hover:border-[#ff6409]/40 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-sm sm:text-base text-[#ff6409] font-bold pt-0.5">
                  {item.index}
                </span>
                <div>
                  <h3 className="font-display-hero text-base sm:text-lg uppercase text-[#e3e2e3] group-hover:text-[#ffb59c] transition-colors font-semibold flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#e5beb2]/80 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#343536] text-[#ffb597] group-hover:bg-[#ff6409] group-hover:text-[#561c00] flex items-center justify-center transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
