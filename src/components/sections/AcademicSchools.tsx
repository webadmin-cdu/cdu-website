'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from '@phosphor-icons/react';
import { DEPARTMENTS } from '@/lib/constants/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

// Bento layout per slug — only applies on lg+
const gridLayout: Record<string, string> = {
  'engineering':              'lg:col-span-2 lg:row-span-2',
  'pharmacy':                 '',
  'sciences-humanities':      'lg:col-span-1 lg:row-span-2',
  'allied-health-sciences':   '',
  'commerce-management':      '',
  'agriculture':              '',
  'nursing':                  '',
};

function DeptCard({ dept }: { dept: (typeof DEPARTMENTS)[number] }) {
  const placement = gridLayout[dept.slug] || '';
  const isFeatured = placement.includes('row-span-2');

  return (
    <motion.div variants={itemVariants} className={placement}>
      <Link href={`/academics/departments/${dept.slug}`} className="group block h-full">
        <div className={`relative rounded-2xl overflow-hidden ${isFeatured ? 'h-64 lg:h-full' : 'h-64'}`}>
          <Image
            src={dept.image}
            alt={dept.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />

          {/* Program count badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
              {dept.programs} Programs
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className={`text-white font-bold leading-tight group-hover:text-white/90 transition-colors drop-shadow-md ${isFeatured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                  {dept.name}
                </h3>
                <p className={`text-white/70 text-sm mt-2 line-clamp-2 ${isFeatured ? 'lg:opacity-100' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {dept.description}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shrink-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="h-5 w-5 text-primary-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function AcademicSchools() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Schools & Departments
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our academic curriculum spans 7 departments and 57+ programs, fostering collaborative learning through research projects, guided by dedicated faculty, industry experts, and international visiting professors.
          </p>
        </motion.div>

        {/* Bento Grid — stacks on mobile, asymmetric on lg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px] gap-4 md:gap-5"
        >
          {DEPARTMENTS.map((dept) => (
            <DeptCard key={dept.id} dept={dept} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/academics/departments"
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-primary-700/25"
          >
            View All Departments
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
