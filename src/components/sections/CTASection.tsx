'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone } from '@phosphor-icons/react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

export function CTASection() {
  return (
    <section className="py-section bg-secondary-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-display-md font-bold mb-6">
            Begin Your Journey at Chaitanya University
          </h2>
          <p className="text-lg text-secondary-200 mb-10 leading-relaxed">
            Join thousands of students who have transformed their lives through
            quality education. Applications are now open for the 2026 academic
            year.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions/how-to-apply">
              <Button
                size="lg"
                className="min-w-[200px] bg-primary-600 hover:bg-primary-700 text-white"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={`tel:${SITE_CONFIG.contact.phones.admissions}`}>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Admissions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
