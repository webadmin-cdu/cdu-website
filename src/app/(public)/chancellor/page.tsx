import Image from 'next/image';
import Link from 'next/link';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import { SUPABASE_IMAGES } from '@/lib/constants/supabaseImages';

export const metadata: Metadata = {
  title: "Chancellor | Chaitanya University",
  description:
    "Dr. Ch.V. Purushotham Reddy, Founder, President & Chancellor of Chaitanya (Deemed to be University).",
};

export default function ChancellorPage() {
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
            <span className="text-gray-600">Chancellor</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="bg-primary-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Chancellor
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
                      src={SUPABASE_IMAGES.leadership.chancellor}
                      alt="Dr. Ch.V. Purushotham Reddy - Chancellor"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary-800">
                      Dr. Ch.V. Purushotham Reddy
                    </h2>
                    <p className="text-secondary-600 font-medium mt-1">
                      B.Ed., M.Sc., Ph.D
                    </p>
                    <p className="text-gray-600 mt-2">
                      Founder, President & Chancellor
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-800 mb-6 pb-4 border-b-4 border-secondary-500 inline-block">
                  Chancellor&apos;s Message
                </h3>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>
                    A university stands for reason, humanism, tolerance, adventure of ideas and the quest for truth. It should be a place of light, liberty and learning. We believe in it. As a young university aiming to be at the pinnacle of transforming education to the youth of today, Chaitanya imparts quality education with academic excellence for creating a knowledge based society with enlightenment. We believe in creativity and nurturing new ideas.
                  </p>

                  <p>
                    We are committed and dedicated to our vision and mission and constantly evolve ourselves to the future needs and impart education that makes the world a better place to live in.
                  </p>

                  <p>
                    We wish to undertake research and extension focused on innovation and application in tune with the emerging societal needs through all-round development of students and their social and global needs.
                  </p>

                  <p>
                    Our collaboration with international universities makes it seamless for our students to gain international exposure in various disciplines. The plethora of programs offered by Chaitanya is convenient for the students to select courses of their choice under one roof.
                  </p>

                  <p>
                    The syllabi of all courses are well designed in tune with Learning Outcomes Based Curriculum Framework (LOCF) as per UGC guidelines. The University imparts quality education to meet the needs of the industry and to make the students face the global challenges. Chaitanya empowers everyone who chooses to enter our portals. The faculty is student-friendly and follows interactive approach.
                  </p>

                  <p>
                    Social outreach programs, eco-friendly environment, diversified student community, education scholarships for deserving and meritorious students, internal quality assurance, enriching projects, global alumni network, learning management system, highly accomplished faculty members and levitating research culture are some of our salient features.
                  </p>

                  <p className="font-semibold text-primary-800 text-xl mt-8">
                    I invite you to become an integral part of our saga of success and look forward to welcoming you to the family of Chaitanya.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
