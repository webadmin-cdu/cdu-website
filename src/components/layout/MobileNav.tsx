'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { MAIN_NAVIGATION } from '@/lib/constants/navigation';
import { Button } from '@/components/ui/Button';
import { CaretDown, Phone, Envelope } from '@phosphor-icons/react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Navigation Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-strong overflow-y-auto animate-slide-in-right">
        <div className="p-6 pt-24">
          {/* Navigation Links */}
          <nav className="space-y-1">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label} className="border-b border-charcoal-100">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.label)}
                      className={cn(
                        'flex items-center justify-between w-full py-4 text-left font-medium',
                        pathname.startsWith(item.href)
                          ? 'text-primary-600'
                          : 'text-charcoal-900'
                      )}
                    >
                      {item.label}
                      <CaretDown
                        className={cn(
                          'h-5 w-5 transition-transform',
                          expandedItems.includes(item.label) && 'rotate-180'
                        )}
                      />
                    </button>

                    {expandedItems.includes(item.label) && (
                      <div className="pb-4 pl-4 space-y-1 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              'block py-2 text-sm',
                              pathname === child.href
                                ? 'text-primary-600 font-medium'
                                : 'text-charcoal-600 hover:text-primary-600'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block py-4 font-medium',
                      pathname === item.href
                        ? 'text-primary-600'
                        : 'text-charcoal-900 hover:text-primary-600'
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href="/admissions/how-to-apply" onClick={onClose}>
              <Button className="w-full">Apply Now</Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-charcoal-200 space-y-4">
            <a
              href={`tel:${SITE_CONFIG.contact.phones.reception}`}
              className="flex items-center gap-3 text-charcoal-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>{SITE_CONFIG.contact.phones.reception}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-3 text-charcoal-600 hover:text-primary-600 transition-colors"
            >
              <Envelope className="h-5 w-5" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-6 pt-6 border-t border-charcoal-200">
            <div className="flex gap-4 text-sm">
              <Link
                href="/student-portal"
                onClick={onClose}
                className="text-charcoal-600 hover:text-primary-600"
              >
                Student Portal
              </Link>
              <a
                href="http://webresults.chaitanya.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-600 hover:text-primary-600"
              >
                Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
