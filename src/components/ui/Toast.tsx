'use client';

import { Toaster } from 'sonner';

export function ToastContainer() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '0.75rem',
          padding: '1rem',
        },
        classNames: {
          success: 'border-l-4 border-l-success',
          error: 'border-l-4 border-l-error',
          warning: 'border-l-4 border-l-warning',
          info: 'border-l-4 border-l-info',
        },
      }}
      closeButton
      richColors
    />
  );
}

// Re-export toast for convenience
export { toast } from 'sonner';
