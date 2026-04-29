'use client';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('footer.brand')}</h3>
                <p className="text-slate-400 text-xs">{t('footer.brandSub')}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t('footer.desc')}</p>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">{t('footer.projectDetails')}</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>{lang === 'th' ? 'กำลังบำบัด: 500 ลบ.ม./วัน' : 'Capacity: 500 m³/day'}</p>


            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">{t('footer.techDoc')}</p>
        </div>
      </div>
    </footer>
  );
}
