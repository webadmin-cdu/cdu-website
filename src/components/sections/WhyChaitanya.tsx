'use client';

import {
  GraduationCap,
  Users,
  Buildings,
  Trophy,
  Globe,
  Lightbulb,
} from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { cn } from '@/lib/utils/cn';

const features = [
  {
    icon: GraduationCap,
    title: '33+ Years of Excellence',
    description:
      'A legacy of academic excellence and innovation since 1991, shaping future leaders.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description:
      'Learn from 500+ experienced professors with industry and research backgrounds.',
  },
  {
    icon: Buildings,
    title: 'Modern Infrastructure',
    description:
      'State-of-the-art labs, libraries, and facilities spread across our expansive campus.',
  },
  {
    icon: Trophy,
    title: 'Recognized Excellence',
    description:
      'UGC approved, NAAC accredited, and AICTE recognized programs ensuring quality education.',
  },
  {
    icon: Globe,
    title: 'Global Partnerships',
    description:
      'International collaborations with universities worldwide for exchange programs and research.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description:
      'Incubation centers and research facilities fostering entrepreneurship and innovation.',
  },
];

export function WhyChaitanya() {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Why Choose Us"
          title="The Chaitanya Advantage"
          description="Join a community that nurtures talent, fosters innovation, and creates opportunities for success."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group p-8 rounded-xl transition-all duration-300',
                'hover:bg-primary-50 hover:shadow-soft'
              )}
            >
              <feature.icon className="h-8 w-8 text-primary-600 mb-6" />
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
