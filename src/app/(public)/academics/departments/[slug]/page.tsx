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

const programsByDepartment: Record<string, { name: string; duration: string; level: string; accreditation?: string }[]> = {
  'engineering': [
    // Undergraduate
    { name: 'B.Tech. Computer Science & Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. CSE AI & ML', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. CSE Data Science', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. Electronics and Communication Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. Electrical and Electronics Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. Mechanical Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    { name: 'B.Tech. Civil Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
    // Postgraduate
    { name: 'M.Tech. Computer Science & Engineering', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
    { name: 'M.Tech. VLSI System Design', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
    { name: 'M.Tech. Power Electronics', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
    // Doctoral
    { name: 'Ph.D. Computer Science & Engineering', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Electronics and Communication Engineering', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Electrical and Electronics Engineering', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Mechanical Engineering', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Civil Engineering', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'pharmacy': [
    // Undergraduate
    { name: 'B.Pharmacy', duration: '4 Years', level: 'Undergraduate', accreditation: 'PCI' },
    // Postgraduate
    { name: 'M.Pharmacy Pharmaceutics', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
    { name: 'M.Pharmacy Drug Regulatory Affairs', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
    { name: 'M.Pharmacy Industrial Pharmacy', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
    { name: 'M.Pharmacy Pharmaceutical Analysis', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
    { name: 'Pharm D (PB)', duration: '3 Years', level: 'Postgraduate', accreditation: 'PCI' },
    { name: 'Pharm. D', duration: '6 Years', level: 'Postgraduate', accreditation: 'PCI' },
    // Doctoral
    { name: 'Ph.D. Pharmacy', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'sciences-humanities': [
    // Undergraduate
    { name: 'B.Sc. M.P.Cs', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. M.St.Cs', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Bt.Mb.C.', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Nutrition and Food Science', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Medical Lab Technology', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Forensic Science', duration: '3 Years', level: 'Undergraduate' },
    { name: 'BS Computer Science', duration: '4 Years', level: 'Undergraduate' },
    { name: 'BCA', duration: '3 Years', level: 'Undergraduate' },
    // Postgraduate
    { name: 'M.Sc. Physics', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Organic Chemistry', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Microbiology', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Biotechnology', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Computer Science', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Medical Lab Technology', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Clinical Nutrition and Dietetics', duration: '2 Years', level: 'Postgraduate' },
    { name: 'M.Sc. Food Technology and Quality Assurance', duration: '2 Years', level: 'Postgraduate' },
    { name: 'MCA', duration: '2 Years', level: 'Postgraduate' },
    // Doctoral
    { name: 'Ph.D. Physics', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Mathematics and Statistics', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Chemistry', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Microbiology', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Biotechnology', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Computer Science', duration: '3-5 Years', level: 'Doctoral' },
    { name: 'Ph.D. Biochemistry', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'allied-health-sciences': [
    { name: 'B.Sc. Radiology and Imaging Technology', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Anaesthesia & Operation Theatre Technology', duration: '3 Years', level: 'Undergraduate' },
    { name: 'B.Sc. Cardiovascular Technology', duration: '3 Years', level: 'Undergraduate' },
    { name: 'Bachelor of Physiotherapy', duration: '4.5 Years', level: 'Undergraduate' },
  ],
  'commerce-management': [
    { name: 'B.Com. (Computer Applications)', duration: '3 Years', level: 'Undergraduate' },
    { name: 'BBA', duration: '3 Years', level: 'Undergraduate' },
    { name: 'MBA', duration: '2 Years', level: 'Postgraduate' },
    { name: 'Ph.D. Commerce & Business Management', duration: '3-5 Years', level: 'Doctoral' },
  ],
  'agriculture': [
    { name: 'B.Sc. (Hons.) Agriculture', duration: '4 Years', level: 'Undergraduate' },
  ],
  'nursing': [
    { name: 'B.Sc. (Hons.) Nursing', duration: '4 Years', level: 'Undergraduate', accreditation: 'INC' },
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
