'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { DEPARTMENTS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import {
  Cpu,
  Radio,
  Pill,
  Briefcase,
  Gear,
  Buildings,
  Flask,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from '@phosphor-icons/react';

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'management', label: 'Management' },
];

// Department icons mapping
const departmentIcons: { [key: string]: typeof Cpu } = {
  cse: Cpu,
  ece: Radio,
  pharmacy: Pill,
  mba: Briefcase,
  mech: Gear,
  civil: Buildings,
  science: Flask,
  default: BookOpen,
};

// Staggered animation variants
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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export function ProgramsShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDepartments = DEPARTMENTS.filter((dept) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'engineering') {
      return ['cse', 'ece', 'mech', 'civil'].includes(dept.id);
    }
    if (activeCategory === 'pharmacy') {
      return dept.id === 'pharmacy';
    }
    if (activeCategory === 'management') {
      return dept.id === 'mba';
    }
    return true;
  });

  return (
    <section className="py-section bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Academic Excellence"
          title="Our Programs"
          description="Discover world-class undergraduate, postgraduate, and doctoral programs designed to prepare you for success in your chosen field."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-primary-700 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:text-primary-700 border border-neutral-200'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredDepartments.map((dept) => {
              const IconComponent = departmentIcons[dept.id] || departmentIcons.default;

              return (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link href={`/academics/departments/${dept.slug}`}>
                    <div className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-neutral-100 hover:border-secondary-200 h-full relative overflow-hidden">
                      {/* Icon */}
                      <IconComponent className="h-8 w-8 text-primary-700 mb-5" />

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors font-serif">
                        {dept.name}
                      </h3>

                      <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {dept.description}
                      </p>

                      {/* Programs count */}
                      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                        <GraduationCap className="h-4 w-4 text-secondary-500" />
                        <span>{dept.programs} Programs Available</span>
                      </div>

                      {/* Explore link */}
                      <div className="flex items-center gap-2 text-secondary-600 font-medium text-sm group-hover:text-secondary-700 transition-colors">
                        <span>Explore Department</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* Gold accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary-500 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/academics/programs">
            <Button
              variant="outline"
              size="lg"
              className="border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white rounded-xl"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
