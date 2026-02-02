'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  GraduationCap,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Calendar,
  CurrencyInr,
} from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

interface ProgramDetailContentProps {
  program: {
    slug: string;
    name: string;
    shortName: string;
    department: string;
    departmentSlug: string;
    level: string;
    duration: string;
    intake: number;
    eligibility: string;
    description: string;
    image: string;
    highlights: string[];
    curriculum: { semester: string; subjects: string[] }[];
    careerProspects: string[];
    fees: { tuition: string; hostel: string; other: string };
  };
}

export function ProgramDetailContent({ program }: ProgramDetailContentProps) {
  return (
    <>
      {/* Hero Image */}
      <section className="relative h-64 md:h-96">
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary-700/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary" className="text-sm">
                {program.level}
              </Badge>
              <Badge variant="default" className="text-sm bg-white/90 text-charcoal-700">
                {program.duration}
              </Badge>
              <Badge variant="default" className="text-sm bg-white/90 text-charcoal-700">
                Intake: {program.intake} Students
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-white shadow-medium">
              <CardContent className="p-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-xs text-charcoal-500">Duration</p>
                  <p className="font-semibold text-charcoal-800">{program.duration}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-medium">
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-xs text-charcoal-500">Intake</p>
                  <p className="font-semibold text-charcoal-800">{program.intake} Students</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-medium">
              <CardContent className="p-4 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-xs text-charcoal-500">Level</p>
                  <p className="font-semibold text-charcoal-800">{program.level}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-medium">
              <CardContent className="p-4 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-xs text-charcoal-500">Next Intake</p>
                  <p className="font-semibold text-charcoal-800">July 2026</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-4">About the Program</h2>
                <p className="text-charcoal-600 leading-relaxed">{program.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-4">Program Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-charcoal-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              {program.curriculum.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-charcoal-800 mb-4">Curriculum</h2>
                  <Accordion type="single" defaultValue={['Year 1']}>
                    {program.curriculum.map((year) => (
                      <AccordionItem key={year.semester} value={year.semester}>
                        <AccordionTrigger value={year.semester} className="text-lg font-semibold">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary-600" />
                            {year.semester}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent value={year.semester}>
                          <ul className="grid md:grid-cols-2 gap-2 pt-2">
                            {year.subjects.map((subject, index) => (
                              <li key={index} className="flex items-center gap-2 text-charcoal-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Career Prospects */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-4">Career Prospects</h2>
                <div className="flex flex-wrap gap-2">
                  {program.careerProspects.map((career, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="sticky top-24 bg-white shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-4">Apply Now</h3>
                  <p className="text-charcoal-600 text-sm mb-6">
                    Admissions open for 2026-27 academic year. Apply now to secure your seat.
                  </p>
                  <Link href="/admissions/how-to-apply">
                    <Button className="w-full mb-3">
                      Apply for Admission
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Information
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Fee Structure */}
              <Card className="bg-white shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-charcoal-800 mb-4 flex items-center gap-2">
                    <CurrencyInr className="h-5 w-5 text-primary-600" />
                    Fee Structure (Per Year)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Tuition Fee</span>
                      <span className="font-semibold text-charcoal-800">₹{program.fees.tuition}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Hostel (Optional)</span>
                      <span className="font-semibold text-charcoal-800">₹{program.fees.hostel}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-charcoal-100">
                      <span className="text-charcoal-600">Other Fees</span>
                      <span className="font-semibold text-charcoal-800">₹{program.fees.other}</span>
                    </div>
                  </div>
                  <Link
                    href="/admissions/fee-structure"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm mt-4"
                  >
                    View detailed fee structure
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card className="bg-charcoal-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-charcoal-800 mb-3">Eligibility</h3>
                  <p className="text-charcoal-600 text-sm">{program.eligibility}</p>
                </CardContent>
              </Card>

              {/* Department Link */}
              <Card className="bg-primary-50 border-primary-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-charcoal-800 mb-2">Department</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{program.department}</p>
                  <Link
                    href={`/academics/departments/${program.departmentSlug}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Explore Department
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-secondary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of students who have transformed their careers at Chaitanya University.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions/how-to-apply">
              <Button size="lg" className="min-w-[200px]">
                Apply Now
              </Button>
            </Link>
            <Link href="/admissions/scholarships">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
              >
                Explore Scholarships
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
