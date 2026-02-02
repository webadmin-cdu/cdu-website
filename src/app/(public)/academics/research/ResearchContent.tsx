'use client';

import { Flask, FileText, Trophy, Users } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

const researchStats = [
  { label: 'Research Papers Published', value: '500+' },
  { label: 'Patents Filed', value: '25+' },
  { label: 'Funded Projects', value: '50+' },
  { label: 'Research Scholars', value: '100+' },
];

const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Research in deep learning, natural language processing, computer vision, and intelligent systems.',
    department: 'Computer Science',
  },
  {
    title: 'Drug Discovery & Development',
    description:
      'Novel drug delivery systems, formulation development, and pharmaceutical nanotechnology.',
    department: 'Pharmacy',
  },
  {
    title: 'Sustainable Engineering',
    description:
      'Green technologies, renewable energy systems, and sustainable construction practices.',
    department: 'Engineering',
  },
  {
    title: 'IoT & Embedded Systems',
    description:
      'Smart sensors, wearable devices, and Internet of Things applications.',
    department: 'Electronics',
  },
  {
    title: 'Business Analytics',
    description:
      'Data-driven decision making, market research, and organizational behavior studies.',
    department: 'Management',
  },
  {
    title: 'Materials Science',
    description:
      'Advanced materials, composites, and nanomaterials for various applications.',
    department: 'Mechanical',
  },
];

const recentPublications = [
  {
    title: 'Deep Learning Approaches for Medical Image Analysis',
    authors: 'Dr. P. Rajesh Kumar et al.',
    journal: 'IEEE Transactions on Medical Imaging',
    year: '2024',
  },
  {
    title: 'Novel Drug Delivery Systems for Cancer Treatment',
    authors: 'Dr. K. Priya et al.',
    journal: 'Journal of Controlled Release',
    year: '2024',
  },
  {
    title: 'Sustainable Construction Materials: A Review',
    authors: 'Dr. M. Srinivas et al.',
    journal: 'Construction and Building Materials',
    year: '2023',
  },
];

export function ResearchContent() {
  return (
    <>
      {/* Research Stats */}
      <section className="py-12 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-4xl font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Focus Areas"
            title="Research Domains"
            description="Our faculty and students engage in cutting-edge research across multiple domains."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.title} variant="bordered" className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <Flask className="h-10 w-10 text-primary-600 mb-4" />
                  <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                    {area.department}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-600 mt-2 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Publications"
            title="Recent Research Papers"
            description="Selected publications from our faculty in peer-reviewed journals."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {recentPublications.map((pub, index) => (
              <Card key={index} variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-600 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-1">{pub.authors}</p>
                  <p className="text-sm text-neutral-500">
                    <em>{pub.journal}</em> ({pub.year})
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Infrastructure"
            title="Research Facilities"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <Flask className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Advanced Labs
                </h3>
                <p className="text-sm text-neutral-600">
                  Well-equipped research laboratories with modern instruments.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Digital Library
                </h3>
                <p className="text-sm text-neutral-600">
                  Access to leading journals and research databases.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Incubation Center
                </h3>
                <p className="text-sm text-neutral-600">
                  Support for innovation and startup development.
                </p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Collaboration Hub
                </h3>
                <p className="text-sm text-neutral-600">
                  Partnerships with industry and academia worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
