'use client';
import { TooltipItem } from 'chart.js';
import { FileSpreadsheet, TrendingUp } from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import { useLang } from '@/contexts/LanguageContext';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const boqCategories = [
  { nameEN: 'Civil Work', nameTH: 'งานโยธา', amount: 6894100, color: '#3B82F6', descEN: 'Tank construction, foundation, structural work in Pond 5', descTH: 'ก่อสร้างถัง ฐานราก งานโครงสร้างในบ่อ 5' },
  { nameEN: 'Mechanical Work', nameTH: 'งานเครื่องกล', amount: 1206000, color: '#06B6D4', descEN: 'Pumps, blowers, and mechanical equipment installation', descTH: 'ปั๊ม เครื่องเป่าลม และติดตั้งอุปกรณ์เครื่องกล' },
  { nameEN: 'Sedimentation Tank', nameTH: 'ถังตกตะกอน', amount: 2600000, color: '#10B981', descEN: 'Prefabricated Bio Sed Tank (Ø5.5m) supply and installation', descTH: 'ถังตกตะกอนสำเร็จรูป (Ø5.5m) จัดหาและติดตั้ง' },
  { nameEN: 'Sludge Dewatering', nameTH: 'รีดน้ำสลัดตะกอน', amount: 100000, color: '#F59E0B', descEN: 'Sludge dewatering equipment and disposal system', descTH: 'อุปกรณ์รีดน้ำสลัดตะกอนและระบบกำจัด' },
  { nameEN: 'Piping, Valve & Instrument', nameTH: 'ท่อ วาล์ว และเครื่องมือวัด', amount: 718000, color: '#8B5CF6', descEN: 'Inter-tank piping, valves, and flow instrumentation', descTH: 'ท่อเชื่อมถัง วาล์ว และเครื่องมือวัดการไหล' },
  { nameEN: 'Electrical Work', nameTH: 'งานไฟฟ้า', amount: 1280000, color: '#EC4899', descEN: 'Control panel, cable wiring, and electrical systems', descTH: 'ตู้ควบคุม สายไฟ และระบบไฟฟ้า' },
  { nameEN: 'Site Preparation & Mgmt', nameTH: 'เตรียมพื้นที่และบริหาร', amount: 1484800, color: '#14B8A6', descEN: 'Earthwork, access roads, and project management', descTH: 'งานดิน ถนนเข้าออก และบริหารโครงการ' },
  { nameEN: 'Design Work', nameTH: 'งานออกแบบ', amount: 1000000, color: '#6366F1', descEN: 'Engineering design, drawings, and technical documentation', descTH: 'ออกแบบวิศวกรรม แบบแปลน และเอกสารทางเทคนิค' },
];

const totals = {
  materialPrice: 15282900,
  knowHow: 764145,
  total: 16047045,
  overheadProfit: 1604704.5,
  sumTotal: 17651749.5,
  vat: 1235622.47,
  grandTotal: 18887371.97,
};

function formatNumber(num: number): string {
  return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export default function BOQSummary() {
  const { lang, t } = useLang();

  const getName = (cat: typeof boqCategories[0]) => lang === 'th' ? cat.nameTH : cat.nameEN;
  const getDesc = (cat: typeof boqCategories[0]) => lang === 'th' ? cat.descTH : cat.descEN;

  const donutData = {
    labels: boqCategories.map(getName),
    datasets: [{
      data: boqCategories.map(c => c.amount),
      backgroundColor: boqCategories.map(c => c.color),
      borderColor: '#FFFFFF',
      borderWidth: 3,
      hoverBorderWidth: 4,
      hoverOffset: 8,
    }],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1E293B',
        titleFont: { family: 'Inter', size: 13, weight: 600 as const },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx: TooltipItem<'doughnut'>) => ` ฿${formatNumber(ctx.parsed)} THB`,
        },
      },
    },
  };

  const barData = {
    labels: boqCategories.map(c => {
      const n = getName(c);
      return n.length > 15 ? n.substring(0, 15) + '...' : n;
    }),
    datasets: [{
      label: 'Cost (THB)',
      data: boqCategories.map(c => c.amount),
      backgroundColor: boqCategories.map(c => c.color + '80'),
      borderColor: boqCategories.map(c => c.color),
      borderWidth: 2,
      borderRadius: 6,
      barPercentage: 0.7,
    }],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1E293B',
        titleFont: { family: 'Inter', size: 13, weight: 600 as const },
        bodyFont: { family: 'Inter', size: 12 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (ctx: TooltipItem<'bar'>) => ` ฿${formatNumber(ctx.parsed.x ?? 0)} THB`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: '#F1F5F9' },
        ticks: {
          font: { family: 'Inter', size: 10 },
          color: '#94A3B8',
          callback: (value: string | number) => `฿${(Number(value) / 1000000).toFixed(1)}M`,
        },
      },
      y: {
        grid: { display: false },
        ticks: { font: { family: 'Inter', size: 11 }, color: '#475569' },
      },
    },
  };

  const summaryRows = [
    { label: t('boq.sumMaterials'), value: totals.materialPrice },
    { label: t('boq.knowHow'), value: totals.knowHow },
    { label: t('boq.total'), value: totals.total, bold: true },
    { label: t('boq.overheadProfit'), value: totals.overheadProfit },
    { label: t('boq.sumTotal'), value: totals.sumTotal, bold: true },
    { label: t('boq.vat'), value: totals.vat },
  ];

  return (
    <section id="boq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader icon={FileSpreadsheet} title={t('boq.title')} subtitle={t('boq.subtitle')} badge={t('boq.badge')} />

        {/* Grand Total Highlight */}
        <ScrollReveal className="mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-primary/20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t('boq.grandTotalLabel')}</span>
              <div className="text-4xl md:text-5xl font-bold gradient-text mt-3 mb-2">
                ฿{formatNumber(totals.grandTotal)}
              </div>
              <span className="text-text-muted text-sm">{t('boq.thaiBaht')}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ScrollReveal>
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-semibold text-text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                {t('boq.costDist')}
              </h3>
              <div className="relative h-72 md:h-80">
                <Doughnut data={donutData} options={donutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs text-text-muted">{t('boq.materialsTotal')}</span>
                  <span className="text-lg font-bold text-text-primary">฿{(totals.materialPrice / 1000000).toFixed(1)}M</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {boqCategories.map((cat) => (
                  <div key={cat.nameEN} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    <span className="text-xs text-text-secondary truncate">{getName(cat)}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-semibold text-text-primary mb-6 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-primary" />
                {t('boq.costComparison')}
              </h3>
              <div className="h-72 md:h-80">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Cost Breakdown Cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {boqCategories.map((cat) => {
              const pct = ((cat.amount / totals.materialPrice) * 100).toFixed(1);
              return (
                <div key={cat.nameEN} className="glass-card p-5 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-xs font-semibold" style={{ color: cat.color }}>{pct}%</span>
                  </div>
                  <h4 className="font-semibold text-sm text-text-primary mb-1">{getName(cat)}</h4>
                  <p className="text-lg font-bold text-text-primary">฿{formatNumber(cat.amount)}</p>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">{getDesc(cat)}</p>
                  <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, backgroundColor: cat.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Totals Summary Table */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto glass-card p-6 md:p-8">
            <h3 className="font-semibold text-text-primary mb-4">{t('boq.costSummary')}</h3>
            <div className="space-y-3">
              {summaryRows.map((row) => (
                <div key={row.label} className={`flex items-center justify-between py-2 ${row.bold ? 'border-t border-border pt-3' : ''}`}>
                  <span className={`text-sm ${row.bold ? 'font-semibold text-text-primary' : 'text-text-secondary'}`}>{row.label}</span>
                  <span className={`text-sm font-mono ${row.bold ? 'font-bold text-text-primary' : 'text-text-primary'}`}>
                    ฿{formatNumber(row.value)}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 border-t-2 border-primary/20 bg-primary/5 -mx-6 md:-mx-8 px-6 md:px-8 rounded-b-xl mt-2">
                <span className="font-bold text-primary">{t('boq.grandTotal')}</span>
                <span className="text-xl font-bold text-primary">฿{formatNumber(totals.grandTotal)}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
