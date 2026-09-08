import React, { useState } from 'react';
import { BEYOND_CODE_DIMENSIONS } from '../data/portfolioData';

export const BeyondTechSection: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState<string | null>(null);

  const dimensionInsights: Record<string, string> = {
    '01': 'Visual design, generative media, and architectural symmetry.',
    '02': 'Continuous reflection, intellectual humility, and disciplined habits.',
    '03': 'Understanding human needs, active listening, and communicating value.',
    '04': 'Non-fiction, cognitive science, and engineering history.',
    '05': 'Aggressive curiosity to explore tools outside my comfort zone.',
    '06': 'Prototyping hypotheses in code and learning from failures.',
    '07': 'Consistent clarity in public work and sharing transparent progress.',
  };

  return (
    <section className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#121314] border-b border-[#292a2b]">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
          06 / BEYOND CODE
        </span>
        <h2 className="font-display-hero text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] font-semibold">
          TECHNOLOGY IS ONLY ONE PART OF THE STORY.
        </h2>
        <p className="font-body-lg text-[#e5beb2]/90 max-w-2xl leading-relaxed text-base lg:text-lg mt-1">
          True versatility emerges at the intersection of computational logic, human psychology, narrative framing, and relentless curiosity.
        </p>
      </div>

      {/* Asymmetric Editorial Word Blocks */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {BEYOND_CODE_DIMENSIONS.map((dim) => {
          const isSelected = activeDimension === dim.index;
          return (
            <div
              key={dim.index}
              onClick={() =>
                setActiveDimension(isSelected ? null : dim.index)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveDimension(isSelected ? null : dim.index);
                }
              }}
              className={`p-6 bg-[#1b1c1d] border border-[#292a2b] hover:bg-[#ff6409] hover:text-[#561c00] transition-all cursor-pointer group flex flex-col justify-between min-h-[140px] select-none ${
                dim.spanCol ? 'col-span-2' : ''
              } ${isSelected ? 'bg-[#ff6409] text-[#561c00]' : ''}`}
            >
              <span
                className={`font-mono text-[11px] uppercase transition-colors ${
                  isSelected
                    ? 'text-[#561c00] font-bold'
                    : 'text-[#ac897e] group-hover:text-[#561c00]'
                }`}
              >
                DIMENSION // {dim.index}
              </span>

              <div className="my-2">
                <span
                  className={`font-display-hero text-base sm:text-lg lg:text-xl uppercase transition-colors font-bold ${
                    isSelected
                      ? 'text-[#561c00]'
                      : 'text-[#e3e2e3] group-hover:text-[#561c00]'
                  }`}
                >
                  {dim.title}
                </span>

                {isSelected && (
                  <p className="text-xs text-[#561c00] mt-1.5 font-medium leading-tight">
                    {dimensionInsights[dim.index]}
                  </p>
                )}
              </div>

              <span
                className={`text-[10px] font-mono tracking-wider uppercase transition-colors ${
                  isSelected
                    ? 'text-[#561c00]/80'
                    : 'text-[#ac897e]/60 group-hover:text-[#561c00]/80'
                }`}
              >
                {isSelected ? 'CLICK TO CLOSE' : dim.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
