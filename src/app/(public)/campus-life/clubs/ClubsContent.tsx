'use client';

import { Code, MusicNotes, Palette, Camera, Microphone, BookOpen, Lightbulb, Heart } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';

const technicalClubs = [
  {
    icon: Code,
    name: 'Coding Club',
    description: 'Competitive programming, hackathons, and coding workshops.',
    members: '200+',
  },
  {
    icon: Lightbulb,
    name: 'Robotics Club',
    description: 'Building robots, participating in national competitions.',
    members: '150+',
  },
  {
    icon: BookOpen,
    name: 'IEEE Student Branch',
    description: 'Technical seminars, paper presentations, and workshops.',
    members: '300+',
  },
];

const culturalClubs = [
  {
    icon: MusicNotes,
    name: 'Music Club',
    description: 'Vocal and instrumental music, band performances.',
    members: '100+',
  },
  {
    icon: Palette,
    name: 'Art & Craft Club',
    description: 'Painting, sketching, and creative arts.',
    members: '80+',
  },
  {
    icon: Microphone,
    name: 'Drama Club',
    description: 'Theater, street plays, and cultural performances.',
    members: '75+',
  },
  {
    icon: Camera,
    name: 'Photography Club',
    description: 'Photography workshops, photo walks, and exhibitions.',
    members: '120+',
  },
];

const socialClubs = [
  {
    icon: Heart,
    name: 'NSS Unit',
    description: 'Community service, blood donation, and social awareness.',
    members: '500+',
  },
  {
    icon: Heart,
    name: 'Rotaract Club',
    description: 'Leadership development and community projects.',
    members: '100+',
  },
];

function ClubList({ clubs, title }: { clubs: typeof technicalClubs; title: string }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-primary-600 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <Card key={club.name} variant="bordered">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <club.icon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-600 mb-1">{club.name}</h4>
                  <p className="text-sm text-neutral-600 mb-2">{club.description}</p>
                  <span className="text-xs text-accent-gold font-medium">
                    {club.members} Members
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function ClubsContent() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Get Involved"
          title="Student Organizations"
          description="Join clubs that match your interests and build lifelong connections."
        />

        <ClubList clubs={technicalClubs} title="Technical Clubs" />
        <ClubList clubs={culturalClubs} title="Cultural Clubs" />
        <ClubList clubs={socialClubs} title="Social Service" />
      </div>
    </section>
  );
}
