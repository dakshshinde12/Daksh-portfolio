import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#0d0e0f] border-b border-[#292a2b]">
      <div className="p-8 sm:p-12 xl:p-16 bg-[#1f2021] border border-[#292a2b] flex flex-col gap-6 relative overflow-hidden">
        <div className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest font-bold">
          CORE AXIOM
        </div>

        <h3 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-[#e3e2e3] leading-[1.02] font-bold">
          LEARN. EXPERIMENT.
          <br />
          <span className="text-[#ff6409]">UNDERSTAND. BUILD.</span>
        </h3>

        <p className="font-body-lg text-[#e5beb2]/90 max-w-3xl leading-relaxed text-base lg:text-xl mt-2">
          I want to continuously learn, experiment, discover where I can create meaningful work, and combine technical and creative skills to solve problems and create value.
        </p>
      </div>
    </section>
  );
};
