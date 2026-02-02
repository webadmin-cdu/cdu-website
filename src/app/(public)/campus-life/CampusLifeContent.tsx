'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Buildings, Users, Calendar, Camera, ArrowRight } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

const sections = [
  {
    icon: Buildings,
    title: 'Facilities',
    description: 'Modern infrastructure including labs, library, sports complex, and hostel.',
    href: '/campus-life/facilities',
    image: PLACEHOLDER_IMAGES.sections.sports,
  },
  {
    icon: Users,
    title: 'Clubs & Activities',
    description: 'Technical clubs, cultural societies, and student organizations.',
    href: '/campus-life/clubs',
    image: PLACEHOLDER_IMAGES.gallery.cultural1,
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Annual fests, workshops, seminars, and cultural celebrations.',
    href: '/campus-life/events',
    image: PLACEHOLDER_IMAGES.sections.events,
  },
  {
    icon: Camera,
    title: 'Gallery',
    description: 'Photo gallery showcasing campus life and memorable moments.',
    href: '/campus-life/gallery',
    image: PLACEHOLDER_IMAGES.gallery.campus1,
  },
];

export function CampusLifeContent() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Explore"
          title="Life at Chaitanya"
          description="Our campus offers a perfect blend of academic excellence and holistic development."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <Link key={section.title} href={section.href} className="group">
              <Card variant="elevated" className="overflow-hidden h-full">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <section.icon className="h-6 w-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-neutral-600 mb-4">{section.description}</p>
                  <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-accent-gold transition-colors">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
