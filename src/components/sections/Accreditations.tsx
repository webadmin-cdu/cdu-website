'use client';

import Image from 'next/image';

const accreditations = [
  {
    name: 'NAAC Accredited',
    logo: '/images/accreditations/naac.png',
    description: 'National Assessment and Accreditation Council',
  },
  {
    name: 'UGC Recognised',
    logo: '/images/accreditations/ugc.png',
    description: 'University Grants Commission',
  },
  {
    name: 'AICTE Approved',
    logo: '/images/accreditations/aicte.png',
    description: 'All India Council for Technical Education',
  },
  {
    name: 'PCI Approved',
    logo: '/images/accreditations/pci.png',
    description: 'Pharmacy Council of India',
  },
  {
    name: 'INC Approved',
    logo: '/images/accreditations/inc.png',
    description: 'Indian Nursing Council',
  },
  {
    name: 'DBT Star College',
    logo: '/images/accreditations/dbt.png',
    description: 'Department of Biotechnology',
  },
  {
    name: 'TASK Partner',
    logo: '/images/accreditations/task.png',
    description: 'Telangana Academy for Skill and Knowledge',
  },
  {
    name: 'JKC Enabled',
    logo: '/images/accreditations/jkc.jpg',
    description: 'Jawahar Knowledge Centre',
  },
  {
    name: 'NIRF Participated',
    logo: '/images/accreditations/nirf.png',
    description: 'National Institutional Ranking Framework',
  },
];

export function Accreditations() {
  return (
    <section className="bg-gray-50 py-10 md:py-14 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-800">
            Rankings & Accreditations
          </h2>
        </div>

        {/* Compact logo grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
          {accreditations.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-2 w-20 md:w-24"
              title={item.description}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-xl p-2 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[11px] md:text-xs text-center font-medium text-gray-700 leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
