import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants/navigation';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

export const metadata = {
  title: 'Success Stories',
  description: 'Alumni testimonials from Chaitanya University.',
};

const moreTestimonials = [
  ...TESTIMONIALS,
  {
    id: '4',
    name: 'Vikram Singh',
    role: 'Product Manager',
    company: 'Google',
    batch: '2020',
    quote: 'The entrepreneurship cell at Chaitanya gave me the confidence to think big. The mentorship and support I received were invaluable.',
    image: PLACEHOLDER_IMAGES.people.faculty3,
  },
  {
    id: '5',
    name: 'Kavitha Reddy',
    role: 'Research Scientist',
    company: 'Biocon',
    batch: '2021',
    quote: 'The research exposure and lab facilities in the Pharmacy department prepared me well for my career in pharmaceutical research.',
    image: PLACEHOLDER_IMAGES.people.dean2,
  },
  {
    id: '6',
    name: 'Arjun Patel',
    role: 'Consultant',
    company: 'Deloitte',
    batch: '2022',
    quote: 'The MBA program at Chaitanya is truly industry-oriented. The case study method and industry interactions gave me a strong foundation.',
    image: PLACEHOLDER_IMAGES.people.dean1,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Success Stories"
        description="Hear from our alumni about their journey from Chaitanya to successful careers."
      />

      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Alumni Speak"
            title="What Our Graduates Say"
            description="Real stories of success from students who started their journey with us."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
