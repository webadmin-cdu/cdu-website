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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="h-4 w-4" />
            Academic Excellence
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Our Schools & Departments
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore 8 schools offering 57+ programs across engineering, pharmacy, management, sciences, and more.
          </p>
        </motion.div>

        {/* Schools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DEPARTMENTS.map((dept) => (
            <motion.div key={dept.id} variants={itemVariants}>
              <Link href={`/academics/departments/${dept.slug}`} className="group block">
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white/70 text-sm font-medium block mb-1 drop-shadow">
                          {dept.shortName}
                        </span>
                        <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-white/90 transition-colors drop-shadow-md">
                          {dept.name}
                        </h3>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 -translate-x-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="h-5 w-5 text-primary-800" />
                        </div>
                      </div>
                    </div>

                    {/* Description - shows on hover */}
                    <p className="text-white/80 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {dept.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
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
