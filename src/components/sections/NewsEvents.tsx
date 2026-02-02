'use client';

import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { NewsCard } from '@/components/shared/NewsCard';
import { Button } from '@/components/ui/Button';
import { NEWS_ITEMS } from '@/lib/constants/navigation';

export function NewsEvents() {
  const featuredNews = NEWS_ITEMS[0];
  const otherNews = NEWS_ITEMS.slice(1);

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Stay Updated"
          title="News & Events"
          description="Stay informed about the latest happenings, achievements, and upcoming events at Chaitanya University."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <NewsCard news={featuredNews} variant="featured" />
          )}

          {/* Other News */}
          <div className="space-y-6">
            {otherNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/news">
            <Button variant="outline" size="lg">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
