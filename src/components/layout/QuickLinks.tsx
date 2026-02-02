'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

interface QuickLinksProps {
  title: string;
  links: QuickLink[];
  className?: string;
  variant?: 'default' | 'compact' | 'card';
}

export function QuickLinks({ title, links, className, variant = 'default' }: QuickLinksProps) {
  if (variant === 'card') {
    return (
      <div className={cn('bg-white rounded-2xl shadow-soft p-6', className)}>
        <h3 className="text-lg font-semibold text-charcoal-800 mb-4">{title}</h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal-600 hover:text-primary-600 transition-colors py-1"
                >
                  <span>{link.label}</span>
                  <ArrowSquareOut className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block text-charcoal-600 hover:text-primary-600 transition-colors py-1"
                >
                  {link.label}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn('', className)}>
        <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
          {title}
        </h4>
        <ul className="flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-charcoal-600 hover:text-primary-600 transition-colors bg-charcoal-100 hover:bg-charcoal-200 px-3 py-1 rounded-full"
                >
                  <span>{link.label}</span>
                  <ArrowSquareOut className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="inline-block text-sm text-charcoal-600 hover:text-primary-600 transition-colors bg-charcoal-100 hover:bg-charcoal-200 px-3 py-1 rounded-full"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={cn('', className)}>
      <h3 className="text-lg font-semibold text-charcoal-800 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal-600 hover:text-primary-600 transition-colors group"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600 group-hover:scale-125 transition-transform" />
                <span>{link.label}</span>
                <ArrowSquareOut className="h-3 w-3" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="flex items-center gap-2 text-charcoal-600 hover:text-primary-600 transition-colors group"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-600 group-hover:scale-125 transition-transform" />
                <span>{link.label}</span>
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
