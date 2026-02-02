import { PageHeader } from '@/components/shared/PageHeader';
import { HowToApplyContent } from './HowToApplyContent';

export const metadata = {
  title: 'How to Apply',
  description:
    'Step-by-step guide to applying for admission at Chaitanya University.',
};

export default function HowToApplyPage() {
  return (
    <>
      <PageHeader
        title="How to Apply"
        description="Follow these simple steps to submit your application for admission."
      />
      <HowToApplyContent />
    </>
  );
}
