'use client';
import { Wrench, Gauge, Wind, CircleDot, RotateCcw, ArrowUpFromLine, Activity, Cpu, Cable, GitBranch } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const equipmentData = [
  { icon: ArrowUpFromLine, nameEN: 'EQ Tank Submersible Pump', nameTH: 'ปั๊มจุ่มถังปรับสมดุล (EQ Tank Submersible Pump)', qty: '2 Sets', capacity: '21 m³/h', locationEN: 'Equalization Tank', locationTH: 'ถังปรับสมดุล (Equalization Tank)', locationColor: 'bg-blue-100 text-blue-700', functionEN: 'Transfers equalized wastewater from the EQ Tank to the next process stage.', functionTH: 'สูบน้ำเสียจากถังปรับสมดุล (EQ Tank) ไปยังกระบวนการถัดไป', processEN: 'Equalization', processTH: 'ปรับสมดุล' },
  { icon: Wind, nameEN: 'Air Blower (Root Blower)', nameTH: 'เครื่องเป่าลม (Root Blower)', qty: '2 Sets', capacity: '12 m³/min', locationEN: 'Blower Platform', locationTH: 'แท่นเครื่องเป่าลม (Blower Platform)', locationColor: 'bg-cyan-100 text-cyan-700', functionEN: 'Produces and supplies air to Air Diffusers in both EQ Tank and Aeration Tank.', functionTH: 'ผลิตและส่งอากาศไปยังหัวจ่ายอากาศ (Air Diffuser) ในถังปรับสมดุล (EQ Tank) และถังเติมอากาศ (Aeration Tank)', processEN: 'Aeration', processTH: 'เติมอากาศ' },
  { icon: CircleDot, nameEN: 'Air Diffuser 12" (EQ Tank)', nameTH: 'หัวจ่ายอากาศ 12" (Air Diffuser) — ถังปรับสมดุล (EQ Tank)', qty: '95 Sets', capacity: '12 inch', locationEN: 'Bottom of EQ Tank', locationTH: 'ก้นถังปรับสมดุล (EQ Tank)', locationColor: 'bg-blue-100 text-blue-700', functionEN: 'Distributes air for agitation, preventing sedimentation and reducing odors.', functionTH: 'กระจายอากาศเพื่อกวนน้ำ ลดการตกตะกอน และช่วยลดกลิ่น', processEN: 'Equalization', processTH: 'ปรับสมดุล' },
  { icon: CircleDot, nameEN: 'Air Diffuser 12" (Aeration)', nameTH: 'หัวจ่ายอากาศ 12" (Air Diffuser) — ถังเติมอากาศ (Aeration Tank)', qty: '35 Sets', capacity: '12 inch', locationEN: 'Bottom of Aeration Tank', locationTH: 'ก้นถังเติมอากาศ (Aeration Tank)', locationColor: 'bg-cyan-100 text-cyan-700', functionEN: 'Supplies oxygen for microorganisms to break down organic matter.', functionTH: 'เติมออกซิเจนให้จุลินทรีย์ย่อยสลายสารอินทรีย์', processEN: 'Aeration', processTH: 'เติมอากาศ' },
  { icon: RotateCcw, nameEN: 'Return & Excess Centrifugal Pump', nameTH: 'ปั๊มหมุนเวียนและระบายตะกอน (Centrifugal Pump)', qty: '2 Sets', capacity: '12 m³/h', locationEN: 'Sludge Return Line', locationTH: 'ท่อส่งตะกอนกลับ (Sludge Return Line)', locationColor: 'bg-emerald-100 text-emerald-700', functionEN: 'Returns activated sludge to the aeration tank or removes excess sludge for disposal.', functionTH: 'ส่งตะกอนกลับเข้าระบบหรือระบายตะกอนส่วนเกิน', processEN: 'Sedimentation', processTH: 'ตกตะกอน' },
  { icon: Gauge, nameEN: 'Bio Sedimentation Tank', nameTH: 'ถังตกตะกอนชีวภาพ (Bio Sedimentation Tank)', qty: '1 Set', capacity: 'Ø5.5 × 3.5 m', locationEN: 'Pond 5 — Center', locationTH: 'บ่อ 5 — กลาง', locationColor: 'bg-emerald-100 text-emerald-700', functionEN: 'Circular clarifier separating clear water from biological sludge (SS400 epoxy coating).', functionTH: 'แยกน้ำใสกับตะกอนชีวภาพ (SS400 epoxy coating)', processEN: 'Sedimentation', processTH: 'ตกตะกอน' },
  { icon: ArrowUpFromLine, nameEN: 'Sludge Transfer Submersible Pump', nameTH: 'ปั๊มจุ่มถ่ายตะกอน (Sludge Transfer Pump)', qty: '2 Sets', capacity: '21 m³/h', locationEN: 'Sludge Holding Tank', locationTH: 'ถังเก็บตะกอน (Sludge Holding Tank)', locationColor: 'bg-amber-100 text-amber-700', functionEN: 'Transfers collected sludge to the dewatering system for disposal.', functionTH: 'สูบตะกอนไปยังระบบรีดน้ำ (Dewatering)', processEN: 'Sludge Handling', processTH: 'จัดการตะกอน' },
  { icon: Activity, nameEN: 'Flow Meter', nameTH: 'มิเตอร์วัดอัตราการไหล (Flow Meter)', qty: '1 Set', capacity: 'Electromagnetic', locationEN: 'Main Flow Line', locationTH: 'ท่อน้ำเข้าหลัก (Main Flow Line)', locationColor: 'bg-violet-100 text-violet-700', functionEN: 'Measures real-time flow rate for controlling treatment capacity at 500 m³/day.', functionTH: 'วัดอัตราการไหล เพื่อควบคุมกำลังการบำบัด 500 m³/day', processEN: 'Monitoring', processTH: 'ตรวจวัด' },
  { icon: GitBranch, nameEN: 'Piping & Valves', nameTH: 'ท่อและวาล์ว (Piping & Valves)', qty: '1 Set', capacity: 'PVC / HDPE / SS', locationEN: 'Throughout System', locationTH: 'ทั่วทั้งระบบ', locationColor: 'bg-slate-100 text-slate-700', functionEN: 'Complete piping network connecting wastewater, treated water, sludge, and air lines.', functionTH: 'เชื่อมต่อเส้นทางน้ำเสีย น้ำบำบัด ตะกอน และอากาศ', processEN: 'All Processes', processTH: 'ทุกกระบวนการ' },
  { icon: Cpu, nameEN: 'Control Panel', nameTH: 'ตู้ควบคุม (Control Panel)', qty: '1 Set', capacity: 'PLC-based', locationEN: 'Control Room', locationTH: 'ห้องควบคุม (Control Room)', locationColor: 'bg-rose-100 text-rose-700', functionEN: 'Centralized system for automated control of pumps, blowers, and electrical systems.', functionTH: 'ควบคุมการทำงานของปั๊ม เครื่องเป่าลม (Blower) และระบบไฟฟ้า', processEN: 'Control', processTH: 'ควบคุม' },
  { icon: Cable, nameEN: 'Equipment & Cable Wire', nameTH: 'สายไฟและอุปกรณ์ไฟฟ้า (Equipment & Cable Wire)', qty: '1 Set', capacity: 'Complete system', locationEN: 'All Equipment', locationTH: 'อุปกรณ์ทั้งหมด', locationColor: 'bg-gray-100 text-gray-700', functionEN: 'Power distribution and control cables connecting all equipment.', functionTH: 'ระบบจ่ายไฟและสายควบคุมไปยังอุปกรณ์ทั้งหมด', processEN: 'Electrical', processTH: 'ไฟฟ้า' },
  { icon: CircleDot, nameEN: 'Microorganism & Molasses', nameTH: 'จุลินทรีย์และกากน้ำตาล (Microorganism & Molasses)', qty: '1 Set', capacity: 'Biological', locationEN: 'Aeration Tank', locationTH: 'ถังเติมอากาศ (Aeration Tank)', locationColor: 'bg-green-100 text-green-700', functionEN: 'Seed microorganisms and carbon source to start and boost biological treatment efficiency.', functionTH: 'ใช้ช่วยเริ่มต้นและเสริมประสิทธิภาพระบบชีวภาพ', processEN: 'Biological', processTH: 'ชีวภาพ' },
  { icon: Activity, nameEN: 'Lab Analysis of Water', nameTH: 'วิเคราะห์คุณภาพน้ำ (Lab Analysis)', qty: '1 Job', capacity: 'Lab / On-site', locationEN: 'Lab / On-site', locationTH: 'ห้องปฏิบัติการ / หน้างาน', locationColor: 'bg-indigo-100 text-indigo-700', functionEN: 'Water quality testing to evaluate system performance and regulatory compliance.', functionTH: 'ตรวจสอบคุณภาพน้ำเพื่อประเมินประสิทธิภาพระบบ', processEN: 'QA/QC', processTH: 'ตรวจสอบคุณภาพ' },
];

export default function EquipmentMapping() {
  const { lang, t } = useLang();

  return (
    <section id="equipment" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Wrench}
          title={t('equip.title')}
          subtitle={t('equip.subtitle')}
          badge={t('equip.badge')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {equipmentData.map((item, i) => (
            <ScrollReveal key={item.nameEN} delay={Math.min(i + 1, 5)}>
              <div className="bg-white rounded-2xl border-4 border-primary p-6 h-full shadow-md hover:shadow-lg transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-black text-text-primary text-xl leading-tight">
                        {lang === 'th' ? item.nameTH : item.nameEN}
                      </h3>
                      <span className={`badge text-[12px] font-black shrink-0 px-3 py-1.5 shadow-sm ${item.locationColor} border border-current/20`}>
                        {lang === 'th' ? item.locationTH : item.locationEN}
                      </span>
                    </div>
                    <div className="flex gap-6 mb-5">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Gauge className="w-5 h-5 text-primary" />
                        <span className="text-base text-text-primary font-black">{item.qty}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Activity className="w-5 h-5 text-accent" />
                        <span className="text-base text-text-primary font-black">{item.capacity}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-base font-bold text-text-primary leading-relaxed">
                        {lang === 'th' ? item.functionTH : item.functionEN}
                      </p>
                    </div>
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
