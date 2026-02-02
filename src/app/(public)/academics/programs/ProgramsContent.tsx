'use client';

import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

const allPrograms = {
  undergraduate: [
    { name: 'B.Tech in Computer Science & Engineering', department: 'CSE', duration: '4 Years' },
    { name: 'B.Tech in AI & Machine Learning', department: 'CSE', duration: '4 Years' },
    { name: 'B.Tech in Data Science', department: 'CSE', duration: '4 Years' },
    { name: 'B.Tech in Electronics & Communication', department: 'ECE', duration: '4 Years' },
    { name: 'B.Tech in Mechanical Engineering', department: 'MECH', duration: '4 Years' },
    { name: 'B.Tech in Civil Engineering', department: 'CIVIL', duration: '4 Years' },
    { name: 'B.Pharm', department: 'PHARM', duration: '4 Years' },
    { name: 'Pharm.D', department: 'PHARM', duration: '6 Years' },
    { name: 'BBA', department: 'MBA', duration: '3 Years' },
  ],
  postgraduate: [
    { name: 'M.Tech in Computer Science', department: 'CSE', duration: '2 Years' },
    { name: 'M.Tech in AI & Machine Learning', department: 'CSE', duration: '2 Years' },
    { name: 'M.Tech in VLSI', department: 'ECE', duration: '2 Years' },
    { name: 'M.Tech in Mechanical Engineering', department: 'MECH', duration: '2 Years' },
    { name: 'M.Tech in Structural Engineering', department: 'CIVIL', duration: '2 Years' },
    { name: 'M.Pharm in Pharmaceutics', department: 'PHARM', duration: '2 Years' },
    { name: 'M.Pharm in Pharmacology', department: 'PHARM', duration: '2 Years' },
    { name: 'MBA', department: 'MBA', duration: '2 Years' },
    { name: 'MBA (Executive)', department: 'MBA', duration: '1 Year' },
  ],
  doctoral: [
    { name: 'Ph.D in Computer Science', department: 'CSE', duration: '3-5 Years' },
    { name: 'Ph.D in Electronics & Communication', department: 'ECE', duration: '3-5 Years' },
    { name: 'Ph.D in Mechanical Engineering', department: 'MECH', duration: '3-5 Years' },
    { name: 'Ph.D in Civil Engineering', department: 'CIVIL', duration: '3-5 Years' },
    { name: 'Ph.D in Pharmacy', department: 'PHARM', duration: '3-5 Years' },
    { name: 'Ph.D in Management', department: 'MBA', duration: '3-5 Years' },
  ],
};

function ProgramList({ programs }: { programs: typeof allPrograms.undergraduate }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {programs.map((program) => (
        <Card key={program.name} variant="bordered" className="hover:shadow-soft transition-shadow">
          <CardContent className="p-5">
            <Badge variant="primary" className="mb-3">
              {program.department}
            </Badge>
            <h3 className="font-semibold text-primary-600 mb-2">{program.name}</h3>
            <p className="text-sm text-neutral-500">Duration: {program.duration}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ProgramsContent() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="undergraduate">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
            <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
            <TabsTrigger value="doctoral">Doctoral</TabsTrigger>
          </TabsList>

          <TabsContent value="undergraduate">
            <SectionTitle
              subtitle="Undergraduate Programs"
              title="Bachelor's Degrees"
              description="Foundation programs that prepare you for a successful career."
            />
            <ProgramList programs={allPrograms.undergraduate} />
          </TabsContent>

          <TabsContent value="postgraduate">
            <SectionTitle
              subtitle="Postgraduate Programs"
              title="Master's Degrees"
              description="Advanced programs for specialization and career advancement."
            />
            <ProgramList programs={allPrograms.postgraduate} />
          </TabsContent>

          <TabsContent value="doctoral">
            <SectionTitle
              subtitle="Doctoral Programs"
              title="Ph.D Programs"
              description="Research-focused programs for aspiring scholars and academics."
            />
            <ProgramList programs={allPrograms.doctoral} />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/admissions/how-to-apply">
            <Button size="lg">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
