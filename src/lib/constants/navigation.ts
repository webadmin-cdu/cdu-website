export const MAIN_NAVIGATION = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Awards & Recognition', href: '/about/awards' },
      { label: 'Accreditation', href: '/about/accreditation' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Departments', href: '/academics/departments' },
      { label: 'Programs', href: '/academics/programs' },
      { label: 'Faculty', href: '/academics/faculty' },
      { label: 'Research', href: '/academics/research' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'How to Apply', href: '/admissions/how-to-apply' },
      { label: 'Fee Structure', href: '/admissions/fee-structure' },
      { label: 'Scholarships', href: '/admissions/scholarships' },
      { label: 'International Students', href: '/admissions/international' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    children: [
      { label: 'Facilities', href: '/campus-life/facilities' },
      { label: 'Clubs & Activities', href: '/campus-life/clubs' },
      { label: 'Events', href: '/campus-life/events' },
      { label: 'Gallery', href: '/campus-life/gallery' },
    ],
  },
  {
    label: 'Placements',
    href: '/placements',
    children: [
      { label: 'Statistics', href: '/placements/statistics' },
      { label: 'Our Recruiters', href: '/placements/recruiters' },
      { label: 'Success Stories', href: '/placements/testimonials' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const QUICK_ACCESS = {
  prospectiveStudents: [
    { label: 'View Programs', href: '/academics/programs' },
    { label: 'Apply Now', href: '/admissions/how-to-apply' },
    { label: 'Fee Structure', href: '/admissions/fee-structure' },
    { label: 'Virtual Tour', href: '/campus-life/gallery' },
  ],
  currentStudents: [
    { label: 'Student Portal', href: '/student-portal' },
    {
      label: 'Exam Results',
      href: 'http://webresults.chaitanya.edu.in',
      external: true,
    },
    { label: 'Time Tables', href: '/student-portal#timetables' },
    { label: 'Library', href: '/campus-life/facilities#library' },
  ],
  parents: [
    { label: 'Fee Payment', href: '/admissions/fee-structure' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Campus Facilities', href: '/campus-life/facilities' },
  ],
};

export const DEPARTMENTS = [
  // Engineering
  {
    id: 'engineering',
    name: 'Engineering',
    shortName: 'Engineering',
    description: 'B.Tech, M.Tech, and Ph.D programs in CSE, AI & ML, Data Science, ECE, EEE, Mechanical, and Civil Engineering.',
    programs: 15,
    facultyName: 'Faculty of Engineering',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80',
    slug: 'engineering',
    recognition: ['UGC', 'AICTE'],
    labs: [
      'Electronic Devices & Circuits Lab',
      'Digital System Design Lab',
      'Microprocessors & Microcontrollers Lab',
      'Analog & Digital Communication Lab',
      'Power Electronics Lab',
      'Power Systems Lab',
      'Thermodynamics Lab',
      'Manufacturing Technology Lab',
      'Fluid Mechanics Lab',
      'Concrete Technology Lab',
      'Surveying & Geomatics Lab',
    ],
    researchAreas: [
      'Artificial Intelligence & Machine Learning',
      'VLSI Design & Nanoelectronics',
      'Power Systems & Smart Grid',
      'Structural Engineering',
      'Robotics & Automation',
      'IoT & Embedded Systems',
    ],
  },
  // Pharmacy
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    shortName: 'Pharmacy',
    description: 'PCI approved B.Pharm, Pharm.D, and M.Pharm programs with 32 specialized laboratories.',
    programs: 8,
    facultyName: 'Department of Pharmacy',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
    slug: 'pharmacy',
    email: 'pharmacy@chaitanyacolleges.com',
    phone: '9948172444',
    recognition: ['PCI'],
    yearEstablished: 2008,
    labs: [
      'Pharmaceutics Lab I & II',
      'Pharmaceutical Inorganic Chemistry',
      'Pharmaceutical Organic Chemistry',
      'Pharmaceutical Analysis Lab',
      'Pharmacognosy Lab I & II',
      'Pharmacology Lab I & II',
      'Human Anatomy and Physiology Lab',
      'Pharmaceutical Biotechnology Lab',
      'Central Instrumentation Lab',
      'Clinical Pharmacy Lab',
      'Hospital Pharmacy',
      'Model Pharmacy Lab',
      'Animal House',
    ],
    fees: {
      'B.Pharmacy': '₹1,10,000/year',
      'Pharm.D': '₹2,00,000/year',
      'M.Pharmacy': '₹1,10,000/year',
    },
  },
  // Humanities & Sciences
  {
    id: 'sciences',
    name: 'Humanities & Sciences',
    shortName: 'Humanities & Sciences',
    description: 'B.Sc, M.Sc, BCA, MCA, and Ph.D programs in Life Sciences, Physical Sciences, and Computer Applications.',
    programs: 24,
    facultyName: 'Faculty of Science',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80',
    slug: 'sciences-humanities',
    recognition: ['UGC'],
    labs: [
      'Molecular Biology Lab',
      'General Biochemistry Lab',
      'Plant Tissue Culture Lab',
      'Animal Cell Culture Lab',
      'General Microbiology Lab',
      'Immunology Lab',
      'Haematology Lab',
      'Histopathology Lab',
      'Food Technology Lab',
    ],
    researchAreas: [
      'Biotechnology & Genetic Engineering',
      'Medical & Industrial Microbiology',
      'Synthetic Organic Chemistry',
      'Forensic Science',
      'Clinical Biochemistry',
      'Nanotechnology',
      'Nutrition & Food Science',
    ],
  },
  // Allied Health Sciences
  {
    id: 'allied-health',
    name: 'Allied Health Sciences',
    shortName: 'Allied Health Sciences',
    description: 'BPT, Radiology, Anaesthesia & OT Technology, and Cardiovascular Technology programs.',
    programs: 4,
    facultyName: 'Department of Allied Health Sciences',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    slug: 'allied-health-sciences',
    recognition: ['IAP', 'NCAHP', 'AERB', 'UGC'],
    labs: [
      'Anatomy Lab',
      'Physiology Lab',
      'Biomechanics Lab',
      'Exercise Therapy Lab',
      'Electrotherapy Lab',
      'X-Ray Lab',
      'CT Lab',
      'MRI Lab',
      'Out Patient Department',
    ],
    researchAreas: [
      'Musculoskeletal Rehabilitation',
      'Neurological Rehabilitation',
      'Cardiothoracic Rehabilitation',
      'Sports Sciences',
    ],
  },
  // Commerce & Business Management
  {
    id: 'management',
    name: 'Commerce & Business Management',
    shortName: 'Commerce & Business Management',
    description: 'B.Com (Computer Applications), BBA, MBA, and doctoral programs with industry partnerships.',
    programs: 4,
    facultyName: 'Faculty of Commerce and Business Management',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
    slug: 'commerce-management',
    recognition: ['UGC', 'AICTE'],
  },
  // Agriculture
  {
    id: 'agriculture',
    name: 'Agriculture',
    shortName: 'Agriculture',
    description: 'ICAR recognized B.Sc (Hons.) Agriculture program with field research facilities.',
    programs: 1,
    facultyName: 'Department of Agriculture',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80',
    slug: 'agriculture',
    phone: '9542563650',
    recognition: ['ICAR'],
    yearEstablished: 2021,
    labs: [
      'Horticulture and Plant Breeding Lab',
      'Agronomy and Entomology Lab',
      'Plant Pathology Lab',
      'Soil Science Lab',
      'Shadenet Facility',
      'Field Research Area',
    ],
    researchAreas: [
      'Vegetable Science',
      'Sustainable Farming',
      'Crop Protection',
      'Soil Health Management',
    ],
    fees: {
      'B.Sc Agriculture': '₹1,20,000/year',
    },
  },
  // Nursing
  {
    id: 'nursing',
    name: 'Nursing',
    shortName: 'Nursing',
    description: 'INC approved B.Sc (Hons.) Nursing program preparing skilled healthcare professionals.',
    programs: 1,
    facultyName: 'Department of Nursing',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
    slug: 'nursing',
    recognition: ['INC'],
  },
];

export const NEWS_ITEMS = [
  {
    id: '1',
    title: 'Ph.D Admissions Open for Academic Year 2025-26',
    excerpt:
      'Applications are now being accepted for 14 doctoral programs across all departments.',
    date: '2025-01-20',
    category: 'Admissions',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&q=80',
    slug: 'phd-admissions-2025-26',
  },
  {
    id: '2',
    title: 'Collaboration with Eastern Michigan University for MBA Program',
    excerpt:
      'New international partnership offers students the opportunity to complete MBA with global exposure.',
    date: '2025-01-15',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    slug: 'emu-partnership-mba',
  },
  {
    id: '3',
    title: 'Annual Technical Symposium 2025 Announced',
    excerpt:
      'Register now for our flagship technical event featuring workshops and competitions.',
    date: '2025-01-10',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80',
    slug: 'tech-symposium-2025',
  },
  {
    id: '4',
    title: 'New Hyderabad Campus Now Fully Operational',
    excerpt:
      'State-of-the-art campus in Himayatnagar, Hyderabad offers world-class facilities to students.',
    date: '2024-12-01',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&q=80',
    slug: 'research-center-inauguration',
  },
  {
    id: '5',
    title: 'National Science Day Celebrations 2025',
    excerpt:
      'Students and faculty celebrated National Science Day with poster presentations, guest lectures, and live experiments.',
    date: '2025-02-28',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&q=80',
    slug: 'national-science-day-2025',
  },
  {
    id: '6',
    title: 'Chaitanya Students Bag Top Ranks in GPAT 2025',
    excerpt:
      'Pharmacy students secured top positions in the Graduate Pharmacy Aptitude Test with outstanding scores.',
    date: '2025-02-10',
    category: 'Achievements',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop&q=80',
    slug: 'gpat-results-2025',
  },
  {
    id: '7',
    title: 'MoU Signed with TASK for Skill Development Programs',
    excerpt:
      'Partnership with Telangana Academy for Skill and Knowledge to enhance employability of students.',
    date: '2025-01-28',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=80',
    slug: 'task-mou-signing',
  },
  {
    id: '8',
    title: 'International Conference on Emerging Technologies',
    excerpt:
      'Two-day conference brought together researchers from 12 countries to discuss AI, IoT, and sustainable tech.',
    date: '2025-01-05',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&q=80',
    slug: 'icet-conference-2025',
  },
  {
    id: '9',
    title: 'Campus Recruitment Drive — 120+ Students Placed',
    excerpt:
      'Major recruitment drive by Wipro, TCS, and Infosys saw record placements across Engineering and Management.',
    date: '2024-12-18',
    category: 'Placements',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&q=80',
    slug: 'campus-recruitment-2024',
  },
  {
    id: '10',
    title: 'Annual Sports Meet — Chaitanya Champions Trophy',
    excerpt:
      'Week-long inter-departmental sports fest saw participation from over 500 students across 15 events.',
    date: '2024-12-10',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&q=80',
    slug: 'sports-meet-2024',
  },
  {
    id: '11',
    title: 'Nursing Students Complete Rural Health Camp',
    excerpt:
      'Students from the School of Nursing conducted a 3-day health awareness camp serving over 800 villagers.',
    date: '2024-11-25',
    category: 'Outreach',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
    slug: 'rural-health-camp-2024',
  },
  {
    id: '12',
    title: 'Agriculture Department Launches Smart Farming Lab',
    excerpt:
      'New precision agriculture lab equipped with drone technology, IoT sensors, and hydroponic systems.',
    date: '2024-11-15',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&q=80',
    slug: 'smart-farming-lab-2024',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Microsoft',
    batch: '2022',
    quote:
      'The faculty at Chaitanya provided excellent guidance that helped me secure my dream job. The practical approach to learning made all the difference.',
    image: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?w=400&h=400&fit=crop&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png',
  },
  {
    id: '2',
    name: 'Rahul Reddy',
    role: 'Data Scientist',
    company: 'Amazon',
    batch: '2021',
    quote:
      'The research opportunities and industry connections at Chaitanya opened doors I never imagined. Grateful for the transformative experience.',
    image: 'https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png',
  },
  {
    id: '3',
    name: 'Ananya Patel',
    role: 'Pharmacist',
    company: 'Sun Pharma',
    batch: '2023',
    quote:
      'The Pharmacy department has state-of-the-art labs and dedicated professors who go above and beyond to ensure student success.',
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=400&h=400&fit=crop&q=80',
    logo: 'https://companieslogo.com/img/orig/SUNPHARMA.NS_BIG-64a44f48.png?t=1746028384',
  },
  {
    id: '4',
    name: 'Vikram Krishnan',
    role: 'Systems Analyst',
    company: 'TCS',
    batch: '2020',
    quote:
      'Chaitanya gave me a strong foundation in both technical and soft skills. The campus placement process was seamless and well-organized.',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&h=400&fit=crop&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
  {
    id: '5',
    name: 'Sneha Reddy',
    role: 'Registered Nurse',
    company: 'Apollo Hospitals',
    batch: '2022',
    quote:
      'The nursing program at Chaitanya is exceptional. Clinical rotations and hands-on training prepared me thoroughly for real-world healthcare challenges.',
    image: 'https://images.unsplash.com/photo-1622556498246-755f44ca76f3?w=400&h=400&fit=crop&q=80',
    logo: 'https://companieslogo.com/img/orig/APOLLOHOSP.NS_BIG-7f75df62.png?t=1745075250',
  },
  {
    id: '6',
    name: 'Arjun Deshmukh',
    role: 'Business Analyst',
    company: 'Deloitte',
    batch: '2021',
    quote:
      'The MBA program was a game-changer for my career. Industry visits, case studies, and the mentorship from faculty gave me a competitive edge.',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&q=80',
    logo: '/images/Deloitte-Logo.wine.svg',
  },
  {
    id: '7',
    name: 'Meera Joshi',
    role: 'Agriculture Scientist',
    company: 'ICAR',
    batch: '2020',
    quote:
      'The agriculture department has excellent research facilities. My thesis work at Chaitanya directly contributed to my position at ICAR.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&q=80',
    logo: 'https://images.seeklogo.com/logo-png/15/2/icar-logo-png_seeklogo-158112.png',
  },
  {
    id: '8',
    name: 'Karthik Nair',
    role: 'Full Stack Developer',
    company: 'Infosys',
    batch: '2023',
    quote:
      'The coding bootcamps and hackathons organized by the CSE department sharpened my skills beyond the curriculum. Truly grateful for the exposure.',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/800px-Infosys_logo.svg.png',
  },
  {
    id: '9',
    name: 'Fatima Sheikh',
    role: 'Quality Analyst',
    company: 'Hetero Pharma',
    batch: '2022',
    quote:
      'The pharmacy labs and industry tie-ups at Chaitanya are unmatched. I was placed even before completing my final semester.',
    image: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=400&h=400&fit=crop&q=80',
    logo: 'https://cdn.brandfetch.io/idphkg0C-n/w/820/h/706/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1763980572368',
  },
];

export const RECRUITERS = [
  'Wipro',
  'TCS',
  'Amazon',
  'Tech Mahindra',
  'Infosys',
  'Axis Bank',
  'Capgemini',
  'Reliance Digital',
  'Kun United Hyundai',
  'Aastrin Aviation',
  'Softpath System',
  'SPR Human Capital',
  'Unislink',
  'Cognizant',
  'HCL',
  'Deloitte',
  'Sun Pharma',
  "Dr. Reddy's",
  'Cipla',
  'Aurobindo Pharma',
  'Hetero',
  'Gland Pharma',
];

// Re-export images from Supabase storage
// All images are now hosted on Supabase for better performance
import { SUPABASE_IMAGES } from './supabaseImages';

export const RECRUITER_LOGOS = SUPABASE_IMAGES.recruiters;
export const ACCREDITATION_LOGOS = SUPABASE_IMAGES.accreditation;
export const CAMPUS_IMAGES = SUPABASE_IMAGES.campus;
export const LEADERSHIP_IMAGES = SUPABASE_IMAGES.leadership;
