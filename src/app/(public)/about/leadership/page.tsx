import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

export const metadata = {
  title: 'Leadership',
  description:
    'Meet the visionary leaders guiding Chaitanya University towards excellence.',
};

const leadership = [
  {
    name: 'Dr. K. Venkatesh Prasad',
    designation: 'Chancellor',
    image: PLACEHOLDER_IMAGES.people.chancellor,
    message:
      'Our vision is to create an institution that not only imparts knowledge but also shapes character and builds future leaders who will contribute positively to society.',
  },
  {
    name: 'Dr. S. Ramachandran',
    designation: 'Vice-Chancellor',
    image: PLACEHOLDER_IMAGES.people.viceChancellor,
    message:
      'At Chaitanya University, we are committed to providing a holistic education that combines academic rigor with practical skills and ethical values.',
  },
  {
    name: 'Dr. M. Lakshmi Devi',
    designation: 'Registrar',
    image: PLACEHOLDER_IMAGES.people.registrar,
    message:
      'We strive to create an inclusive and supportive environment where every student can thrive and reach their full potential.',
  },
];

const deans = [
  {
    name: 'Dr. P. Rajesh Kumar',
    designation: 'Dean - School of Engineering',
    image: PLACEHOLDER_IMAGES.people.dean1,
  },
  {
    name: 'Dr. R. Sunitha',
    designation: 'Dean - School of Pharmacy',
    image: PLACEHOLDER_IMAGES.people.dean2,
  },
  {
    name: 'Dr. K. Srinivas',
    designation: 'Dean - School of Management',
    image: PLACEHOLDER_IMAGES.people.faculty1,
  },
  {
    name: 'Dr. V. Padmavathi',
    designation: 'Dean - School of Sciences',
    image: PLACEHOLDER_IMAGES.people.faculty2,
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Leadership"
        description="Meet the visionary leaders guiding Chaitanya University towards excellence in education and research."
      />

      {/* Top Leadership */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Visionaries"
            title="University Leadership"
          />

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-strong">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent-gold font-medium mb-6">
                    {leader.designation}
                  </p>
                  <blockquote className="text-lg text-neutral-600 italic leading-relaxed border-l-4 border-accent-gold pl-6">
                    &ldquo;{leader.message}&rdquo;
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deans */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Academic Leadership"
            title="Our Deans"
            description="Leading our schools with expertise and dedication."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deans.map((dean) => (
              <Card key={dean.name} variant="elevated">
                <div className="relative aspect-square">
                  <Image
                    src={dean.image}
                    alt={dean.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-primary-600 mb-1">
                    {dean.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{dean.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
