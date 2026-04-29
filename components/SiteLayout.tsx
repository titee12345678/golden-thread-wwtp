'use client';
import { MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function SiteLayout() {
  const { lang, t } = useLang();

  return (
    <section id="layout" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          icon={MapPin}
          title={t('layout.title')}
          subtitle={t('layout.subtitle')}
          badge={t('layout.badge')}
        />

        {/* SVG Plan Layout - Based on actual engineering drawing */}
        <ScrollReveal>
          <div className="glass-card p-4 md:p-8 overflow-hidden">
            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 600 340"
                className="w-full h-auto min-w-[480px]"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Pond 5 Plan Layout"
              >
                <defs>
                  {/* Water pattern */}
                  <pattern id="waterPattern" patternUnits="userSpaceOnUse" width="8" height="8">
                    <rect width="8" height="8" fill="#DBEAFE" />
                    <circle cx="4" cy="4" r="1" fill="#93C5FD" opacity="0.5" />
                  </pattern>
                  {/* Hatch pattern for surrounding area */}
                  <pattern id="hatchPattern" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                    <rect width="6" height="6" fill="#F8FAFC" />
                    <line x1="0" y1="0" x2="0" y2="6" stroke="#E2E8F0" strokeWidth="0.5" />
                  </pattern>
                  {/* Flow arrow marker */}
                  <marker id="flowArrowBlue" viewBox="0 0 10 8" refX="10" refY="4" markerWidth="8" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#2563EB" opacity="0.7" />
                  </marker>
                  <marker id="flowArrowGreen" viewBox="0 0 10 8" refX="10" refY="4" markerWidth="8" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#059669" opacity="0.7" />
                  </marker>
                  <marker id="flowArrowAmber" viewBox="0 0 10 8" refX="10" refY="4" markerWidth="8" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#D97706" opacity="0.7" />
                  </marker>
                  <marker id="flowArrowTeal" viewBox="0 0 10 8" refX="10" refY="4" markerWidth="8" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#0D9488" opacity="0.7" />
                  </marker>
                </defs>

                {/* Background */}
                <rect x="0" y="0" width="600" height="340" fill="#F8FAFC" rx="8" />

                {/* ===== POND 5 BOUNDARY ===== */}
                {/* Pond 5 outer boundary (26.90 x 13.00 m) - represented proportionally */}
                {/* Using scale: ~18px per meter, offset from (50, 60) */}
                <rect x="50" y="60" width="484" height="234" fill="url(#hatchPattern)" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6,3" rx="4" />

                {/* Pond 5 inner working area */}
                <rect x="65" y="75" width="454" height="204" fill="#F0F9FF" stroke="#CBD5E1" strokeWidth="1" rx="3" />

                {/* ===== TANKS (Based on Plan Layout Page 2) ===== */}

                {/* EQ TANK - Left side (11.0 × ~6.5m area) */}
                <rect x="75" y="125" width="198" height="144" rx="4" fill="url(#waterPattern)" stroke="#2563EB" strokeWidth="2" />
                {/* EQ Tank diffuser dots */}
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => (
                    <circle key={`eq-${row}-${col}`} cx={95 + col * 22} cy={142 + row * 25} r="2.5" fill="#93C5FD" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + (row + col) * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  ))
                )}
                <text x="174" y="205" textAnchor="middle" className="text-[13px] font-bold" fill="#1E40AF">{t('layout.eqTank')}</text>
                <text x="174" y="220" textAnchor="middle" className="text-[9px]" fill="#3B82F6">13.0 × 11.0 × 4.0 m</text>

                {/* AERATION TANK - Center-top (6.0 × 5.5m) */}
                <rect x="283" y="82" width="108" height="99" rx="4" fill="#ECFEFF" stroke="#0891B2" strokeWidth="2" />
                {/* Aeration diffuser dots */}
                {Array.from({ length: 3 }).map((_, row) =>
                  Array.from({ length: 4 }).map((_, col) => (
                    <circle key={`ae-${row}-${col}`} cx={300 + col * 24} cy={100 + row * 28} r="3" fill="#67E8F9" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.9;0.2" dur={`${1.5 + (row + col) * 0.2}s`} repeatCount="indefinite" />
                      <animate attributeName="r" values="2;3.5;2" dur={`${2 + (row + col) * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  ))
                )}
                <text x="337" y="128" textAnchor="middle" className="text-[12px] font-bold" fill="#0E7490">{t('layout.aerationTank')}</text>
                <text x="337" y="142" textAnchor="middle" className="text-[9px]" fill="#0891B2">5.5 × 6.0 × 4.0 m</text>

                {/* BIO SEDIMENTATION TANK - Center (Ø5.5m circle) */}
                <circle cx="337" cy="225" r="46" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                {/* Inner circle (feed well) */}
                <circle cx="337" cy="225" r="18" fill="#A7F3D0" stroke="#10B981" strokeWidth="1" />
                {/* Scraper arms */}
                <line x1="337" y1="225" x2="337" y2="179" stroke="#059669" strokeWidth="1" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" from="0 337 225" to="360 337 225" dur="15s" repeatCount="indefinite" />
                </line>
                <text x="337" y="222" textAnchor="middle" className="text-[11px] font-bold" fill="#065F46">{t('layout.bioSedTank')}</text>
                <text x="337" y="236" textAnchor="middle" className="text-[9px]" fill="#059669">Ø5.50 × 3.5 m</text>

                {/* HOLDING TANK - Right side (7.0 × ~6.0m) */}
                <rect x="401" y="82" width="108" height="144" rx="4" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2" />
                <text x="455" y="155" textAnchor="middle" className="text-[12px] font-bold" fill="#115E59">{t('layout.holdingTank')}</text>
                <text x="455" y="170" textAnchor="middle" className="text-[9px]" fill="#0D9488">13.0 × 7.0 × 3.0 m</text>

                {/* SLUDGE HOLDING TANK - Bottom-right (2.0 × 2.0m) */}
                <rect x="479" y="237" width="30" height="30" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <text x="494" y="278" textAnchor="middle" className="text-[8px] font-bold" fill="#92400E">{t('layout.sludgeTank')}</text>
                <text x="494" y="288" textAnchor="middle" className="text-[7px]" fill="#D97706">2×2×2m</text>

                {/* ===== FLOW ARROWS ===== */}

                {/* Wastewater IN → EQ Tank */}
                <line x1="15" y1="195" x2="72" y2="195" stroke="#2563EB" strokeWidth="2" markerEnd="url(#flowArrowBlue)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* EQ Tank → Aeration Tank */}
                <path d="M 273 145 L 280 145" stroke="#0891B2" strokeWidth="2" markerEnd="url(#flowArrowBlue)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>

                {/* Aeration Tank → Bio Sed Tank (Pointing DOWN) */}
                <line x1="337" y1="175" x2="337" y2="185" stroke="#10B981" strokeWidth="2" markerEnd="url(#flowArrowGreen)" strokeDasharray="4,2">
                  <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* Bio Sed Tank → Holding Tank */}
                <path d="M 380 205 L 398 170" stroke="#0D9488" strokeWidth="2" markerEnd="url(#flowArrowTeal)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>

                {/* Holding Tank → Effluent OUT */}
                <line x1="509" y1="155" x2="580" y2="155" stroke="#059669" strokeWidth="2" markerEnd="url(#flowArrowGreen)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* Bio Sed Tank → Sludge Holding Tank */}
                <path d="M 370 255 L 476 255" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#flowArrowAmber)" strokeDasharray="4,3">
                  <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
                </path>

                {/* ===== LABELS ===== */}

                {/* Waste Water IN label */}
                <text x="10" y="183" className="text-[10px] font-bold" fill="#2563EB">{t('layout.wastewaterIn')}</text>
                <text x="10" y="193" className="text-[8px]" fill="#64748B">→</text>

                {/* Effluent OUT label */}
                <text x="550" y="143" className="text-[10px] font-bold" fill="#059669">{t('layout.effluentOut')}</text>
                <text x="550" y="153" className="text-[8px]" fill="#64748B">→</text>

                {/* Pond 5 label */}
                <text x="535" y="78" className="text-[14px] font-bold" fill="#475569">{t('layout.pond5')}</text>

                {/* ===== DIMENSION LINES ===== */}

                {/* Top: 26.90m total width */}
                <line x1="50" y1="48" x2="534" y2="48" stroke="#94A3B8" strokeWidth="0.8" />
                <line x1="50" y1="44" x2="50" y2="52" stroke="#94A3B8" strokeWidth="0.8" />
                <line x1="534" y1="44" x2="534" y2="52" stroke="#94A3B8" strokeWidth="0.8" />
                <text x="292" y="45" textAnchor="middle" className="text-[9px]" fill="#94A3B8">26.90 m</text>

                {/* Top sub-dimensions */}
                <line x1="65" y1="56" x2="273" y2="56" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3,3" />
                <text x="169" y="53" textAnchor="middle" className="text-[8px]" fill="#64748B">11.00 m</text>

                <line x1="283" y1="56" x2="391" y2="56" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3,3" />
                <text x="337" y="53" textAnchor="middle" className="text-[8px]" fill="#64748B">6.00 m</text>

                <line x1="401" y1="56" x2="509" y2="56" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3,3" />
                <text x="455" y="53" textAnchor="middle" className="text-[8px]" fill="#64748B">7.00 m</text>

                <line x1="509" y1="56" x2="534" y2="56" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3,3" />
                <text x="521" y="53" textAnchor="middle" className="text-[8px]" fill="#64748B">2.00 m</text>

                {/* Right: 13.00m total height */}
                <line x1="548" y1="60" x2="548" y2="294" stroke="#94A3B8" strokeWidth="0.8" />
                <line x1="544" y1="60" x2="552" y2="60" stroke="#94A3B8" strokeWidth="0.8" />
                <line x1="544" y1="294" x2="552" y2="294" stroke="#94A3B8" strokeWidth="0.8" />
                <text x="560" y="180" textAnchor="middle" className="text-[9px]" fill="#94A3B8" transform="rotate(90, 560, 180)">13.00 m</text>

                {/* ===== LEGEND ===== */}
                <rect x="65" y="300" width="10" height="10" rx="2" fill="url(#waterPattern)" stroke="#2563EB" strokeWidth="1" />
                <text x="80" y="309" className="text-[8px]" fill="#64748B">{t('layout.eqTank')}</text>

                <rect x="155" y="300" width="10" height="10" rx="2" fill="#ECFEFF" stroke="#0891B2" strokeWidth="1" />
                <text x="170" y="309" className="text-[8px]" fill="#64748B">{t('layout.aerationTank')}</text>

                <circle cx="265" cy="305" r="5" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
                <text x="275" y="309" className="text-[8px]" fill="#64748B">{t('layout.bioSedTank')}</text>

                <rect x="360" y="300" width="10" height="10" rx="2" fill="#F0FDFA" stroke="#0D9488" strokeWidth="1" />
                <text x="375" y="309" className="text-[8px]" fill="#64748B">{t('layout.holdingTank')}</text>

                <rect x="455" y="300" width="10" height="10" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
                <text x="470" y="309" className="text-[8px]" fill="#64748B">{t('layout.sludgeTank')}</text>
              </svg>
            </div>
          </div>
        </ScrollReveal>

        {/* Layout Page 1 Engineering Drawing */}
        <ScrollReveal className="mt-8">
          <div className="glass-card p-4 md:p-6">
            <h3 className="font-semibold text-text-primary mb-4 text-sm">
              {lang === 'th' ? 'แบบผังพื้นที่ระบบบำบัด' : 'Treatment System Layout Drawing'} — {lang === 'th' ? 'แบบวิศวกรรม' : 'Engineering Drawing'}
            </h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="/images/layout-page1.png"
                alt="Layout engineering drawing page 1"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Flow Diagram Engineering Drawing */}
        <ScrollReveal className="mt-6">
          <div className="glass-card p-4 md:p-6">
            <h3 className="font-semibold text-text-primary mb-4 text-sm">
              {lang === 'th' ? 'แผนผังการไหลของระบบ' : 'System Flow Diagram'} — {lang === 'th' ? 'แบบวิศวกรรม' : 'Engineering Drawing'}
            </h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="/images/flow-diagram-engineering.png"
                alt="System flow diagram engineering drawing"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Layout Plan Engineering Drawing */}
        <ScrollReveal className="mt-6">
          <div className="glass-card p-4 md:p-6">
            <h3 className="font-semibold text-text-primary mb-4 text-sm">
              {t('layout.badge')} — {lang === 'th' ? 'แบบวิศวกรรม' : 'Engineering Drawing'}
            </h3>
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src="/images/layout-plan.png"
                alt="Engineering layout plan"
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
