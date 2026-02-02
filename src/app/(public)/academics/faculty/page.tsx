import { PageHeader } from '@/components/shared/PageHeader';
import { FacultyContent } from './FacultyContent';

export const metadata = {
  title: 'Faculty',
  description:
    'Meet our experienced faculty members at Chaitanya University.',
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        title="Our Faculty"
        description="Meet our experienced and dedicated faculty members who are committed to your success."
      />
      <FacultyContent />
    </>
  );
}
