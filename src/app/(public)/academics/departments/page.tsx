import { PageHeader } from '@/components/shared/PageHeader';
import { ProgramCard } from '@/components/shared/ProgramCard';
import { DEPARTMENTS } from '@/lib/constants/navigation';

export const metadata = {
  title: 'Departments',
  description:
    'Explore all academic departments at Chaitanya University offering specialized programs.',
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Departments"
        description="Explore our diverse academic departments offering world-class education across multiple disciplines."
      />

      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => (
              <ProgramCard key={dept.id} department={dept} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
