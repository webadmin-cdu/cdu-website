// Award and recognition images from Supabase Storage
// Generated on: 2026-01-27T05:03:10.947Z

const SUPABASE_AWARDS_URL = 'https://bxklouufxiafncqisgxx.supabase.co/storage/v1/object/public/website-assets/awards';
const SUPABASE_AWARDS_BG_URL = `${SUPABASE_AWARDS_URL}/backgrounds`;

// Background images for awards page sections
export const AWARDS_BACKGROUNDS = {
  hero: `${SUPABASE_AWARDS_BG_URL}/awards-hero-bg.jpg`,
  naac: `${SUPABASE_AWARDS_BG_URL}/naac-section-bg.jpg`,
  dbt: `${SUPABASE_AWARDS_BG_URL}/dbt-section-bg.jpg`,
  ugcCpe: `${SUPABASE_AWARDS_BG_URL}/ugc-cpe-section-bg.jpg`,
  ugcRecognized: `${SUPABASE_AWARDS_BG_URL}/ugc-recognized-section-bg.jpg`,
  nirf: `${SUPABASE_AWARDS_BG_URL}/nirf-section-bg.jpg`,
  mta: `${SUPABASE_AWARDS_BG_URL}/mta-section-bg.jpg`,
  bschool: `${SUPABASE_AWARDS_BG_URL}/bschool-section-bg.jpg`,
  aicte: `${SUPABASE_AWARDS_BG_URL}/aicte-section-bg.jpg`,
  task: `${SUPABASE_AWARDS_BG_URL}/task-section-bg.jpg`,
  oxford: `${SUPABASE_AWARDS_BG_URL}/oxford-section-bg.jpg`,
  indywood: `${SUPABASE_AWARDS_BG_URL}/indywood-section-bg.jpg`,
};

export const AWARD_IMAGES = {
  naacAGrade: `${SUPABASE_AWARDS_URL}/naac-a-grade.png`,
  dbtStarCollege: `${SUPABASE_AWARDS_URL}/dbt-star-college.png`,
  ugcLogo: `${SUPABASE_AWARDS_URL}/ugc-logo.png`,
  ugcRecognized: `${SUPABASE_AWARDS_URL}/ugc-recognized.png`,
  nirfRanking: `${SUPABASE_AWARDS_URL}/nirf-ranking.jpg`,
  jkcAward: `${SUPABASE_AWARDS_URL}/jkc-award.png`,
  microsoftMta: `${SUPABASE_AWARDS_URL}/microsoft-mta.png`,
  bestBschool: `${SUPABASE_AWARDS_URL}/best-bschool.jpg`,
  aicteLogo: `${SUPABASE_AWARDS_URL}/aicte-logo.png`,
  taskTelangana: `${SUPABASE_AWARDS_URL}/task-telangana.png`,
  pciApproved: `${SUPABASE_AWARDS_URL}/pci-approved.png`,
  indywoodAward: `${SUPABASE_AWARDS_URL}/indywood-award.png`,
};

export const AWARDS_DATA = [
  {
    id: 'deemed-university',
    title: 'Deemed to be University',
    year: '2019',
    description: 'Granted Deemed to be University status by UGC in November 2019. Only 4 institutions received this designation post-2010.',
    image: AWARD_IMAGES.ugcRecognized,
    category: 'status',
  },
  {
    id: 'naac-a-grade',
    title: 'NAAC "A" Grade Accreditation',
    year: '2017',
    description: 'Accredited with "A" Grade by the National Assessment and Accreditation Council (NAAC) - the highest grade achieved by the institution.',
    image: AWARD_IMAGES.naacAGrade,
    category: 'accreditation',
  },
  {
    id: 'dbt-star-college',
    title: 'DBT Star College Scheme',
    year: '2015',
    description: 'Seven departments recognized under the prestigious Star College Scheme by the Department of Biotechnology, Government of India.',
    image: AWARD_IMAGES.dbtStarCollege,
    category: 'recognition',
  },
  {
    id: 'ugc-cpe',
    title: 'College with Potential for Excellence',
    year: '2016',
    description: 'Recognized as "College with Potential for Excellence" by UGC - one of only 3 institutions in the state to receive this honor.',
    image: AWARD_IMAGES.ugcLogo,
    category: 'recognition',
  },
  {
    id: 'nirf-ranking',
    title: 'NIRF Rankings',
    year: '2017',
    description: 'Ranked 101-150 for UG and 151-200 for PG programs in NIRF Rankings. The only institution in Telangana to achieve these rankings.',
    image: AWARD_IMAGES.nirfRanking,
    category: 'ranking',
  },
  {
    id: 'aicte-best-practices',
    title: 'AICTE Best Practices Award',
    year: '2018',
    description: 'Recognized among top 30 technical institutions nationally for best practices. Only 3 colleges in Telangana received this distinction.',
    image: AWARD_IMAGES.aicteLogo,
    category: 'recognition',
  },
  {
    id: 'microsoft-mta',
    title: 'Microsoft Technology Associate',
    year: '2012',
    description: 'Received "Outstanding Performance 2011-12" recognition from Microsoft, Certiport, and JKC for the MTA program.',
    image: AWARD_IMAGES.microsoftMta,
    category: 'technology',
  },
  {
    id: 'jkc-award',
    title: 'JKC Outstanding Performance',
    year: '2010',
    description: 'Recognized as Best JKC by AP IT Department. Received Outstanding Performance Award for excellence in skill development.',
    image: AWARD_IMAGES.jkcAward,
    category: 'technology',
  },
  {
    id: 'indywood-excellence',
    title: 'Indywood Educational Excellence',
    year: '2017',
    description: 'Chancellor Dr. Ch. V. Purushotham Reddy received the Indywood Educational Excellence Award - the sole recipient in his category.',
    image: AWARD_IMAGES.indywoodAward,
    category: 'leadership',
  },
  {
    id: 'best-bschool',
    title: 'Best B-School AA+ Grade',
    year: '2018',
    description: 'Awarded AA+ Grade by Digital Learning Magazine, recognizing excellence in management education.',
    image: AWARD_IMAGES.bestBschool,
    category: 'ranking',
  },
  {
    id: 'task-registered',
    title: 'TASK Registered Institution',
    year: '2016',
    description: 'Registered with Telangana Academy of Skill & Knowledge (TASK) for employability and skill development initiatives.',
    image: AWARD_IMAGES.taskTelangana,
    category: 'recognition',
  },
  {
    id: 'pci-approved',
    title: 'PCI Approved',
    year: 'Ongoing',
    description: 'Pharmacy programs approved by the Pharmacy Council of India (PCI), ensuring highest standards in pharmaceutical education.',
    image: AWARD_IMAGES.pciApproved,
    category: 'accreditation',
  },
];

export const AWARD_CATEGORIES = {
  status: { label: 'University Status', color: 'from-purple-500 to-purple-700' },
  accreditation: { label: 'Accreditation', color: 'from-blue-500 to-blue-700' },
  recognition: { label: 'Recognition', color: 'from-green-500 to-green-700' },
  ranking: { label: 'Rankings', color: 'from-orange-500 to-orange-700' },
  technology: { label: 'Technology', color: 'from-cyan-500 to-cyan-700' },
  leadership: { label: 'Leadership', color: 'from-rose-500 to-rose-700' },
};
