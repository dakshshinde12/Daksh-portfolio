import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export const CoordinateBanner: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (Asia/Kolkata)
      try {
        const istString = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setCurrentTime(`${istString} IST`);
      } catch {
        setCurrentTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-5 md:px-8 xl:px-16 py-2.5 bg-[#0d0e0f] border-b border-[#292a2b] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-wider text-[#e5beb2]/80 select-none">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6409] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6409]"></span>
        </span>
        <span className="tracking-widest uppercase text-[#ffb597]">
          SYS_STATUS: ACTIVE RESEARCH &amp; EXPLORATION
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs">
        <span>LAT: {CONTACT_INFO.coordinates.lat}</span>
        <span className="text-[#5c4037]">|</span>
        <span>LON: {CONTACT_INFO.coordinates.lon}</span>
        <span className="text-[#5c4037]">|</span>
        <span className="text-[#ff6409] font-bold">{CONTACT_INFO.coordinates.region}</span>
        {currentTime && (
          <>
            <span className="text-[#5c4037]">|</span>
            <span className="text-[#e3e2e3]">{currentTime}</span>
          </>
        )}
      </div>
    </section>
  );
};
