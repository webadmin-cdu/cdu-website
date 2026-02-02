import { PageHeader } from '@/components/shared/PageHeader';
import { AccreditationContent } from './AccreditationContent';

export const metadata = {
  title: 'Accreditation',
  description:
    'Learn about the accreditations and approvals that validate the quality of education at Chaitanya University.',
};

export default function AccreditationPage() {
  return (
    <>
      <PageHeader
        title="Accreditation"
        description="Quality assurance through recognized accreditations and approvals."
      />
      <AccreditationContent />
    </>
  );
}
