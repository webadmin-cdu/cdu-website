'use client';

import { cn } from '@/lib/utils/cn';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
  showBreadcrumb?: boolean;
  pattern?: 'dots' | 'grid' | 'circuit' | 'topography' | 'none';
}

export function PageHeader({
  title,
  description,
  backgroundImage,
  className,
  showBreadcrumb = true,
  pattern = 'topography',
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'relative bg-primary-700 text-white py-16 md:py-24 overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
      )}

      {/* Pattern Overlay */}
      {pattern !== 'none' && !backgroundImage && (
        <div
          className={cn(
            'absolute inset-0 opacity-[0.08]',
            pattern === 'dots' && 'pattern-dots',
            pattern === 'grid' && 'pattern-grid',
            pattern === 'circuit' && 'pattern-circuit',
            pattern === 'topography' && 'pattern-topography'
          )}
          style={{ color: 'white' }}
          aria-hidden="true"
        />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" aria-hidden="true" />

      {/* Geometric accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10" aria-hidden="true">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1" className="text-white" />
          <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="1" className="text-white" />
          <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="1" className="text-white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showBreadcrumb && (
          <Breadcrumb className="mb-6 [&_a]:text-primary-200 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-primary-300" />
        )}
        <h1 className="text-display-lg font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-primary-100 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
