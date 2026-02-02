'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils/formatDate';

interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  endDate?: string;
  location?: string;
  image?: string;
  category?: string;
  registrationUrl?: string;
  capacity?: number;
  registered?: number;
  slug?: string;
}

interface EventCardProps {
  event: Event;
  className?: string;
  variant?: 'default' | 'compact' | 'featured' | 'list';
}

export function EventCard({ event, className, variant = 'default' }: EventCardProps) {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('en-US', { month: 'short' });

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          'flex gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow',
          className
        )}
      >
        <div className="flex flex-col items-center justify-center min-w-[60px] h-16 bg-primary-100 rounded-lg">
          <span className="text-2xl font-bold text-primary-600">{day}</span>
          <span className="text-xs text-primary-600 uppercase">{month}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-charcoal-800 truncate">{event.title}</h3>
          {event.time && (
            <p className="text-sm text-charcoal-500 flex items-center gap-1 mt-1">
              <Clock className="h-3 w-3" />
              {event.time}
            </p>
          )}
          {event.location && (
            <p className="text-sm text-charcoal-500 flex items-center gap-1 truncate">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={cn(
          'flex items-center gap-4 p-4 border-b border-charcoal-100 last:border-b-0 hover:bg-charcoal-50 transition-colors',
          className
        )}
      >
        <div className="flex flex-col items-center justify-center min-w-[50px] h-14 bg-secondary-700 rounded-lg text-white">
          <span className="text-xl font-bold">{day}</span>
          <span className="text-xs uppercase">{month}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-charcoal-800">{event.title}</h3>
          <div className="flex items-center gap-4 text-sm text-charcoal-500 mt-1">
            {event.time && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {event.time}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-1 truncate">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </span>
            )}
          </div>
        </div>
        {event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            className="flex-shrink-0 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Register
          </Link>
        )}
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          'relative overflow-hidden rounded-2xl bg-white shadow-medium group',
          className
        )}
      >
        {event.image && (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary-700/60" />
            <div className="absolute top-4 left-4">
              {event.category && (
                <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                  {event.category}
                </span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(event.date)}</span>
                {event.time && (
                  <>
                    <span className="mx-1">|</span>
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-primary-600 transition-colors">
            {event.title}
          </h3>
          {event.description && (
            <p className="text-charcoal-600 line-clamp-2 mb-4">{event.description}</p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-charcoal-500">
              {event.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </span>
              )}
              {event.capacity && (
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {event.registered || 0}/{event.capacity}
                </span>
              )}
            </div>
            {event.registrationUrl && (
              <Link
                href={event.registrationUrl}
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Register
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-medium transition-shadow',
        className
      )}
    >
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {event.category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                {event.category}
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4 flex flex-col items-center justify-center w-14 h-14 bg-white/95 rounded-lg shadow-soft">
            <span className="text-xl font-bold text-primary-600">{day}</span>
            <span className="text-xs text-charcoal-600 uppercase">{month}</span>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-semibold text-charcoal-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {event.title}
        </h3>
        {event.description && (
          <p className="text-sm text-charcoal-600 line-clamp-2 mb-3">{event.description}</p>
        )}
        <div className="flex flex-wrap gap-3 text-sm text-charcoal-500">
          {event.time && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {event.time}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
          )}
        </div>
        {event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 transition-colors"
          >
            Register Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
