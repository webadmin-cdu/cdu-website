'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';
import { formatShortDate } from '@/lib/utils/formatDate';
import { Badge } from '@/components/ui/Badge';
import type { NewsItem } from '@/types';

interface NewsCardProps {
  news: NewsItem;
  className?: string;
  variant?: 'default' | 'featured';
}

export function NewsCard({
  news,
  className,
  variant = 'default',
}: NewsCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={`/news/${news.slug}`}
        className={cn(
          'group block bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300',
          className
        )}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <Badge variant="primary" className="w-fit mb-3">
              {news.category}
            </Badge>
            <h3 className="text-2xl font-semibold text-primary-600 mb-3 group-hover:text-primary-500 transition-colors">
              {news.title}
            </h3>
            <p className="text-charcoal-600 mb-4">{news.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-charcoal-500 text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                {formatShortDate(news.date)}
              </div>
              <span className="inline-flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-500 transition-colors">
                Read More
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${news.slug}`}
      className={cn(
        'group block bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300',
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="primary" className="text-xs">
            {news.category}
          </Badge>
          <span className="text-charcoal-500 text-xs flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formatShortDate(news.date)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-primary-600 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-charcoal-600 text-sm line-clamp-2">{news.excerpt}</p>
      </div>
    </Link>
  );
}
