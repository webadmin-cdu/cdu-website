'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';
import { CaretDown } from '@phosphor-icons/react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, helperText, options, placeholder, id, ...props },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full px-4 py-3 rounded-lg border border-charcoal-300 bg-white',
              'text-charcoal-900 appearance-none cursor-pointer',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'disabled:bg-charcoal-50 disabled:text-charcoal-500 disabled:cursor-not-allowed',
              error && 'border-error focus:ring-error',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <CaretDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-400 pointer-events-none" />
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-2 text-sm text-error">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-charcoal-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
