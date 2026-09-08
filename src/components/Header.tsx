import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, User } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about-section', label: 'ABOUT' },
    { id: 'current-focus', label: 'CURRENT FOCUS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'selected-work', label: 'PROJECTS' },
    { id: 'milestones', label: 'MILESTONES' },
    { id: 'contact-hub', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121314]/90 backdrop-blur-md border-b border-[#5c4037]/30 transition-all duration-200">
      <div className="h-20 w-full px-5 md:px-8 xl:px-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Daksh Shinde Home"
          >
            <span className="font-display-hero text-2xl tracking-tight text-[#e3e2e3] group-hover:text-[#ffb59c] transition-colors">
              DAKSH<span className="text-[#ff6409]">.</span>
            </span>
            <span className="hidden sm:inline-block font-label-badge text-[10px] uppercase px-2 py-0.5 bg-[#343536] border border-[#5c4037]/40 text-[#e5beb2] tracking-wider">
              AI &amp; DS @ REVA
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`uppercase tracking-wider transition-colors text-xs font-mono focus:outline-none ${
                  isActive
                    ? 'text-[#ff6409] font-bold border-b-2 border-[#ff6409] pb-1'
                    : 'text-[#e5beb2]/80 hover:text-[#ff6409]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact-hub')}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#ff6409] text-[#ff6409] hover:bg-[#ff6409] hover:text-[#561c00] font-label-badge text-[11px] uppercase tracking-wider transition-all duration-200"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div
            className="w-8 h-8 rounded-full bg-[#ffb59c] flex items-center justify-center text-[#5c1900] shadow-sm"
            title="Daksh Shinde"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e3e2e3] hover:text-[#ff6409] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121314] border-b border-[#5c4037]/50 px-5 py-4 flex flex-col gap-3 animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between py-2 text-left text-sm font-mono tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#ff6409] font-bold border-l-2 border-[#ff6409] pl-2'
                    : 'text-[#e5beb2] hover:text-[#ff6409]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
