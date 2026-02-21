'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Trophy, Flask } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface Department {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  programs: number;
  image: string;
}

interface Program {
  name: string;
  duration: string;
  level: string;
}

interface DepartmentContentProps {
  department: Department;
  programs: Program[];
}

export function DepartmentContent({ department, programs }: DepartmentContentProps) {
  return (
    <>
      {/* Overview */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Department Overview"
                title={`About ${department.name}`}
                align="left"
              />
              <p className="text-neutral-600 mb-6 leading-relaxed">
                The {department.name} department at Chaitanya University is committed to
                providing world-class education that combines theoretical knowledge with
                practical skills. Our programs are designed in collaboration with industry
                leaders to ensure students are job-ready upon graduation.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                With state-of-the-art laboratories, experienced faculty, and strong industry
                connections, we prepare students to excel in their careers and contribute
                meaningfully to society.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {department.programs}
                    </div>
                    <div className="text-sm text-neutral-500">Programs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary-600" />
                  <div>
                    <div className="text-2xl font-bold text-primary-600">50+</div>
                    <div className="text-sm text-neutral-500">Faculty</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
              <Image
                src={department.image}
                alt={department.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Programs"
            title="Courses Offered"
            description={`Explore the programs offered by ${department.name} department.`}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.name} variant="elevated">
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                    {program.level}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-600 mt-2 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Duration: {program.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/admissions/how-to-apply">
              <Button size="lg">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Infrastructure"
            title="Department Facilities"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered">
              <CardContent className="p-6 text-center">
                <Flask className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Modern Labs
                </h3>
                <p className="text-sm text-neutral-600">
                  State-of-the-art laboratories with latest equipment.
                </p>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Digital Library
                </h3>
                <p className="text-sm text-neutral-600">
                  Access to thousands of e-books and research papers.
                </p>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Expert Faculty
                </h3>
                <p className="text-sm text-neutral-600">
                  Experienced professors with industry backgrounds.
                </p>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="p-6 text-center">
                <Trophy className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-600 mb-2">
                  Placement Cell
                </h3>
                <p className="text-sm text-neutral-600">
                  Dedicated team for career guidance and placements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
