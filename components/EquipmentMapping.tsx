'use client';
import { Wrench, Gauge, Wind, CircleDot, RotateCcw, ArrowUpFromLine, Activity, Cpu, Cable, GitBranch } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const equipmentData = [
  { icon: ArrowUpFromLine, nameEN: 'Submersible Pump', nameTH: 'ปั๊มจุ่ม', qty: '2 Sets', capacity: '21 m³/h', locationEN: 'Equalization Tank', locationTH: 'ถังปรับเสมอ', locationColor: 'bg-blue-100 text-blue-700', functionEN: 'Transfers equalized wastewater from the EQ Tank to the Aeration Tank for biological treatment.', functionTH: 'สูบน้ำเสียจากถังปรับเสมอไปยังถังเติมอากาศเพื่อบำบัดทางชีวภาพ' },
  { icon: Wind, nameEN: 'Air Blower (Root Blower)', nameTH: 'เครื่องเป่าลม (Root Blower)', qty: '2 Sets', capacity: '12 m³/min', locationEN: 'Blower Room', locationTH: 'ห้องเครื่องเป่า', locationColor: 'bg-cyan-100 text-cyan-700', functionEN: 'Supplies high-volume compressed air to diffusers in both EQ Tank and Aeration Tank for oxygen transfer.', functionTH: 'จ่ายอากาศอัดปริมาณสูงไปยังหัวจ่ายอากาศในถังปรับเสมอและถังเติมอากาศ' },
  { icon: CircleDot, nameEN: 'Air Diffuser 12" (EQ Tank)', nameTH: 'หัวจ่ายอากาศ 12" (ถังปรับเสมอ)', qty: '95 Sets', capacity: 'Fine bubble', locationEN: 'EQ Tank Bottom', locationTH: 'ก้นถังปรับเสมอ', locationColor: 'bg-blue-100 text-blue-700', functionEN: 'Distributes air bubbles at the tank bottom for mixing and pre-aeration of incoming wastewater.', functionTH: 'กระจายฟองอากาศที่ก้นถังเพื่อผสมและเติมอากาศเบื้องต้นให้น้ำเสีย' },
  { icon: CircleDot, nameEN: 'Air Diffuser 12" (Aeration)', nameTH: 'หัวจ่ายอากาศ 12" (ถังเติมอากาศ)', qty: '35 Sets', capacity: 'Fine bubble', locationEN: 'Aeration Tank Bottom', locationTH: 'ก้นถังเติมอากาศ', locationColor: 'bg-cyan-100 text-cyan-700', functionEN: 'Creates fine bubbles for maximum oxygen transfer to sustain aerobic biological treatment.', functionTH: 'สร้างฟองอากาศละเอียดเพื่อถ่ายเทออกซิเจนสูงสุดสำหรับการบำบัดทางชีวภาพ' },
  { icon: RotateCcw, nameEN: 'Return & Excess Centrifugal Pump', nameTH: 'ปั๊มหมุนเวียนและระบายสลัดตะกอน', qty: '2 Sets', capacity: '12 m³/h', locationEN: 'Bio Sed Tank', locationTH: 'ถังตกตะกอน', locationColor: 'bg-emerald-100 text-emerald-700', functionEN: 'Returns activated sludge to the aeration tank (RAS) and removes excess sludge (WAS) for disposal.', functionTH: 'หมุนเวียนสลัดตะกอนกลับถังเติมอากาศ (RAS) และระบายสลัดตะกอนส่วนเกิน (WAS)' },
  { icon: ArrowUpFromLine, nameEN: 'Sludge Transfer Pump', nameTH: 'ปั๊มถ่ายสลัดตะกอน', qty: '2 Sets', capacity: '21 m³/h', locationEN: 'Sludge Holding Tank', locationTH: 'ถังเก็บสลัดตะกอน', locationColor: 'bg-amber-100 text-amber-700', functionEN: 'Transfers collected sludge to the dewatering system for moisture removal and final disposal.', functionTH: 'ถ่ายสลัดตะกอนไปยังระบบรีดน้ำเพื่อกำจัด' },
  { icon: Activity, nameEN: 'Flow Meter', nameTH: 'มิเตอร์วัดอัตราการไหล', qty: '1 Set', capacity: 'Electromagnetic', locationEN: 'Inlet Pipe', locationTH: 'ท่อน้ำเข้า', locationColor: 'bg-violet-100 text-violet-700', functionEN: 'Measures real-time wastewater flow rate for monitoring and process control optimization.', functionTH: 'วัดอัตราการไหลแบบเรียลไทม์เพื่อควบคุมกระบวนการ' },
  { icon: Cpu, nameEN: 'Control Panel', nameTH: 'ตู้ควบคุม', qty: '1 Set', capacity: 'PLC-based', locationEN: 'Control Room', locationTH: 'ห้องควบคุม', locationColor: 'bg-rose-100 text-rose-700', functionEN: 'Centralized system for automated control of pumps, blowers, and process instrumentation.', functionTH: 'ระบบควบคุมอัตโนมัติส่วนกลางสำหรับปั๊ม เครื่องเป่าลม และเครื่องมือวัด' },
  { icon: Cable, nameEN: 'Equipment & Cable Wire', nameTH: 'สายไฟและอุปกรณ์ไฟฟ้า', qty: '1 Lot', capacity: 'Complete system', locationEN: 'Throughout System', locationTH: 'ทั่วทั้งระบบ', locationColor: 'bg-gray-100 text-gray-700', functionEN: 'Electrical wiring, conduits, and cable trays connecting all equipment to the control panel.', functionTH: 'สายไฟ ท่อร้อยสาย และรางสายเชื่อมต่ออุปกรณ์ทั้งหมดเข้าตู้ควบคุม' },
  { icon: GitBranch, nameEN: 'Piping & Valves', nameTH: 'ท่อและวาล์ว', qty: '1 Lot', capacity: 'PVC / HDPE / SS', locationEN: 'Inter-tank Connections', locationTH: 'เชื่อมต่อระหว่างถัง', locationColor: 'bg-slate-100 text-slate-700', functionEN: 'Complete piping network for water, sludge, and air distribution between all process units.', functionTH: 'ระบบท่อทั้งหมดสำหรับน้ำ สลัดตะกอน และอากาศระหว่างหน่วยบำบัด' },
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
              <div className="bg-surface rounded-2xl border-4 border-primary p-6 h-full shadow-md hover:shadow-lg transition-all group">
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
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                        <Gauge className="w-5 h-5 text-primary" />
                        <span className="text-base text-text-primary font-black">{item.qty}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                        <Activity className="w-5 h-5 text-accent" />
                        <span className="text-base text-text-primary font-black">{item.capacity}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
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
