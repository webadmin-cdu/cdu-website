'use client';

import { Megaphone } from '@phosphor-icons/react';

const highlights = [
  'Ph.D Admissions Open for 2025-26 — Apply Now!',
  'Chaitanya University ranked in NIRF 2025',
  'MoU signed with Eastern Michigan University for Student Exchange',
  'NAAC Accredited Institution — Committed to Quality Education',
  'Annual Technical Symposium 2025 — Register Today!',
  'New Hyderabad Campus Now Operational',
  '95% Placement Record — Top Recruiters: TCS, Infosys, Wipro, Amazon',
  'DBT Star College Status Awarded — Dept. of Biotechnology, Govt. of India',
  'B.Tech, B.Pharmacy, MBA & More — 57+ Programs Available',
];

export function ScrollingHighlights() {
  const items = highlights.join('   •   ');
  const repeatedItems = `${items}   •   ${items}`;

  return (
    <div className="bg-primary-700 text-white overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 bg-primary-900 px-4 py-2.5 flex items-center gap-2 z-10">
          <Megaphone className="h-4 w-4" weight="fill" />
          <span className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            Highlights
          </span>
        </div>

        {/* Scrolling text */}
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap py-2.5 text-sm">
            {repeatedItems}
          </div>
        </div>
      </div>
    </div>
  );
}
