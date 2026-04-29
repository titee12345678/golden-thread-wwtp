'use client';
import { useState, useEffect } from 'react';
import { Droplets, Menu, X, Globe } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const navLinks = [
  { id: 'overview', key: 'nav.overview' },
  { id: 'simulation', key: 'simulation.badge' },
  { id: 'layout', key: 'nav.layout' },
  { id: 'process', key: 'nav.process' },
  { id: 'equipment', key: 'nav.equipment' },
  { id: 'visuals', key: 'nav.visuals' },
  { id: 'details', key: 'nav.details' },
] as const;

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-border-light'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg tracking-tight hidden sm:block transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}>
              {t('nav.brand')}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-primary/10 text-primary'
                    : scrolled
                    ? 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {t(link.key)}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                scrolled
                  ? 'bg-primary/5 text-primary border-primary/20 hover:bg-primary/10'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
              title={lang === 'en' ? 'เปลี่ยนเป็นภาษาไทย' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang === 'en' ? 'TH' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile: Lang Toggle + Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                scrolled
                  ? 'bg-primary/5 text-primary border-primary/20'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'en' ? 'TH' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-text-primary hover:bg-surface-hover' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                {t(link.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
