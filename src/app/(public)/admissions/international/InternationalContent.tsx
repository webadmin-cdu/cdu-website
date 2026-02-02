'use client';

import Link from 'next/link';
import { Globe, FileText, Airplane, House, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

const benefits = [
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Degrees recognized worldwide with strong alumni network.',
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Dedicated support for visa application and documentation.',
  },
  {
    icon: Airplane,
    title: 'Airport Pickup',
    description: 'Complimentary airport pickup service for new students.',
  },
  {
    icon: House,
    title: 'Accommodation',
    description: 'On-campus hostel with international student wing.',
  },
];

const requirements = [
  'Valid passport with minimum 2 years validity',
  'Educational documents (apostilled/attested)',
  'English proficiency (IELTS/TOEFL) - for non-English speaking countries',
  'Statement of Purpose',
  'Letters of Recommendation (2)',
  'Financial documents/Bank statements',
  'Medical fitness certificate',
  'Passport-size photographs',
];

const steps = [
  {
    step: 1,
    title: 'Online Application',
    description: 'Submit the online application form with required documents.',
  },
  {
    step: 2,
    title: 'Document Verification',
    description: 'International admissions office verifies your documents.',
  },
  {
    step: 3,
    title: 'Admission Letter',
    description: 'Receive provisional admission letter upon acceptance.',
  },
  {
    step: 4,
    title: 'Student Visa',
    description: 'Apply for student visa with admission letter.',
  },
  {
    step: 5,
    title: 'Fee Payment',
    description: 'Pay the required fees to confirm your admission.',
  },
  {
    step: 6,
    title: 'Arrival & Registration',
    description: 'Arrive in India and complete on-campus registration.',
  },
];

export function InternationalContent() {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Benefits for International Students"
            description="We provide comprehensive support to help international students succeed."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <Card key={item.title} variant="elevated">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-7 w-7 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-primary-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Getting Started"
            title="Application Process"
            description="Follow these steps to apply as an international student."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {steps.map((item) => (
                <Card key={item.step} variant="bordered">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-600 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Checklist"
            title="Required Documents"
          />

          <div className="max-w-2xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {requirements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-white mb-4">
            International Admissions Office
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            For any queries regarding international admissions, please contact
            our dedicated international office.
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-white">
              <strong>Phone:</strong> +91 {SITE_CONFIG.contact.phones.international}
            </p>
            <p className="text-white">
              <strong>Email:</strong> international@cdu.ac.in
            </p>
          </div>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
