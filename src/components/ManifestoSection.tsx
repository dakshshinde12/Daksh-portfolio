import React from 'react';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#0d0e0f] border-b border-[#292a2b]">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="font-mono text-xs text-[#ac897e] uppercase tracking-widest flex items-center gap-2">
          <span>[ MANIFESTO · DAKSH SHINDE ]</span>
        </div>

        <h2 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[1.05] text-[#e3e2e3] font-bold">
          I DON&apos;T WANT TO STAY IN ONE BOX.
          <br />
          <span className="text-[#ff6409]">I WANT TO EXPLORE.</span>
        </h2>

        <p className="font-body-lg text-[#e5beb2]/90 max-w-3xl leading-relaxed text-base lg:text-xl">
          My goal is to develop strong technical and practical skills while continuously exploring different fields of technology, creativity, and personal development.
        </p>
      </div>
    </section>
  );
};
