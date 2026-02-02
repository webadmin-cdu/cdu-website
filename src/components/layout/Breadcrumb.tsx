'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CaretRight, House } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';
import { deslugify } from '@/lib/utils/slugify';

interface BreadcrumbProps {
  className?: string;
}

export function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = deslugify(segment);
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className={cn('py-4', className)}>
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-charcoal-500 hover:text-primary-600 transition-colors"
          >
            <House className="h-4 w-4" />
            <span className="sr-only">House</span>
          </Link>
        </li>
        {breadcrumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <CaretRight className="h-4 w-4 text-charcoal-400" />
            {crumb.isLast ? (
              <span className="text-charcoal-900 font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-charcoal-500 hover:text-primary-600 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
