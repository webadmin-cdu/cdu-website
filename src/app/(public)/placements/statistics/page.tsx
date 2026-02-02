import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Placement Statistics',
  description: 'Detailed placement statistics at Chaitanya University.',
};

const overallStats = [
  { label: 'Overall Placement Rate', value: '95%' },
  { label: 'Total Offers', value: '2500+' },
  { label: 'Companies Visited', value: '200+' },
  { label: 'Average Package', value: '6.5 LPA' },
  { label: 'Highest Package', value: '45 LPA' },
  { label: 'Median Package', value: '5.2 LPA' },
];

const departmentWise = [
  { department: 'Computer Science', placement: '98%', avgPackage: '8.5 LPA', highest: '45 LPA' },
  { department: 'Electronics & Communication', placement: '95%', avgPackage: '6.2 LPA', highest: '18 LPA' },
  { department: 'Mechanical Engineering', placement: '92%', avgPackage: '5.5 LPA', highest: '12 LPA' },
  { department: 'Civil Engineering', placement: '90%', avgPackage: '5.0 LPA', highest: '10 LPA' },
  { department: 'Pharmacy', placement: '94%', avgPackage: '5.8 LPA', highest: '15 LPA' },
  { department: 'Management (MBA)', placement: '96%', avgPackage: '7.5 LPA', highest: '22 LPA' },
];

const yearWise = [
  { year: '2024', placements: 950, companies: 180, avgPackage: '6.5 LPA' },
  { year: '2023', placements: 920, companies: 165, avgPackage: '6.0 LPA' },
  { year: '2022', placements: 880, companies: 150, avgPackage: '5.5 LPA' },
  { year: '2021', placements: 820, companies: 140, avgPackage: '5.0 LPA' },
];

export default function PlacementStatisticsPage() {
  return (
    <>
      <PageHeader
        title="Placement Statistics"
        description="Comprehensive placement data showcasing our students' success."
      />

      {/* Overall Stats */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="At a Glance"
            title="Overall Statistics"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {overallStats.map((stat) => (
              <Card key={stat.label} variant="bordered">
                <CardContent className="p-5 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department-wise */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="By Department"
            title="Department-wise Placements"
          />

          <Card variant="bordered">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50">
                      <th className="py-4 px-6 text-left font-semibold text-neutral-700">
                        Department
                      </th>
                      <th className="py-4 px-6 text-right font-semibold text-neutral-700">
                        Placement Rate
                      </th>
                      <th className="py-4 px-6 text-right font-semibold text-neutral-700">
                        Avg. Package
                      </th>
                      <th className="py-4 px-6 text-right font-semibold text-neutral-700">
                        Highest Package
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentWise.map((dept) => (
                      <tr key={dept.department} className="border-b border-neutral-100">
                        <td className="py-4 px-6 text-neutral-700 font-medium">
                          {dept.department}
                        </td>
                        <td className="py-4 px-6 text-right text-primary-600 font-semibold">
                          {dept.placement}
                        </td>
                        <td className="py-4 px-6 text-right text-neutral-600">
                          {dept.avgPackage}
                        </td>
                        <td className="py-4 px-6 text-right text-accent-gold font-semibold">
                          {dept.highest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Year-wise */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Trends"
            title="Year-wise Placements"
          />

          <div className="grid md:grid-cols-4 gap-4">
            {yearWise.map((year) => (
              <Card key={year.year} variant="elevated">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    {year.year}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Students Placed</span>
                      <span className="font-medium text-neutral-700">{year.placements}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Companies</span>
                      <span className="font-medium text-neutral-700">{year.companies}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Avg. Package</span>
                      <span className="font-medium text-accent-gold">{year.avgPackage}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
