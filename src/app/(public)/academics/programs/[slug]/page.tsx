import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProgramDetailContent } from './ProgramDetailContent';

// Program data - in production this would come from a CMS
const programs = [
  {
    slug: 'btech-computer-science-engineering',
    name: 'B.Tech in Computer Science & Engineering',
    shortName: 'B.Tech CSE',
    department: 'Computer Science & Engineering',
    departmentSlug: 'computer-science-engineering',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 180,
    eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks',
    description:
      'The B.Tech in Computer Science & Engineering program provides comprehensive education in software development, algorithms, data structures, artificial intelligence, and emerging technologies. Students gain hands-on experience through projects, internships, and industry collaborations.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop&q=80',
    highlights: [
      'AICTE approved program with state-of-the-art labs',
      'Industry-aligned curriculum with latest technologies',
      'NIAT Corporate specialization available',
      'Placement assistance with top tech companies',
      'Research opportunities in AI, ML, and Data Science',
      'Industry mentorship and internship programs',
    ],
    curriculum: [
      {
        semester: 'Year 1',
        subjects: [
          'Engineering Mathematics I & II',
          'Engineering Physics & Chemistry',
          'Programming in C',
          'Basic Electronics',
          'Engineering Drawing',
          'Communication Skills',
        ],
      },
      {
        semester: 'Year 2',
        subjects: [
          'Data Structures',
          'Object Oriented Programming',
          'Database Management Systems',
          'Computer Organization',
          'Discrete Mathematics',
          'Operating Systems',
        ],
      },
      {
        semester: 'Year 3',
        subjects: [
          'Design & Analysis of Algorithms',
          'Computer Networks',
          'Software Engineering',
          'Web Technologies',
          'Machine Learning Fundamentals',
          'Professional Electives',
        ],
      },
      {
        semester: 'Year 4',
        subjects: [
          'Cloud Computing',
          'Information Security',
          'Major Project',
          'Industry Internship',
          'Open Electives',
          'Entrepreneurship Development',
        ],
      },
    ],
    careerProspects: [
      'Software Engineer',
      'Full Stack Developer',
      'Data Scientist',
      'System Architect',
      'Cloud Engineer',
      'DevOps Engineer',
      'AI/ML Engineer',
      'Cybersecurity Analyst',
    ],
    fees: {
      tuition: '85,000',
      hostel: '45,000',
      other: '15,000',
    },
  },
  {
    slug: 'btech-ai-machine-learning',
    name: 'B.Tech in AI & Machine Learning',
    shortName: 'B.Tech AI/ML',
    department: 'Computer Science & Engineering',
    departmentSlug: 'computer-science-engineering',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 60,
    eligibility: '10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks',
    description:
      'Specialized B.Tech program focusing on Artificial Intelligence and Machine Learning. This cutting-edge program prepares students for the AI revolution with deep learning, neural networks, natural language processing, and computer vision.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&q=80',
    highlights: [
      'Specialized AI/ML curriculum with industry focus',
      'Hands-on projects with real-world datasets',
      'GPU-enabled computing labs',
      'Industry collaboration with tech giants',
      'Research publications opportunities',
      'Capstone projects with industry mentors',
    ],
    curriculum: [],
    careerProspects: [
      'AI Engineer',
      'Machine Learning Engineer',
      'Data Scientist',
      'NLP Engineer',
      'Computer Vision Engineer',
      'AI Research Scientist',
    ],
    fees: {
      tuition: '95,000',
      hostel: '45,000',
      other: '15,000',
    },
  },
  {
    slug: 'bpharm',
    name: 'Bachelor of Pharmacy',
    shortName: 'B.Pharm',
    department: 'Pharmacy',
    departmentSlug: 'pharmacy',
    level: 'Undergraduate',
    duration: '4 Years',
    intake: 100,
    eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% marks',
    description:
      'PCI-approved B.Pharm program providing comprehensive education in pharmaceutical sciences. The program covers drug development, formulation, quality control, and clinical pharmacy with state-of-the-art laboratory facilities.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80',
    highlights: [
      'PCI approved program',
      'Well-equipped pharmaceutical labs',
      'Hospital and industry training',
      'Research opportunities',
      'Placement in top pharma companies',
      'GPAT coaching available',
    ],
    curriculum: [],
    careerProspects: [
      'Pharmacist',
      'Drug Inspector',
      'Clinical Research Associate',
      'Quality Control Analyst',
      'Medical Representative',
      'Pharmaceutical Sales Manager',
    ],
    fees: {
      tuition: '75,000',
      hostel: '45,000',
      other: '12,000',
    },
  },
  {
    slug: 'mba',
    name: 'Master of Business Administration',
    shortName: 'MBA',
    department: 'Management & Commerce',
    departmentSlug: 'management-studies',
    level: 'Postgraduate',
    duration: '2 Years',
    intake: 120,
    eligibility: 'Bachelor\'s degree in any discipline with minimum 50% marks. Valid CAT/MAT/XAT/CMAT score.',
    description:
      'MBA program with international collaboration from Eastern Michigan University. Offers specializations in Finance, Marketing, HR, Operations, and Business Analytics with focus on practical learning and leadership development.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80',
    highlights: [
      'Collaboration with Eastern Michigan University',
      'Industry-integrated curriculum',
      'Live projects and case studies',
      'Executive mentorship program',
      'International exposure opportunities',
      'Placement support from top recruiters',
    ],
    curriculum: [],
    careerProspects: [
      'Business Analyst',
      'Marketing Manager',
      'Financial Analyst',
      'HR Manager',
      'Operations Manager',
      'Management Consultant',
      'Entrepreneur',
    ],
    fees: {
      tuition: '1,25,000',
      hostel: '50,000',
      other: '15,000',
    },
  },
  {
    slug: 'pharmd',
    name: 'Doctor of Pharmacy',
    shortName: 'Pharm.D',
    department: 'Pharmacy',
    departmentSlug: 'pharmacy',
    level: 'Undergraduate',
    duration: '6 Years',
    intake: 30,
    eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics with minimum 50% marks',
    description:
      'An integrated clinical pharmacy program that prepares students for patient-centered pharmaceutical care. The 6-year program includes 5 years of academic study and 1 year of internship/residency in hospitals.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80',
    highlights: [
      'PCI approved clinical pharmacy program',
      'Extensive hospital training',
      'Patient counseling skills',
      'Drug interaction management',
      'Clinical research exposure',
      'Global career opportunities',
    ],
    curriculum: [],
    careerProspects: [
      'Clinical Pharmacist',
      'Hospital Pharmacist',
      'Drug Information Specialist',
      'Pharmacovigilance Officer',
      'Clinical Research Coordinator',
      'Academic Faculty',
    ],
    fees: {
      tuition: '1,00,000',
      hostel: '45,000',
      other: '15,000',
    },
  },
];

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: 'Program Not Found',
    };
  }

  return {
    title: `${program.name} | Programs`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={program.name}
        description={program.department}
      />
      <ProgramDetailContent program={program} />
    </>
  );
}
