import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/utils/validation';
import { createClient } from '@/lib/supabase/server';
import { rateLimit, RATE_LIMITS } from '@/lib/utils/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const { success, remaining, resetIn } = rateLimit(request, RATE_LIMITS.contact);
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
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, phone, inquiryType, message, honeypot } = result.data;

    // Check honeypot (spam prevention)
    if (honeypot) {
      // Silently accept but don't save (bot detected)
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    // Save to Supabase
    const supabase = await createClient();
    const { error } = await supabase.from('contact_inquiries').insert({
      full_name: fullName,
      email,
      phone: phone || null,
      inquiry_type: inquiryType,
      message,
    });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to save contact inquiry');
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
