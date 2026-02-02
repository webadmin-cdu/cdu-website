'use client';

import Image from 'next/image';
import { Quotes } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 shadow-soft',
        className
      )}
    >
      <Quotes className="h-8 w-8 text-accent-gold mb-4" />
      <p className="text-neutral-600 mb-6 italic leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-primary-600">
            {testimonial.name}
          </div>
          <div className="text-sm text-neutral-500">
            {testimonial.role}, {testimonial.company}
          </div>
          <div className="text-xs text-accent-gold">
            Batch of {testimonial.batch}
          </div>
        </div>
      </div>
    </div>
  );
}
