import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem, FocusAreaItem } from '../types';

interface ProjectModalProps {
  project?: ProjectItem | null;
  focusArea?: FocusAreaItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  focusArea,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project && !focusArea) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1b1c1d] border border-[#ff6409]/40 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#ff6409]/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-[#292a2b] hover:bg-[#ff6409] hover:text-[#561c00] text-[#e3e2e3] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Modal Content */}
        {project && (
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ff6409] font-bold">
                INDEX // {project.index}
              </span>
              <span className="px-2.5 py-0.5 bg-[#292a2b] font-mono text-[10px] text-[#ffb597] uppercase border border-[#5c4037]/40">
                {project.category}
              </span>
            </div>

            <h3 className="mt-3 font-display-hero text-2xl sm:text-3xl uppercase text-[#e3e2e3] font-bold">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#ffb597] mt-1 uppercase tracking-wider">
              {project.subtitle}
            </p>

            <div className="mt-6 border-t border-[#292a2b] pt-4">
              <h4 className="font-mono text-xs text-[#ac897e] uppercase mb-2">
                Executive Overview
              </h4>
              <p className="text-sm text-[#e5beb2]/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.extendedDetails && project.extendedDetails.length > 0 && (
              <div className="mt-6 border-t border-[#292a2b] pt-4">
                <h4 className="font-mono text-xs text-[#ac897e] uppercase mb-3">
                  Technical Architecture &amp; Methodology
                </h4>
                <ul className="space-y-2">
                  {project.extendedDetails.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#e3e2e3] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff6409] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyHighlights && project.keyHighlights.length > 0 && (
              <div className="mt-6 border-t border-[#292a2b] pt-4">
                <h4 className="font-mono text-xs text-[#ac897e] uppercase mb-3">
                  Key Metrics &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#0d0e0f] border border-[#292a2b] text-xs font-mono text-[#ffb597]"
                    >
                      ✦ {hl}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 border-t border-[#292a2b] pt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#0d0e0f] text-[#ac897e] border border-[#292a2b]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#ff6409] text-[#561c00] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#ff5708] transition-colors inline-flex items-center gap-1.5"
              >
                <span>CLOSE DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Focus Area Modal Content */}
        {focusArea && (
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#ff6409] font-bold">
                FOCUS // {focusArea.index}
              </span>
              <span className="px-2.5 py-0.5 bg-[#292a2b] font-mono text-[10px] text-[#ffb597] uppercase border border-[#5c4037]/40">
                ACTIVE SPRINT
              </span>
            </div>

            <h3 className="mt-3 font-display-hero text-2xl sm:text-3xl uppercase text-[#e3e2e3] font-bold">
              {focusArea.title}
            </h3>
            <p className="text-sm text-[#e5beb2]/90 mt-2 leading-relaxed">
              {focusArea.description}
            </p>

            <div className="mt-6 border-t border-[#292a2b] pt-4">
              <h4 className="font-mono text-xs text-[#ac897e] uppercase mb-3">
                Core Concepts Under Active Study
              </h4>
              <ul className="space-y-2.5">
                {focusArea.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e3e2e3] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#ff6409] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-[#292a2b] pt-4">
              <h4 className="font-mono text-xs text-[#ac897e] uppercase mb-2">
                Tools &amp; Workflows
              </h4>
              <div className="flex flex-wrap gap-2">
                {focusArea.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#0d0e0f] text-[#ffb597] border border-[#292a2b] font-mono text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#ff6409] text-[#561c00] font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#ff5708] transition-colors"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
