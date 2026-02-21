'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Cursor } from '@phosphor-icons/react';

export function AdmissionsBanner() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white overflow-hidden border-b-4 border-secondary-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Student Image */}
          <div className="flex-shrink-0 relative w-48 md:w-56 lg:w-64 self-end">
            {/* Decorative dots */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 opacity-20">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                ))}
              </div>
            </div>
            {/* Small decorative accents */}
            <div className="absolute -right-2 top-4 text-primary-600 text-xl font-bold">×</div>
            <div className="absolute left-2 top-8 w-2 h-2 rounded-full border-2 border-primary-600" />

            <Image
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=500&fit=crop&q=80"
              alt="Students at Chaitanya University"
              width={260}
              height={320}
              className="relative z-10 object-cover object-top"
              unoptimized
            />
          </div>

          {/* Programs Text */}
          <div className="flex-1 text-center px-4 py-6 md:py-0">
            <p className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-secondary-800 uppercase tracking-wide leading-relaxed">
              Engineering & Technology,
              <br />
              Pharmacy, Allied Health Sciences,
              <br />
              Agriculture, Commerce & Management
            </p>
          </div>

          {/* Admissions CTA */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3 py-6 md:py-0 md:pr-4">
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-secondary-800 uppercase tracking-tight text-center leading-tight">
              Admissions
              <br />
              <span className="text-primary-600">Open</span>
            </h3>
            <Link
              href="/admissions/how-to-apply"
              className="group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg md:text-xl uppercase px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Apply Now
              <Cursor className="h-5 w-5 group-hover:translate-x-1 transition-transform" weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
