'use client';

import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-display-md font-bold text-secondary-700 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg text-charcoal-600',
            align === 'center' && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
