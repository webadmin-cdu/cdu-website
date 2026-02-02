import { strapiClient, extractStrapiData, extractStrapiSingleData } from './client';
import type {
  NewsArticle,
  Program,
  Department,
  Faculty,
  Event,
  Testimonial,
  Page,
  GlobalSettings,
} from './types';

// Cache durations (in seconds)
const CACHE = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
};

// News Queries
export async function getNews(page = 1, pageSize = 10) {
  const response = await strapiClient.getCollection<NewsArticle>('articles', {
    populate: ['featuredImage'],
    sort: ['publishedAt:desc'],
    pagination: { page, pageSize },
  }, CACHE.MEDIUM);

  return {
    articles: extractStrapiData(response),
    pagination: response.meta.pagination,
  };
}

export async function getNewsBySlug(slug: string) {
  const response = await strapiClient.findBySlug<NewsArticle>('articles', slug, {
    populate: ['featuredImage'],
  }, CACHE.MEDIUM);

  if (response.data.length === 0) return null;
  return extractStrapiData(response)[0];
}

export async function getLatestNews(limit = 3) {
  const response = await strapiClient.getCollection<NewsArticle>('articles', {
    populate: ['featuredImage'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: limit },
  }, CACHE.SHORT);

  return extractStrapiData(response);
}

// Programs Queries
export async function getPrograms(level?: 'undergraduate' | 'postgraduate' | 'doctoral') {
  const filters = level ? { level: { $eq: level } } : undefined;

  const response = await strapiClient.getCollection<Program>('programs', {
    populate: ['featuredImage', 'department'],
    filters,
    sort: ['name:asc'],
  }, CACHE.LONG);

  return extractStrapiData(response);
}

export async function getProgramBySlug(slug: string) {
  const response = await strapiClient.findBySlug<Program>('programs', slug, {
    populate: ['featuredImage', 'department'],
  }, CACHE.LONG);

  if (response.data.length === 0) return null;
  return extractStrapiData(response)[0];
}

// Departments Queries
export async function getDepartments() {
  const response = await strapiClient.getCollection<Department>('departments', {
    populate: ['featuredImage'],
    sort: ['name:asc'],
  }, CACHE.LONG);

  return extractStrapiData(response);
}

export async function getDepartmentBySlug(slug: string) {
  const response = await strapiClient.findBySlug<Department>('departments', slug, {
    populate: ['featuredImage', 'programs', 'faculty'],
  }, CACHE.LONG);

  if (response.data.length === 0) return null;
  return extractStrapiData(response)[0];
}

// Faculty Queries
export async function getFaculty(departmentSlug?: string) {
  const filters = departmentSlug
    ? { department: { slug: { $eq: departmentSlug } } }
    : undefined;

  const response = await strapiClient.getCollection<Faculty>('faculties', {
    populate: ['photo', 'department'],
    filters,
    sort: ['name:asc'],
  }, CACHE.LONG);

  return extractStrapiData(response);
}

export async function getFacultyBySlug(slug: string) {
  const response = await strapiClient.findBySlug<Faculty>('faculties', slug, {
    populate: ['photo', 'department'],
  }, CACHE.LONG);

  if (response.data.length === 0) return null;
  return extractStrapiData(response)[0];
}

// Events Queries
export async function getUpcomingEvents(limit = 5) {
  const now = new Date().toISOString();

  const response = await strapiClient.getCollection<Event>('events', {
    populate: ['featuredImage'],
    filters: { startDate: { $gte: now } },
    sort: ['startDate:asc'],
    pagination: { pageSize: limit },
  }, CACHE.SHORT);

  return extractStrapiData(response);
}

export async function getEvents(page = 1, pageSize = 10) {
  const response = await strapiClient.getCollection<Event>('events', {
    populate: ['featuredImage'],
    sort: ['startDate:desc'],
    pagination: { page, pageSize },
  }, CACHE.MEDIUM);

  return {
    events: extractStrapiData(response),
    pagination: response.meta.pagination,
  };
}

// Testimonials Queries
export async function getTestimonials(limit?: number) {
  const response = await strapiClient.getCollection<Testimonial>('testimonials', {
    populate: ['photo'],
    pagination: limit ? { pageSize: limit } : undefined,
  }, CACHE.LONG);

  return extractStrapiData(response);
}

// Pages Queries
export async function getPageBySlug(slug: string) {
  const response = await strapiClient.findBySlug<Page>('pages', slug, {
    populate: ['seo', 'seo.ogImage'],
  }, CACHE.LONG);

  if (response.data.length === 0) return null;
  return extractStrapiData(response)[0];
}

// Global Settings
export async function getGlobalSettings() {
  const response = await strapiClient.getSingleton<GlobalSettings>('global', {
    populate: ['logo', 'logoWhite', 'favicon', 'socialLinks'],
  }, CACHE.DAY);

  return extractStrapiSingleData(response);
}

// Search
export async function searchContent(query: string) {
  const [newsResponse, programsResponse] = await Promise.all([
    strapiClient.getCollection<NewsArticle>('articles', {
      filters: {
        $or: [
          { title: { $containsi: query } },
          { excerpt: { $containsi: query } },
        ],
      },
      pagination: { pageSize: 5 },
    }),
    strapiClient.getCollection<Program>('programs', {
      filters: {
        $or: [
          { name: { $containsi: query } },
          { description: { $containsi: query } },
        ],
      },
      pagination: { pageSize: 5 },
    }),
  ]);

  return {
    news: extractStrapiData(newsResponse),
    programs: extractStrapiData(programsResponse),
  };
}
