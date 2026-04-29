'use client';
import { BookOpen, HardHat, Cog, CircleDot, Trash2, GitBranch, Zap, MapPin, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

const categories = [
  {
    id: 'civil', nameEN: 'Civil Work', nameTH: 'งานโยธา', icon: HardHat, color: '#3B82F6', totalPrice: '6,894,100',
    items: [
      { item: 'Equalization Tank', itemTH: 'ถังปรับเสมอ', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Reinforced concrete tank for flow equalization', fnTH: 'ถังคอนกรีตเสริมเหล็กสำหรับปรับเสมอ', imp: 'Core structure for handling flow variations 24/7', impTH: 'โครงสร้างหลักรองรับการเปลี่ยนแปลงการไหล 24 ชม.' },
      { item: 'Aeration Tank', itemTH: 'ถังเติมอากาศ', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Concrete tank for aerobic biological treatment', fnTH: 'ถังคอนกรีตสำหรับบำบัดทางชีวภาพแบบใช้อากาศ', imp: 'Critical for BOD/COD removal', impTH: 'สำคัญต่อการลด BOD/COD' },
      { item: 'Holding Tank', itemTH: 'ถังพักน้ำ', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Concrete tank for treated water storage', fnTH: 'ถังคอนกรีตเก็บน้ำบำบัดแล้ว', imp: 'Buffer storage ensures quality compliance', impTH: 'เก็บพักเพื่อตรวจคุณภาพก่อนปล่อย' },
      { item: 'Sludge Holding Tank', itemTH: 'ถังเก็บสลัดตะกอน', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Small concrete tank for sludge collection', fnTH: 'ถังคอนกรีตขนาดเล็กรวบรวมสลัดตะกอน', imp: 'Essential for sludge management', impTH: 'จำเป็นสำหรับจัดการสลัดตะกอน' },
      { item: 'Foundation & Structural', itemTH: 'ฐานรากและโครงสร้าง', qty: '1 Lot', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Foundations, walls, structural elements', fnTH: 'ฐานราก ผนัง องค์อาคาร', imp: 'Structural integrity of all tanks', impTH: 'ความแข็งแรงโครงสร้างถังทั้งหมด' },
    ],
  },
  {
    id: 'mechanical', nameEN: 'Mechanical Work', nameTH: 'งานเครื่องกล', icon: Cog, color: '#06B6D4', totalPrice: '1,206,000',
    items: [
      { item: 'Submersible Pump', itemTH: 'ปั๊มจุ่ม', qty: '2 Sets', location: 'EQ Tank', locationTH: 'ถังปรับเสมอ', fn: 'Transfer wastewater, 21 m³/h', fnTH: 'สูบน้ำเสีย 21 ลบ.ม./ชม.', imp: 'Redundancy ensures no downtime', impTH: 'สำรอง 2 ชุดป้องกันหยุดชะงัก' },
      { item: 'Air Blower', itemTH: 'เครื่องเป่าลม', qty: '2 Sets', location: 'Blower Room', locationTH: 'ห้องเครื่องเป่า', fn: 'Supply air, 12 m³/min', fnTH: 'จ่ายอากาศ 12 ลบ.ม./นาที', imp: 'Heart of the aeration system', impTH: 'หัวใจของระบบเติมอากาศ' },
      { item: 'Centrifugal Pump', itemTH: 'ปั๊มหอยโข่ง', qty: '2 Sets', location: 'Bio Sed Tank', locationTH: 'ถังตกตะกอน', fn: 'Return/waste sludge, 12 m³/h', fnTH: 'หมุนเวียน/ระบายสลัดตะกอน 12 ลบ.ม./ชม.', imp: 'Maintains proper MLSS', impTH: 'รักษาระดับ MLSS ที่เหมาะสม' },
      { item: 'Sludge Transfer Pump', itemTH: 'ปั๊มถ่ายสลัดตะกอน', qty: '2 Sets', location: 'Sludge Tank', locationTH: 'ถังสลัดตะกอน', fn: 'Transfer sludge, 21 m³/h', fnTH: 'ถ่ายสลัดตะกอน 21 ลบ.ม./ชม.', imp: 'Prevents sludge overload', impTH: 'ป้องกันสลัดตะกอนล้น' },
    ],
  },
  { id: 'sed', nameEN: 'Sedimentation Tank', nameTH: 'ถังตกตะกอน', icon: CircleDot, color: '#10B981', totalPrice: '2,600,000', items: [
    { item: 'Bio Sed Tank', itemTH: 'ถังตกตะกอนชีวภาพ', qty: '1 Unit', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Circular clarifier Ø5.5×3.5m', fnTH: 'ถังตกตะกอนทรงกลม Ø5.5×3.5m', imp: 'Determines final effluent quality', impTH: 'กำหนดคุณภาพน้ำทิ้ง' },
  ]},
  { id: 'sludge', nameEN: 'Sludge Dewatering', nameTH: 'รีดน้ำสลัดตะกอน', icon: Trash2, color: '#F59E0B', totalPrice: '100,000', items: [
    { item: 'Dewatering System', itemTH: 'ระบบรีดน้ำ', qty: '1 Set', location: 'Sludge Area', locationTH: 'พื้นที่สลัดตะกอน', fn: 'Reduce sludge moisture', fnTH: 'ลดความชื้นสลัดตะกอน', imp: 'Reduces volume by 60-80%', impTH: 'ลดปริมาตร 60-80%' },
  ]},
  { id: 'piping', nameEN: 'Piping & Instrument', nameTH: 'ท่อและเครื่องมือวัด', icon: GitBranch, color: '#8B5CF6', totalPrice: '718,000', items: [
    { item: 'Air Diffuser (EQ)', itemTH: 'หัวจ่ายอากาศ (EQ)', qty: '95 Sets', location: 'EQ Tank', locationTH: 'ถังปรับเสมอ', fn: 'Fine bubble aeration', fnTH: 'เติมอากาศฟองละเอียด', imp: 'Prevents dead zones', impTH: 'ป้องกันจุดอับ' },
    { item: 'Air Diffuser (Aeration)', itemTH: 'หัวจ่ายอากาศ (Aeration)', qty: '35 Sets', location: 'Aeration Tank', locationTH: 'ถังเติมอากาศ', fn: 'Fine bubble aeration', fnTH: 'เติมอากาศฟองละเอียด', imp: 'Max O₂ transfer', impTH: 'ถ่ายเทออกซิเจนสูงสุด' },
    { item: 'Flow Meter', itemTH: 'มิเตอร์วัดการไหล', qty: '1 Set', location: 'Inlet', locationTH: 'ท่อน้ำเข้า', fn: 'Electromagnetic flow measurement', fnTH: 'วัดการไหลแบบแม่เหล็กไฟฟ้า', imp: 'Process monitoring', impTH: 'ตรวจวัดกระบวนการ' },
    { item: 'Piping & Valves', itemTH: 'ท่อและวาล์ว', qty: '1 Lot', location: 'Inter-tank', locationTH: 'ระหว่างถัง', fn: 'Distribution network', fnTH: 'ระบบท่อจ่าย', imp: 'Connects all units', impTH: 'เชื่อมต่อทุกหน่วย' },
  ]},
  { id: 'electrical', nameEN: 'Electrical Work', nameTH: 'งานไฟฟ้า', icon: Zap, color: '#EC4899', totalPrice: '1,280,000', items: [
    { item: 'Control Panel (PLC)', itemTH: 'ตู้ควบคุม (PLC)', qty: '1 Set', location: 'Control Room', locationTH: 'ห้องควบคุม', fn: 'Centralized automation', fnTH: 'ควบคุมอัตโนมัติส่วนกลาง', imp: 'Automated operation', impTH: 'ระบบอัตโนมัติ' },
    { item: 'Cable & Conduit', itemTH: 'สายไฟและท่อร้อยสาย', qty: '1 Lot', location: 'Throughout', locationTH: 'ทั่วทั้งระบบ', fn: 'Power and signal cabling', fnTH: 'สายไฟกำลังและสัญญาณ', imp: 'Reliable connections', impTH: 'การเชื่อมต่อที่เชื่อถือได้' },
  ]},
  { id: 'site', nameEN: 'Site Preparation', nameTH: 'เตรียมพื้นที่', icon: MapPin, color: '#14B8A6', totalPrice: '1,484,800', items: [
    { item: 'Earthwork & Grading', itemTH: 'งานดินและปรับระดับ', qty: '1 Lot', location: 'Pond 5', locationTH: 'บ่อ 5', fn: 'Site clearing, excavation', fnTH: 'ถางพื้นที่ ขุดดิน', imp: 'Structural stability', impTH: 'เสถียรภาพโครงสร้าง' },
    { item: 'Project Management', itemTH: 'บริหารโครงการ', qty: '9 Months', location: 'On-site', locationTH: 'หน้างาน', fn: 'Supervision, QC', fnTH: 'ควบคุมงาน ตรวจคุณภาพ', imp: 'Quality assurance', impTH: 'ประกันคุณภาพ' },
    { item: 'Microorganism & Molasses', itemTH: 'จุลินทรีย์และกากน้ำตาล', qty: '1 Lot', location: 'Aeration Tank', locationTH: 'ถังเติมอากาศ', fn: 'Seed bacteria + carbon', fnTH: 'เชื้อจุลินทรีย์ + แหล่งคาร์บอน', imp: 'Biomass startup', impTH: 'เริ่มต้นจุลินทรีย์' },
    { item: 'Lab Analysis', itemTH: 'วิเคราะห์ห้องปฏิบัติการ', qty: '1 Lot', location: 'Laboratory', locationTH: 'ห้องปฏิบัติการ', fn: 'Water quality testing', fnTH: 'ทดสอบคุณภาพน้ำ', imp: 'Regulatory compliance', impTH: 'ปฏิบัติตามกฎหมาย' },
  ]},
  { id: 'design', nameEN: 'Design & Commissioning', nameTH: 'ออกแบบและส่งมอบ', icon: Compass, color: '#6366F1', totalPrice: '1,000,000', items: [
    { item: 'Engineering Design', itemTH: 'ออกแบบวิศวกรรม', qty: '1 Lot', location: 'Office', locationTH: 'สำนักงาน', fn: 'Detailed design and calculations', fnTH: 'ออกแบบรายละเอียดและคำนวณ', imp: 'System optimization', impTH: 'ปรับแต่งระบบให้เหมาะสม' },
    { item: 'Test Run & Commissioning', itemTH: 'ทดสอบและส่งมอบ', qty: '1 Lot', location: 'On-site', locationTH: 'หน้างาน', fn: 'Startup, testing, training', fnTH: 'เริ่มระบบ ทดสอบ ฝึกอบรม', imp: 'Performance validation', impTH: 'ตรวจสอบประสิทธิภาพ' },
  ]},
];

export default function TechnicalDetails() {
  const { lang, t } = useLang();

  return (
    <section id="details" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={BookOpen} title={t('tech.title')} subtitle={t('tech.subtitle')} badge={t('tech.badge')} />
        <div className="space-y-12">
          {categories.map((cat) => (
            <ScrollReveal key={cat.id}>
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b-2 border-slate-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: cat.color + '15' }}>
                    <cat.icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{lang === 'th' ? cat.nameTH : cat.nameEN}</h3>
                    <span className="text-sm font-bold text-text-muted uppercase tracking-widest">{cat.items.length} {lang === 'th' ? 'รายการ' : `item${cat.items.length > 1 ? 's' : ''}`}</span>
                  </div>
                </div>

                {/* Items Grid/List */}
                <div className="grid grid-cols-1 gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border-l-8 transition-all shadow-md hover:shadow-lg" style={{ borderColor: cat.color }}>
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <h4 className="font-extrabold text-text-primary text-xl">{lang === 'th' ? item.itemTH : item.item}</h4>
                        <span className="badge font-black shrink-0 px-4 py-1.5 text-sm shadow-sm" style={{ backgroundColor: cat.color + '20', color: cat.color }}>{item.qty}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[13px]">
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-text-muted font-bold uppercase tracking-widest block mb-1.5 text-[11px]">{t('tech.location')}</span>
                          <p className="text-text-primary font-bold text-base">{lang === 'th' ? item.locationTH : item.location}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-text-muted font-bold uppercase tracking-widest block mb-1.5 text-[11px]">{t('tech.function')}</span>
                          <p className="text-text-primary font-bold text-base leading-relaxed">{lang === 'th' ? item.fnTH : item.fn}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-text-muted font-bold uppercase tracking-widest block mb-1.5 text-[11px]">{t('tech.importance')}</span>
                          <p className="text-text-primary font-bold text-base leading-relaxed">{lang === 'th' ? item.impTH : item.imp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
