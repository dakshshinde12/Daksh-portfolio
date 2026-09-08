import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CoordinateBanner } from './components/CoordinateBanner';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { ManifestoSection } from './components/ManifestoSection';
import { CurrentFocusSection } from './components/CurrentFocusSection';
import { SkillsMatrixSection } from './components/SkillsMatrixSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { MilestonesSection } from './components/MilestonesSection';
import { BeyondTechSection } from './components/BeyondTechSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CareerObjectiveSection } from './components/CareerObjectiveSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem, FocusAreaItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedFocus, setSelectedFocus] = useState<FocusAreaItem | null>(null);

  // Scroll tracking for active section highlighting in header
  useEffect(() => {
    const sections = [
      'hero',
      'about-section',
      'current-focus',
      'skills',
      'selected-work',
      'milestones',
      'contact-hub',
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#121314] text-[#e3e2e3] font-body-md text-body-md selection:bg-[#ff6409] selection:text-[#561c00] antialiased min-h-screen">
      {/* Fixed Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Flow */}
      <main className="w-full pt-20 bg-[#121314] min-h-screen">
        <div className="flex flex-col w-full text-[#e3e2e3]">
          {/* Top Coordinate Banner */}
          <CoordinateBanner />

          {/* 1. Hero Section */}
          <HeroSection onNavigate={handleNavigate} />

          {/* 2. Marquee Ticker */}
          <MarqueeTicker />

          {/* 3. About Section */}
          <AboutSection />

          {/* 4. Personal Brand Manifesto */}
          <ManifestoSection />

          {/* 5. Current Focus */}
          <CurrentFocusSection
            onSelectFocus={(focusItem) => setSelectedFocus(focusItem)}
          />

          {/* 6. Tools of the Trade / Skills Matrix */}
          <SkillsMatrixSection />

          {/* 7. Selected Work / Projects */}
          <SelectedWorkSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* 8. Milestones Roadmap */}
          <MilestonesSection />

          {/* 9. Beyond Technology */}
          <BeyondTechSection />

          {/* 10. Personal Philosophy */}
          <PhilosophySection />

          {/* 11. Career Objective */}
          <CareerObjectiveSection />

          {/* 12. Contact / Let's Talk */}
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Detail Modal for Projects and Focus Areas */}
      <ProjectModal
        project={selectedProject}
        focusArea={selectedFocus}
        onClose={() => {
          setSelectedProject(null);
          setSelectedFocus(null);
        }}
      />
    </div>
  );
}
