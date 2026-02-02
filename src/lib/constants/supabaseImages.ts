// Image constants from Supabase Storage
// All images hosted on Supabase for better performance and reliability

const SUPABASE_STORAGE_URL = 'https://bxklouufxiafncqisgxx.supabase.co/storage/v1/object/public/website-assets';

export const SUPABASE_IMAGES = {
  // Accreditation logos
  accreditation: [
    {
      name: 'NAAC A Grade',
      logo: `${SUPABASE_STORAGE_URL}/accreditation/naac-a-grade-logo.png`,
      description: 'National Assessment and Accreditation Council',
    },
    {
      name: 'UGC Recognized',
      logo: `${SUPABASE_STORAGE_URL}/accreditation/ugc-recognized-logo.png`,
      description: 'University Grants Commission',
    },
    {
      name: 'AICTE Approved',
      logo: `${SUPABASE_STORAGE_URL}/accreditation/aicte-approved-logo.png`,
      description: 'All India Council for Technical Education',
    },
  ],

  // Campus/Hero images
  campus: {
    hero: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop&q=80', // Graduation caps thrown - celebration
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=1080&fit=crop&q=80', // Students graduating together
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop&q=80', // Students in classroom/lecture
    ],
  },

  // Branding
  branding: {
    logoText: `${SUPABASE_STORAGE_URL}/branding/logo-text.png`,
  },

  // Leadership images
  leadership: {
    chairman: `${SUPABASE_STORAGE_URL}/leadership/chairman-portrait.jpg`,
    chancellor: `${SUPABASE_STORAGE_URL}/leadership/chancellor-dr-purushotham-reddy.png`,
    viceChancellor: `${SUPABASE_STORAGE_URL}/leadership/vice-chancellor-prof-g-shankar-lingam.png`,
  },

  // Recruiter logos - with proper company names
  recruiters: [
    { name: 'Wipro', logo: `${SUPABASE_STORAGE_URL}/recruiters/wipro-logo.png` },
    { name: 'Tech Mahindra', logo: `${SUPABASE_STORAGE_URL}/recruiters/tech-mahindra-logo.png` },
    { name: 'Capgemini', logo: `${SUPABASE_STORAGE_URL}/recruiters/capgemini-logo.png` },
    { name: 'Infosys', logo: `${SUPABASE_STORAGE_URL}/recruiters/infosys-logo.png` },
    { name: 'Cognizant', logo: `${SUPABASE_STORAGE_URL}/recruiters/cognizant-logo.png` },
    { name: 'Axis Bank', logo: `${SUPABASE_STORAGE_URL}/recruiters/axis-bank-logo.png` },
    { name: 'ICICI Prudential', logo: `${SUPABASE_STORAGE_URL}/recruiters/icici-prudential-logo.png` },
    { name: 'Reliance Digital', logo: `${SUPABASE_STORAGE_URL}/recruiters/reliance-digital-logo.png` },
    { name: 'Tata Business Support', logo: `${SUPABASE_STORAGE_URL}/recruiters/tata-bss-logo.png` },
    { name: 'Bharat Biotech', logo: `${SUPABASE_STORAGE_URL}/recruiters/bharat-biotech-logo.png` },
    { name: 'Elico', logo: `${SUPABASE_STORAGE_URL}/recruiters/elico-logo.png` },
    { name: 'Future Group', logo: `${SUPABASE_STORAGE_URL}/recruiters/future-group-logo.png` },
  ],
};

// Helper to get image URL
export function getSupabaseImageUrl(path: string): string {
  return `https://bxklouufxiafncqisgxx.supabase.co/storage/v1/object/public/website-assets/${path}`;
}
