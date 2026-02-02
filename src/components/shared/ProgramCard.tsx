'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';
import type { Department } from '@/types';

interface ProgramCardProps {
  department: Department;
  className?: string;
}

export function ProgramCard({ department, className }: ProgramCardProps) {
  return (
    <Link
      href={`/academics/departments/${department.slug}`}
      className={cn(
        'group block bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={department.image}
          alt={department.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
            {department.programs} Programs
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-600 mb-2 group-hover:text-primary-500 transition-colors">
          {department.name}
        </h3>
        <p className="text-charcoal-600 text-sm line-clamp-2 mb-4">
          {department.description}
        </p>
        <span className="inline-flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-500 transition-colors">
          View Programs
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
