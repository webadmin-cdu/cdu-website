import { PageHeader } from '@/components/shared/PageHeader';
import { InternationalContent } from './InternationalContent';

export const metadata = {
  title: 'International Students',
  description:
    'Information for international students applying to Chaitanya University.',
};

export default function InternationalStudentsPage() {
  return (
    <>
      <PageHeader
        title="International Students"
        description="Welcome to Chaitanya University - Your gateway to quality education in India."
      />
      <InternationalContent />
    </>
  );
}
