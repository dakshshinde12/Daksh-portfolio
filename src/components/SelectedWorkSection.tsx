import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Activity, Play, Pause, RefreshCw } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  // Real-time telemetry simulation state for Energy Monitoring System
  const [telemetryActive, setTelemetryActive] = useState(true);
  const [telemetryWattage, setTelemetryWattage] = useState(1.18);
  const [wavePhase, setWavePhase] = useState(0);

  // Enso interactive rotation state
  const [ensoInteractive, setEnsoInteractive] = useState(false);

  useEffect(() => {
    if (!telemetryActive) return;
    const interval = setInterval(() => {
      setWavePhase((p) => (p + 1) % 60);
      // Realistic jitter around 1.1 kW - 1.3 kW nominal, occasionally spikes
      const jitter = (Math.sin(Date.now() / 1200) * 0.4 + 1.2).toFixed(2);
      setTelemetryWattage(parseFloat(jitter));
    }, 150);
    return () => clearInterval(interval);
  }, [telemetryActive]);

  return (
    <section
      id="selected-work"
      className="w-full px-5 md:px-8 xl:px-16 py-16 xl:py-24 bg-[#121314] border-b border-[#292a2b]"
    >
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] text-[#ff6409] uppercase tracking-widest">
          04 / SELECTED WORK
        </span>
        <h2 className="font-display-hero text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#e3e2e3] font-semibold">
          THINGS I’VE BUILT &amp; PRESENTED.
        </h2>
        <p className="text-sm md:text-base text-[#ac897e] max-w-xl">
          Concrete implementations demonstrating project execution, conceptual modeling, and technical articulation.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {/* PROJECT 01: ENERGY MONITORING SYSTEM */}
        <div className="bg-[#1b1c1d] border border-[#292a2b] p-6 xl:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center hover:border-[#ff6409]/30 transition-colors">
          {/* Visual Presentation */}
          <div className="lg:col-span-7 bg-[#0d0e0f] border border-[#292a2b] p-5 sm:p-6 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#ac897e] gap-2">
              <span className="text-[#ff6409] flex items-center gap-1.5 font-bold">
                <Activity className="w-3.5 h-3.5" />
                TELEMETRY // ENERGY_MODULE
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTelemetryActive(!telemetryActive)}
                  className="px-2 py-0.5 bg-[#1f2021] text-[#ffb597] hover:bg-[#292a2b] text-[10px] flex items-center gap-1 border border-[#343536]"
                  title="Toggle Telemetry Stream"
                >
                  {telemetryActive ? (
                    <>
                      <Pause className="w-2.5 h-2.5" /> PAUSE
                    </>
                  ) : (
                    <>
                      <Play className="w-2.5 h-2.5" /> RESUME
                    </>
                  )}
                </button>
                <span>V_RATE: 50Hz · ACTIVE SENSORS</span>
              </div>
            </div>

            {/* Abstract Energy Telemetry Visualization (SVG) */}
            <div className="my-4 w-full flex items-center justify-center relative">
              <svg
                className="w-full h-44 overflow-visible"
                fill="none"
                viewBox="0 0 600 160"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="energyGradLive" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#ff6409" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ff6409" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffb59c" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Background Grid */}
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="0" x2="600" y1="40" y2="40" />
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="0" x2="600" y1="80" y2="80" />
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="0" x2="600" y1="120" y2="120" />
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="150" x2="150" y1="0" y2="160" />
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="300" x2="300" y1="0" y2="160" />
                <line stroke="#343536" strokeDasharray="4 4" strokeWidth="0.75" x1="450" x2="450" y1="0" y2="160" />

                {/* Waveform Path with dynamic pulse */}
                <path
                  d={`M 0 ${95 + Math.sin(wavePhase * 0.1) * 6} Q 60 ${35 + Math.cos(wavePhase * 0.1) * 8} 120 90 T 240 ${110 - Math.sin(wavePhase * 0.1) * 8} T 360 ${30 + Math.sin(wavePhase * 0.2) * 6} T 480 ${85 + Math.cos(wavePhase * 0.1) * 5} T 600 60`}
                  fill="none"
                  stroke="url(#energyGradLive)"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
                <path
                  d={`M 0 ${95 + Math.sin(wavePhase * 0.1) * 6} Q 60 ${35 + Math.cos(wavePhase * 0.1) * 8} 120 90 T 240 ${110 - Math.sin(wavePhase * 0.1) * 8} T 360 ${30 + Math.sin(wavePhase * 0.2) * 6} T 480 ${85 + Math.cos(wavePhase * 0.1) * 5} T 600 60 L 600 160 L 0 160 Z`}
                  fill="url(#energyGradLive)"
                  opacity="0.1"
                />

                {/* Telemetry Pulse Markers */}
                <circle cx="360" cy={30 + Math.sin(wavePhase * 0.2) * 6} fill="#ff6409" r="5" />
                <circle
                  cx="360"
                  cy={30 + Math.sin(wavePhase * 0.2) * 6}
                  opacity="0.8"
                  r="12"
                  stroke="#ff6409"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                />
                <text fill="#ff6409" fontFamily="Space Mono" fontSize="11" letterSpacing="0.05em" x="380" y="34">
                  PEAK 2.4 kW
                </text>

                <circle cx="120" cy="90" fill="#ffb59c" r="4" />
                <text fill="#ffb59c" fontFamily="Space Mono" fontSize="11" x="135" y="94">
                  NOMINAL {telemetryWattage} kW
                </text>
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#ffb597] gap-2 pt-2 border-t border-[#292a2b]">
              <span>REAL-TIME AUDIT LOG</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#ff6409] rounded-full animate-pulse" />
                CONSUMPTION OPTIMIZATION
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#ff6409] font-bold">PROJECT // 01</span>
                <span className="px-2.5 py-0.5 bg-[#292a2b] font-mono text-[10px] text-[#e3e2e3] uppercase border border-[#343536]">
                  ACADEMIC · COMPLETED
                </span>
              </div>

              <h3 className="mt-4 font-display-hero text-2xl uppercase text-[#e3e2e3] font-semibold">
                ENERGY MONITORING SYSTEM
              </h3>

              <p className="mt-3 text-sm md:text-base text-[#e5beb2]/90 leading-relaxed">
                An academic project focused on monitoring energy usage, providing practical exposure to approaching a real-world problem through a technology-driven solution.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                {PROJECTS[0].technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-[#0d0e0f] text-[#ac897e] border border-[#292a2b]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectProject(PROJECTS[0])}
              className="pt-3 flex items-center justify-between bg-[#1f2021] hover:bg-[#292a2b] px-4 py-3 transition-colors border border-[#343536] group text-left"
            >
              <span className="font-mono text-[11px] text-[#ac897e] group-hover:text-[#ffb59c] transition-colors">
                OUTCOME: REAL-WORLD PROBLEM SOLVING
              </span>
              <div className="w-8 h-8 rounded-full bg-[#ff6409] text-[#561c00] flex items-center justify-center font-mono text-sm font-bold group-hover:scale-105 transition-transform">
                ↗
              </div>
            </button>
          </div>
        </div>

        {/* PROJECT 02: ENSO CIRCLE */}
        <div className="bg-[#1b1c1d] border border-[#292a2b] p-6 xl:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center hover:border-[#ff6409]/30 transition-colors">
          {/* Visual Presentation */}
          <div className="lg:col-span-7 bg-[#0d0e0f] border border-[#292a2b] p-5 sm:p-6 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#ac897e] gap-2">
              <span className="text-[#ff6409] font-bold">RESEARCH // PRESENTATION_CORE</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setEnsoInteractive(!ensoInteractive)}
                  className="px-2 py-0.5 bg-[#1f2021] text-[#ffb597] hover:bg-[#292a2b] text-[10px] flex items-center gap-1 border border-[#343536]"
                  title="Rotate Enso Focus"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${ensoInteractive ? 'animate-spin' : ''}`} />
                  {ensoInteractive ? 'ANIMATING' : 'ROTATE'}
                </button>
                <span>PHILOSOPHY · SYSTEMIC REASONING</span>
              </div>
            </div>

            {/* Abstract Enso Brushwork Ring Graphic */}
            <div className="my-4 w-full flex items-center justify-center">
              <svg
                className={`w-52 h-52 transition-transform duration-700 ${
                  ensoInteractive ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Enso Circle: Unclosed expressive stroke */}
                <circle cx="100" cy="100" r="76" stroke="#292a2b" strokeWidth="12" />
                <path
                  d="M 40 100 A 60 60 0 1 1 150 145"
                  stroke="#e3e2e3"
                  strokeLinecap="round"
                  strokeWidth="10"
                />
                <path
                  d="M 50 95 A 50 50 0 1 1 135 140"
                  stroke="#ff6409"
                  strokeDasharray="140 30"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                {/* Focal Accents */}
                <circle cx="100" cy="100" fill="#ff6409" r="6" />
                <line
                  stroke="#343536"
                  strokeDasharray="2 2"
                  strokeWidth="0.5"
                  x1="100"
                  x2="100"
                  y1="20"
                  y2="180"
                />
                <line
                  stroke="#343536"
                  strokeDasharray="2 2"
                  strokeWidth="0.5"
                  x1="20"
                  x2="180"
                  y1="100"
                  y2="100"
                />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#ffb597] gap-2 pt-2 border-t border-[#292a2b]">
              <span>PRESENTED IN ACADEMIC FORUM</span>
              <span>STRUCTURED DISCOURSE</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#ff6409] font-bold">PROJECT // 02</span>
                <span className="px-2.5 py-0.5 bg-[#292a2b] font-mono text-[10px] text-[#e3e2e3] uppercase border border-[#343536]">
                  PRESENTATION · COMPLETED
                </span>
              </div>

              <h3 className="mt-4 font-display-hero text-2xl uppercase text-[#e3e2e3] font-semibold">
                ENSO CIRCLE
              </h3>

              <p className="mt-3 text-sm md:text-base text-[#e5beb2]/90 leading-relaxed">
                A presentation-based project prepared and presented as part of academic/project work, demonstrating research, organization, communication, and presentation skills.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                {PROJECTS[1].technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-[#0d0e0f] text-[#ac897e] border border-[#292a2b]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelectProject(PROJECTS[1])}
              className="pt-3 flex items-center justify-between bg-[#1f2021] hover:bg-[#292a2b] px-4 py-3 transition-colors border border-[#343536] group text-left"
            >
              <span className="font-mono text-[11px] text-[#ac897e] group-hover:text-[#ffb59c] transition-colors">
                OUTCOME: RESEARCH &amp; COMMUNICATION
              </span>
              <div className="w-8 h-8 rounded-full bg-[#ff6409] text-[#561c00] flex items-center justify-center font-mono text-sm font-bold group-hover:scale-105 transition-transform">
                ↗
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
