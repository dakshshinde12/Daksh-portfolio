import React from 'react';
import { MILESTONES } from '../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  return (
    <section
      id="milestones"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#0d0e0f] border-b border-[#292a2b]"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
          05 / MILESTONES
        </span>
        <h2 className="font-display-hero text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] font-semibold">
          ACADEMIC &amp; DEVELOPMENT ROADMAP.
        </h2>
        <p className="text-sm md:text-base text-[#ac897e] max-w-xl">
          Sequential trajectory tracking practical accomplishments, current learning sprints, and personal evolution.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MILESTONES.map((item, idx) => {
          const isWide = idx === 6; // item 07 spans 2 columns
          const isHighlight =
            item.status === 'IN_PROGRESS' || item.status === 'CORE';

          return (
            <div
              key={item.index}
              className={`bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[220px] hover:bg-[#292a2b] hover:border-[#ff6409]/40 transition-colors group ${
                isWide ? 'md:col-span-2' : ''
              }`}
            >
              <span className="font-mono text-base text-[#ff6409] font-bold">
                {item.index}
              </span>

              <div className="my-3">
                <h3 className="font-display-hero text-base sm:text-lg uppercase text-[#e3e2e3] group-hover:text-[#ffb59c] transition-colors font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-[#e5beb2]/80 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  isHighlight ? 'text-[#ffb597]' : 'text-[#ac897e]'
                }`}
              >
                {item.tag}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
