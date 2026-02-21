'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowCircleRight } from '@phosphor-icons/react';
import { NEWS_ITEMS } from '@/lib/constants/navigation';

function formatDateParts(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.toLocaleString('en', { month: 'short' }).toUpperCase();
  return { day, month };
}

export function NewsEvents() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const updateProgress = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by one card width + gap
    const card = el.querySelector<HTMLElement>('[data-news-card]');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 28; // card width + gap
    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (autoplayPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('next');
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplayPaused, scroll]);

  // Track scroll progress
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateProgress, { passive: true });
    return () => el.removeEventListener('scroll', updateProgress);
  }, [updateProgress]);

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-10">
          Happenings At Chaitanya
        </h2>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setAutoplayPaused(true)}
          onMouseLeave={() => setAutoplayPaused(false)}
          className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 mb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {NEWS_ITEMS.map((news) => {
            const { day, month } = formatDateParts(news.date);

            return (
              <Link
                href={`/news/${news.slug}`}
                key={news.id}
                data-news-card
                className="group block flex-none w-[85%] sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] snap-start"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-xl mb-4" style={{ overflow: 'visible' }}>
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  {/* Date Badge */}
                  <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 10 }} className="date-badge w-[5.5rem] h-[5.5rem] rounded-bl-2xl flex flex-col items-center justify-center shadow-xl">
                    <span className="relative z-10 block text-4xl font-extrabold text-white leading-none drop-shadow-sm">{day}</span>
                    <span className="relative z-10 block text-sm font-bold tracking-wider text-white/90 mt-1 drop-shadow-sm">{month}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-base md:text-lg font-bold text-primary-900 leading-snug mb-2 line-clamp-3 group-hover:text-primary-600 transition-colors">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {news.excerpt}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between">
          {/* Nav Arrows + Progress */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('prev')}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" weight="bold" />
            </button>
            <button
              onClick={() => scroll('next')}
              className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" weight="bold" />
            </button>

            {/* Progress Bar */}
            <div className="w-24 h-0.5 bg-gray-200 rounded-full ml-2 overflow-hidden">
              <div
                className="h-full bg-primary-600 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progress * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* View All */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            View All News
            <ArrowCircleRight className="w-6 h-6 text-primary-600" weight="fill" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-badge {
          background: linear-gradient(135deg, #0D1B2A 0%, #1E3A5F 45%, #C80E13 100%);
          position: relative;
          isolation: isolate;
        }
        .date-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px;
          opacity: 0.14;
          mix-blend-mode: overlay;
          z-index: 1;
        }
        .date-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 30% 30%, rgba(212, 165, 40, 0.15) 0%, transparent 60%);
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
