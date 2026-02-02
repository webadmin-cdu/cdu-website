'use client';

import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({
  value,
  suffix = '',
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = performance.now();
      const startValue = 0;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (value - startValue) * easeOutQuart
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isIntersecting, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-white/80">{label}</div>
    </div>
  );
}
