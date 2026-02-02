'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils/formatDate';

interface NewsDetailContentProps {
  news: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    slug: string;
  };
}

export function NewsDetailContent({ news }: NewsDetailContentProps) {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/news">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <Badge variant="primary">{news.category}</Badge>
            <span className="flex items-center text-neutral-500 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(news.date)}
            </span>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-neutral-600 mb-6">{news.excerpt}</p>
            <p className="text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="text-neutral-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-neutral-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
