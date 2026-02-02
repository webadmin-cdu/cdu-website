import { PageHeader } from '@/components/shared/PageHeader';
import { ProgramsContent } from './ProgramsContent';

export const metadata = {
  title: 'Programs',
  description:
    'Browse all academic programs at Chaitanya University - undergraduate, postgraduate, and doctoral.',
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Academic Programs"
        description="Explore our diverse range of undergraduate, postgraduate, and doctoral programs."
      />
      <ProgramsContent />
    </>
  );
}
