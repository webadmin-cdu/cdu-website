'use client';

import Link from 'next/link';
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  ArrowRight,
} from '@phosphor-icons/react';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { MAIN_NAVIGATION, QUICK_ACCESS } from '@/lib/constants/navigation';
import { Logo } from '@/components/shared/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-neutral-800 relative">
      {/* Red top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-600" aria-hidden="true" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="mb-6">
              <Logo variant="light" size="sm" />
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.tagline}. A premier institution of higher education
              in India offering world-class programs in Engineering, Pharmacy,
              Management, and Sciences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.twitter}
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.instagram}
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.linkedin}
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.youtube}
                className="text-neutral-500 hover:text-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2 text-neutral-800">
              <span className="w-8 h-0.5 bg-primary-600" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {MAIN_NAVIGATION.slice(0, 6).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 flex items-center gap-2 transition-colors text-sm group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2 text-neutral-800">
              <span className="w-8 h-0.5 bg-primary-600" />
              For Students
            </h3>
            <ul className="space-y-3">
              {QUICK_ACCESS.currentStudents.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-primary-600 flex items-center gap-2 transition-colors text-sm group"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-neutral-600 hover:text-primary-600 flex items-center gap-2 transition-colors text-sm group"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              {QUICK_ACCESS.prospectiveStudents.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 hover:text-primary-600 flex items-center gap-2 transition-colors text-sm group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 flex items-center gap-2 text-neutral-800">
              <span className="w-8 h-0.5 bg-primary-600" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {SITE_CONFIG.contact.addresses.map((addr) => (
                <li key={addr.campus} className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm text-neutral-800">{addr.campus}</div>
                    <div className="text-neutral-500 text-sm">{addr.address}</div>
                  </div>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phones.reception}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="text-sm text-neutral-500">Reception</div>
                    <div className="font-medium text-neutral-800">
                      {SITE_CONFIG.contact.phones.reception}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phones.admissions}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary-600" />
                  <div>
                    <div className="text-sm text-neutral-500">Admissions</div>
                    <div className="font-medium text-neutral-800">
                      {SITE_CONFIG.contact.phones.admissions}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <Envelope className="h-5 w-5 text-primary-600" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>
              &copy; {currentYear} {SITE_CONFIG.shortName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-600 transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="hover:text-primary-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
