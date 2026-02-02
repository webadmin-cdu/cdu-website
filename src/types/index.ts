export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Accreditation {
  name: string;
  description: string;
}

export interface Address {
  campus: string;
  address: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  programs: number;
  image: string;
  slug: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  content?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  quote: string;
  image: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  image: string;
  email?: string;
}

export interface Program {
  id: string;
  name: string;
  slug: string;
  department: string;
  duration: string;
  level: 'undergraduate' | 'postgraduate' | 'doctoral';
  eligibility: string;
  description: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  slug: string;
  registrationOpen: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}
