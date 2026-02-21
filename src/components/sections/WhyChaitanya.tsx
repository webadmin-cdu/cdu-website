'use client';

import Image from 'next/image';
import { GraduationCap, MusicNotes, Trophy, Buildings, UsersThree } from '@phosphor-icons/react';

const sections = [
  {
    icon: GraduationCap,
    title: 'Why Choose Chaitanya?',
    text: 'Chaitanya imparts quality education with academic excellence for creating a knowledge-based society with enlightenment. We believe in creativity and nurturing new ideas. We have the support of highly qualified professors who focus on research and a holistic learning based on solid backgrounds to foster the best out of minds of our ambitious students.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Students learning in a university lecture hall',
    accent: 'bg-primary-600',
  },
  {
    icon: MusicNotes,
    title: 'Cultural Activities',
    text: 'We have many student bodies, and every festival or occasion is celebrated with pomp and valor. Students are continuously encouraged to venture out of their comfort zones and participate in these extracurricular activities to aid their growth. We also have annual fests that involve a grand night of entertainment, games, food and networking.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Students celebrating at a cultural festival',
    accent: 'bg-accent-500',
  },
  {
    icon: Trophy,
    title: 'Academic Excellence',
    text: 'The majority of our students are well placed in companies and we have the reputation of running a very successful campus drive. We have also signed MoUs with four foreign universities to further the ideas of mutual growth of similar research interests and student exchange programs.',
    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Graduates throwing caps at convocation ceremony',
    accent: 'bg-secondary-700',
  },
  {
    icon: Buildings,
    title: 'Infrastructure',
    text: 'Chaitanya is committed to creating the best learning environment with state-of-the-art labs, spacious classrooms equipped with ICT resources, indoor and outdoor sports facilities, a multi-stationed gym, cafeteria, and free Wi-Fi across the entire campus.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Modern university campus building',
    accent: 'bg-primary-600',
  },
  {
    icon: UsersThree,
    title: 'University Life',
    text: 'The University with its aesthetic ambience is conducive to healthy life and learning. It is a multicultural campus with students from major states of India and 14 different nationals promoting unity in diversity. It is a ragging-free campus with all modern facilities and good cross-cultural communication.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Diverse group of students on campus',
    accent: 'bg-accent-500',
  },
];

export function WhyChaitanya() {
  return (
    <section className="bg-neutral-50 py-16 md:py-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary-600 mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-800">
            The Chaitanya Advantage
          </h2>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12">
        {sections.map((section, i) => {
          const isEven = i % 2 === 0;
          const Icon = section.icon;
          // Each card sticks a bit lower so they stack
          const topOffset = 80 + i * 25;

          return (
            <div
              key={section.title}
              className="sticky mb-8 last:mb-0"
              style={{ top: `${topOffset}px`, zIndex: i + 1 }}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-medium transition-shadow hover:shadow-strong"
                style={{
                  transform: `scale(${1 - i * 0.015})`,
                  transformOrigin: 'top center',
                }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch min-h-[300px]`}>
                  {/* Image */}
                  <div className="relative w-full md:w-[45%] min-h-[220px] md:min-h-0">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <div className={`w-11 h-11 ${section.accent} rounded-xl flex items-center justify-center mb-5`}>
                      <Icon className="w-5 h-5 text-white" weight="fill" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
