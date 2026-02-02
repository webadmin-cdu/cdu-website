import { NextRequest, NextResponse } from 'next/server';
import { admissionInquirySchema } from '@/lib/utils/validation';
import { createClient } from '@/lib/supabase/server';
import { rateLimit, RATE_LIMITS } from '@/lib/utils/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const { success, remaining, resetIn } = rateLimit(request, RATE_LIMITS.admission);
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
    const result = admissionInquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, phone, programInterest, currentQualification, message } = result.data;

    // Save to Supabase
    const supabase = await createClient();
    const { error } = await supabase.from('admission_inquiries').insert({
      full_name: fullName,
      email,
      phone,
      program_interest: programInterest || null,
      current_qualification: currentQualification || null,
      message: message || null,
    });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to save admission inquiry');
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully. We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Admission inquiry error:', error);
    return NextResponse.json(
      { message: 'Failed to submit inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
