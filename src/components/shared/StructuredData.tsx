import { SITE_CONFIG } from '@/lib/constants/siteConfig';

interface OrganizationSchemaProps {
  type?: 'University' | 'EducationalOrganization' | 'CollegeOrUniversity';
}

export function OrganizationSchema({ type = 'CollegeOrUniversity' }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: '1991',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.addresses[0].address,
      addressLocality: 'Hanamkonda',
      addressRegion: 'Telangana',
      postalCode: '506001',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91-${SITE_CONFIG.contact.phones.reception}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu'],
      },
      {
        '@type': 'ContactPoint',
        telephone: `+91-${SITE_CONFIG.contact.phones.admissions}`,
        contactType: 'admissions',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Telugu'],
      },
    ],
    sameAs: [
      SITE_CONFIG.contact.socialMedia.facebook,
      SITE_CONFIG.contact.socialMedia.linkedin,
      SITE_CONFIG.contact.socialMedia.youtube,
    ].filter(Boolean),
    hasCredential: SITE_CONFIG.accreditations.map((acc) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: acc.name,
      description: acc.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  duration?: string;
  url: string;
}

export function CourseSchema({ name, description, provider, duration, url }: CourseSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: provider || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    ...(duration && { timeRequired: duration }),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  items: { question: string; answer: string }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
  image?: string;
}

export function EventSchema({ name, description, startDate, endDate, location, url, image }: EventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warangal',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'CollegeOrUniversity',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    ...(url && { url }),
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebsiteSchemaProps {
  searchUrl?: string;
}

export function WebsiteSchema({ searchUrl }: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    ...(searchUrl && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${searchUrl}?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
