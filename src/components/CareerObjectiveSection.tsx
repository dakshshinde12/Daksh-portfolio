import React from 'react';

export const CareerObjectiveSection: React.FC = () => {
  const tags = ['ADAPTABILITY', 'CROSS-DISCIPLINARY VALUE', 'TECHNICAL PRAGMATISM'];

  return (
    <section className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#121314] border-b border-[#292a2b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-2">
          <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
            07 / WHAT’S NEXT
          </span>
          <h2 className="font-display-hero text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] font-semibold leading-tight">
            BUILDING TOWARD SOMETHING BIGGER.
          </h2>
        </div>

        <div className="lg:col-span-7 bg-[#1f2021] border border-[#292a2b] p-6 sm:p-8 flex flex-col gap-4">
          <p className="text-base sm:text-lg text-[#e3e2e3] leading-relaxed font-medium">
            To develop strong technical and practical skills while continuously exploring different fields of technology, creativity, and personal development.
          </p>
          <p className="text-sm sm:text-base text-[#e5beb2]/80 leading-relaxed">
            I aim to become a versatile individual who can adapt to different opportunities, build meaningful projects, develop a strong personal brand, and use both technical and creative skills to solve problems and create value.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#343536] border border-[#5c4037]/40 text-[#ffb597] font-mono text-[11px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
