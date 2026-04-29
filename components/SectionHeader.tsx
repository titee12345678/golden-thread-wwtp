import { LucideIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, icon: Icon, badge, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <ScrollReveal className={`flex flex-col gap-4 mb-12 ${alignClass}`}>
      {badge && (
        <span className="badge badge-primary uppercase tracking-wider text-xs">
          {badge}
        </span>
      )}
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-primary-lighter flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-primary text-xl font-medium max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-2" />
    </ScrollReveal>
  );
}
