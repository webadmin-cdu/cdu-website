import { NextRequest } from 'next/server';

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Max requests per interval
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting (use Redis in production for multi-instance)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean up every minute

export function getClientIdentifier(request: NextRequest): string {
  // Try to get real IP from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');

  // Use the first available identifier
  const ip = cfConnectingIp || realIp || forwarded?.split(',')[0]?.trim() || 'unknown';

  return ip;
}

export function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = { interval: 60000, maxRequests: 10 }
): { success: boolean; remaining: number; resetIn: number } {
  const identifier = getClientIdentifier(request);
  const now = Date.now();

  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.resetTime < now) {
    // Create new entry or reset expired entry
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + config.interval,
    });
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetIn: config.interval,
    };
  }

  if (entry.count >= config.maxRequests) {
    // Rate limit exceeded
    return {
      success: false,
      remaining: 0,
      resetIn: entry.resetTime - now,
    };
  }

  // Increment count
  entry.count += 1;
  rateLimitStore.set(identifier, entry);

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetIn: entry.resetTime - now,
  };
}

// Rate limit configurations for different endpoints
export const RATE_LIMITS = {
  contact: { interval: 60000, maxRequests: 5 }, // 5 requests per minute
  newsletter: { interval: 60000, maxRequests: 3 }, // 3 requests per minute
  admission: { interval: 60000, maxRequests: 5 }, // 5 requests per minute
  general: { interval: 60000, maxRequests: 30 }, // 30 requests per minute
} as const;
