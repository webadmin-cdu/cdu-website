'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Cursor } from '@phosphor-icons/react';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-neutral-100 via-white to-neutral-50 border-t border-neutral-200">
      {/* Decorative elements — hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute left-[18%] top-6 text-primary-600 text-lg font-bold select-none" aria-hidden="true">&times;</div>
        <div className="absolute right-[35%] top-5 text-primary-600 text-sm font-bold select-none" aria-hidden="true">&times;</div>
        <div className="absolute left-[12%] bottom-8 w-2 h-2 rounded-full border-2 border-primary-600" aria-hidden="true" />
        <div className="absolute right-[28%] bottom-10 w-1.5 h-1.5 rounded-full bg-primary-600" aria-hidden="true" />
        <div className="absolute left-[22%] bottom-6 opacity-20" aria-hidden="true">
          <div className="grid grid-cols-5 gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-secondary-800 rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute right-[42%] top-4 opacity-20" aria-hidden="true">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-secondary-800 rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute left-[30%] top-3 w-3 h-3 rounded-full border-2 border-primary-600/30" aria-hidden="true" />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Student image */}
        <div className="hidden md:block flex-shrink-0 relative w-64 md:w-80 lg:w-[420px] self-end order-1">
          <Image
            src="/images/students-cdu.png"
            alt="Students at Chaitanya University"
            width={420}
            height={500}
            className="relative z-10 object-contain object-bottom w-full h-auto"
            unoptimized
          />
        </div>

        {/* Programs text — center */}
        <div className="flex-1 text-center px-4 py-6 md:py-0 order-1 md:order-2">
          <p className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-black text-secondary-900 uppercase tracking-wide leading-relaxed">
            Engineering &amp; Technology,
            <br />
            Pharmacy, Allied Health Sciences,
            <br />
            Agriculture, Commerce &amp; Management
          </p>
        </div>

        {/* Admissions CTA — right */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3 md:gap-4 px-4 pb-6 md:pb-0 md:py-8 md:pr-6 lg:pr-10 order-3">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-center leading-none">
            <span className="text-secondary-900">Admissions</span>
            <br />
            <span className="text-primary-600">Open</span>
          </h3>
          <Link
            href="/admissions/how-to-apply"
            className="group relative inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-extrabold text-base md:text-lg lg:text-xl uppercase px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 hover:scale-105"
          >
            Apply Now
            <Cursor className="h-5 w-5 group-hover:translate-x-1 transition-transform" weight="fill" />
          </Link>
        </div>
      </div>
    </section>
  );
}
