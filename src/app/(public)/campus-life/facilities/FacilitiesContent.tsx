'use client';

import { BookOpen, Barbell, House, ForkKnife, WifiHigh, Car, Flask, Monitor } from '@phosphor-icons/react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/Card';

const facilities = [
  {
    icon: Flask,
    title: 'Modern Laboratories',
    description: 'State-of-the-art labs equipped with latest equipment for hands-on learning.',
    features: ['Computer Labs', 'Engineering Labs', 'Pharmacy Labs', 'Research Centers'],
  },
  {
    icon: BookOpen,
    title: 'Central Library',
    description: 'Extensive collection of books, journals, and digital resources.',
    features: ['50,000+ Books', 'E-Library Access', 'Study Rooms', 'Digital Archives'],
  },
  {
    icon: Barbell,
    title: 'Sports Complex',
    description: 'Indoor and outdoor sports facilities for physical fitness.',
    features: ['Indoor Stadium', 'Cricket Ground', 'Basketball Court', 'Gym'],
  },
  {
    icon: House,
    title: 'Hostels',
    description: 'Comfortable accommodation for boys and girls with modern amenities.',
    features: ['Wi-Fi Enabled', '24/7 Security', 'Common Rooms', 'Laundry Service'],
  },
  {
    icon: ForkKnife,
    title: 'Food Court',
    description: 'Multiple dining options serving hygienic and nutritious meals.',
    features: ['Vegetarian Options', 'Multi-cuisine', 'Cafeteria', 'Juice Bar'],
  },
  {
    icon: WifiHigh,
    title: 'IT Infrastructure',
    description: 'High-speed internet and digital learning resources across campus.',
    features: ['Campus-wide Wi-Fi', 'Smart Classrooms', 'Online LMS', 'Video Conferencing'],
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Bus service connecting major areas of the city to campus.',
    features: ['Daily Bus Service', 'Multiple Routes', 'AC Buses', 'GPS Tracking'],
  },
  {
    icon: Monitor,
    title: 'Auditorium',
    description: 'Modern auditorium for seminars, conferences, and cultural events.',
    features: ['1000+ Seating', 'AV Equipment', 'Green Rooms', 'Parking'],
  },
];

export function FacilitiesContent() {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Infrastructure"
          title="Our Facilities"
          description="Everything you need for a complete educational experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((facility) => (
            <Card key={facility.title} variant="bordered">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <facility.icon className="h-7 w-7 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {facility.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
