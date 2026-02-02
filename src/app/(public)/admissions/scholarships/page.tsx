import { PageHeader } from '@/components/shared/PageHeader';
import { ScholarshipsContent } from './ScholarshipsContent';

export const metadata = {
  title: 'Scholarships',
  description:
    'Explore scholarship opportunities at Chaitanya University - merit-based and need-based financial aid.',
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        title="Scholarships"
        description="Financial assistance to help deserving students achieve their academic goals."
      />
      <ScholarshipsContent />
    </>
  );
}
