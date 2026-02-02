import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add request ID for tracing
  const requestId = crypto.randomUUID();
  response.headers.set('x-request-id', requestId);

  // Block common attack patterns
  const pathname = request.nextUrl.pathname;
  const blockedPatterns = [
    /\.php$/i,
    /\.asp$/i,
    /\.aspx$/i,
    /\.jsp$/i,
    /wp-admin/i,
    /wp-login/i,
    /wp-content/i,
    /xmlrpc\.php/i,
    /\.env$/i,
    /\.git/i,
    /\.svn/i,
  ];

  for (const pattern of blockedPatterns) {
    if (pattern.test(pathname)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // Add security headers for API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
  }

  // Handle trailing slashes - redirect to non-trailing version
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
