'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

const quickLinks = [
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Vision & Mission', href: '/about/vision-mission' },
  { label: 'Awards & Recognition', href: '/about/awards' },
  { label: 'Accreditation', href: '/about/accreditation' },
];

const milestones = [
  { year: '1991', event: 'Foundation of Chaitanya Group of Institutions' },
  { year: '2000', event: 'Engineering College established' },
  { year: '2008', event: 'Pharmacy College established' },
  { year: '2015', event: 'Deemed University status granted by UGC' },
  { year: '2020', event: 'NAAC Accreditation received' },
  { year: '2024', event: '10,000+ students enrolled across programs' },
];

export function AboutContent() {
  return (
    <>
      {/* Quick Links */}
      <section className="bg-primary-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Empowering Minds Since 1991"
                align="left"
              />
              <div className="space-y-4 text-neutral-600">
                <p>
                  Chaitanya (Deemed to be University) is a premier institution
                  of higher education in India, dedicated to nurturing talent
                  and creating opportunities for students to excel in their
                  chosen fields.
                </p>
                <p>
                  Established in 1991, we have grown from a single institution
                  to a comprehensive university offering undergraduate,
                  postgraduate, and doctoral programs across Engineering,
                  Pharmacy, Management, and Sciences.
                </p>
                <p>
                  Our commitment to academic excellence, industry-relevant
                  curriculum, and holistic development has made us one of the
                  most sought-after universities in the region.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about/vision-mission">
                  <Button>
                    Our Vision & Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
              <Image
                src={PLACEHOLDER_IMAGES.hero.campus}
                alt="Chaitanya University Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Accreditations"
            title="Recognized for Excellence"
            description="Our programs are accredited by leading bodies ensuring quality education."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {SITE_CONFIG.accreditations.map((accred) => (
              <Card key={accred.name} variant="elevated" className="text-center">
                <CardContent className="p-8">
                  <CheckCircle className="h-7 w-7 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {accred.name}
                  </h3>
                  <p className="text-neutral-600">{accred.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments in our journey of academic excellence."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200" />

              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-6 pb-8">
                  <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-neutral-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
