import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { RECRUITER_LOGOS_FULL, RECRUITERS_BY_SECTOR } from '@/lib/constants/recruiterLogos';

export const metadata = {
  title: 'Our Recruiters',
  description: 'Top companies that recruit from Chaitanya University including TCS, Infosys, Microsoft, Amazon, and many more.',
};

export default function RecruitersPage() {
  return (
    <>
      <PageHeader
        title="Our Recruiters"
        description="Leading companies across industries trust Chaitanya graduates for their talent, skills, and work ethic."
      />

      {/* All Recruiters Grid */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="150+ Companies"
            title="Our Recruiting Partners"
            description="From global tech giants to leading pharmaceutical companies, our graduates are hired by the best."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {RECRUITER_LOGOS_FULL.map((company) => (
              <div
                key={company.slug}
                className="group aspect-[3/2] bg-white rounded-xl shadow-soft flex items-center justify-center p-4 hover:shadow-medium hover:scale-105 transition-all duration-300 border border-neutral-100 hover:border-secondary-200"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-wise Recruiters */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="By Industry"
            title="Sector-wise Recruiters"
            description="Our diverse curriculum prepares students for careers across multiple industries."
          />

          <div className="space-y-12">
            {Object.entries(RECRUITERS_BY_SECTOR).map(([sector, companies]) => (
              <div key={sector}>
                <h3 className="text-xl font-semibold text-primary-700 mb-6 flex items-center gap-3">
                  <span className="w-10 h-1 bg-secondary-500 rounded-full" />
                  {sector}
                  <span className="text-sm font-normal text-neutral-500">
                    ({companies.length} companies)
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {companies.map((company) => (
                    <div
                      key={company.slug}
                      className="group bg-white rounded-xl p-4 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 border border-neutral-100 hover:border-secondary-200"
                    >
                      <div className="aspect-[3/2] flex items-center justify-center mb-2">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={100}
                          height={50}
                          className="max-w-full max-h-full object-contain"
                          unoptimized
                        />
                      </div>
                      <p className="text-center text-sm text-neutral-700 font-medium">
                        {company.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-section bg-primary-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 pattern-grid opacity-[0.05]"
          style={{ color: 'white' }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary-400 text-sm font-semibold uppercase tracking-wider">
              Placement Highlights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">
              Our Track Record
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 font-serif">95%</div>
              <p className="text-primary-200 mt-2">Placement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 font-serif">150+</div>
              <p className="text-primary-200 mt-2">Recruiting Companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 font-serif">12 LPA</div>
              <p className="text-primary-200 mt-2">Highest Package</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 font-serif">4.5 LPA</div>
              <p className="text-primary-200 mt-2">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="bg-primary-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl" aria-hidden="true" />

            <div className="relative z-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Ready to Launch Your Career?
              </h2>
              <p className="text-primary-200 max-w-2xl mx-auto mb-8">
                Join Chaitanya University and get access to top recruiters, dedicated placement support, and career guidance throughout your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/admissions/how-to-apply"
                  className="px-8 py-3 bg-secondary-500 text-primary-950 font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
                >
                  Apply Now
                </a>
                <a
                  href="/placements/statistics"
                  className="px-8 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Placement Statistics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
