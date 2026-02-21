import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Cinzel } from 'next/font/google';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { SkipToContent } from '@/components/shared/SkipToContent';
import { OrganizationSchema, WebsiteSchema } from '@/components/shared/StructuredData';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import './globals.css';

// Inter - Premium sans-serif for body text (used by top tech & academic sites)
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Playfair Display - Elegant high-contrast serif for headings (prestigious, academic)
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Cinzel - Classical display serif for logo (Roman-inspired)
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Chaitanya University',
    'Deemed University',
    'Engineering',
    'Pharmacy',
    'Management',
    'MBA',
    'B.Tech',
    'M.Tech',
    'Hyderabad',
    'Warangal',
    'India',
  ],
  authors: [{ name: SITE_CONFIG.shortName }],
  creator: SITE_CONFIG.shortName,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#C80E13' },
    { media: '(prefers-color-scheme: dark)', color: '#1E3A5F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data */}
        <OrganizationSchema />
        <WebsiteSchema searchUrl={`${SITE_CONFIG.url}/search`} />
      </head>
      <body className="font-sans antialiased">
        <SkipToContent />
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
