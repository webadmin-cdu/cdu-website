import { PageHeader } from '@/components/shared/PageHeader';
import { AboutContent } from './AboutContent';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Chaitanya (Deemed to be University), a premier institution of higher education in India since 1991.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Chaitanya University"
        description="A legacy of academic excellence, innovation, and student success since 1991."
        backgroundImage={PLACEHOLDER_IMAGES.sections.academics}
      />
      <AboutContent />
    </>
  );
}
