'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { RECRUITER_LOGOS_FULL } from '@/lib/constants/recruiterLogos';
import { ArrowRight } from '@phosphor-icons/react';

export function PlacementPartners() {
  // Triple the recruiters for seamless infinite scroll
  const allRecruiters = [...RECRUITER_LOGOS_FULL, ...RECRUITER_LOGOS_FULL, ...RECRUITER_LOGOS_FULL];

  return (
    <section className="py-section bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Recruiters"
          title="Top Companies Hire From Us"
          description="Our graduates are recruited by leading companies across IT, Pharma, Finance, and Engineering sectors."
        />
      </div>

      {/* Marquee Container */}
      <div className="relative mt-12">
        {/* Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-white/80 z-10 pointer-events-none" />

        {/* Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-white/80 z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee hover:pause-animation">
          {allRecruiters.map((company, index) => (
            <div
              key={`${company.slug}-${index}`}
              className="flex-none mx-3 md:mx-4"
            >
              <div className="w-32 md:w-40 h-16 md:h-20 bg-white rounded-xl shadow-soft flex items-center justify-center p-3 hover:shadow-medium hover:scale-105 transition-all duration-300 border border-neutral-100">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats and CTA */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-700 font-serif">150+</div>
              <div className="text-sm text-neutral-600 mt-1">Recruiting Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-700 font-serif">95%</div>
              <div className="text-sm text-neutral-600 mt-1">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-700 font-serif">12 LPA</div>
              <div className="text-sm text-neutral-600 mt-1">Highest Package</div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/placements/recruiters"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-xl hover:bg-primary-600 transition-colors font-medium"
          >
            View All Recruiters
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
