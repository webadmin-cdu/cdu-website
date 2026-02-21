'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix = '', label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    Math.floor(v).toLocaleString()
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(motionValue, value, {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none font-serif">
        <motion.span>{rounded}</motion.span>
        {suffix && <span className="text-white/80">{suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-white/80 mt-2 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsBar() {
  const stats = [
    { value: 1991, suffix: '', label: 'Established' },
    { value: 33, suffix: '+', label: 'Years of Excellence' },
    { value: 10000, suffix: '+', label: 'Students' },
    { value: 500, suffix: '+', label: 'Faculty' },
    { value: 57, suffix: '+', label: 'Programs' },
    { value: 95, suffix: '%', label: 'Placement Rate' },
  ];

  return (
    <section className="bg-secondary-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
