'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export function HoverEffect({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    category: string;
    date: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4', className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary-50 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <HoverCard>
            <div className="relative h-40 overflow-hidden rounded-xl mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 text-[11px] font-semibold uppercase tracking-wider bg-primary-600 text-white px-2.5 py-1 rounded-md">
                {item.category}
              </span>
            </div>
            <HoverCardTitle>{item.title}</HoverCardTitle>
            <HoverCardDescription>{item.description}</HoverCardDescription>
            <p className="text-xs text-gray-400 mt-3">{item.date}</p>
          </HoverCard>
        </a>
      ))}
    </div>
  );
}

function HoverCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full rounded-2xl overflow-hidden bg-white border border-gray-100 p-5 transition-shadow duration-300 group-hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}

function HoverCardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4 className={cn('font-heading text-primary-900 font-bold text-base leading-snug line-clamp-2', className)}>
      {children}
    </h4>
  );
}

function HoverCardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn('mt-2 text-gray-500 text-sm leading-relaxed line-clamp-2', className)}>
      {children}
    </p>
  );
}
