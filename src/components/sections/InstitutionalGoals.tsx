'use client';

import Image from 'next/image';
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
      'Dedication to inculcating self-esteem, tolerance, respect for others, and harmony — contributing to society and nation building.',
  },
  {
    title: 'Global Collaboration',
    description:
      'Liaison with institutions of higher learning and research in India and abroad, promoting advanced studies worldwide.',
  },
];

const goals = [
  {
    highlight: 'Creating',
    text: 'An environment for higher teaching and learning with state-of-art infrastructure that expands horizons and cultivates principled thought and wisdom through Sharing and Upgradation of Knowledge through Interaction (SUKTI).',
    image: '/images/students-cdu.png',
    imageAlt: 'Chaitanya University students walking on campus',
  },
  {
    highlight: 'Developing',
    text: 'Necessary skills among faculty, students, and staff — cultivating positive thoughts and worldly wisdom through Knowledge Improvement through Sharing (KITS).',
    image: '/images/students9.png',
    imageAlt: 'Students sharing knowledge and studying together on campus',
  },
  {
    highlight: 'Molding',
    text: 'Character of students towards morally upright behavior, commitment to ethics, and social justice through Collective Learning and Upgrading Sessions (CLUS).',
    image: '/images/students3.jpg',
    imageAlt: 'Happy students together on campus stairway',
  },
  {
    highlight: 'Promoting',
    text: 'Research, training, and placement activities through strong institute-industry interaction and partnerships.',
    image: '/images/students4.jpg',
    imageAlt: 'Student conducting research in the laboratory',
  },
  {
    highlight: 'Transforming',
    text: 'Students into able, competent, and humane citizens who effectively address the demands of the new millennium through Upgradation of Knowledge through Interaction (UKTI).',
    image: '/images/students5.jpg',
    imageAlt: 'Students operating engineering lab equipment',
  },
];

export function InstitutionalGoals() {
  return (
    <section className="overflow-hidden">
      {/* Dark Vision Header */}
      <div className="relative bg-secondary-950 py-12 md:py-16">
        <Image
          src="/images/students1.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          unoptimized
        />
        <div className="absolute inset-0 bg-secondary-950/80" />

        <div className="relative z-10 container mx-auto px-4">
          {/* Quote */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-500 mb-4">
              Our Vision & Mission
            </p>
            <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-white/95 italic leading-relaxed">
              &ldquo;We strongly believe that academic excellence creates knowledge society.&rdquo;
            </blockquote>
          </div>

          {/* Three Pillars */}
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
      </div>

      {/* Goals Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-800">
              Institutional Goals
            </h2>
          </motion.div>

          <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
            {goals.map((goal, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={goal.highlight}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as const }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                      <Image
                        src={goal.image}
                        alt={goal.imageAlt}
                        width={800}
                        height={600}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                      {goal.highlight}
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                      {goal.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
