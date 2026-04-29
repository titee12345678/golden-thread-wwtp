'use client';
import { Clock, Droplets, ArrowUpFromLine, CircleDot, Wind, Filter, Container, Trash2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const steps = [
  { key: 'daily.s1', icon: Droplets, color: '#92400E' },
  { key: 'daily.s2', icon: ArrowUpFromLine, color: '#2563EB' },
  { key: 'daily.s3', icon: CircleDot, color: '#2563EB' },
  { key: 'daily.s4', icon: Wind, color: '#0891B2' },
  { key: 'daily.s5', icon: Wind, color: '#0891B2' },
  { key: 'daily.s6', icon: Filter, color: '#059669' },
  { key: 'daily.s7', icon: Filter, color: '#059669' },
  { key: 'daily.s8', icon: Container, color: '#7C3AED' },
  { key: 'daily.s9', icon: Trash2, color: '#D97706' },
  { key: 'daily.s10', icon: Trash2, color: '#6B7280' },
];

export default function DailyOperationFlow() {
  const { t } = useLang();

  return (
    <section id="daily-operation" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={Clock} title={t('daily.title')} subtitle={t('daily.subtitle')} badge={t('daily.badge')} />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-blue-200 via-cyan-200 via-emerald-200 to-gray-200 z-0 rounded-full" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.key} delay={Math.min(i + 1, 5)}>
                <div className="relative flex items-center gap-4 md:gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md bg-white transition-transform hover:scale-110"
                      style={{ border: `3px solid ${step.color}` }}
                    >
                      <span className="text-lg md:text-xl font-black" style={{ color: step.color }}>{i + 1}</span>
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className="flex-1 rounded-xl bg-white border-l-4 p-4 md:p-5 shadow-sm hover:shadow-md transition-all"
                    style={{ borderColor: step.color }}
                  >
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 shrink-0" style={{ color: step.color }} />
                      <p className="text-base md:text-lg font-bold text-text-primary leading-relaxed">{t(step.key)}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
