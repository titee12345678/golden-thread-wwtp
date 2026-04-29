'use client';
import { ArrowDown, LayoutDashboard, Workflow, FileSpreadsheet } from 'lucide-react';
import Image from 'next/image';
import { useLang } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { lang, t } = useLang();


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pond-satellite.png"
          alt="Aerial view of Golden Thread wastewater treatment ponds"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-cyan-900/20" />
      </div>



      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug tracking-tight mb-6">
            Golden Thread
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2 py-2">
              {t('hero.title1')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80 mt-2">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 font-light mb-4">
            {t('hero.capacity')} <span className="text-cyan-400 font-semibold">500 m³/{lang === 'th' ? 'วัน' : 'day'}</span>
          </p>

          <p className="text-base text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Workflow className="w-5 h-5" />
              {t('hero.cta1')}
            </button>
            <button
              onClick={() => document.getElementById('layout')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <LayoutDashboard className="w-5 h-5" />
              {lang === 'th' ? 'ดูผังพื้นที่' : 'View Layout'}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs font-medium">{lang === 'th' ? 'เลื่อนเพื่อดูเพิ่มเติม' : 'Scroll to explore'}</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
