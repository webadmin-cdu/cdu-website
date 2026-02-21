import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chaitanya (Deemed to be University)',
    short_name: 'Chaitanya University',
    description: 'Official website of Chaitanya (Deemed to be University) - A premier institution offering UG, PG, and Doctoral programs in Engineering, Pharmacy, Management, and Sciences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#270114',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['education', 'university'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Apply Now',
        short_name: 'Apply',
        description: 'Apply for admission',
        url: '/admissions/how-to-apply',
      },
      {
        name: 'Programs',
        short_name: 'Programs',
        description: 'View all programs',
        url: '/academics/programs',
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch',
        url: '/contact',
      },
    ],
  };
}
