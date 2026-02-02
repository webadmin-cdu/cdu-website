import { MetadataRoute } from 'next';
import { DEPARTMENTS, NEWS_ITEMS } from '@/lib/constants/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.chaitanya.edu.in';

// Program slugs for dynamic routes
const programSlugs = [
  'btech-computer-science-engineering',
  'btech-ai-machine-learning',
  'bpharm',
  'mba',
  'pharmd',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    // About section
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/leadership`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/vision-mission`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/awards`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about/accreditation`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Academics section
    {
      url: `${BASE_URL}/academics`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/academics/departments`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/programs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/academics/faculty`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/academics/research`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Admissions section
    {
      url: `${BASE_URL}/admissions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/admissions/how-to-apply`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/admissions/fee-structure`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/admissions/scholarships`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/admissions/international`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Campus Life section
    {
      url: `${BASE_URL}/campus-life`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/campus-life/facilities`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/campus-life/clubs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/campus-life/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/campus-life/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    // Placements section
    {
      url: `${BASE_URL}/placements`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/placements/statistics`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/placements/recruiters`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/placements/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Other pages
    {
      url: `${BASE_URL}/news`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/student-portal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic department pages
  const departmentPages: MetadataRoute.Sitemap = DEPARTMENTS.map((dept) => ({
    url: `${BASE_URL}/academics/departments/${dept.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic program pages
  const programPages: MetadataRoute.Sitemap = programSlugs.map((slug) => ({
    url: `${BASE_URL}/academics/programs/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic news pages
  const newsPages: MetadataRoute.Sitemap = NEWS_ITEMS.map((news) => ({
    url: `${BASE_URL}/news/${news.slug}`,
    lastModified: new Date(news.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...departmentPages, ...programPages, ...newsPages];
}
