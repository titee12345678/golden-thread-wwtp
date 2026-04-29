'use client';
import { Camera } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function ProjectSimulation() {
  const { t } = useLang();

  return (
    <section id="simulation" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Camera}
          title={t('simulation.title')}
          subtitle={t('simulation.subtitle')}
          badge={t('simulation.badge')}
        />

        <ScrollReveal>
          <div className="relative group">
            {/* Glossy Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative glass-card p-2 md:p-4 rounded-[1.8rem] overflow-hidden shadow-2xl">
              <div className="rounded-[1.2rem] overflow-hidden border border-border">
                <img
                  src="/images/project-simulation.png"
                  alt="3D Project Simulation Render"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay Label */}
              <div className="absolute bottom-10 right-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  {t('simulation.badge')}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
