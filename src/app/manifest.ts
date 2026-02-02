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
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
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
    screenshots: [
      {
        src: '/screenshots/homepage.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Apply Now',
        short_name: 'Apply',
        description: 'Apply for admission',
        url: '/admissions/how-to-apply',
        icons: [{ src: '/icons/apply-icon.png', sizes: '96x96' }],
      },
      {
        name: 'Programs',
        short_name: 'Programs',
        description: 'View all programs',
        url: '/academics/programs',
        icons: [{ src: '/icons/programs-icon.png', sizes: '96x96' }],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch',
        url: '/contact',
        icons: [{ src: '/icons/contact-icon.png', sizes: '96x96' }],
      },
    ],
  };
}
