'use client';

import Link from 'next/link';
import { Trophy, Star, Users, GraduationCap, ArrowRight } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const scholarships = [
  {
    name: "Chancellor's Merit Scholarship",
    description:
      'Full tuition waiver for students scoring 95% and above in qualifying examination.',
    eligibility: '95%+ in qualifying exam',
    benefit: '100% Tuition Waiver',
    icon: Trophy,
  },
  {
    name: 'Academic Excellence Trophy',
    description:
      'Partial tuition waiver for students with exceptional academic performance.',
    eligibility: '85-94% in qualifying exam',
    benefit: '50% Tuition Waiver',
    icon: Star,
  },
  {
    name: 'Sports Scholarship',
    description:
      'For national and state-level sportspersons who have represented their state or country.',
    eligibility: 'National/State level sports achievement',
    benefit: 'Up to 50% Tuition Waiver',
    icon: Users,
  },
  {
    name: 'Need-Based Financial Aid',
    description:
      'Financial assistance for students from economically weaker sections.',
    eligibility: 'Family income < ₹4 LPA',
    benefit: 'Up to 75% Tuition Waiver',
    icon: GraduationCap,
  },
];

const governmentScholarships = [
  'Central Sector Scholarship Scheme',
  'Post Matric Scholarship for SC/ST Students',
  'Prime Minister Special Scholarship Scheme',
  'National Means Cum Merit Scholarship',
  'State Government Scholarships (Telangana/AP)',
];

export function ScholarshipsContent() {
  return (
    <>
      {/* University Scholarships */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Financial Aid"
            title="University Scholarships"
            description="We offer various scholarships to support talented and deserving students."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.name} variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <scholarship.icon className="h-7 w-7 text-accent-gold flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary-600 mb-2">
                        {scholarship.name}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">
                        {scholarship.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="primary">{scholarship.eligibility}</Badge>
                        <Badge variant="secondary">{scholarship.benefit}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Scholarships */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="External Aid"
            title="Government Scholarships"
            description="Students can also apply for various government scholarship schemes."
          />

          <div className="max-w-2xl mx-auto">
            <Card variant="bordered">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {governmentScholarships.map((scheme) => (
                    <li
                      key={scheme}
                      className="flex items-center gap-3 text-neutral-700"
                    >
                      <Trophy className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      {scheme}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-sm text-neutral-500 mt-4 text-center">
              * Eligibility and benefits vary. Please visit the respective
              government portal for detailed information.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Application Process"
            title="How to Apply for Scholarships"
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-600 mb-3">
                    Step 1: Fill Admission Application
                  </h3>
                  <p className="text-neutral-600">
                    Complete your admission application first. Scholarship
                    applications are processed along with admissions.
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-600 mb-3">
                    Step 2: Submit Supporting Documents
                  </h3>
                  <p className="text-neutral-600">
                    Provide relevant documents like mark sheets, income
                    certificates, sports achievements, etc.
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-600 mb-3">
                    Step 3: Scholarship Committee Review
                  </h3>
                  <p className="text-neutral-600">
                    The scholarship committee will review your application and
                    notify you of the decision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-sm font-bold text-white mb-4">
            Questions About Scholarships?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our scholarship office for detailed information about
            eligibility and application process.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Scholarship Office
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
