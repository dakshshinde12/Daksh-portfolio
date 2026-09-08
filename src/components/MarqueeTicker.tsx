import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const words = [
    { text: 'BUILD', highlight: false },
    { text: 'LEARN', highlight: false },
    { text: 'EXPERIMENT', highlight: false },
    { text: 'SOLVE', highlight: false },
    { text: 'CREATE', highlight: false },
    { text: 'REPEAT', highlight: false },
    { text: 'PROGRAMMING', highlight: true },
    { text: 'PROBLEM SOLVING', highlight: true },
    { text: 'CREATIVITY', highlight: true },
    { text: 'TECHNOLOGY', highlight: true },
    { text: 'EXPLORATION', highlight: true },
  ];

  return (
    <section className="w-full bg-[#0d0e0f] border-y border-[#292a2b] py-4 overflow-hidden relative select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 text-lg md:text-xl font-display-hero uppercase tracking-wider text-[#e3e2e3]">
          {words.map((w, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span className={w.highlight ? 'text-[#ffb597]' : 'text-[#e3e2e3]'}>
                {w.text}
              </span>
              <span className="text-[#ff6409]">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex items-center gap-8 text-lg md:text-xl font-display-hero uppercase tracking-wider text-[#e3e2e3] ml-8"
        >
          {words.map((w, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span className={w.highlight ? 'text-[#ffb597]' : 'text-[#e3e2e3]'}>
                {w.text}
              </span>
              <span className="text-[#ff6409]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
