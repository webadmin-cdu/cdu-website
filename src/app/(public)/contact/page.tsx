import { PageHeader } from '@/components/shared/PageHeader';
import { ContactContent } from './ContactContent';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Chaitanya University. Contact details and inquiry form.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We're here to help. Reach out to us for any queries."
      />
      <ContactContent />
    </>
  );
}
