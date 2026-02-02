'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface MagnifyingGlassFormProps {
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'modal' | 'inline';
  onClose?: () => void;
  autoFocus?: boolean;
}

const quickLinks = [
  { label: 'Admissions', href: '/admissions' },
  { label: 'Programs', href: '/academics/programs' },
  { label: 'Fee Structure', href: '/admissions/fee-structure' },
  { label: 'Scholarships', href: '/admissions/scholarships' },
  { label: 'Contact', href: '/contact' },
];

export function MagnifyingGlassForm({
  className,
  placeholder = 'MagnifyingGlass programs, departments, news...',
  variant = 'default',
  onClose,
  autoFocus = false,
}: MagnifyingGlassFormProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose?.();
    }
  };

  const handleQuickLink = (href: string) => {
    router.push(href);
    onClose?.();
  };

  if (variant === 'modal') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-secondary-700/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="container mx-auto px-4 pt-24"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <MagnifyingGlass className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-charcoal-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full h-16 pl-16 pr-16 text-xl bg-white rounded-2xl shadow-strong focus:outline-none focus:ring-2 focus:ring-primary-500"
                autoFocus
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </form>

            <div className="mt-6 bg-white rounded-2xl shadow-soft p-6">
              <p className="text-sm text-charcoal-500 mb-4">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleQuickLink(link.href)}
                    className="px-4 py-2 text-sm bg-charcoal-100 hover:bg-primary-100 hover:text-primary-700 rounded-full transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={cn('relative', className)}>
        <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full h-10 pl-10 pr-4 text-sm bg-charcoal-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
        />
      </form>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            'relative transition-all',
            isFocused && 'ring-2 ring-primary-500 rounded-xl'
          )}
        >
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full h-12 pl-12 pr-12 bg-white border border-charcoal-200 rounded-xl focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-medium p-4 z-50"
          >
            <p className="text-xs text-charcoal-500 mb-3">Popular MagnifyingGlasses</p>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onMouseDown={() => handleQuickLink(link.href)}
                  className="px-3 py-1.5 text-sm bg-charcoal-100 hover:bg-primary-100 hover:text-primary-700 rounded-full transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
