'use client';
import { Droplets, Clock, DollarSign, Shield, CreditCard } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function ProjectOverview() {
  const { t } = useLang();

  const summaryCards = [
    { icon: Droplets, label: t('overview.treatmentCapacity'), value: '500 m³/day', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  ];

  const paymentSteps = [
    { pct: '30%', label: t('overview.downPayment'), desc: t('overview.downPaymentDesc') },
    { pct: '30%', label: t('overview.equipOnSite'), desc: t('overview.equipOnSiteDesc') },
    { pct: '30%', label: t('overview.installComplete'), desc: t('overview.installCompleteDesc') },
    { pct: '10%', label: t('overview.testRun'), desc: t('overview.testRunDesc') },
  ];

  return (
    <section id="overview" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={t('overview.title')}
          subtitle={t('overview.subtitle')}
          badge={t('overview.badge')}
        />

        {/* Narrative */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-10 border border-blue-100">
            <h3 className="text-xl font-semibold text-text-primary mb-4">{t('overview.howTitle')}</h3>
            <div className="space-y-4 text-text-primary text-lg font-medium leading-relaxed">
              <p>{t('overview.howP1')}</p>
              <p>{t('overview.howP2')}</p>
              <p>{t('overview.howP3')}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Summary Cards */}
        <div className="flex justify-center mb-16">
          {summaryCards.map((card, i) => (
            <ScrollReveal key={card.label} delay={i + 1} className="h-full">
              <div className="glass-card p-6 h-full flex flex-col items-center text-center group">
                <div className={`w-14 h-14 rounded-2xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className={`w-7 h-7 ${card.textColor}`} />
                </div>
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  {card.label}
                </span>
                <span className="text-2xl font-bold text-text-primary">
                  {card.value}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
}
