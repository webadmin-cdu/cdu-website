'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Excellence in Education',
    description:
      'Commitment to excellence in the field of education, taking the students to their highest academic potential.',
  },
  {
    title: 'Character & Values',
    description:
      'Dedication to inculcating self-esteem, tolerance, respect for others, and harmony through an atmosphere of caring, discipline, and understanding — contributing to society and nation building.',
  },
  {
    title: 'Global Collaboration',
    description:
      'Liaison with institutions of higher learning and research in India and abroad, promoting advanced studies to become a leading institution of learning in the world.',
  },
];

export function VisionSection() {
  return (
    <section className="relative bg-secondary-950 py-12 md:py-16 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,95,0.4)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Quote + Header combined */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-500 mb-4">
            Our Vision
          </p>
          <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-white/95 italic leading-relaxed">
            &ldquo;We strongly believe that academic excellence creates knowledge society.&rdquo;
          </blockquote>
        </div>

        {/* Three Pillars — compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`relative px-6 py-5 md:px-8 md:py-6 text-center ${
                i < pillars.length - 1 ? 'md:border-r border-white/10' : ''
              }`}
            >
              <h3 className="font-heading text-base font-semibold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-secondary-300 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
