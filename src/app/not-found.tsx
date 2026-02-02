'use client';

import Link from 'next/link';
import { House, ArrowLeft } from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold text-primary-600">404</span>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              <House className="mr-2 h-5 w-5" />
              Go to Housepage
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
