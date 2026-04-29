'use client';
import { Eye } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function VisualExplanation() {
  const { lang, t } = useLang();

  const th = lang === 'th';

  return (
    <section id="visuals" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={Eye} title={t('visual.title')} subtitle={t('visual.subtitle')} badge={t('visual.badge')} />

        {/* Simplified Process Schematic */}
        <ScrollReveal>
          <div className="glass-card p-4 md:p-8">
            <h3 className="font-semibold text-text-primary mb-6 text-center">{t('visual.processSchematic')}</h3>
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 900 320" className="w-full h-auto min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="schematicArrow" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#64748B" />
                  </marker>
                  <marker id="sludgeArrow" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#D97706" />
                  </marker>
                  <marker id="returnArrow" viewBox="0 0 10 8" refX="9" refY="4" markerWidth="7" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 4 L 0 8 z" fill="#10B981" />
                  </marker>
                </defs>

                {/* Background */}
                <rect width="900" height="320" fill="#FAFBFC" rx="8" />

                {/* ===== INFLUENT ===== */}
                <rect x="20" y="90" width="90" height="80" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
                <text x="65" y="125" textAnchor="middle" className="text-[11px] font-bold" fill="#92400E">{th ? 'น้ำเสีย' : 'Influent'}</text>
                <text x="65" y="142" textAnchor="middle" className="text-[9px]" fill="#B45309">500 m³/d</text>

                {/* Arrow: Influent → EQ */}
                <line x1="110" y1="130" x2="150" y2="130" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== EQ TANK ===== */}
                <rect x="155" y="75" width="130" height="110" rx="8" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                <text x="220" y="118" textAnchor="middle" className="text-[12px] font-bold" fill="#1E40AF">{th ? 'ถังปรับเสมอ' : 'EQ Tank'}</text>
                <text x="220" y="135" textAnchor="middle" className="text-[9px]" fill="#3B82F6">13×11×4 m</text>
                <text x="220" y="148" textAnchor="middle" className="text-[8px]" fill="#64748B">95× Diffuser</text>
                {/* Bubble animation */}
                {[185, 205, 225, 245].map((cx, i) => (
                  <circle key={`eq-b-${i}`} cx={cx} cy={155} r="3" fill="#93C5FD" opacity="0.5">
                    <animate attributeName="cy" values="160;100;160" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}

                {/* Arrow: EQ → Aeration */}
                <line x1="285" y1="130" x2="325" y2="130" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== AERATION TANK ===== */}
                <rect x="330" y="75" width="130" height="110" rx="8" fill="#ECFEFF" stroke="#0891B2" strokeWidth="2" />
                <text x="395" y="118" textAnchor="middle" className="text-[12px] font-bold" fill="#0E7490">{th ? 'ถังเติมอากาศ' : 'Aeration'}</text>
                <text x="395" y="135" textAnchor="middle" className="text-[9px]" fill="#0891B2">5.5×6×4 m</text>
                <text x="395" y="148" textAnchor="middle" className="text-[8px]" fill="#64748B">35× Diffuser</text>
                {/* Air blower label */}
                <rect x="355" y="35" width="80" height="28" rx="6" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1" />
                <text x="395" y="53" textAnchor="middle" className="text-[9px] font-semibold" fill="#0369A1">{th ? 'เครื่องเป่าลม' : 'Air Blower'}</text>
                <line x1="395" y1="63" x2="395" y2="75" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3,2" />

                {/* Arrow: Aeration → Bio Sed */}
                <line x1="460" y1="130" x2="500" y2="130" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== BIO SED TANK ===== */}
                <circle cx="560" cy="130" r="55" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <circle cx="560" cy="130" r="20" fill="#A7F3D0" stroke="#10B981" strokeWidth="1" />
                <text x="560" y="125" textAnchor="middle" className="text-[11px] font-bold" fill="#065F46">{th ? 'ถังตกตะกอน' : 'Bio Sed'}</text>
                <text x="560" y="140" textAnchor="middle" className="text-[9px]" fill="#059669">Ø5.5×3.5 m</text>
                {/* Scraper arm animation */}
                <line x1="560" y1="130" x2="560" y2="80" stroke="#059669" strokeWidth="1" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0 560 130" to="360 560 130" dur="12s" repeatCount="indefinite" />
                </line>

                {/* Arrow: Bio Sed → Holding */}
                <line x1="615" y1="115" x2="660" y2="115" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== HOLDING TANK ===== */}
                <rect x="665" y="75" width="110" height="100" rx="8" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
                <text x="720" y="118" textAnchor="middle" className="text-[12px] font-bold" fill="#5B21B6">{th ? 'ถังพักน้ำ' : 'Holding'}</text>
                <text x="720" y="135" textAnchor="middle" className="text-[9px]" fill="#7C3AED">13×7×3 m</text>

                {/* Arrow: Holding → Effluent */}
                <line x1="775" y1="125" x2="815" y2="125" stroke="#059669" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== EFFLUENT ===== */}
                <rect x="820" y="90" width="65" height="70" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <text x="852" y="122" textAnchor="middle" className="text-[10px] font-bold" fill="#065F46">{th ? 'น้ำออก' : 'Effluent'}</text>
                <text x="852" y="137" textAnchor="middle" className="text-[8px]" fill="#059669">✓</text>

                {/* ===== SLUDGE LINE ===== */}

                {/* Bio Sed → Sludge Tank */}
                <line x1="560" y1="185" x2="560" y2="240" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#sludgeArrow)" strokeDasharray="4,3">
                  <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
                </line>

                {/* Sludge Holding Tank */}
                <rect x="510" y="245" width="100" height="55" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <text x="560" y="270" textAnchor="middle" className="text-[10px] font-bold" fill="#92400E">{th ? 'ถังเก็บสลัดตะกอน' : 'Sludge Tank'}</text>
                <text x="560" y="285" textAnchor="middle" className="text-[8px]" fill="#D97706">2×2×2 m</text>

                {/* Sludge Tank → Dewatering */}
                <line x1="610" y1="272" x2="660" y2="272" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#sludgeArrow)" strokeDasharray="4,3">
                  <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
                </line>

                {/* Dewatering */}
                <rect x="665" y="250" width="90" height="45" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1" />
                <text x="710" y="270" textAnchor="middle" className="text-[9px] font-bold" fill="#991B1B">{th ? 'รีดน้ำสลัดตะกอน' : 'Dewatering'}</text>
                <text x="710" y="283" textAnchor="middle" className="text-[8px]" fill="#DC2626">{th ? '→ กำจัด' : '→ Disposal'}</text>

                {/* ===== RETURN SLUDGE LINE (RAS) ===== */}
                <path d="M 530 155 C 520 200, 430 210, 395 185" stroke="#10B981" strokeWidth="1.5" fill="none" markerEnd="url(#returnArrow)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2.5s" repeatCount="indefinite" />
                </path>
                <text x="450" y="210" textAnchor="middle" className="text-[8px] font-semibold" fill="#059669">{th ? 'สลัดตะกอนหมุนเวียน' : 'Return Sludge (RAS)'}</text>
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
