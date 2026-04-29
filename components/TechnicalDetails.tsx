'use client';
import { BookOpen, HardHat, Cog, CircleDot, Trash2, GitBranch, Zap, MapPin, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const categories = [
  {
    id: 'civil', nameEN: 'Civil Work', nameTH: 'งานโยธา', icon: HardHat, color: '#3B82F6',
    items: [
      { item: 'Equalization Tank', itemTH: 'ถังปรับสมดุล (Equalization Tank)', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Reinforced concrete tank for flow equalization', fnTH: 'ถังคอนกรีตเสริมเหล็กสำหรับปรับสมดุล', imp: 'Core structure 24/7', impTH: 'โครงสร้างหลัก 24 ชม.' },
      { item: 'Aeration Tank', itemTH: 'ถังเติมอากาศ (Aeration Tank)', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Concrete tank for aerobic biological treatment', fnTH: 'ถังคอนกรีตบำบัดทางชีวภาพแบบใช้อากาศ', imp: 'BOD/COD removal', impTH: 'ลด BOD/COD' },
      { item: 'Holding Tank', itemTH: 'ถังพักน้ำ (Holding Tank)', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Treated water storage', fnTH: 'เก็บน้ำบำบัดแล้ว', imp: 'Quality buffer', impTH: 'ตรวจคุณภาพก่อนปล่อย' },
      { item: 'Sludge Holding Tank', itemTH: 'ถังเก็บตะกอน (Sludge Holding Tank)', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Sludge collection', fnTH: 'รวบรวมตะกอน', imp: 'Sludge management', impTH: 'จัดการตะกอน' },
      { item: 'Foundation & Structural', itemTH: 'ฐานรากและโครงสร้าง', qty: '1 Lot', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Foundations, walls, structural elements', fnTH: 'ฐานราก ผนัง องค์อาคาร', imp: 'Structural integrity', impTH: 'ความแข็งแรงโครงสร้าง' },
    ],
  },
  {
    id: 'mechanical', nameEN: 'Mechanical Work', nameTH: 'งานเครื่องกล', icon: Cog, color: '#06B6D4',
    items: [
      { item: 'Submersible Pump', itemTH: 'ปั๊มจุ่ม (Submersible Pump)', qty: '2 Sets', location: 'EQ Tank', locationTH: 'ถังปรับสมดุล (EQ Tank)', fn: 'Transfer wastewater, 21 m³/h', fnTH: 'สูบน้ำเสีย 21 ลบ.ม./ชม.', imp: '2x redundancy', impTH: 'สำรอง 2 ชุด' },
      { item: 'Air Blower', itemTH: 'เครื่องเป่าลม (Root Blower)', qty: '2 Sets', location: 'Blower Platform', locationTH: 'แท่นเครื่องเป่าลม (Blower Platform)', fn: 'Supply air, 12 m³/min', fnTH: 'จ่ายอากาศ 12 ลบ.ม./นาที', imp: 'Heart of aeration', impTH: 'หัวใจระบบเติมอากาศ' },
      { item: 'Centrifugal Pump', itemTH: 'ปั๊มหมุนเวียน (Centrifugal Pump)', qty: '2 Sets', location: 'Bio Sed Tank', locationTH: 'ถังตกตะกอน (Bio Sed Tank)', fn: 'Return/waste sludge, 12 m³/h', fnTH: 'หมุนเวียน/ระบายตะกอน', imp: 'Maintains MLSS', impTH: 'รักษาระดับ MLSS' },
      { item: 'Sludge Transfer Pump', itemTH: 'ปั๊มถ่ายตะกอน (Sludge Transfer Pump)', qty: '2 Sets', location: 'Sludge Tank', locationTH: 'ถังตะกอน (Sludge Tank)', fn: 'Transfer sludge, 21 m³/h', fnTH: 'ถ่ายตะกอน 21 ลบ.ม./ชม.', imp: 'Prevents overload', impTH: 'ป้องกันตะกอนล้น' },
    ],
  },
  { id: 'sed', nameEN: 'Sedimentation Tank', nameTH: 'ถังตกตะกอน (Sedimentation)', icon: CircleDot, color: '#10B981', items: [
    { item: 'Bio Sed Tank', itemTH: 'ถังตกตะกอนชีวภาพ (Bio Sed Tank)', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Circular clarifier Ø5.5×3.5m, SS400 epoxy', fnTH: 'ถังตกตะกอนทรงกลม Ø5.5×3.5m (SS400 epoxy)', imp: 'Final effluent quality', impTH: 'กำหนดคุณภาพน้ำทิ้ง' },
  ]},
  { id: 'sludge', nameEN: 'Sludge Dewatering', nameTH: 'รีดน้ำตะกอน (Dewatering)', icon: Trash2, color: '#F59E0B', items: [
    { item: 'Dewatering System', itemTH: 'ระบบรีดน้ำ (Dewatering)', qty: '1 Set', location: 'Sludge Area', locationTH: 'พื้นที่ตะกอน', fn: 'Reduce sludge moisture', fnTH: 'ลดความชื้นตะกอน', imp: 'Volume -60~80%', impTH: 'ลดปริมาตร 60-80%' },
  ]},
  { id: 'piping', nameEN: 'Piping & Instrument', nameTH: 'ท่อและเครื่องมือวัด', icon: GitBranch, color: '#8B5CF6', items: [
    { item: 'Air Diffuser (EQ)', itemTH: 'หัวจ่ายอากาศ (Air Diffuser) — EQ', qty: '95 Sets', location: 'EQ Tank', locationTH: 'ถังปรับสมดุล (EQ Tank)', fn: 'Fine bubble aeration 12"', fnTH: 'เติมอากาศฟองละเอียด 12"', imp: 'No dead zones', impTH: 'ป้องกันจุดอับ' },
    { item: 'Air Diffuser (Aeration)', itemTH: 'หัวจ่ายอากาศ (Air Diffuser) — Aeration', qty: '35 Sets', location: 'Aeration Tank', locationTH: 'ถังเติมอากาศ (Aeration Tank)', fn: 'Fine bubble aeration 12"', fnTH: 'เติมอากาศฟองละเอียด 12"', imp: 'Max O₂ transfer', impTH: 'ถ่ายเท O₂ สูงสุด' },
    { item: 'Flow Meter', itemTH: 'มิเตอร์วัดการไหล (Flow Meter)', qty: '1 Set', location: 'Inlet', locationTH: 'ท่อน้ำเข้า', fn: 'Electromagnetic', fnTH: 'แม่เหล็กไฟฟ้า', imp: 'Process monitoring', impTH: 'ตรวจวัดกระบวนการ' },
    { item: 'Piping & Valves', itemTH: 'ท่อและวาล์ว (Piping & Valves)', qty: '1 Lot', location: 'Inter-tank', locationTH: 'ระหว่างถัง', fn: 'PVC / HDPE / SS', fnTH: 'PVC / HDPE / SS', imp: 'Connects all units', impTH: 'เชื่อมต่อทุกหน่วย' },
  ]},
  { id: 'electrical', nameEN: 'Electrical Work', nameTH: 'งานไฟฟ้า', icon: Zap, color: '#EC4899', items: [
    { item: 'Control Panel (PLC)', itemTH: 'ตู้ควบคุม (Control Panel — PLC)', qty: '1 Set', location: 'Control Room', locationTH: 'ห้องควบคุม (Control Room)', fn: 'Centralized automation', fnTH: 'ควบคุมอัตโนมัติส่วนกลาง', imp: 'Full automation', impTH: 'ระบบอัตโนมัติ' },
    { item: 'Cable & Conduit', itemTH: 'สายไฟและท่อร้อยสาย', qty: '1 Lot', location: 'Throughout', locationTH: 'ทั่วทั้งระบบ', fn: 'Power and signal cabling', fnTH: 'สายไฟกำลังและสัญญาณ', imp: 'Reliable connections', impTH: 'เชื่อมต่อเชื่อถือได้' },
  ]},
  { id: 'site', nameEN: 'Site Preparation', nameTH: 'เตรียมพื้นที่', icon: MapPin, color: '#14B8A6', items: [
    { item: 'Earthwork & Grading', itemTH: 'งานดินและปรับระดับ', qty: '1 Lot', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Clearing, excavation', fnTH: 'ถางพื้นที่ ขุดดิน', imp: 'Stability', impTH: 'เสถียรภาพโครงสร้าง' },
    { item: 'Project Management', itemTH: 'บริหารโครงการ (PM)', qty: '9 Mo.', location: 'On-site', locationTH: 'หน้างาน', fn: 'Supervision, QC', fnTH: 'ควบคุมงาน ตรวจคุณภาพ', imp: 'QA assurance', impTH: 'ประกันคุณภาพ' },
    { item: 'Microorganism & Molasses', itemTH: 'จุลินทรีย์และกากน้ำตาล', qty: '1 Lot', location: 'Aeration Tank', locationTH: 'ถังเติมอากาศ', fn: 'Seed bacteria + carbon source', fnTH: 'เชื้อจุลินทรีย์ + แหล่งคาร์บอน', imp: 'Bio startup', impTH: 'เริ่มต้นจุลินทรีย์' },
    { item: 'Lab Analysis', itemTH: 'วิเคราะห์น้ำ (Lab Analysis)', qty: '1 Lot', location: 'Laboratory', locationTH: 'ห้องปฏิบัติการ', fn: 'Water quality testing', fnTH: 'ทดสอบคุณภาพน้ำ', imp: 'Compliance', impTH: 'ตามกฎหมาย' },
  ]},
  { id: 'design', nameEN: 'Design & Commissioning', nameTH: 'ออกแบบและส่งมอบ', icon: Compass, color: '#6366F1', items: [
    { item: 'Engineering Design', itemTH: 'ออกแบบวิศวกรรม (Engineering Design)', qty: '1 Lot', location: 'Office', locationTH: 'สำนักงาน', fn: 'Detailed design & calculations', fnTH: 'ออกแบบรายละเอียดและคำนวณ', imp: 'Optimization', impTH: 'ปรับแต่งระบบ' },
    { item: 'Test Run & Commissioning', itemTH: 'ทดสอบและส่งมอบ (Commissioning)', qty: '1 Lot', location: 'On-site', locationTH: 'หน้างาน', fn: 'Startup, testing, training', fnTH: 'เริ่มระบบ ทดสอบ ฝึกอบรม', imp: 'Validation', impTH: 'ตรวจสอบประสิทธิภาพ' },
  ]},
];

export default function TechnicalDetails() {
  const { lang, t } = useLang();
  const th = lang === 'th';

  return (
    <section id="details" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={BookOpen} title={t('tech.title')} subtitle={t('tech.subtitle')} badge={t('tech.badge')} />
        <div className="space-y-6">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.id} delay={Math.min(ci + 1, 3)}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white" style={{ border: `2px solid ${cat.color}35` }}>
                {/* Category Header */}
                <div
                  className="flex items-center gap-3 px-5 py-3.5"
                  style={{ background: `linear-gradient(135deg, ${cat.color}18, ${cat.color}08)`, borderBottom: `2px solid ${cat.color}35` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: cat.color + '20' }}>
                    <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="flex-1 text-lg font-extrabold text-text-primary">{th ? cat.nameTH : cat.nameEN}</h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: cat.color + '15', color: cat.color }}>
                    {cat.items.length} {th ? 'รายการ' : `item${cat.items.length > 1 ? 's' : ''}`}
                  </span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: cat.color + '0C' }}>
                        <th className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wider" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}30`, borderRight: `1px solid ${cat.color}20` }}>{th ? 'รายการ' : 'Item'}</th>
                        <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}30`, borderRight: `1px solid ${cat.color}20` }}>{th ? 'จำนวน' : 'Qty'}</th>
                        <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}30`, borderRight: `1px solid ${cat.color}20` }}>{t('tech.location')}</th>
                        <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}30`, borderRight: `1px solid ${cat.color}20` }}>{t('tech.function')}</th>
                        <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}30` }}>{t('tech.importance')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, i) => (
                        <tr key={i} className="transition-colors" style={{ backgroundColor: i % 2 === 1 ? cat.color + '05' : 'white' }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = cat.color + '0A')} onMouseLeave={e => (e.currentTarget.style.backgroundColor = i % 2 === 1 ? cat.color + '05' : 'white')}>
                          <td className="px-5 py-3 font-bold text-text-primary" style={{ borderBottom: `1px solid ${cat.color}15`, borderRight: `1px solid ${cat.color}15` }}>{th ? item.itemTH : item.item}</td>
                          <td className="px-4 py-3" style={{ borderBottom: `1px solid ${cat.color}15`, borderRight: `1px solid ${cat.color}15` }}>
                            <span className="inline-block text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: cat.color + '12', color: cat.color }}>{item.qty}</span>
                          </td>
                          <td className="px-4 py-3 text-text-secondary" style={{ borderBottom: `1px solid ${cat.color}15`, borderRight: `1px solid ${cat.color}15` }}>{th ? item.locationTH : item.location}</td>
                          <td className="px-4 py-3 text-text-secondary" style={{ borderBottom: `1px solid ${cat.color}15`, borderRight: `1px solid ${cat.color}15` }}>{th ? item.fnTH : item.fn}</td>
                          <td className="px-4 py-3 text-text-muted italic text-xs" style={{ borderBottom: `1px solid ${cat.color}15` }}>{th ? item.impTH : item.imp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
