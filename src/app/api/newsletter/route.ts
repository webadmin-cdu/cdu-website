import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/utils/validation';
import { createClient } from '@/lib/supabase/server';
import { rateLimit, RATE_LIMITS } from '@/lib/utils/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const { success, remaining, resetIn } = rateLimit(request, RATE_LIMITS.newsletter);
    if (!success) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(resetIn / 1000)),
            'Retry-After': String(Math.ceil(resetIn / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    // Validate the request body
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Save to Supabase
    const supabase = await createClient();
    const { error } = await supabase.from('newsletter_subscribers').insert({
      email,
      source: 'website',
    });

    // Handle duplicate email error (unique constraint violation)
    if (error && error.code === '23505') {
      return NextResponse.json(
        { message: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to save newsletter subscription');
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
