'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import {
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
  FileText,
  CreditCard,
  Calendar,
  Buildings,
  ClipboardText,
  Trophy,
  Phone,
  MapPin,
  ArrowSquareOut,
  Laptop,
  Books,
  Clock,
} from '@phosphor-icons/react';

// Persona definitions with their quick links
const personas = [
  {
    id: 'prospective',
    label: 'Prospective Students',
    icon: GraduationCap,
    description: 'Start your journey at Chaitanya University',
    color: 'from-secondary-400 to-secondary-600',
    links: [
      { label: 'Explore Programs', href: '/academics/programs', icon: BookOpen, description: 'Browse 50+ courses' },
      { label: 'Apply Now', href: '/admissions/how-to-apply', icon: FileText, description: 'Start application' },
      { label: 'Fee Structure', href: '/admissions/fee-structure', icon: CreditCard, description: 'View tuition costs' },
      { label: 'Scholarships', href: '/admissions/scholarships', icon: Trophy, description: 'Financial aid options' },
      { label: 'Campus Tour', href: '/campus-life/gallery', icon: Buildings, description: 'Virtual walkthrough' },
      { label: 'Contact Admissions', href: '/contact', icon: Phone, description: 'Get in touch' },
    ],
  },
  {
    id: 'current',
    label: 'Current Students',
    icon: BookOpen,
    description: 'Resources for enrolled students',
    color: 'from-primary-600 to-primary-800',
    links: [
      { label: 'Student Portal', href: '/student-portal', icon: Laptop, description: 'Access dashboard' },
      { label: 'Exam Results', href: 'http://webresults.chaitanya.edu.in', icon: ClipboardText, description: 'View grades', external: true },
      { label: 'Time Tables', href: '/student-portal#timetables', icon: Calendar, description: 'Class schedules' },
      { label: 'Books', href: '/campus-life/facilities#library', icon: Books, description: 'E-resources & catalog' },
      { label: 'Events', href: '/campus-life/events', icon: Clock, description: 'Upcoming activities' },
      { label: 'Placements', href: '/placements', icon: Trophy, description: 'Career opportunities' },
    ],
  },
  {
    id: 'parents',
    label: 'Parents & Guardians',
    icon: Users,
    description: 'Information for families',
    color: 'from-emerald-500 to-emerald-700',
    links: [
      { label: 'Fee Payment', href: '/admissions/fee-structure', icon: CreditCard, description: 'Payment options' },
      { label: 'Campus Facilities', href: '/campus-life/facilities', icon: Buildings, description: 'Infrastructure' },
      { label: 'Hostel Info', href: '/campus-life/facilities#hostel', icon: MapPin, description: 'Accommodation' },
      { label: 'Academic Calendar', href: '/academics', icon: Calendar, description: 'Important dates' },
      { label: 'Contact Us', href: '/contact', icon: Phone, description: 'Reach out' },
      { label: 'About Us', href: '/about', icon: Trophy, description: 'Our legacy' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function QuickAccess() {
  const [activePersona, setActivePersona] = useState('prospective');
  const currentPersona = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Quick Access
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Select your role to find the resources and information most relevant to you.
          </p>
        </div>

        {/* Persona Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300',
                  activePersona === persona.id
                    ? `bg-gradient-to-r ${persona.color} text-white shadow-lg scale-105`
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{persona.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Links Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-5xl mx-auto"
          >
            {/* Persona description */}
            <div className="text-center mb-8">
              <p className="text-neutral-600">{currentPersona.description}</p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentPersona.links.map((link) => {
                const Icon = link.icon;
                const LinkComponent = link.external ? 'a' : Link;
                const linkProps = link.external
                  ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: link.href };

                return (
                  <motion.div key={link.label} variants={itemVariants}>
                    <LinkComponent
                      {...linkProps}
                      className="group block p-5 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 hover:border-secondary-200 hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">
                              {link.label}
                            </span>
                            {link.external && (
                              <ArrowSquareOut className="h-3 w-3 text-neutral-400" />
                            )}
                          </div>
                          <p className="text-sm text-neutral-500 mt-0.5">{link.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-neutral-300 group-hover:text-secondary-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </LinkComponent>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Help CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            Can't find what you're looking for?{' '}
            <Link href="/contact" className="text-secondary-600 hover:text-secondary-700 font-medium">
              Contact us
            </Link>
            {' '}or call{' '}
            <a href="tel:+918674010181" className="text-secondary-600 hover:text-secondary-700 font-medium">
              +91 8674 010 181
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
