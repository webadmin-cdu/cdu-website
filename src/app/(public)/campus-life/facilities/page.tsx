import { PageHeader } from '@/components/shared/PageHeader';
import { FacilitiesContent } from './FacilitiesContent';

export const metadata = {
  title: 'Facilities',
  description: 'Explore the modern facilities at Chaitanya University campus.',
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Campus Facilities"
        description="World-class infrastructure to support your academic journey."
      />
      <FacilitiesContent />
    </>
  );
}
