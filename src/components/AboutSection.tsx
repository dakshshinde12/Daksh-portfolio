import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#121314] border-b border-[#292a2b]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
        {/* Left Column: Narrative & Methodologies */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
            <span>01 / ABOUT ME</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] leading-tight font-semibold">
            CURIOUS BY DEFAULT.
          </h2>

          <div className="flex flex-col gap-4 font-body-lg text-[#e5beb2]/90 leading-relaxed mt-2 text-base lg:text-lg">
            <p>
              I’m Daksh Shinde, a second-year B.Tech Artificial Intelligence &amp; Data Science student at REVA University, Bengaluru. I’m interested in technology, programming, creativity, and continuous self-development.
            </p>
            <p>
              My current focus is strengthening my programming fundamentals through C and Python, with particular emphasis on Data Structures &amp; Algorithms and hands-on problem solving.
            </p>
            <p className="text-[#e3e2e3] font-medium">
              I prefer understanding concepts deeply — studying code line by line, implementing solutions independently, and learning through practical experimentation.
            </p>
            <p>
              Alongside technology, I’m interested in creative fields, personal branding, sales, and developing practical skills. I enjoy exploring different areas rather than limiting myself to one field too early.
            </p>
          </div>

          {/* Highlight Methodology Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#292a2b] border border-[#343536] p-4 flex flex-col gap-1.5 hover:border-[#ff6409]/40 transition-colors">
              <span className="font-mono text-[11px] text-[#ff6409] tracking-wider font-bold">
                METHODOLOGY 01
              </span>
              <span className="font-display-hero text-sm md:text-base uppercase text-[#e3e2e3] font-semibold">
                DEEP CONCEPTUAL UNDERSTANDING
              </span>
              <p className="text-xs text-[#ac897e] leading-relaxed">
                Line-by-line codebase deconstruction over superficial cut-and-paste answers.
              </p>
            </div>

            <div className="bg-[#292a2b] border border-[#343536] p-4 flex flex-col gap-1.5 hover:border-[#ff6409]/40 transition-colors">
              <span className="font-mono text-[11px] text-[#ff6409] tracking-wider font-bold">
                METHODOLOGY 02
              </span>
              <span className="font-display-hero text-sm md:text-base uppercase text-[#e3e2e3] font-semibold">
                INDEPENDENT IMPLEMENTATION
              </span>
              <p className="text-xs text-[#ac897e] leading-relaxed">
                Direct algorithmic construction with hands-on console validation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Monumental statement & telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#1b1c1d] border border-[#292a2b] p-6 lg:p-8">
          <div className="flex flex-col gap-6">
            <div className="font-mono text-[11px] text-[#ffb597] uppercase tracking-widest border-b border-[#292a2b] pb-3">
              LOCATION: BENGALURU, INDIA · STATUS: 2ND YEAR UNDERGRADUATE
            </div>

            <blockquote className="font-display-hero text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-snug text-[#e3e2e3] font-bold">
              “LEARN MORE.
              <br />
              BUILD MORE.
              <br />
              <span className="text-[#ff6409]">EXPLORE MORE.</span>”
            </blockquote>
          </div>

          <div className="mt-8 pt-4 bg-[#1f2021] border border-[#292a2b] p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#ac897e]">
              <span>REVA UNIVERSITY · C&amp;IT</span>
              <span>2024 — 2026</span>
            </div>

            <div className="h-2 w-full bg-[#343536] overflow-hidden">
              <div className="h-full bg-[#ff6409] w-[50%] transition-all duration-700" />
            </div>

            <div className="flex justify-between text-[11px] font-mono text-[#ffb597]">
              <span>PROGRESS: YEAR 2 / SEM 4</span>
              <span>CORE: AI &amp; DATA SCIENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
