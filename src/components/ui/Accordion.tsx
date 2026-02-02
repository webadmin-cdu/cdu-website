'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { CaretDown } from '@phosphor-icons/react';

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion components must be used within an Accordion provider'
    );
  }
  return context;
}

export interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string[];
  children: ReactNode;
  className?: string;
}

export function Accordion({
  type = 'single',
  defaultValue = [],
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('divide-y divide-charcoal-200', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({
  value,
  children,
  className,
}: AccordionItemProps) {
  return (
    <div className={className} data-value={value}>
      {children}
    </div>
  );
}

export interface AccordionTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionTrigger({
  value,
  children,
  className,
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
      className={cn(
        'flex items-center justify-between w-full py-4 text-left text-charcoal-900 font-medium',
        'hover:text-primary-600 transition-colors',
        className
      )}
    >
      {children}
      <CaretDown
        className={cn(
          'h-5 w-5 text-charcoal-500 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
}

export interface AccordionContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function AccordionContent({
  value,
  children,
  className,
}: AccordionContentProps) {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'pb-4 text-charcoal-600 animate-fade-in',
        className
      )}
    >
      {children}
    </div>
  );
}
