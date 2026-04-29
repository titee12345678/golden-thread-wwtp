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
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Eye} title={t('visual.title')} subtitle={t('visual.subtitle')} badge={t('visual.badge')} />

        {/* Simplified Process Schematic */}
        <ScrollReveal>
          <div className="glass-card p-4 md:p-8">
            <h3 className="font-semibold text-text-primary mb-6 text-center">{t('visual.processSchematic')}</h3>
            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 1150 340" className="w-full h-auto min-w-[800px]" xmlns="http://www.w3.org/2000/svg">
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
                <rect width="1150" height="340" fill="#FAFBFC" rx="8" />

                {/* ===== ① น้ำเสียเข้าระบบ ===== */}
                <rect x="15" y="90" width="100" height="75" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
                <path d="M 20 145 Q 40 140, 65 145 Q 90 150, 110 145" fill="none" stroke="#D97706" strokeWidth="0.8" opacity="0.4">
                  <animate attributeName="d" values="M 20 145 Q 40 140, 65 145 Q 90 150, 110 145;M 20 145 Q 40 150, 65 145 Q 90 140, 110 145;M 20 145 Q 40 140, 65 145 Q 90 150, 110 145" dur="2s" repeatCount="indefinite" />
                </path>
                <text x="65" y="122" textAnchor="middle" className="text-[10px] font-bold" fill="#92400E">{th ? 'น้ำเสีย (Influent)' : 'Influent'}</text>
                <text x="65" y="138" textAnchor="middle" className="text-[8px]" fill="#B45309">500 m³/d</text>
                <circle cx="25" cy="85" r="12" fill="#D97706" />
                <text x="25" y="89" textAnchor="middle" className="text-[10px] font-bold" fill="white">1</text>

                {/* Arrow → Sump */}
                <line x1="115" y1="127" x2="150" y2="127" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#60A5FA" opacity="0.7"><animate attributeName="cx" values="115;150" dur="1.5s" repeatCount="indefinite" /><animate attributeName="cy" values="127;127" dur="1.5s" repeatCount="indefinite" /></circle>

                {/* ===== ② Sump Tank ===== */}
                <rect x="150" y="82" width="130" height="90" rx="8" fill="#F5F5F4" stroke="#78716C" strokeWidth="2" />
                <rect x="155" y="140" width="120" height="27" rx="3" fill="#A8A29E" opacity="0.2">
                  <animate attributeName="height" values="27;22;27" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="y" values="140;145;140" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="215" y="118" textAnchor="middle" className="text-[10px] font-bold" fill="#44403C">{th ? 'จุดรับน้ำเสีย (Sump Tank)' : 'Sump Tank'}</text>
                <text x="215" y="133" textAnchor="middle" className="text-[8px]" fill="#78716C">{th ? 'โครงสร้างเดิม (Existing)' : 'Existing'}</text>
                <circle cx="160" cy="77" r="12" fill="#78716C" />
                <text x="160" y="81" textAnchor="middle" className="text-[10px] font-bold" fill="white">2</text>

                {/* Arrow → EQ */}
                <line x1="280" y1="127" x2="315" y2="127" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                <circle r="3" fill="#60A5FA" opacity="0.7"><animate attributeName="cx" values="280;315" dur="1.5s" repeatCount="indefinite" /><animate attributeName="cy" values="127;127" dur="1.5s" repeatCount="indefinite" /></circle>

                {/* ===== ③ EQ Tank ===== */}
                <rect x="315" y="72" width="140" height="110" rx="8" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                <text x="385" y="112" textAnchor="middle" className="text-[11px] font-bold" fill="#1E40AF">{th ? 'ถังปรับสมดุล (EQ Tank)' : 'EQ Tank'}</text>
                <text x="385" y="128" textAnchor="middle" className="text-[8px]" fill="#3B82F6">13×11×4 m</text>
                <text x="385" y="142" textAnchor="middle" className="text-[7px]" fill="#64748B">95× Diffuser | 2× Pump</text>
                <circle cx="325" cy="67" r="12" fill="#2563EB" />
                <text x="325" y="71" textAnchor="middle" className="text-[10px] font-bold" fill="white">3</text>
                {[345, 365, 385, 405, 425].map((cx, i) => (
                  <circle key={`eq-b-${i}`} cx={cx} cy={155} r="3" fill="#93C5FD" opacity="0.5">
                    <animate attributeName="cy" values="160;95;160" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}

                {/* Arrow → Aeration */}
                <line x1="455" y1="127" x2="490" y2="127" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== ④ Aeration Tank ===== */}
                <rect x="490" y="72" width="140" height="110" rx="8" fill="#ECFEFF" stroke="#0891B2" strokeWidth="2" />
                {[510, 530, 550, 570, 590].map((cx, i) => (
                  <circle key={`ae-b-${i}`} cx={cx} cy={160} r="2.5" fill="#67E8F9" opacity="0.6">
                    <animate attributeName="cy" values="165;90;165" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.9;0" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
                    <animate attributeName="r" values="2;4;2" dur={`${1.8 + i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                {[{x:515,y:95},{x:535,y:100},{x:555,y:92},{x:575,y:98},{x:595,y:94},{x:525,y:150},{x:545,y:155},{x:565,y:148},{x:585,y:153}].map((p, i) => (
                  <circle key={`mo-${i}`} cx={p.x} cy={p.y} r="1.8" fill="#F59E0B" opacity="0.6">
                    <animate attributeName="cx" values={`${p.x};${p.x + (i%2===0?8:-8)};${p.x}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                    <animate attributeName="cy" values={`${p.y};${p.y + (i%2===0?-6:6)};${p.y}`} dur={`${2.5 + i * 0.2}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                <text x="560" y="112" textAnchor="middle" className="text-[11px] font-bold" fill="#0E7490">{th ? 'ถังเติมอากาศ (Aeration)' : 'Aeration'}</text>
                <text x="560" y="128" textAnchor="middle" className="text-[8px]" fill="#0891B2">5.5×6×4 m</text>
                <text x="560" y="142" textAnchor="middle" className="text-[7px]" fill="#64748B">35× Diffuser | 2× Blower</text>
                <circle cx="500" cy="67" r="12" fill="#0891B2" />
                <text x="500" y="71" textAnchor="middle" className="text-[10px] font-bold" fill="white">4</text>
                <rect x="505" y="32" width="110" height="26" rx="6" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1" />
                <text x="560" y="49" textAnchor="middle" className="text-[8px] font-semibold" fill="#0369A1">{th ? 'เครื่องเป่าลม (Air Blower)' : 'Air Blower'}</text>
                <line x1="560" y1="58" x2="560" y2="72" stroke="#0EA5E9" strokeWidth="1.5" strokeDasharray="3,2" />

                {/* Arrow → Bio Sed */}
                <line x1="630" y1="127" x2="665" y2="127" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== ⑤ Bio Sed Tank ===== */}
                <circle cx="735" cy="127" r="58" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                {[{x:715,d:3},{x:725,d:2.5},{x:735,d:3.5},{x:745,d:2.8},{x:755,d:3.2}].map((p, i) => (
                  <circle key={`sed-${i}`} cx={p.x} cy={90} r="2" fill="#92400E" opacity="0.4">
                    <animate attributeName="cy" values={`${90+i*3};${160+i*2};${90+i*3}`} dur={`${p.d}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur={`${p.d}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                <circle cx="735" cy="127" r="18" fill="#A7F3D0" stroke="#10B981" strokeWidth="1" />
                <text x="735" y="122" textAnchor="middle" className="text-[10px] font-bold" fill="#065F46">{th ? 'ถังตกตะกอน (Bio Sed)' : 'Bio Sed'}</text>
                <text x="735" y="137" textAnchor="middle" className="text-[8px]" fill="#059669">Ø5.5×3.5 m</text>
                <circle cx="687" cy="80" r="12" fill="#059669" />
                <text x="687" y="84" textAnchor="middle" className="text-[10px] font-bold" fill="white">5</text>
                <line x1="735" y1="127" x2="735" y2="75" stroke="#059669" strokeWidth="1" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" from="0 735 127" to="360 735 127" dur="12s" repeatCount="indefinite" />
                </line>

                {/* Arrow → Holding */}
                <line x1="793" y1="112" x2="825" y2="112" stroke="#64748B" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== ⑥ Holding Tank ===== */}
                <rect x="825" y="72" width="120" height="100" rx="8" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2" />
                <rect x="830" y="140" width="110" height="27" rx="3" fill="#5EEAD4" opacity="0.3">
                  <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="885" y="115" textAnchor="middle" className="text-[11px] font-bold" fill="#115E59">{th ? 'ถังพักน้ำ (Holding)' : 'Holding'}</text>
                <text x="885" y="132" textAnchor="middle" className="text-[8px]" fill="#0D9488">13×7×3 m</text>
                <circle cx="833" cy="67" r="12" fill="#0D9488" />
                <text x="833" y="71" textAnchor="middle" className="text-[10px] font-bold" fill="white">6</text>

                {/* Arrow → Effluent */}
                <line x1="945" y1="122" x2="980" y2="122" stroke="#059669" strokeWidth="2" markerEnd="url(#schematicArrow)" strokeDasharray="6,3">
                  <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>

                {/* ===== น้ำออก (Effluent) ===== */}
                <rect x="980" y="90" width="90" height="65" rx="8" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
                <text x="1025" y="119" textAnchor="middle" className="text-[10px] font-bold" fill="#065F46">{th ? 'น้ำออก (Effluent)' : 'Effluent'}</text>
                <text x="1025" y="134" textAnchor="middle" className="text-[10px]" fill="#059669">✓</text>

                {/* ===== SLUDGE LINE ===== */}

                {/* Bio Sed → Sludge Tank */}
                <line x1="735" y1="185" x2="735" y2="240" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#sludgeArrow)" strokeDasharray="4,3">
                  <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
                </line>

                {/* ===== ⑦ Sludge Holding Tank ===== */}
                <rect x="665" y="245" width="140" height="55" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
                <text x="735" y="268" textAnchor="middle" className="text-[9px] font-bold" fill="#92400E">{th ? 'ถังเก็บตะกอน (Sludge Tank)' : 'Sludge Tank'}</text>
                <text x="735" y="283" textAnchor="middle" className="text-[8px]" fill="#D97706">2×2×2 m</text>

                {/* Sludge Tank → Dewatering */}
                <line x1="805" y1="272" x2="840" y2="272" stroke="#D97706" strokeWidth="1.5" markerEnd="url(#sludgeArrow)" strokeDasharray="4,3">
                  <animate attributeName="stroke-dashoffset" from="14" to="0" dur="2s" repeatCount="indefinite" />
                </line>

                {/* ===== ⑧ Dewatering ===== */}
                <rect x="840" y="250" width="140" height="45" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1" />
                <text x="910" y="270" textAnchor="middle" className="text-[9px] font-bold" fill="#991B1B">{th ? 'รีดน้ำตะกอน (Dewatering)' : 'Dewatering'}</text>
                <text x="910" y="283" textAnchor="middle" className="text-[8px]" fill="#DC2626">{th ? '→ กำจัด (Disposal)' : '→ Disposal'}</text>

                {/* ===== RETURN SLUDGE LINE (RAS) ===== */}
                <path d="M 695 152 C 675 200, 595 210, 560 182" stroke="#10B981" strokeWidth="1.5" fill="none" markerEnd="url(#returnArrow)" strokeDasharray="5,3">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2.5s" repeatCount="indefinite" />
                </path>
                <text x="625" y="210" textAnchor="middle" className="text-[8px] font-semibold" fill="#059669">{th ? 'ตะกอนหมุนเวียน (RAS)' : 'Return Sludge (RAS)'}</text>
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
