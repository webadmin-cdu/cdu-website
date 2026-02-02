import { PageHeader } from '@/components/shared/PageHeader';
import { VisionMissionContent } from './VisionMissionContent';

export const metadata = {
  title: 'Vision & Mission',
  description:
    'Discover the vision, mission, and core values that guide Chaitanya University.',
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        title="Vision & Mission"
        description="Our guiding principles that shape the future of education at Chaitanya University."
      />
      <VisionMissionContent />
    </>
  );
}
