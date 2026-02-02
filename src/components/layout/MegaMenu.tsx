'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { ArrowRight, GraduationCap, Users, Buildings, Trophy, BookOpen, Flask, Briefcase, Globe } from '@phosphor-icons/react';

interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenuData {
  columns: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
    cta: string;
  };
  quickStats?: {
    label: string;
    value: string;
  }[];
}

// Extended navigation data for mega menus
export const MEGA_MENU_DATA: Record<string, MegaMenuData> = {
  About: {
    columns: [
      {
        title: 'Our University',
        items: [
          { label: 'Overview', href: '/about', description: 'Learn about our history and mission' },
          { label: 'Vision & Mission', href: '/about/vision-mission', description: 'Our guiding principles' },
          { label: 'Leadership', href: '/about/leadership', description: 'Meet our leaders' },
        ],
      },
      {
        title: 'Recognition',
        items: [
          { label: 'Accreditation', href: '/about/accreditation', description: 'NAAC, UGC, AICTE approvals' },
          { label: 'Awards & Recognition', href: '/about/awards', description: 'Our achievements' },
          { label: 'Rankings', href: '/about/accreditation#rankings', description: 'NIRF and other rankings' },
        ],
      },
    ],
    featured: {
      title: 'Deemed to be University',
      description: 'Established in 2008, Chaitanya University is committed to academic excellence and holistic development of students.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop&q=80',
      href: '/about',
      cta: 'Discover Our Story',
    },
    quickStats: [
      { label: 'Established', value: '2008' },
      { label: 'Students', value: '5000+' },
      { label: 'Faculty', value: '200+' },
    ],
  },
  Academics: {
    columns: [
      {
        title: 'Programs',
        items: [
          { label: 'Undergraduate (UG)', href: '/academics/programs?level=ug', description: 'B.Tech, B.Pharm, BBA, BCA & more' },
          { label: 'Postgraduate (PG)', href: '/academics/programs?level=pg', description: 'M.Tech, M.Pharm, MBA, MCA & more' },
          { label: 'Doctoral (Ph.D)', href: '/academics/programs?level=phd', description: '14 research programs' },
          { label: 'All Programs', href: '/academics/programs', description: 'Browse all 57+ programs' },
        ],
      },
      {
        title: 'Schools',
        items: [
          { label: 'Engineering', href: '/academics/departments/computer-science-engineering', description: 'CSE, ECE, Civil, Mechanical' },
          { label: 'Pharmacy', href: '/academics/departments/pharmacy', description: 'B.Pharm, M.Pharm, Pharm.D' },
          { label: 'Management', href: '/academics/departments/management-studies', description: 'MBA, BBA, B.Com' },
          { label: 'Sciences', href: '/academics/departments/sciences', description: 'BSc, MSc programs' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Faculty Directory', href: '/academics/faculty', description: 'Meet our professors' },
          { label: 'Research', href: '/academics/research', description: 'Research initiatives' },
          { label: 'Departments', href: '/academics/departments', description: 'All departments' },
        ],
      },
    ],
    featured: {
      title: '57+ Programs',
      description: 'Choose from a wide range of undergraduate, postgraduate, and doctoral programs across 8 schools.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&q=80',
      href: '/academics/programs',
      cta: 'Explore Programs',
    },
  },
  Admissions: {
    columns: [
      {
        title: 'Apply Now',
        items: [
          { label: 'How to Apply', href: '/admissions/how-to-apply', description: 'Step-by-step guide' },
          { label: 'Eligibility Criteria', href: '/admissions/how-to-apply#eligibility', description: 'Requirements for admission' },
          { label: 'Application Portal', href: '/admissions/how-to-apply#apply', description: 'Start your application' },
        ],
      },
      {
        title: 'Fees & Aid',
        items: [
          { label: 'Fee Structure', href: '/admissions/fee-structure', description: 'Program-wise fees' },
          { label: 'Scholarships', href: '/admissions/scholarships', description: 'Merit & need-based aid' },
          { label: 'Payment Options', href: '/admissions/fee-structure#payment', description: 'Flexible payment plans' },
        ],
      },
      {
        title: 'International',
        items: [
          { label: 'International Students', href: '/admissions/international', description: 'Study in India' },
          { label: 'Visa Assistance', href: '/admissions/international#visa', description: 'Support for visas' },
        ],
      },
    ],
    featured: {
      title: 'Admissions 2026 Open',
      description: 'Join Chaitanya University and shape your future with quality education and excellent placement support.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop&q=80',
      href: '/admissions/how-to-apply',
      cta: 'Apply Now',
    },
  },
  'Campus Life': {
    columns: [
      {
        title: 'Experience',
        items: [
          { label: 'Campus Facilities', href: '/campus-life/facilities', description: 'World-class infrastructure' },
          { label: 'Clubs & Activities', href: '/campus-life/clubs', description: 'Student organizations' },
          { label: 'Events', href: '/campus-life/events', description: 'Cultural & technical events' },
        ],
      },
      {
        title: 'Explore',
        items: [
          { label: 'Photo Gallery', href: '/campus-life/gallery', description: 'Campus in pictures' },
          { label: 'Virtual Tour', href: '/campus-life/gallery#tour', description: '360° campus tour' },
          { label: 'Hostel & Dining', href: '/campus-life/facilities#hostel', description: 'Residential facilities' },
        ],
      },
    ],
    featured: {
      title: 'Vibrant Campus Life',
      description: 'Experience a dynamic campus with modern facilities, sports amenities, and a thriving student community.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&q=80',
      href: '/campus-life',
      cta: 'Explore Campus',
    },
  },
  Placements: {
    columns: [
      {
        title: 'Career Services',
        items: [
          { label: 'Placement Statistics', href: '/placements/statistics', description: '95% placement rate' },
          { label: 'Our Recruiters', href: '/placements/recruiters', description: '150+ companies' },
          { label: 'Success Stories', href: '/placements/testimonials', description: 'Alumni achievements' },
        ],
      },
      {
        title: 'Training',
        items: [
          { label: 'Career Development', href: '/placements#training', description: 'Skill enhancement programs' },
          { label: 'Internships', href: '/placements#internships', description: 'Industry exposure' },
        ],
      },
    ],
    featured: {
      title: '95% Placement Rate',
      description: 'Our students are recruited by top companies including TCS, Infosys, Amazon, Microsoft, and many more.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80',
      href: '/placements',
      cta: 'View Statistics',
    },
    quickStats: [
      { label: 'Placement Rate', value: '95%' },
      { label: 'Recruiters', value: '150+' },
      { label: 'Highest Package', value: '₹12 LPA' },
    ],
  },
};

interface MegaMenuProps {
  label: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ label, isOpen, onClose }: MegaMenuProps) {
  const menuData = MEGA_MENU_DATA[label];

  if (!menuData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t-4 border-secondary-500 z-50"
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Menu Columns */}
              <div className={cn(
                'col-span-12',
                menuData.featured ? 'lg:col-span-8' : 'lg:col-span-12'
              )}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuData.columns.map((column, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-200">
                        {column.title}
                      </h3>
                      <ul className="space-y-1">
                        {column.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group flex flex-col py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                              onClick={onClose}
                            >
                              <span className="text-neutral-800 font-medium group-hover:text-primary-700 transition-colors">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="text-sm text-neutral-500 group-hover:text-neutral-600 transition-colors">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                {menuData.quickStats && (
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <div className="flex items-center gap-8">
                      {menuData.quickStats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-secondary-600">{stat.value}</div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Featured Section */}
              {menuData.featured && (
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-primary-50 rounded-2xl overflow-hidden h-full">
                    <div className="relative h-36">
                      <Image
                        src={menuData.featured.image}
                        alt={menuData.featured.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h4 className="text-white font-semibold text-lg drop-shadow-md">{menuData.featured.title}</h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                        {menuData.featured.description}
                      </p>
                      <Link
                        href={menuData.featured.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-secondary-600 transition-colors"
                        onClick={onClose}
                      >
                        {menuData.featured.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
