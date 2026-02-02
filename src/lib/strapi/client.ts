import type { StrapiCollectionResponse, StrapiSingleResponse } from './types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  populate?: string | string[] | Record<string, unknown>;
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  fields?: string[];
}

function buildQueryString(options: FetchOptions): string {
  const params = new URLSearchParams();

  if (options.populate) {
    if (typeof options.populate === 'string') {
      params.append('populate', options.populate);
    } else if (Array.isArray(options.populate)) {
      options.populate.forEach((p) => params.append('populate', p));
    } else {
      params.append('populate', JSON.stringify(options.populate));
    }
  }

  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value as Record<string, unknown>).forEach(([op, val]) => {
          params.append(`filters[${key}][${op}]`, String(val));
        });
      } else {
        params.append(`filters[${key}]`, String(value));
      }
    });
  }

  if (options.sort) {
    if (Array.isArray(options.sort)) {
      options.sort.forEach((s) => params.append('sort', s));
    } else {
      params.append('sort', options.sort);
    }
  }

  if (options.pagination) {
    if (options.pagination.page) {
      params.append('pagination[page]', String(options.pagination.page));
    }
    if (options.pagination.pageSize) {
      params.append('pagination[pageSize]', String(options.pagination.pageSize));
    }
  }

  if (options.fields) {
    options.fields.forEach((f) => params.append('fields', f));
  }

  return params.toString();
}

async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
  revalidate?: number
): Promise<T> {
  const queryString = buildQueryString(options);
  const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ''}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: {
      revalidate: revalidate ?? 60, // Default 60 seconds
    },
  });

  if (!res.ok) {
    console.error(`Strapi API error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
  }

  return res.json();
}

// Strapi Client
export const strapiClient = {
  // Generic methods
  async getCollection<T>(
    contentType: string,
    options?: FetchOptions,
    revalidate?: number
  ): Promise<StrapiCollectionResponse<T>> {
    return fetchAPI<StrapiCollectionResponse<T>>(contentType, options, revalidate);
  },

  async getSingle<T>(
    contentType: string,
    id: number | string,
    options?: FetchOptions,
    revalidate?: number
  ): Promise<StrapiSingleResponse<T>> {
    return fetchAPI<StrapiSingleResponse<T>>(`${contentType}/${id}`, options, revalidate);
  },

  async getSingleton<T>(
    contentType: string,
    options?: FetchOptions,
    revalidate?: number
  ): Promise<StrapiSingleResponse<T>> {
    return fetchAPI<StrapiSingleResponse<T>>(contentType, options, revalidate);
  },

  // Find by slug
  async findBySlug<T>(
    contentType: string,
    slug: string,
    options?: Omit<FetchOptions, 'filters'>,
    revalidate?: number
  ): Promise<StrapiCollectionResponse<T>> {
    return fetchAPI<StrapiCollectionResponse<T>>(
      contentType,
      {
        ...options,
        filters: { slug: { $eq: slug } },
      },
      revalidate
    );
  },
};

// Helper to get media URL
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// Helper to extract data from Strapi response
export function extractStrapiData<T>(
  response: StrapiCollectionResponse<T>
): Array<{ id: number } & T> {
  return response.data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
}

export function extractStrapiSingleData<T>(
  response: StrapiSingleResponse<T>
): { id: number } & T {
  return {
    id: response.data.id,
    ...response.data.attributes,
  };
}
