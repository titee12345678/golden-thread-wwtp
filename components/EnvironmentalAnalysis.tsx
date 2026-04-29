'use client';
import { Leaf, Droplets, Wind, ShieldCheck, Filter, Trash2, FlaskConical, Settings } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const impacts = [
  { icon: Droplets, color: '#2563EB', titleKey: 'env.bod.title', descKey: 'env.bod.desc' },
  { icon: Wind, color: '#0891B2', titleKey: 'env.odor.title', descKey: 'env.odor.desc' },
  { icon: ShieldCheck, color: '#7C3AED', titleKey: 'env.shock.title', descKey: 'env.shock.desc' },
  { icon: Filter, color: '#059669', titleKey: 'env.ss.title', descKey: 'env.ss.desc' },
  { icon: Trash2, color: '#D97706', titleKey: 'env.sludge.title', descKey: 'env.sludge.desc' },
  { icon: FlaskConical, color: '#EC4899', titleKey: 'env.lab.title', descKey: 'env.lab.desc' },
  { icon: Settings, color: '#6366F1', titleKey: 'env.commission.title', descKey: 'env.commission.desc' },
];

export default function EnvironmentalAnalysis() {
  const { t } = useLang();

  return (
    <section id="environment" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Leaf} title={t('env.title')} subtitle={t('env.subtitle')} badge={t('env.badge')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, i) => (
            <ScrollReveal key={item.titleKey} delay={Math.min(i + 1, 5)}>
              <div className="rounded-2xl border-2 p-6 h-full shadow-md hover:shadow-lg transition-all group" style={{ borderColor: item.color + '35', backgroundColor: item.color + '12' }}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color + '15' }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-text-primary text-lg mb-2">{t(item.titleKey)}</h3>
                    <p className="text-base font-bold text-text-secondary leading-relaxed">{t(item.descKey)}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
