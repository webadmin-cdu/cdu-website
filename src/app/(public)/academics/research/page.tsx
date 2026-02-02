import { PageHeader } from '@/components/shared/PageHeader';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';
import { ResearchContent } from './ResearchContent';

export const metadata = {
  title: 'Research',
  description:
    'Explore research initiatives, publications, and innovation at Chaitanya University.',
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Innovation"
        description="Driving discovery and innovation through cutting-edge research across disciplines."
        backgroundImage={PLACEHOLDER_IMAGES.sections.research}
      />
      <ResearchContent />
    </>
  );
}
