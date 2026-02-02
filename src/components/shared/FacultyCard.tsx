'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Envelope, Phone, ArrowSquareOut, GraduationCap } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department?: string;
  qualification?: string;
  specialization?: string;
  email?: string;
  phone?: string;
  image: string;
  profileUrl?: string;
}

interface FacultyCardProps {
  faculty: FacultyMember;
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

export function FacultyCard({ faculty, className, variant = 'default' }: FacultyCardProps) {
  const hasProfileUrl = !!faculty.profileUrl;

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          'flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow',
          className
        )}
      >
        <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={faculty.image}
            alt={faculty.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-charcoal-800 truncate">{faculty.name}</h3>
          <p className="text-sm text-charcoal-600 truncate">{faculty.designation}</p>
          {faculty.department && (
            <p className="text-xs text-charcoal-500 truncate">{faculty.department}</p>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          'bg-white rounded-2xl shadow-soft overflow-hidden',
          className
        )}
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
            <Image
              src={faculty.image}
              alt={faculty.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-xl font-bold text-charcoal-800 mb-1">{faculty.name}</h3>
            <p className="text-primary-600 font-medium mb-2">{faculty.designation}</p>
            {faculty.department && (
              <p className="text-sm text-charcoal-600 mb-4">{faculty.department}</p>
            )}

            {faculty.qualification && (
              <div className="flex items-start gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-charcoal-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-charcoal-600">{faculty.qualification}</p>
              </div>
            )}

            {faculty.specialization && (
              <div className="mb-4">
                <p className="text-xs text-charcoal-500 uppercase tracking-wider mb-1">Specialization</p>
                <p className="text-sm text-charcoal-700">{faculty.specialization}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {faculty.email && (
                <a
                  href={`mailto:${faculty.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-charcoal-600 hover:text-primary-600 transition-colors"
                >
                  <Envelope className="h-4 w-4" />
                  <span>Email</span>
                </a>
              )}
              {faculty.phone && (
                <a
                  href={`tel:${faculty.phone}`}
                  className="inline-flex items-center gap-1.5 text-sm text-charcoal-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
              )}
              {faculty.profileUrl && (
                <Link
                  href={faculty.profileUrl}
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <ArrowSquareOut className="h-4 w-4" />
                  <span>View Profile</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant - card content
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={faculty.image}
          alt={faculty.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-secondary-700/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-charcoal-800 group-hover:text-primary-600 transition-colors">
          {faculty.name}
        </h3>
        <p className="text-sm text-primary-600 mb-1">{faculty.designation}</p>
        {faculty.department && (
          <p className="text-sm text-charcoal-500">{faculty.department}</p>
        )}
        {faculty.qualification && (
          <p className="text-xs text-charcoal-400 mt-2 line-clamp-2">
            {faculty.qualification}
          </p>
        )}
        {hasProfileUrl && (
          <div className="flex items-center gap-1 text-sm text-primary-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>View Profile</span>
            <ArrowSquareOut className="h-3 w-3" />
          </div>
        )}
      </div>
    </motion.div>
  );

  const cardClassName = cn(
    'block bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-all',
    hasProfileUrl && 'cursor-pointer',
    className
  );

  if (hasProfileUrl) {
    return (
      <Link href={faculty.profileUrl!} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
}
