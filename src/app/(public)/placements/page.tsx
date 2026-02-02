import { PageHeader } from '@/components/shared/PageHeader';
import { PlacementsContent } from './PlacementsContent';

export const metadata = {
  title: 'Placements',
  description: 'Career opportunities and placement statistics at Chaitanya University.',
};

export default function PlacementsPage() {
  return (
    <>
      <PageHeader
        title="Placements"
        description="Building careers, creating futures - Our placement cell connects talent with opportunity."
      />
      <PlacementsContent />
    </>
  );
}
