'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      bordered: 'bg-white border border-charcoal-200',
      elevated: 'bg-white shadow-soft hover:shadow-medium transition-shadow',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0 flex items-center', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { src: string; alt: string }
>(({ className, src, alt, ...props }, ref) => (
  <div ref={ref} className={cn('relative aspect-video', className)} {...props}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
));

CardImage.displayName = 'CardImage';

export { Card, CardHeader, CardContent, CardFooter, CardImage };
