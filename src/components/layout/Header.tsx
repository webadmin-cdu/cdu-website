'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { cn } from '@/lib/utils/cn';
import { MAIN_NAVIGATION } from '@/lib/constants/navigation';
import { SITE_CONFIG } from '@/lib/constants/siteConfig';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';
import { MegaMenu, MEGA_MENU_DATA } from './MegaMenu';
import {
  List,
  MagnifyingGlass,
  Phone,
  Envelope,
  CaretDown,
  X,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  GraduationCap,
  FileText,
  Users,
  Briefcase,
} from '@phosphor-icons/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-secondary-500 focus:text-primary-950 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Bar - Chaitanya Red */}
      <div className="hidden lg:block bg-primary-600 text-white text-sm">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Left: Social Icons + Contact */}
          <div className="flex items-center gap-6">
            {/* Social Icons - from siteConfig */}
            <div className="flex items-center gap-3 border-r border-white/30 pr-6">
              <a
                href={SITE_CONFIG.contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.contact.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo className="h-4 w-4" />
              </a>
            </div>
            {/* Contact Info */}
            <a
              href={`tel:${SITE_CONFIG.contact.phones.reception}`}
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{SITE_CONFIG.contact.phones.reception}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Envelope className="h-4 w-4" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>
          {/* Right: Quick Links with Icons */}
          <div className="flex items-center gap-1">
            <Link
              href="/student-portal"
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-primary-700 transition-colors"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Student Portal</span>
            </Link>
            <Link
              href="/admissions/how-to-apply"
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-primary-700 transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Admissions</span>
            </Link>
            <Link
              href="/placements"
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-primary-700 transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>Placements</span>
            </Link>
            <Link
              href="/academics/research"
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-primary-700 transition-colors"
            >
              <Users className="h-3.5 w-3.5" />
              <span>Research</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-soft'
            : 'bg-white'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Logo variant="default" size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {MAIN_NAVIGATION.map((item) => {
                const hasMegaMenu = item.children && MEGA_MENU_DATA[item.label];

                return (
                  <div
                    key={item.label}
                    className={cn('relative', hasMegaMenu && 'static')}
                    onMouseEnter={() =>
                      item.children && setActiveDropdown(item.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-all hover-gold-accent',
                        pathname === item.href ||
                          pathname.startsWith(item.href + '/')
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <CaretDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      )}
                    </Link>

                    {/* Mega Menu for items with mega menu data */}
                    {hasMegaMenu && (
                      <MegaMenu
                        label={item.label}
                        isOpen={activeDropdown === item.label}
                        onClose={() => setActiveDropdown(null)}
                      />
                    )}

                    {/* Simple Dropdown for items without mega menu (like Contact) */}
                    {item.children && !hasMegaMenu && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                        <div className="glass rounded-2xl shadow-medium border border-white/30 py-2 overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 text-sm transition-all',
                                pathname === child.href
                                  ? 'text-primary-700 bg-primary-50 border-l-2 border-secondary-500'
                                  : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 hover:border-l-2 hover:border-secondary-500'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                className="p-2.5 rounded-xl text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 transition-colors"
                aria-label="Search"
              >
                <MagnifyingGlass className="h-5 w-5" />
              </button>

              <Link href="/admissions/how-to-apply" className="hidden sm:block">
                <Button
                  size="sm"
                  className="bg-primary-600 text-white hover:bg-primary-700 font-semibold rounded-xl"
                >
                  Apply Now
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2.5 rounded-xl text-neutral-600 hover:text-primary-700 hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <List className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </>
  );
}
