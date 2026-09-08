import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsMatrixSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterOptions = ['ALL', 'LEARNING', 'DEVELOPING', 'EXPLORING', 'PRACTICING'];

  const filteredSkills =
    activeFilter === 'ALL'
      ? SKILLS
      : SKILLS.filter((s) => s.status.toUpperCase() === activeFilter);

  const getStatusBadgeStyle = (status: SkillItem['status']) => {
    switch (status) {
      case 'LEARNING':
        return 'bg-[#ff6409] text-[#561c00] font-bold';
      case 'DEVELOPING':
        return 'bg-[#343536] text-[#ffb597] border border-[#5c4037]/40';
      case 'EXPLORING':
        return 'bg-[#292a2b] text-[#ffb5a0] border border-[#5c4037]/30';
      case 'PRACTICING':
        return 'bg-[#ff6409] text-[#561c00] font-bold';
      default:
        return 'bg-[#343536] text-[#e3e2e3]';
    }
  };

  return (
    <section
      id="skills"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#0d0e0f] border-b border-[#292a2b]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
              03 / SKILLS MATRIX
            </span>
            <h2 className="font-display-hero text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] font-semibold mt-1">
              TOOLS OF THE TRADE.
            </h2>
            <p className="text-sm md:text-base text-[#ac897e] max-w-xl mt-1">
              Authentic competencies mapped with active status markers — no inflated percentages or cosmetic ratings.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase transition-all ${
                  activeFilter === filter
                    ? 'bg-[#ff6409] text-[#561c00] font-bold'
                    : 'bg-[#1f2021] text-[#e5beb2]/80 hover:bg-[#292a2b] hover:text-[#e3e2e3] border border-[#343536]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Asymmetric Typographic Field */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.index}
            className="bg-[#1f2021] border border-[#292a2b] p-6 flex flex-col justify-between min-h-[160px] hover:bg-[#292a2b] hover:border-[#ff6409]/40 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-label-badge text-[10px] px-2 py-0.5 tracking-wider uppercase ${getStatusBadgeStyle(
                  skill.status
                )}`}
              >
                STATUS: {skill.status}
              </span>
              <span className="font-mono text-xs text-[#ac897e]">{skill.index}</span>
            </div>

            <div className="my-3">
              <div className="font-display-hero text-xl sm:text-2xl uppercase text-[#e3e2e3] tracking-tight font-semibold group-hover:text-[#ffb59c] transition-colors">
                {skill.title}
              </div>
              {skill.description && (
                <p className="text-xs text-[#e5beb2]/70 mt-1 leading-relaxed">
                  {skill.description}
                </p>
              )}
            </div>

            <div className="font-mono text-[11px] text-[#ffb597] tracking-wider">
              {skill.tags}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
