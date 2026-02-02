'use client';

import { Calendar, MapPin, Clock } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const upcomingEvents = [
  {
    title: 'TechFest 2026',
    description: 'Annual technical festival featuring competitions, workshops, and guest lectures from industry experts.',
    date: 'March 15-17, 2026',
    time: '9:00 AM - 6:00 PM',
    venue: 'Main Campus',
    category: 'Technical',
    registrationOpen: true,
  },
  {
    title: 'Cultural Night',
    description: 'Annual cultural extravaganza showcasing student talents in music, dance, and drama.',
    date: 'April 5, 2026',
    time: '5:00 PM - 10:00 PM',
    venue: 'Open Air Theatre',
    category: 'Cultural',
    registrationOpen: true,
  },
  {
    title: 'Industry Connect Summit',
    description: 'Meet industry leaders and explore career opportunities.',
    date: 'April 20, 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'Auditorium',
    category: 'Career',
    registrationOpen: false,
  },
  {
    title: 'Sports Week',
    description: 'Inter-department sports competitions in cricket, football, basketball, and more.',
    date: 'May 1-7, 2026',
    time: 'All Day',
    venue: 'Sports Complex',
    category: 'Sports',
    registrationOpen: true,
  },
];

const pastEvents = [
  { title: 'Freshers Day 2025', date: 'August 2025', category: 'Cultural' },
  { title: 'Alumni Meet 2025', date: 'December 2025', category: 'Networking' },
  { title: 'Hackathon 2025', date: 'November 2025', category: 'Technical' },
];

export function EventsContent() {
  return (
    <>
      {/* Upcoming Events */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Mark Your Calendar"
            title="Upcoming Events"
          />

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.title} variant="bordered">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant={
                            event.category === 'Technical'
                              ? 'primary'
                              : event.category === 'Cultural'
                              ? 'secondary'
                              : 'default'
                          }
                        >
                          {event.category}
                        </Badge>
                        {event.registrationOpen && (
                          <Badge variant="success">Registration Open</Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-primary-600 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-neutral-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.venue}
                        </span>
                      </div>
                    </div>
                    {event.registrationOpen && (
                      <Button variant="outline" className="flex-shrink-0">
                        Register Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-section bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Memories"
            title="Past Events"
          />

          <div className="grid md:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <Card key={event.title} variant="bordered">
                <CardContent className="p-5">
                  <Badge variant="default" className="mb-2">
                    {event.category}
                  </Badge>
                  <h4 className="font-semibold text-primary-600 mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-neutral-500">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
