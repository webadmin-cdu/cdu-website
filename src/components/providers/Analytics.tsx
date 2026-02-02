'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

    // @ts-expect-error - gtag is added by the script
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);
}

function PageTracker() {
  usePageTracking();
  return null;
}

export function Analytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
    </>
  );
}

// Event tracking helper
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (!GA_MEASUREMENT_ID) return;

  // @ts-expect-error - gtag is added by the script
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Specific event tracking functions
export const analyticsEvents = {
  // Form submissions
  contactFormSubmit: () => trackEvent('submit', 'Contact', 'Contact Form'),
  newsletterSignup: () => trackEvent('signup', 'Newsletter', 'Footer Newsletter'),
  admissionInquiry: (program?: string) => trackEvent('inquiry', 'Admission', program),

  // Navigation
  programView: (programName: string) => trackEvent('view', 'Program', programName),
  departmentView: (deptName: string) => trackEvent('view', 'Department', deptName),

  // Downloads
  brochureDownload: (brochure: string) => trackEvent('download', 'Brochure', brochure),

  // Engagement
  videoPlay: (videoTitle: string) => trackEvent('play', 'Video', videoTitle),
  galleryView: () => trackEvent('view', 'Gallery'),

  // Outbound links
  outboundLink: (url: string) => trackEvent('click', 'Outbound Link', url),
};
