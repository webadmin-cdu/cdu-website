'use client';

import { ArrowSquareOut, GraduationCap, FileText, Calendar, BookOpen, Trophy } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/Card';

const portalLinks = [
  {
    icon: FileText,
    title: 'Exam Results',
    description: 'View your semester results and grade cards.',
    href: 'http://webresults.chaitanya.edu.in',
    external: true,
  },
  {
    icon: GraduationCap,
    title: 'Learning Management System',
    description: 'Access course materials, assignments, and online classes.',
    href: 'https://lms.chaitanya.edu.in',
    external: true,
  },
  {
    icon: Calendar,
    title: 'Time Tables',
    description: 'View class schedules and examination timetables.',
    href: 'https://portal.chaitanya.edu.in/timetable',
    external: true,
  },
  {
    icon: BookOpen,
    title: 'Digital Library',
    description: 'Access e-books, journals, and research papers.',
    href: 'https://library.chaitanya.edu.in',
    external: true,
  },
  {
    icon: Trophy,
    title: 'Fee Payment',
    description: 'Pay tuition fees and view payment history.',
    href: 'https://pay.chaitanya.edu.in',
    external: true,
  },
];

export function StudentPortalContent() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-display-md font-bold text-primary-600 mb-4">
              Student Portal
            </h1>
            <p className="text-lg text-neutral-600">
              Quick access to all student resources and online services.
            </p>
          </div>

          <div className="space-y-4">
            {portalLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <Card variant="bordered" className="hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <link.icon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                      <div className="flex-grow">
                        <h2 className="text-lg font-semibold text-primary-600 group-hover:text-accent-gold transition-colors flex items-center gap-2">
                          {link.title}
                          {link.external && <ArrowSquareOut className="h-4 w-4" />}
                        </h2>
                        <p className="text-neutral-600">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm">
              Need help? Contact the IT Help Desk at{' '}
              <a
                href="mailto:helpdesk@cdu.ac.in"
                className="text-primary-600 hover:text-primary-500"
              >
                helpdesk@cdu.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
