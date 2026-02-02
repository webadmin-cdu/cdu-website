'use client';

import Link from 'next/link';
import { ArrowRight, FileText, CurrencyInr, Trophy, Globe } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const admissionLinks = [
  {
    icon: FileText,
    title: 'How to Apply',
    description: 'Step-by-step guide to the application process.',
    href: '/admissions/how-to-apply',
  },
  {
    icon: CurrencyInr,
    title: 'Fee Structure',
    description: 'Detailed breakdown of tuition and other fees.',
    href: '/admissions/fee-structure',
  },
  {
    icon: Trophy,
    title: 'Scholarships',
    description: 'Merit-based and need-based scholarship opportunities.',
    href: '/admissions/scholarships',
  },
  {
    icon: Globe,
    title: 'International Students',
    description: 'Information for students from abroad.',
    href: '/admissions/international',
  },
];

const importantDates = [
  { event: 'Applications Open', date: 'January 15, 2026' },
  { event: 'Early Decision Deadline', date: 'March 31, 2026' },
  { event: 'Regular Deadline', date: 'May 31, 2026' },
  { event: 'Classes Begin', date: 'August 1, 2026' },
];

export function AdmissionsContent() {
  return (
    <>
      {/* Quick Links */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionLinks.map((link) => (
              <Link key={link.title} href={link.href} className="group">
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-6">
                    <link.icon className="h-7 w-7 text-primary-600 mb-4" />
                    <h3 className="text-lg font-semibold text-primary-600 mb-2 group-hover:text-accent-gold transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Mark Your Calendar"
            title="Important Dates"
            description="Key dates for the 2026 admission cycle."
          />

          <div className="max-w-2xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={item.event}
                      className={`flex justify-between items-center py-3 ${
                        index < importantDates.length - 1
                          ? 'border-b border-neutral-200'
                          : ''
                      }`}
                    >
                      <span className="font-medium text-neutral-700">
                        {item.event}
                      </span>
                      <span className="text-primary-600 font-semibold">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-white mb-4">
            Ready to Apply?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Our admissions team is here
            to help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions/how-to-apply">
              <Button variant="secondary" size="lg">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
