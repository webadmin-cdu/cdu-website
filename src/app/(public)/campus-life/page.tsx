import { PageHeader } from '@/components/shared/PageHeader';
import { CampusLifeContent } from './CampusLifeContent';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

export const metadata = {
  title: 'Campus Life',
  description:
    'Experience vibrant campus life at Chaitanya University - facilities, clubs, events, and more.',
};

export default function CampusLifePage() {
  return (
    <>
      <PageHeader
        title="Campus Life"
        description="A vibrant community where learning meets fun - discover the Chaitanya experience."
        backgroundImage={PLACEHOLDER_IMAGES.hero.students}
      />
      <CampusLifeContent />
    </>
  );
}
