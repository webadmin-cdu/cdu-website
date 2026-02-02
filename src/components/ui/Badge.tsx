'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-charcoal-100 text-charcoal-700',
      primary: 'bg-primary-100 text-primary-700',
      secondary: 'bg-secondary-100 text-secondary-700',
      success: 'bg-tertiary-100 text-tertiary-700',
      warning: 'bg-orange-100 text-orange-700',
      error: 'bg-red-100 text-red-700',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
