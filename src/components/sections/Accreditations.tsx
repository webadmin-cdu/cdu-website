'use client';

import Image from 'next/image';

interface AccreditationItem {
  name: string;
  logo: string;
  description: string;
}

const accreditations: AccreditationItem[] = [
  {
    name: 'NAAC A Grade',
    logo: 'https://images.seeklogo.com/logo-png/45/1/naac-logo-png_seeklogo-455753.png',
    description: 'National Assessment & Accreditation',
  },
  {
    name: 'UGC Recognized',
    logo: 'https://www.pngkey.com/png/full/270-2706316_ugc-logo-ugc-net.png',
    description: 'University Grants Commission',
  },
  {
    name: 'AICTE Approved',
    logo: 'https://images.seeklogo.com/logo-png/45/1/aicte-logo-png_seeklogo-455823.png',
    description: 'All India Council for Technical Education',
  },
  {
    name: 'NIRF Ranked',
    logo: 'https://www.chaitanya.edu.in/wp-content/uploads/2020/05/NIRF-removebg-preview-150x150.png',
    description: 'National Institutional Ranking',
  },
  {
    name: 'DBT Star College',
    logo: 'https://www.chaitanya.edu.in/wp-content/uploads/2020/05/dbt-1-150x150.png',
    description: 'Dept. of Biotechnology Recognition',
  },
  {
    name: 'TASK Partner',
    logo: 'https://www.chaitanya.edu.in/wp-content/uploads/2020/05/TASK-1-150x150.png',
    description: 'Telangana Academy for Skill & Knowledge',
  },
  {
    name: 'JKC Enabled',
    logo: 'https://www.chaitanya.edu.in/wp-content/uploads/2020/05/JKC-removebg-preview-2-e1600513671948.png',
    description: 'Jawahar Knowledge Centre',
  },
  {
    name: 'ISO 9001:2015',
    logo: 'https://www.chaitanya.edu.in/wp-content/uploads/2020/05/5842f8afa6515b1e0ad75b2b-251x300.png',
    description: 'Quality Management Certified',
  },
];

function AccreditationCard({
  name,
  logo,
  description,
  index,
}: AccreditationItem & { index: number }) {
  return (
    <div
      className="accred-card group flex items-center gap-6 p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Logo */}
      <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-gray-50 rounded-xl p-3 lg:p-4 group-hover:bg-secondary-50 transition-colors">
        <Image
          src={logo}
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg lg:text-xl font-semibold text-primary-800 mb-1">{name}</h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Accreditations() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary-600 mb-3">
            Nationally Recognized
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-800">
            Rankings & Accreditations
          </h2>
        </div>

        {/* Grid - 2 columns on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {accreditations.map((item, i) => (
            <AccreditationCard
              key={item.name}
              index={i}
              name={item.name}
              logo={item.logo}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .accred-card {
          animation: cardFadeUp 0.5s ease-out backwards;
        }

        @keyframes cardFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
