import { PageHeader } from '@/components/shared/PageHeader';
import { ClubsContent } from './ClubsContent';

export const metadata = {
  title: 'Clubs & Activities',
  description: 'Join student clubs and organizations at Chaitanya University.',
};

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        title="Clubs & Activities"
        description="Discover your passion and develop leadership skills through student organizations."
      />
      <ClubsContent />
    </>
  );
}
