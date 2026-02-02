import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/shared/PageHeader';
import { DepartmentContent } from './DepartmentContent';
import { DEPARTMENTS } from '@/lib/constants/navigation';

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const department = DEPARTMENTS.find((d) => d.slug === slug);
  if (!department) return { title: 'Department Not Found' };
  return {
    title: department.name,
    description: department.description,
  };
}

const programsByDepartment: Record<string, { name: string; duration: string; level: string }[]> = {
  'computer-science-engineering': [
    { name: 'B.Tech in Computer Science', duration: '4 Years', level: 'Undergraduate' },
    { name: 'B.Tech in AI & ML', duration: '4 Years', level: 'Undergraduate' },
    { name: 'B.Tech in Data Science', duration: '4 Years', level: 'Undergraduate' },
    { name: 'M.Tech in Computer Science', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Tech in AI & ML', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D in Computer Science', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'electronics-communication': [
    { name: 'B.Tech in ECE', duration: '4 Years', level: 'Undergraduate' },
    { name: 'B.Tech in VLSI', duration: '4 Years', level: 'Undergraduate' },
    { name: 'M.Tech in ECE', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Tech in Embedded Systems', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D in ECE', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'mechanical-engineering': [
    { name: 'B.Tech in Mechanical Engineering', duration: '4 Years', level: 'Undergraduate' },
    { name: 'M.Tech in Mechanical Engineering', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Tech in CAD/CAM', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D in Mechanical Engineering', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'civil-engineering': [
    { name: 'B.Tech in Civil Engineering', duration: '4 Years', level: 'Undergraduate' },
    { name: 'M.Tech in Structural Engineering', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D in Civil Engineering', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'pharmacy': [
    { name: 'B.Pharm', duration: '4 Years', level: 'Undergraduate' },
    { name: 'Pharm.D', duration: '6 Years', level: 'Undergraduate' },
    { name: 'M.Pharm in Pharmaceutics', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Pharm in Pharmacology', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D in Pharmacy', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'management-studies': [
    { name: 'BBA', duration: '3 Years', level: 'Undergraduate' },
    { name: 'MBA', duration: '2 Years', level: 'Postgraduate' },
    { name: 'MBA (Executive)', duration: '1 Year', level: 'Postgraduate' },
    { name: 'Ph.D in Management', duration: '3-5 Years', level: 'Doctoral' },
  ],
};

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const department = DEPARTMENTS.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  const programs = programsByDepartment[slug] || [];

  return (
    <>
      <PageHeader
        title={department.name}
        description={department.description}
        backgroundImage={department.image}
      />
      <DepartmentContent department={department} programs={programs} />
    </>
  );
}
