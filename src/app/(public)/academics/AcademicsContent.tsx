'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Flask, GraduationCap } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ProgramCard } from '@/components/shared/ProgramCard';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { DEPARTMENTS } from '@/lib/constants/navigation';

const highlights = [
  {
    icon: BookOpen,
    title: '50+ Programs',
    description: 'Undergraduate, postgraduate, and doctoral programs across diverse disciplines.',
  },
  {
    icon: Users,
    title: '500+ Faculty',
    description: 'Experienced professors with industry and research backgrounds.',
  },
  {
    icon: Flask,
    title: 'Research Focus',
    description: 'State-of-the-art labs and research centers driving innovation.',
  },
  {
    icon: GraduationCap,
    title: 'Industry Connect',
    description: 'Curriculum designed in collaboration with industry leaders.',
  },
];

export function AcademicsContent() {
  return (
    <>
      {/* Highlights */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <Card key={item.title} variant="bordered">
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

      {/* Departments */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Schools"
            title="Departments"
            description="Explore our diverse range of academic departments offering specialized education."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => (
              <ProgramCard key={dept.id} department={dept} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/academics/departments">
              <Button variant="outline" size="lg">
                View All Departments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/academics/programs" className="group">
              <Card variant="elevated" className="h-full">
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-600 mb-2 group-hover:text-accent-gold transition-colors">
                    Programs
                  </h3>
                  <p className="text-neutral-600">
                    Browse all undergraduate, postgraduate, and doctoral programs.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/academics/faculty" className="group">
              <Card variant="elevated" className="h-full">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-600 mb-2 group-hover:text-accent-gold transition-colors">
                    Faculty
                  </h3>
                  <p className="text-neutral-600">
                    Meet our experienced and dedicated faculty members.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/academics/research" className="group">
              <Card variant="elevated" className="h-full">
                <CardContent className="p-8 text-center">
                  <Flask className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-600 mb-2 group-hover:text-accent-gold transition-colors">
                    Research
                  </h3>
                  <p className="text-neutral-600">
                    Explore our research initiatives and publications.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
