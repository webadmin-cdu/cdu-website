'use client';

import { CheckCircle, FileText, Shield, Trophy } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const accreditations = [
  {
    name: 'UGC',
    fullName: 'University Grants Commission',
    description:
      'Chaitanya University is recognized as a Deemed to be University under Section 3 of the UGC Act, 1956. This recognition validates our commitment to maintaining high standards of higher education.',
    icon: Shield,
    status: 'Approved',
  },
  {
    name: 'NAAC',
    fullName: 'National Assessment and Accreditation Council',
    description:
      'We are accredited by NAAC, which assesses and accredits institutions of higher education in India. This accreditation reflects our quality in teaching, learning, and evaluation.',
    icon: Trophy,
    status: 'Accredited',
  },
  {
    name: 'AICTE',
    fullName: 'All India Council for Technical Education',
    description:
      'Our technical programs are approved by AICTE, the statutory body for planning, coordinating, and maintaining standards in technical education in India.',
    icon: CheckCircle,
    status: 'Approved',
  },
  {
    name: 'PCI',
    fullName: 'Pharmacy Council of India',
    description:
      'Our pharmacy programs are approved by PCI, ensuring that our pharmacy education meets the standards required for professional practice.',
    icon: FileText,
    status: 'Approved',
  },
];

const affiliations = [
  'Association of Indian Universities (AIU)',
  'Commonwealth Universities Association',
  'Federation of Indian Chambers of Commerce & Industry (FICCI)',
  'Confederation of Indian Industry (CII)',
  'NASSCOM',
];

export function AccreditationContent() {
  return (
    <>
      {/* Accreditations */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Quality Assurance"
            title="Our Accreditations"
            description="We are proud to be recognized by leading accreditation bodies that validate our commitment to quality education."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {accreditations.map((accred) => (
              <Card key={accred.name} variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <accred.icon className="h-7 w-7 text-primary-600 flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-primary-600">
                          {accred.name}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {accred.status}
                        </span>
                      </div>
                      <p className="text-sm text-accent-gold font-medium mb-3">
                        {accred.fullName}
                      </p>
                      <p className="text-neutral-600 leading-relaxed">
                        {accred.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Network"
            title="Affiliations & Memberships"
            description="We are affiliated with leading educational and industry bodies."
          />

          <div className="max-w-3xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {affiliations.map((affiliation) => (
                    <li
                      key={affiliation}
                      className="flex items-center gap-3 text-neutral-700"
                    >
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      {affiliation}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-primary-600 mb-4">
            Want to Know More?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Download our detailed accreditation reports and certificates to
            learn more about our quality assurance processes.
          </p>
          <Button variant="outline" size="lg">
            Download Accreditation Reports
          </Button>
        </div>
      </section>
    </>
  );
}
