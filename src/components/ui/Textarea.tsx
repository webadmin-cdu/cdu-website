import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-charcoal-700 mb-2"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 rounded-lg border border-charcoal-300 bg-white',
            'text-charcoal-900 placeholder:text-charcoal-400',
            'transition-colors duration-200 resize-y min-h-[120px]',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'disabled:bg-charcoal-50 disabled:text-charcoal-500 disabled:cursor-not-allowed',
            error && 'border-error focus:ring-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-2 text-sm text-error">
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

Textarea.displayName = 'Textarea';

export { Textarea };
