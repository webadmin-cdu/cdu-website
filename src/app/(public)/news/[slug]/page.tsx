import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { NEWS_ITEMS } from '@/lib/constants/navigation';
import { NewsDetailContent } from './NewsDetailContent';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const allNews = [
  ...NEWS_ITEMS,
  {
    id: '4',
    title: 'New Research Center Inaugurated',
    excerpt: 'State-of-the-art research facility for AI and Machine Learning inaugurated on campus.',
    date: '2025-01-05',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&q=80',
    slug: 'research-center-inauguration',
  },
];

export async function generateStaticParams() {
  return allNews.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = allNews.find((n) => n.slug === slug);
  if (!news) return { title: 'News Not Found' };
  return {
    title: news.title,
    description: news.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = allNews.find((n) => n.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={news.title}
        showBreadcrumb={true}
      />
      <NewsDetailContent news={news} />
    </>
  );
}
