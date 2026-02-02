'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { AWARD_IMAGES, AWARD_CATEGORIES, AWARDS_BACKGROUNDS } from '@/lib/constants/awards';
import { cn } from '@/lib/utils/cn';
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from '@phosphor-icons/react';

const filterCategories = [
  { id: 'all', label: 'All Awards' },
  { id: 'status', label: 'University Status' },
  { id: 'accreditation', label: 'Accreditations' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'ranking', label: 'Rankings' },
  { id: 'technology', label: 'Technology' },
  { id: 'leadership', label: 'Leadership' },
];

// Complete awards data with full descriptions from original site
const AWARDS_DATA = [
  {
    id: 'deemed-university',
    title: 'Deemed to be University',
    year: '2019',
    description: 'One of only 4 institutions granted Deemed University status post-2010. On the advice of UGC, the Central Government declared Chaitanya as Deemed to be University in November 2019.',
    fullDescription: 'Throughout the country, there were only four deemed Universities (Couple of Government and Private Institutions) declared by the MHRD post-2010 and our Chaitanya Degree College (Autonomous) is one of them. We are delighted to be one of the selected few colleges who offer degree programs of utmost excellence.',
    image: AWARD_IMAGES.ugcRecognized,
    category: 'status',
  },
  {
    id: 'naac-a-grade',
    title: 'NAAC "A" Grade Accreditation',
    year: '2017',
    description: 'Highest accreditation grade from National Assessment and Accreditation Council (NAAC). Accredited with "A" Grade for three consecutive cycles.',
    fullDescription: 'Taking into consideration the academic excellence and other infrastructural facilities the NAAC accredited Chaitanya Degree and PG Colleges with \'A\' Grade for three cycles. These are the only private colleges to get the accreditation by NAAC with highest grades in the Jurisdiction of Kakatiya University.',
    image: AWARD_IMAGES.naacAGrade,
    category: 'accreditation',
  },
  {
    id: 'dbt-star-college',
    title: 'DBT Star College Scheme',
    year: '2015',
    description: '7 departments recognized for excellence in science education under the prestigious Star College Scheme by the Department of Biotechnology, Government of India.',
    fullDescription: 'The most prestigious STAR COLLEGES Departmental Status to Seven Departments of Chaitanya Degree College (Autonomous) was accorded by the Ministry of Science & Technology - Department of Biotechnology, Government of India, in the year 2015.',
    image: AWARD_IMAGES.dbtStarCollege,
    category: 'recognition',
  },
  {
    id: 'ugc-cpe',
    title: 'College with Potential for Excellence',
    year: '2016',
    description: 'Recognized as "College with Potential for Excellence" by UGC - one of only 3 institutions in Telangana to receive this honor.',
    fullDescription: 'Another landmark in the history of our colleges is that the UGC conferred the "College with Potential for Excellence" status to Chaitanya Degree College in 2016. In entire Telangana, only three colleges were conferred the status out of which the Chaitanya Degree College was one among them.',
    image: AWARD_IMAGES.ugcLogo,
    category: 'recognition',
  },
  {
    id: 'nirf-ranking',
    title: 'NIRF Rankings',
    year: '2017',
    description: 'Only institution in Telangana with 101-150 UG ranking. Ranked 101-150 for UG and 151-200 for PG programs in National Institute Ranking Framework (NIRF).',
    fullDescription: 'Chaitanya Degree College (Autonomous) ranked in the Ranking Band of 101-150 and Chaitanya PG College (Autonomous) 151-200 in the National Institute Ranking Framework (NIRF) Survey (MHRD), 2017. These are the only colleges in entire Telangana to get this unique status.',
    image: AWARD_IMAGES.nirfRanking,
    category: 'ranking',
  },
  {
    id: 'aicte-best-practices',
    title: 'AICTE Best Practices Award',
    year: '2018',
    description: 'Recognized among top 30 technical institutions nationally for best practices. Only 3 colleges in Telangana received this distinction.',
    fullDescription: 'The AICTE has identified 30 technical educational institutions in entire India which are adopting the Best Practices during 2018. We are happy to mention that our MBA and MCA programs are among these 30 Institutions. It is pertinent to note that in entire Telangana State, only 03 colleges had this honor.',
    image: AWARD_IMAGES.aicteLogo,
    category: 'recognition',
  },
  {
    id: 'microsoft-mta',
    title: 'Microsoft Technology Associate',
    year: '2012',
    description: 'Received "Outstanding Performance 2011-12" recognition from Microsoft, Certiport, and JKC for the MTA program.',
    fullDescription: 'Our Chaitanya Postgraduate College (Autonomous) has been awarded "Outstanding Performance 2011-12" for Microsoft Technology Associate Program by Microsoft, Certiport and JKC. The Vice-President of Microsoft Technology (USA) himself presented this award in Hyderabad.',
    image: AWARD_IMAGES.microsoftMta,
    category: 'technology',
  },
  {
    id: 'jkc-award',
    title: 'JKC Outstanding Performance',
    year: '2010',
    description: 'Recognized as Best JKC by AP IT Department. Received Outstanding Performance Award for excellence in skill development.',
    fullDescription: 'Our colleges have been adjudged as the best Jawaharlal Knowledge Center by Information Technology and Communication Department, Government of Andhra Pradesh. "Outstanding Performance Award" was presented to our colleges by Dr. K. Rosaiah, the then Chief Minister on April 20, 2010.',
    image: AWARD_IMAGES.jkcAward,
    category: 'technology',
  },
  {
    id: 'indywood-excellence',
    title: 'Indywood Educational Excellence',
    year: '2017',
    description: 'Chancellor Dr. Ch. V. Purushotham Reddy received the Indywood Educational Excellence Award - the sole recipient in his category.',
    fullDescription: 'In recognition of the meritorious contribution to the student community by providing quality education over 03 decades, Our Chancellor Dr. Ch. V. Purushotham Reddy was bestowed with the prestigious "Indywood Educational Excellence Award-2017" on 2nd December, 2017. He was the only person who received it in the category of Educational Excellence Award.',
    image: AWARD_IMAGES.indywoodAward,
    category: 'leadership',
  },
  {
    id: 'best-bschool',
    title: 'Best B-School AA+ Grade',
    year: '2018',
    description: 'Awarded AA+ Grade by Digital Learning Magazine, recognizing excellence in management education.',
    fullDescription: 'Declared one of India\'s Best B School with AA+ Grade declared by Digital Learning Magazine.',
    image: AWARD_IMAGES.bestBschool,
    category: 'ranking',
  },
  {
    id: 'task-registered',
    title: 'TASK Registered Institution',
    year: '2016',
    description: 'Registered with Telangana Academy of Skill & Knowledge (TASK) for employability and skill development initiatives.',
    fullDescription: 'Our Institution is registered with Telangana Academy of Skill & Knowledge – TASK (JKC) for employability skills and placements.',
    image: AWARD_IMAGES.taskTelangana,
    category: 'recognition',
  },
  {
    id: 'pci-approved',
    title: 'PCI Approved',
    year: 'Ongoing',
    description: 'Pharmacy programs approved by the Pharmacy Council of India (PCI), ensuring highest standards in pharmaceutical education.',
    fullDescription: 'Our Pharmacy programs are approved by the Pharmacy Council of India (PCI), ensuring that our students receive education that meets the highest standards in pharmaceutical education.',
    image: AWARD_IMAGES.pciApproved,
    category: 'accreditation',
  },
  {
    id: 'oxford-leadership',
    title: 'Oxford Leadership Programme',
    year: '2015',
    description: 'Chancellor attended prestigious Leadership Programme at University of Oxford, London - one of only 21 Indian educators invited.',
    fullDescription: 'Our Chancellor, Dr. Ch.V. Purushotham Reddy attended a conference on "Leadership Programme for Educational Professionals" from 23rd to 28th August, 2015, at University of Oxford, London. Throughout India 21 Eminent Educational Professionals were invited to participate. We are proud to say that he was one among them.',
    image: AWARD_IMAGES.pciApproved,
    category: 'leadership',
  },
];

const timelineEvents = [
  { year: '2019', event: 'Granted Deemed to be University status by UGC - one of only 4 post-2010' },
  { year: '2018', event: 'AICTE Best Practices Recognition - Top 30 nationally, only 3 in Telangana' },
  { year: '2018', event: 'Best B-School AA+ Grade by Digital Learning Magazine' },
  { year: '2017', event: 'NAAC "A" Grade Accreditation - highest grade for three cycles' },
  { year: '2017', event: 'NIRF Rankings - 101-150 UG, only college in Telangana' },
  { year: '2017', event: 'Indywood Educational Excellence Award to Chancellor' },
  { year: '2016', event: 'UGC College with Potential for Excellence - one of 3 in Telangana' },
  { year: '2016', event: 'TASK Registered Institution for skill development' },
  { year: '2015', event: 'DBT Star College Scheme - 7 departments recognized' },
  { year: '2015', event: 'Chancellor attended Oxford Leadership Programme' },
  { year: '2012', event: 'Microsoft Technology Associate Outstanding Performance Award' },
  { year: '2010', event: 'JKC Outstanding Performance Award by AP Chief Minister' },
  { year: '1991', event: 'Institution established with vision for excellence' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function AwardsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAwards = AWARDS_DATA.filter(
    (award) => activeCategory === 'all' || award.category === activeCategory
  );

  return (
    <>
      {/* Hero Banner with Background Image */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AWARDS_BACKGROUNDS.hero})` }}
        />
        <div className="absolute inset-0 bg-primary-900/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Awards & Recognition
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
            Celebrating three decades of academic excellence, innovation, and achievements
            that have established Chaitanya as a leading institution in India.
          </p>
        </motion.div>
      </div>

      {/* About Deemed University Status */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Deemed to be University Status
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-8" />
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-neutral-600 leading-relaxed">
                  It is important to note that on the instructions from the MHRD, Government of India,
                  the UGC has deputed several committees to visit our Chaitanya Colleges (Autonomous)
                  to find out the viability to declare Deemed to be University status. After satisfying
                  all the parameters, the UGC has recommended our Institution to MHRD to declare
                  Deemed to be University status.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  On the advice of UGC, the Central Government, in exercise of the powers conferred
                  by Section 3 of UGC Act, 1956, declared Chaitanya Degree College (Autonomous) as
                  CHAITANYA (Deemed to be University) in November 2019. After 2010 only 04 (02 Government
                  and 02 Private) institutions were declared as Deemed to be Universities, Chaitanya is
                  one among them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditation Logos Banner */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { src: AWARD_IMAGES.naacAGrade, alt: 'NAAC A Grade' },
              { src: AWARD_IMAGES.ugcRecognized, alt: 'UGC Recognized' },
              { src: AWARD_IMAGES.aicteLogo, alt: 'AICTE Approved' },
              { src: AWARD_IMAGES.pciApproved, alt: 'PCI Approved' },
              { src: AWARD_IMAGES.dbtStarCollege, alt: 'DBT Star College' },
              { src: AWARD_IMAGES.nirfRanking, alt: 'NIRF Ranking' },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Awards with Filter */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Complete List"
            title="All Awards & Recognitions"
            description="Browse through our comprehensive collection of achievements across various categories."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-primary-700 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Awards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredAwards.map((award) => {
                const categoryInfo = AWARD_CATEGORIES[award.category as keyof typeof AWARD_CATEGORIES];
                return (
                  <motion.div
                    key={award.id}
                    variants={itemVariants}
                    layout
                    className="group bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden border border-neutral-100"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-neutral-100 flex items-center justify-center p-6">
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={150}
                        height={150}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                      />
                      {/* Category Badge */}
                      <span
                        className={cn(
                          'absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white',
                          categoryInfo?.color || 'bg-gray-600'
                        )}
                      >
                        {categoryInfo?.label || award.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-secondary-600 text-sm font-semibold">{award.year}</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Recognition Section with Background */}
      <section className="relative py-section overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AWARDS_BACKGROUNDS.naac})` }}
        />
        <div className="absolute inset-0 bg-primary-900/85" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary-400 text-sm font-semibold uppercase tracking-wider">
                National Recognition
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-6">
                Excellence Recognized Across India
              </h2>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Throughout the country, there were only four deemed Universities declared by the
                MHRD post-2010 and our Chaitanya Degree College (Autonomous) is one of them.
                We are delighted to be one of the selected few colleges who offer degree programs
                of utmost excellence and we look to double our efforts with unparalleled enthusiasm.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-400">4</div>
                  <div className="text-sm text-primary-200">Deemed Universities Post-2010</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-400">3</div>
                  <div className="text-sm text-primary-200">NAAC A Grade Cycles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-400">7</div>
                  <div className="text-sm text-primary-200">DBT Star Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-400">30+</div>
                  <div className="text-sm text-primary-200">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Journey"
            title="Timeline of Excellence"
            description="Key milestones in our pursuit of academic excellence."
          />

          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-secondary-500 flex items-center justify-center text-primary-950 font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-0.5 h-full min-h-[24px] bg-secondary-400 mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-neutral-700 font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl" aria-hidden="true" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-secondary-400" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Be Part of Our Legacy
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto mb-8 text-lg">
            Join a university recognized for excellence by India's top academic and regulatory bodies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admissions/how-to-apply"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary-500 text-primary-950 font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/about/accreditation"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              View Accreditations
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
