'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, GraduationCap, Briefcase, Quotes } from '@phosphor-icons/react';
import { TESTIMONIALS } from '@/lib/constants/navigation';

// Color palette rotating through brand colors
const CARD_COLORS = [
  { bg: 'bg-[#D4A528]', ring: 'ring-[#D4A528]' },         // Gold
  { bg: 'bg-[#1E3A5F]', ring: 'ring-[#1E3A5F]' },         // Navy
  { bg: 'bg-[#C80E13]', ring: 'ring-[#C80E13]' },         // Red
  { bg: 'bg-[#334E68]', ring: 'ring-[#334E68]' },         // Slate Navy
  { bg: 'bg-[#B8922D]', ring: 'ring-[#B8922D]' },         // Dark Gold
  { bg: 'bg-[#243B53]', ring: 'ring-[#243B53]' },         // Deep Navy
  { bg: 'bg-[#946F1E]', ring: 'ring-[#946F1E]' },         // Bronze
  { bg: 'bg-[#7F090C]', ring: 'ring-[#7F090C]' },         // Dark Red
  { bg: 'bg-[#486581]', ring: 'ring-[#486581]' },         // Steel Blue
];

// Triple the items for seamless infinite loop
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
const TOTAL = TESTIMONIALS.length;

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isResettingRef = useRef(false);

  // Get card width + gap
  const getCardStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>('[data-testimonial]');
    if (!card) return 0;
    return card.offsetWidth + 32; // gap-8 = 32px
  }, []);

  // Jump to the middle set on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getCardStep();
    if (step > 0) {
      el.scrollLeft = step * TOTAL;
    }
  }, [getCardStep]);

  // Infinite loop: reset position when scrolling past boundaries
  const handleScroll = useCallback(() => {
    if (isResettingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const step = getCardStep();
    if (step <= 0) return;

    const middleStart = step * TOTAL;
    const middleEnd = step * TOTAL * 2;

    // Scrolled past the middle set → jump back to middle start
    if (el.scrollLeft >= middleEnd - step / 2) {
      isResettingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = el.scrollLeft - step * TOTAL;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isResettingRef.current = false; });
    }
    // Scrolled before the middle set → jump forward to middle
    else if (el.scrollLeft <= step * (TOTAL - 1) / 2) {
      isResettingRef.current = true;
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = el.scrollLeft + step * TOTAL;
      el.style.scrollBehavior = '';
      requestAnimationFrame(() => { isResettingRef.current = false; });
    }

    // Update active dot index (based on position within one set)
    const relativeScroll = el.scrollLeft % (step * TOTAL);
    const index = Math.round(relativeScroll / step) % TOTAL;
    setActiveIndex(index);
  }, [getCardStep]);

  const scroll = useCallback((dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getCardStep();
    if (step <= 0) return;
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' });
  }, [getCardStep]);

  // Auto-scroll
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => scroll('next'), 5000);
    return () => clearInterval(interval);
  }, [paused, scroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="py-12 md:py-20 bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3">
              Success Stories
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900">
              What Our Alumni Say
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('prev')}
              className="w-11 h-11 rounded-full border border-secondary-300 flex items-center justify-center text-secondary-600 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" weight="bold" />
            </button>
            <button
              onClick={() => scroll('next')}
              className="w-11 h-11 rounded-full border border-secondary-300 flex items-center justify-center text-secondary-600 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards — infinite loop */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 md:px-8 lg:px-[calc((100vw-1280px)/2+2rem)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: '-80px', paddingTop: '80px' }}
      >
        {ITEMS.map((t, i) => {
          const originalIndex = i % TOTAL;
          const color = CARD_COLORS[originalIndex % CARD_COLORS.length];
          const isEven = originalIndex % 2 === 0;

          return (
            <div
              key={`${t.id}-${i}`}
              data-testimonial
              className="flex-none w-[88%] sm:w-[75%] md:w-[600px] lg:w-[680px] snap-start"
            >
              {/* Card with photo inside at top edge */}
              <div className={`${color.bg} rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 relative shadow-strong`}>
                {/* Large quote mark */}
                <Quotes
                  className={`absolute ${
                    isEven ? 'top-6 right-8' : 'top-6 left-8'
                  } w-14 h-14 md:w-16 md:h-16 text-white/20`}
                  weight="fill"
                />

                {/* Profile photo — negative margin to overlap top edge */}
                <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} -mt-[calc(1.25rem+48px)] sm:-mt-[calc(1.5rem+52px)] md:-mt-[calc(2.5rem+64px)] mb-4 md:mb-5`}>
                  <div className={`relative rounded-full overflow-hidden ring-4 ${color.ring} ring-offset-3 md:ring-offset-4 ring-offset-neutral-100 shadow-lg`} style={{ width: 'clamp(88px, 20vw, 128px)', height: 'clamp(88px, 20vw, 128px)' }}>
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 ${
                  isEven ? '' : 'text-center'
                }`}>
                  {t.name}
                </h3>

                {/* Quote */}
                <blockquote className="text-white/90 text-sm md:text-base leading-relaxed mb-5 md:mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Bottom info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/20">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-white" weight="fill" />
                      </div>
                      <span className="text-white/90 text-xs md:text-sm font-semibold">
                        Batch of {t.batch}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-white" weight="fill" />
                      </div>
                      <span className="text-white/90 text-xs md:text-sm font-semibold">
                        {t.role} at {t.company}
                      </span>
                    </div>
                  </div>
                  {/* Company logo */}
                  {t.logo && (
                    <div className="h-10 md:h-12 px-4 py-1.5 bg-white rounded-lg flex items-center justify-center">
                      <Image
                        src={t.logo}
                        alt={`${t.company} logo`}
                        width={120}
                        height={40}
                        className="object-contain h-7 md:h-8 w-auto max-w-[100px] md:max-w-[120px]"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const step = getCardStep();
              if (step <= 0) return;
              // Scroll to the item in the middle set
              el.scrollTo({ left: step * (TOTAL + i), behavior: 'smooth' });
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 bg-primary-600'
                : 'w-2 bg-secondary-300 hover:bg-secondary-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        div[style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
