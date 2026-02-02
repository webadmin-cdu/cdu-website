import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { PLACEHOLDER_IMAGES } from '@/lib/constants/placeholders';

export const metadata = {
  title: 'Gallery',
  description: 'Photo gallery showcasing campus life at Chaitanya University.',
};

const galleryImages = [
  { src: PLACEHOLDER_IMAGES.hero.campus, alt: 'Campus View', category: 'Campus' },
  { src: PLACEHOLDER_IMAGES.gallery.event1, alt: 'Event', category: 'Events' },
  { src: PLACEHOLDER_IMAGES.gallery.lab1, alt: 'Laboratory', category: 'Academics' },
  { src: PLACEHOLDER_IMAGES.gallery.sports1, alt: 'Sports', category: 'Sports' },
  { src: PLACEHOLDER_IMAGES.gallery.cultural1, alt: 'Cultural', category: 'Cultural' },
  { src: PLACEHOLDER_IMAGES.gallery.campus1, alt: 'Campus', category: 'Campus' },
  { src: PLACEHOLDER_IMAGES.sections.academics, alt: 'Classroom', category: 'Academics' },
  { src: PLACEHOLDER_IMAGES.gallery.event3, alt: 'Event', category: 'Events' },
  { src: PLACEHOLDER_IMAGES.hero.library, alt: 'Library', category: 'Facilities' },
  { src: PLACEHOLDER_IMAGES.gallery.cultural2, alt: 'Cultural Event', category: 'Cultural' },
  { src: PLACEHOLDER_IMAGES.sections.sports, alt: 'Sports Ground', category: 'Sports' },
  { src: PLACEHOLDER_IMAGES.hero.graduation, alt: 'Graduation', category: 'Events' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        description="Capturing moments and memories from our vibrant campus life."
      />

      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Campus Memories"
            title="Life at Chaitanya"
            description="A glimpse into the vibrant campus life and memorable moments."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-start p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
