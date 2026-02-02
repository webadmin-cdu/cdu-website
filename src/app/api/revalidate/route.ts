import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json();

    // Check for secret to prevent unauthorized revalidations
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    if (!path) {
      return NextResponse.json(
        { message: 'Path is required' },
        { status: 400 }
      );
    }

    revalidatePath(path);

    return NextResponse.json(
      { message: `Revalidated: ${path}`, revalidated: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}
