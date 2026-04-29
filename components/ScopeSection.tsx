'use client';
import { Link2, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

export default function ScopeSection() {
  const { lang, t } = useLang();

  const scopeItems = [
    { labelEN: 'Existing Wastewater Collection Area', labelTH: 'พื้นที่รวบรวมน้ำเสียเดิม', descEN: 'The existing factory wastewater collection infrastructure (Ponds 1–4) that feeds into the new treatment system.', descTH: 'โครงสร้างพื้นฐานเดิมสำหรับรวบรวมน้ำเสียจากโรงงาน (บ่อ 1–4) ที่ส่งน้ำเสียเข้าระบบใหม่', statusEN: 'Existing infrastructure', statusTH: 'โครงสร้างเดิม' },
    { labelEN: 'Existing Inlet & Sump Area', labelTH: 'จุดรับน้ำเสียและบ่อพักเดิม', descEN: 'The existing sump tank and inlet structures that collect and channel raw wastewater from the production facility.', descTH: 'บ่อพักและโครงสร้างรับน้ำเสียเดิมที่รวบรวมน้ำเสียจากโรงงานผลิต', statusEN: 'Interface point', statusTH: 'จุดเชื่อมต่อ' },
    { labelEN: 'Tie-in Point from Existing System', labelTH: 'จุดเชื่อมระบบเดิม', descEN: 'The physical connection point where the existing wastewater piping meets the new Equalization Tank inlet. This is the boundary between existing and new scope.', descTH: 'จุดเชื่อมต่อทางกายภาพระหว่างท่อน้ำเสียเดิมกับถังปรับสมดุลใหม่ เป็นขอบเขตระหว่างงานเดิมกับงานใหม่', statusEN: 'Scope boundary', statusTH: 'ขอบเขตงาน' },
  ];

  const newScopeEN = [
    'Equalization Tank (13.0 × 11.0 × 4.0 m)', 'Aeration Tank (5.5 × 6.0 × 4.0 m)',
    'Bio Sedimentation Tank (Ø5.5 × 3.5 m)', 'Holding Tank (13.0 × 7.0 × 3.0 m)',
    'Sludge Holding Tank (2.0 × 2.0 × 2.0 m)', 'All mechanical equipment (pumps, blowers, diffusers)',
    'Piping, valves, and instrumentation', 'Electrical systems and control panel',
    'Site preparation and project management', 'Engineering design and commissioning',
  ];
  const newScopeTH = [
    'ถังปรับสมดุล (13.0 × 11.0 × 4.0 ม.)', 'ถังเติมอากาศ (5.5 × 6.0 × 4.0 ม.)',
    'ถังตกตะกอนชีวภาพ (Ø5.5 × 3.5 ม.)', 'ถังพักน้ำ (13.0 × 7.0 × 3.0 ม.)',
    'ถังเก็บสลัดตะกอน (2.0 × 2.0 × 2.0 ม.)', 'อุปกรณ์เครื่องกลทั้งหมด (ปั๊ม เครื่องเป่าลม หัวจ่ายอากาศ)',
    'ท่อ วาล์ว และเครื่องมือวัด', 'ระบบไฟฟ้าและตู้ควบคุม',
    'เตรียมพื้นที่และบริหารโครงการ', 'ออกแบบวิศวกรรมและส่งมอบ',
  ];
  const newScope = lang === 'th' ? newScopeTH : newScopeEN;

  return (
    <section id="scope" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={Link2} title={t('scope.title')} subtitle={t('scope.subtitle')} badge={t('scope.badge')} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center shadow-sm">
                  <ArrowRightLeft className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">{t('scope.existingTitle')}</h3>
                  <span className="text-sm font-bold text-text-muted">{t('scope.existingSub')}</span>
                </div>
              </div>
              <div className="space-y-5">
                {scopeItems.map((item) => (
                  <div key={item.labelEN} className="p-5 rounded-xl bg-white border-2 border-slate-100 hover:border-slate-300 transition-all shadow-sm">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="font-bold text-base text-text-primary">{lang === 'th' ? item.labelTH : item.labelEN}</h4>
                      <span className="badge bg-slate-200 text-slate-800 text-[11px] font-extrabold shrink-0 px-3 py-1 uppercase tracking-wider">{lang === 'th' ? item.statusTH : item.statusEN}</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary leading-relaxed">{lang === 'th' ? item.descTH : item.descEN}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="glass-card p-6 md:p-10 h-full border-primary/30 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight">{t('scope.newTitle')}</h3>
                  <span className="text-sm font-bold text-text-muted">{t('scope.newSub')}</span>
                </div>
              </div>
              <div className="space-y-3">
                {newScope.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-primary/10 hover:bg-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base font-bold text-text-primary leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
