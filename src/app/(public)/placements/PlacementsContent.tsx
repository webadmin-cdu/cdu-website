'use client';

import Link from 'next/link';
import { TrendUp, Buildings, Users, ArrowRight } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const highlights = [
  { label: 'Placement Rate', value: '95%', icon: TrendUp },
  { label: 'Companies Visited', value: '200+', icon: Buildings },
  { label: 'Highest Package', value: '45 LPA', icon: TrendUp },
  { label: 'Students Placed', value: '2000+', icon: Users },
];

const sections = [
  {
    title: 'Placement Statistics',
    description: 'View detailed placement data including packages, companies, and trends.',
    href: '/placements/statistics',
  },
  {
    title: 'Our Recruiters',
    description: 'Explore the top companies that recruit from our campus.',
    href: '/placements/recruiters',
  },
  {
    title: 'Success Stories',
    description: 'Read testimonials from our alumni about their career journeys.',
    href: '/placements/testimonials',
  },
];

export function PlacementsContent() {
  return (
    <>
      {/* Highlights */}
      <section className="py-12 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center text-white">
                <item.icon className="h-10 w-10 mx-auto mb-3 text-accent-gold" />
                <div className="text-4xl font-bold mb-1">{item.value}</div>
                <div className="text-primary-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Explore"
            title="Placement Resources"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.title} href={section.href} className="group">
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary-600 mb-3 group-hover:text-accent-gold transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{section.description}</p>
                    <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-accent-gold transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-primary-600 mb-4">
            Ready to Start Your Career?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join Chaitanya University and get access to our extensive placement network.
          </p>
          <Link href="/admissions/how-to-apply">
            <Button size="lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
