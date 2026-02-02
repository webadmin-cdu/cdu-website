import { PageHeader } from '@/components/shared/PageHeader';
import { AdmissionsContent } from './AdmissionsContent';

export const metadata = {
  title: 'Admissions',
  description:
    'Apply to Chaitanya University - Learn about the admission process, fees, scholarships, and more.',
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions"
        description="Begin your journey at Chaitanya University. Applications are now open for 2026."
      />
      <AdmissionsContent />
    </>
  );
}
