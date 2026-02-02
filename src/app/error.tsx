'use client';

import { useEffect } from 'react';
import { Warning, ArrowsClockwise, House } from '@phosphor-icons/react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Application Error:', error);

    // In production, you would send this to an error tracking service like Sentry
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-50 px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <Warning className="h-10 w-10 text-red-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-charcoal-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-charcoal-600 mb-4 max-w-md mx-auto">
          An unexpected error occurred. Please try again or contact support if
          the problem persists.
        </p>
        {error.digest && (
          <p className="text-sm text-charcoal-400 mb-8">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => reset()}>
            <ArrowsClockwise className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="secondary" size="lg">
              <House className="mr-2 h-5 w-5" />
              Go to Housepage
            </Button>
          </Link>
        </div>
        <p className="mt-8 text-sm text-charcoal-500">
          Need help?{' '}
          <Link href="/contact" className="text-primary-600 hover:text-primary-700 underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
