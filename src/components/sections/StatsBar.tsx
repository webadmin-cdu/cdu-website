'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref, hasStarted };
}

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix = '', label, delay }: StatItemProps) {
  const { count, ref, hasStarted } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="text-center px-4 md:px-8"
      style={{
        opacity: hasStarted ? 1 : 0,
        transform: hasStarted ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
      }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-400 leading-none font-serif">
        {count.toLocaleString()}
        {suffix && <span className="text-accent-300">{suffix}</span>}
      </div>
      <div className="text-sm md:text-base text-white/80 mt-2 font-medium">
        {label}
      </div>
    </div>
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
        <div className="flex flex-wrap justify-center items-center gap-y-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center"
            >
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
              {/* Divider - hidden on last item */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-secondary-700 mx-4 md:mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
