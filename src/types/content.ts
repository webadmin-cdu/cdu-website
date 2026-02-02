// Content Types for the University Website

export interface Department {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  vision?: string;
  mission?: string;
  programs: number;
  image: string;
  icon?: string;
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  department: string;
  departmentSlug: string;
  level: 'undergraduate' | 'postgraduate' | 'doctoral';
  duration: string;
  intake: number;
  eligibility: string;
  description: string;
  highlights: string[];
  curriculum: CurriculumYear[];
  careerProspects: string[];
  fees: ProgramFees;
  image: string;
}

export interface CurriculumYear {
  semester: string;
  subjects: string[];
}

export interface ProgramFees {
  tuition: string;
  hostel: string;
  other: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department?: string;
  qualification?: string;
  specialization?: string;
  email?: string;
  phone?: string;
  image: string;
  profileUrl?: string;
  publications?: number;
  experience?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  author?: string;
  tags?: string[];
}

export interface Event {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  date: string;
  time?: string;
  endDate?: string;
  location?: string;
  image?: string;
  category?: string;
  registrationUrl?: string;
  capacity?: number;
  registered?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  quote: string;
  image: string;
  program?: string;
}

export interface Recruiter {
  id: string;
  name: string;
  logo?: string;
  category?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}

export interface Club {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  activities?: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  qualification?: string;
  message?: string;
  image: string;
  order?: number;
}

export interface Award {
  id: string;
  title: string;
  description: string;
  year: string;
  category?: string;
  image?: string;
}

export interface Accreditation {
  id: string;
  name: string;
  fullName: string;
  description: string;
  validUntil?: string;
  logo?: string;
}

export interface Scholarship {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  amount?: string;
  deadline?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface ContactInfo {
  addresses: {
    campus: string;
    address: string;
    mapUrl?: string;
  }[];
  phones: {
    [key: string]: string;
  };
  email: string;
  admissionsEmail?: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface SiteStats {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
