'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Global Error:', error);

    // In production, send to error tracking service
    // Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '1rem',
              }}
            >
              A critical error occurred. We apologize for the inconvenience.
            </p>
            {error.digest && (
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  marginBottom: '2rem',
                }}
              >
                Error ID: {error.digest}
              </p>
            )}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => reset()}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#D33E42',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Try Again
              </button>
              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
