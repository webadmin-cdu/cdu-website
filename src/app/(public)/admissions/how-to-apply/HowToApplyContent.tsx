'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, CreditCard, UserCheck, GraduationCap } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const applicationSteps = [
  {
    icon: FileText,
    title: 'Fill Online Application',
    description:
      'Complete the online application form with your personal details, academic history, and program preference.',
  },
  {
    icon: CheckCircle,
    title: 'Upload Documents',
    description:
      'Upload required documents including mark sheets, certificates, photographs, and identity proof.',
  },
  {
    icon: CreditCard,
    title: 'Pay Application Fee',
    description:
      'Pay the non-refundable application fee through our secure online payment gateway.',
  },
  {
    icon: UserCheck,
    title: 'Entrance Test / Interview',
    description:
      'Appear for entrance test (if applicable) and/or personal interview as per your program requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Admission Confirmation',
    description:
      'Upon selection, complete the admission formalities and fee payment to confirm your seat.',
  },
];

const requiredDocuments = [
  '10th & 12th Mark Sheets and Certificates',
  'Graduation Degree and Mark Sheets (for PG programs)',
  'Transfer Certificate from previous institution',
  'Migration Certificate (if applicable)',
  'Passport-size photographs (6 copies)',
  'Aadhar Card / Identity Proof',
  'Caste Certificate (if applicable)',
  'Income Certificate (for scholarship applications)',
];

const eligibility = {
  undergraduate: [
    'B.Tech: 10+2 with Physics, Chemistry, Math with minimum 45% marks',
    'B.Pharm: 10+2 with Physics, Chemistry, Biology/Math with minimum 45% marks',
    'BBA: 10+2 in any stream with minimum 45% marks',
  ],
  postgraduate: [
    'M.Tech: B.Tech in relevant discipline with minimum 50% marks',
    'M.Pharm: B.Pharm with minimum 55% marks',
    'MBA: Bachelor degree in any discipline with minimum 50% marks',
  ],
  doctoral: [
    'Ph.D: Postgraduate degree in relevant field with minimum 55% marks',
    'Valid GATE/NET/SLET score (preferred)',
  ],
};

export function HowToApplyContent() {
  return (
    <>
      {/* Application Steps */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Application Process"
            title="Steps to Apply"
            description="Follow these steps to complete your application."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />

              <div className="space-y-8">
                {applicationSteps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white z-10 flex-shrink-0">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="pt-3">
                      <span className="text-sm font-medium text-accent-gold">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-primary-600 mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://apply.chaitanya.edu.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Start Online Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Checklist"
            title="Required Documents"
            description="Ensure you have the following documents ready before applying."
          />

          <div className="max-w-2xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {requiredDocuments.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Requirements"
            title="Eligibility Criteria"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-4">
                  Undergraduate
                </h3>
                <ul className="space-y-3">
                  {eligibility.undergraduate.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-600 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-4">
                  Postgraduate
                </h3>
                <ul className="space-y-3">
                  {eligibility.postgraduate.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-600 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-4">
                  Doctoral
                </h3>
                <ul className="space-y-3">
                  {eligibility.doctoral.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-600 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-white mb-4">
            Need Help with Your Application?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Our admissions team is available to assist you with any questions
            about the application process.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Contact Admissions Office
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
