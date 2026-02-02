import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { NewsCard } from '@/components/shared/NewsCard';
import { NEWS_ITEMS } from '@/lib/constants/navigation';

export const metadata = {
  title: 'News & Updates',
  description: 'Latest news and updates from Chaitanya University.',
};

const moreNews = [
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
  {
    id: '5',
    title: 'MoU Signed with Leading Tech Company',
    excerpt: 'Partnership to provide internship and placement opportunities for students.',
    date: '2025-01-01',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    slug: 'mou-tech-company',
  },
  {
    id: '6',
    title: 'Sports Team Wins Inter-University Championship',
    excerpt: 'Our cricket team brings home the trophy from the regional inter-university tournament.',
    date: '2024-12-20',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&q=80',
    slug: 'sports-championship-win',
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Updates"
        description="Stay informed about the latest happenings at Chaitanya University."
      />

      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
