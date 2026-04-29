'use client';
import { useState } from 'react';
import { Workflow, Droplets, Wind, Filter, Container, Trash2, AlertCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function ProcessFlow() {
  const { t } = useLang();

  const flowSteps = [
    { id: 1, nameKey: 'process.s1.name', descKey: 'process.s1.desc', icon: AlertCircle, color: '#B45309', bgColor: 'bg-amber-50', borderColor: 'border-amber-200', technical: 'Flow rate: 500 m³/day (avg. ~21 m³/hr)' },
    { id: 2, nameKey: 'process.s2.name', descKey: 'process.s2.desc', icon: Container, color: '#78716C', bgColor: 'bg-stone-50', borderColor: 'border-stone-200', technical: 'Existing infrastructure — scope boundary' },
    { id: 3, nameKey: 'process.s3.name', descKey: 'process.s3.desc', icon: Droplets, color: '#2563EB', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', technical: '13.0 × 11.0 × 4.0 m | 95× Air Diffusers 12" | 2× Submersible Pumps (21 m³/h)' },
    { id: 4, nameKey: 'process.s4.name', descKey: 'process.s4.desc', icon: Wind, color: '#0891B2', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-200', technical: '5.5 × 6.0 × 4.0 m | 35× Air Diffusers 12" | 2× Air Blowers (12 m³/min)' },
    { id: 5, nameKey: 'process.s5.name', descKey: 'process.s5.desc', icon: Filter, color: '#059669', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', technical: 'Ø5.5 × 3.5 m | 2× Centrifugal Pumps (12 m³/h) for return/excess sludge' },
    { id: 6, nameKey: 'process.s6.name', descKey: 'process.s6.desc', icon: Container, color: '#7C3AED', bgColor: 'bg-violet-50', borderColor: 'border-violet-200', technical: '13.0 × 7.0 × 3.0 m | Treated effluent storage' },
    { id: 7, nameKey: 'process.s7.name', descKey: 'process.s7.desc', icon: Trash2, color: '#D97706', bgColor: 'bg-amber-50', borderColor: 'border-amber-200', technical: '2.0 × 2.0 × 2.0 m | 2× Sludge Transfer Pumps (21 m³/h)' },
    { id: 8, nameKey: 'process.s8.name', descKey: 'process.s8.desc', icon: Trash2, color: '#6B7280', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', technical: 'Filter press / dewatering unit → Sludge cake disposal' },
  ];

  const legendItems = [
    { color: '#92400E', labelKey: 'process.rawWaste' },
    { color: '#2563EB', labelKey: 'process.processingWater' },
    { color: '#059669', labelKey: 'process.treatedWater' },
    { color: '#6B7280', labelKey: 'process.sludge' },
    { color: '#0891B2', labelKey: 'process.airOxygen' },
  ];

  return (
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          icon={Workflow}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
          badge={t('process.badge')}
        />

        {/* Color Legend */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legendItems.map((item) => (
              <div key={item.labelKey} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs font-medium text-text-secondary">{t(item.labelKey)}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Flow Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-blue-400 via-cyan-400 via-emerald-400 via-violet-400 to-gray-300 z-0" />

          <div className="space-y-6">
            {flowSteps.map((step, i) => (
              <ScrollReveal key={step.id} delay={Math.min(i + 1, 5)}>
                <div className="relative flex gap-4 md:gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110 bg-white"
                      style={{ border: `4px solid ${step.color}` }}
                    >
                      <step.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className="flex-1 rounded-2xl bg-white border-4 p-6 transition-all shadow-md hover:shadow-lg"
                    style={{ borderColor: step.color }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-black px-3 py-1 rounded-full shadow-sm"
                          style={{ backgroundColor: step.color, color: 'white' }}
                        >
                          {t('process.step')} {step.id}
                        </span>
                        <h3 className="font-extrabold text-text-primary text-xl">{t(step.nameKey)}</h3>
                      </div>
                    </div>

                    <p className="text-lg font-bold text-text-primary leading-relaxed mb-4">{t(step.descKey)}</p>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                        <span className="text-[11px] font-black text-text-muted uppercase tracking-widest shrink-0 mt-1">
                          {t('process.specs')}
                        </span>
                        <span className="text-base text-text-secondary font-black leading-relaxed">
                          {step.technical}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flow Arrow between steps */}
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center pl-6 md:pl-8 py-1">
                    <div className="w-0.5 h-4 animate-flow-pulse" style={{ backgroundColor: step.color + '40' }} />
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Engineering Flow Diagram Reference */}
        <ScrollReveal className="mt-12">
          <div className="glass-card p-4 md:p-6">
            <h3 className="font-semibold text-text-primary mb-4 text-sm">
              {t('process.badge')} — Flow Diagram
            </h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="/images/flow-diagram.png"
                alt="Engineering flow diagram"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
