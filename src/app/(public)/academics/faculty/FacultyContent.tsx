'use client';

import Image from 'next/image';
import { Envelope } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

const faculty = [
  {
    name: 'Dr. P. Rajesh Kumar',
    designation: 'Professor & HOD',
    department: 'Computer Science',
    qualification: 'Ph.D (IIT Hyderabad)',
    specialization: 'Machine Learning, Data Science',
    image: PLACEHOLDER_IMAGES.people.faculty1,
    email: 'rajesh.kumar@cdu.ac.in',
  },
  {
    name: 'Dr. S. Lakshmi',
    designation: 'Professor',
    department: 'Computer Science',
    qualification: 'Ph.D (NIT Warangal)',
    specialization: 'Artificial Intelligence, NLP',
    image: PLACEHOLDER_IMAGES.people.faculty2,
    email: 'lakshmi.s@cdu.ac.in',
  },
  {
    name: 'Dr. M. Venkat Reddy',
    designation: 'Associate Professor',
    department: 'Electronics & Communication',
    qualification: 'Ph.D (JNTU Hyderabad)',
    specialization: 'VLSI Design, Embedded Systems',
    image: PLACEHOLDER_IMAGES.people.faculty3,
    email: 'venkat.reddy@cdu.ac.in',
  },
  {
    name: 'Dr. K. Priya',
    designation: 'Professor & HOD',
    department: 'Pharmacy',
    qualification: 'Ph.D (Osmania University)',
    specialization: 'Pharmaceutics, Drug Delivery',
    image: PLACEHOLDER_IMAGES.people.dean2,
    email: 'priya.k@cdu.ac.in',
  },
  {
    name: 'Dr. R. Srinivas',
    designation: 'Professor',
    department: 'Mechanical Engineering',
    qualification: 'Ph.D (IIT Madras)',
    specialization: 'Thermal Engineering, CAD/CAM',
    image: PLACEHOLDER_IMAGES.people.dean1,
    email: 'srinivas.r@cdu.ac.in',
  },
  {
    name: 'Dr. A. Padmavathi',
    designation: 'Associate Professor',
    department: 'Management Studies',
    qualification: 'Ph.D (IIM Bangalore)',
    specialization: 'Marketing, Consumer Behavior',
    image: PLACEHOLDER_IMAGES.people.student3,
    email: 'padmavathi.a@cdu.ac.in',
  },
];

export function FacultyContent() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Expert Educators"
          title="Faculty Directory"
          description="Our faculty members bring a wealth of academic and industry experience to the classroom."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member) => (
            <Card key={member.name} variant="elevated">
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="primary" className="mb-3">
                  {member.department}
                </Badge>
                <h3 className="text-lg font-semibold text-primary-600 mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-gold text-sm font-medium mb-2">
                  {member.designation}
                </p>
                <p className="text-sm text-neutral-500 mb-1">
                  {member.qualification}
                </p>
                <p className="text-sm text-neutral-600 mb-4">
                  <strong>Specialization:</strong> {member.specialization}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-500"
                >
                  <Envelope className="h-4 w-4 mr-2" />
                  {member.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
