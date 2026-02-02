import { PageHeader } from '@/components/shared/PageHeader';
import { EventsContent } from './EventsContent';

export const metadata = {
  title: 'Events',
  description: 'Upcoming events and activities at Chaitanya University.',
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="Stay updated with upcoming events and activities on campus."
      />
      <EventsContent />
    </>
  );
}
