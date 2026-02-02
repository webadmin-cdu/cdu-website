// Strapi CMS Content Types
// These types define the structure of content from Strapi CMS

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: Record<string, never>;
}

export interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: StrapiMediaFormat;
        small?: StrapiMediaFormat;
        medium?: StrapiMediaFormat;
        large?: StrapiMediaFormat;
      };
      url: string;
      previewUrl: string | null;
      provider: string;
      createdAt: string;
      updatedAt: string;
    };
  } | null;
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Content Types

export interface NewsArticle {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage: StrapiMedia;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Program {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  duration: string;
  level: 'undergraduate' | 'postgraduate' | 'doctoral';
  eligibility: string;
  curriculum: string;
  careerProspects: string[];
  fees: {
    tuition: number;
    hostel: number;
    other: number;
  };
  department: StrapiSingleResponse<Department>;
  featuredImage: StrapiMedia;
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  vision: string;
  mission: string;
  programs: StrapiCollectionResponse<Program>;
  faculty: StrapiCollectionResponse<Faculty>;
  featuredImage: StrapiMedia;
  createdAt: string;
  updatedAt: string;
}

export interface Faculty {
  name: string;
  slug: string;
  designation: string;
  qualification: string;
  specialization: string;
  email: string;
  phone: string;
  bio: string;
  department: StrapiSingleResponse<Department>;
  photo: StrapiMedia;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  title: string;
  slug: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  registrationUrl: string;
  capacity: number;
  featuredImage: StrapiMedia;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  batch: string;
  quote: string;
  photo: StrapiMedia;
  createdAt: string;
  updatedAt: string;
}

export interface Page {
  title: string;
  slug: string;
  content: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    ogImage: StrapiMedia;
  };
  createdAt: string;
  updatedAt: string;
}

export interface GlobalSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: StrapiMedia;
  logoWhite: StrapiMedia;
  favicon: StrapiMedia;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}
