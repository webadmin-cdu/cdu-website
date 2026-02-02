import { PageHeader } from '@/components/shared/PageHeader';
import { AcademicsContent } from './AcademicsContent';

export const metadata = {
  title: 'Academics',
  description:
    'Explore world-class academic programs at Chaitanya University across Engineering, Pharmacy, Management, and Sciences.',
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        title="Academics"
        description="World-class education that combines theoretical knowledge with practical skills for real-world success."
      />
      <AcademicsContent />
    </>
  );
}
