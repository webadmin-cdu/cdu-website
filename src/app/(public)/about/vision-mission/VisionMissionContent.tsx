'use client';

import { Target, Eye, Heart, Star } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';

const coreValues = [
  {
    icon: Star,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from academics to research to student services.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We uphold the highest standards of honesty, ethics, and transparency in all our endeavors.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description:
      'We foster a culture of creativity and innovation, encouraging new ideas and approaches.',
  },
  {
    icon: Eye,
    title: 'Inclusivity',
    description:
      'We celebrate diversity and create an inclusive environment where everyone can thrive.',
  },
];

export function VisionMissionContent() {
  return (
    <>
      {/* Vision */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Eye className="h-7 w-7 text-primary-600 mx-auto mb-8" />
            <h2 className="text-display-md font-bold text-primary-600 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              To be a globally recognized institution of higher learning that
              nurtures innovative thinkers, responsible citizens, and future
              leaders who contribute positively to society and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-section bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-7 w-7 text-white mx-auto mb-8" />
            <h2 className="text-display-md font-bold mb-6">Our Mission</h2>
            <ul className="text-lg text-primary-100 space-y-4 text-left max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-accent-gold flex-shrink-0" />
                <span>
                  To provide quality education that combines theoretical knowledge
                  with practical skills and real-world applications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-accent-gold flex-shrink-0" />
                <span>
                  To foster research and innovation that addresses societal
                  challenges and contributes to the advancement of knowledge.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-accent-gold flex-shrink-0" />
                <span>
                  To create an inclusive learning environment that promotes
                  diversity, equity, and mutual respect.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-accent-gold flex-shrink-0" />
                <span>
                  To develop industry partnerships that enhance student employability
                  and career prospects.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-accent-gold flex-shrink-0" />
                <span>
                  To instill ethical values and social responsibility in our
                  students, preparing them to be good citizens.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="What We Stand For"
            title="Our Core Values"
            description="The principles that guide our actions and decisions every day."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title} variant="elevated">
                <CardContent className="p-8 text-center">
                  <value.icon className="h-7 w-7 text-primary-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-primary-600 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
