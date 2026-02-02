import Image from 'next/image';
import Link from 'next/link';
import { CaretRight, Envelope } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import { SUPABASE_IMAGES } from '@/lib/constants/supabaseImages';

export const metadata: Metadata = {
  title: "Vice Chancellor | Chaitanya University",
  description:
    "Prof. G. Shankar Lingam, Ph.D., D.Litt., Vice Chancellor of Chaitanya (Deemed to be University).",
};

export default function ViceChancellorPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-800">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-gray-400" />
            <span className="text-gray-600">Vice Chancellor</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-primary-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Vice Chancellor
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-secondary-500">
                    <Image
                      src={SUPABASE_IMAGES.leadership.viceChancellor}
                      alt="Prof. G. Shankar Lingam - Vice Chancellor"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary-800">
                      Prof. G. Shankar Lingam
                    </h2>
                    <p className="text-secondary-600 font-medium mt-1">
                      Ph.D., D.Litt.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Vice Chancellor
                    </p>
                    <a
                      href="mailto:vc@cdu.ac.in"
                      className="inline-flex items-center gap-2 mt-3 text-primary-600 hover:text-primary-800 text-sm"
                    >
                      <Envelope className="h-4 w-4" />
                      vc@cdu.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 mb-6 pb-4 border-b-4 border-secondary-500 inline-block">
                  Vice Chancellor&apos;s Message
                </h3>

                <div className="space-y-5 text-gray-600 text-justify leading-relaxed">
                  <p>
                    Relentlessly surging ahead on its chosen path has been the hallmark of Chaitanya. The academic liberty it has permits us to introduce various new and job-oriented courses resulting in excellent campus placements year after year. Driven by our founding philosophy of &apos;Academic Excellence&apos; for a knowledge society, we strongly believe in building a community of perpetual learners by enabling them to look beyond their abilities and achieve what they assume impossible.
                  </p>

                  <p>
                    Chaitanya is well-known for its offerings of a variety of courses after recruiting the qualified staff and providing necessary infrastructure facilities. It provides a rare ambience for all its stakeholders and reaffirms to be the pathfinder for the well-crafted courses with human values. It upholds the highest values in all its activities and programs. It acts as a catalyst to transform the lives of thousands through excellence in teaching, learning, research, service and community development contributing to an equitable and holistic transformation of society at large. We create a community of lifelong learners in an environment of creative and critical thinking with humanistic and scientific inquiry.
                  </p>

                  <p>
                    Chaitanya supports faculty and other scholars in pursuing research of clinical, theoretical, empirical, and experiential and fosters innovative endeavor. It promotes and preserves academic freedom, diversity, equality, harmony and justice. Our strengths include excellent human resources with energy, time and competency. We were accredited three times with A Grade by NAAC. We have got several honors and accolades. We have international tie-up programs with Eastern Michigan University, Michigan, USA. We have plans to introduce some more employment oriented programs.
                  </p>

                  <p>
                    Coupled with rigor in academics and the exposure to students in various realms of talent through clubs and extracurricular activities improve the overall personality of our learners. Well-furnished halls of residence conducive to nice academic growth have total security and homely atmosphere with uninterrupted power supply. They have 24 hour digital and personnel security. Strict rules and regulations are followed by the boarders. Foreign students feel secured, and they are assured of unhampered academic schedule, enabling them to complete their course of study in time to leave for their countries.
                  </p>

                  <p>
                    Our Placement department effectively meets the job needs of the students coming from rural areas enabling them to stand out in a crowd of career builders. Mentoring, counseling, skill-enhancement and pre-placement training sessions are conducted regularly. Regular Refresher Programs to the staff are conducted. Selected courses are being revamped to reflect the needs of international standards.
                  </p>

                  <p>
                    We always remember our core vision of empowering our future generations to be morally, ethically and intellectually strong with learner-centric approach. To be with CDU is an exciting and rewarding experience with opportunities for nurturing abilities, challenging cognizance and gaining competence. Join the team of committed teachers and curious learners to shine in your career.
                  </p>

                  <p className="font-semibold text-primary-800 text-xl mt-8">
                    I welcome you all to our vibrant Chaitanya where we shape your future with values, wisdom and knowledge. My warm greetings to all of you.
                  </p>
                </div>

                {/* Education Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-serif text-xl font-bold text-primary-800 mb-6">
                    Education
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-secondary-500 font-bold">•</span>
                      <span>Doctor of Letters (D.Litt.) - Honorary degree from University of South America as recommended by Dr. S. Radhakrishnan Research & Development Center, India.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 font-bold">•</span>
                      <span>Ph.D in Computer Science and Engineering - Thesis: &quot;Processor Architecture: A Study&quot; from CMJ University (2013)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 font-bold">•</span>
                      <span>M.Tech. in Computer Science and Engineering - First Class with Distinction (75%) from JNTU, Hyderabad (2009)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 font-bold">•</span>
                      <span>M.Phil. in Computer Science - First Class (66%) from Periyar University, Salem (2008)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 font-bold">•</span>
                      <span>Master of Computer Application - First Class (67%) from Chaitanya Post Graduate College, Kakatiya University, Warangal (1997)</span>
                    </li>
                  </ul>
                </div>

                {/* Awards Section */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="font-serif text-xl font-bold text-primary-800 mb-6">
                    Awards & Honors
                  </h4>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-secondary-500 mt-1.5">●</span>
                      <span>ELSEVIER Best Academician Award presented at IJIEMR-ELSEVIER SSRN RESEARCH AWARDS-2022 Vijayawada on 20th December 2020.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 mt-1.5">●</span>
                      <span>International Part Time Research Fellowship Award for outstanding contribution towards intensive research presented jointly by Central Cristian University, Malawi, East Africa and Prashas Trust, Hyderabad at 3rd Prashas Award Ceremony, Hyderabad on 15th December 2021.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary-500 mt-1.5">●</span>
                      <span>Dr. Sarvepalli Radhakrishnan Best Teacher Award presented by Society for Learning Technologies, Vijayawada on 5th September, 2021.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
