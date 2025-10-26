import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function POST(request: NextRequest, { params }: { params: Promise<{ action: string }> }) {
  try {
    const body = await request.json();
    const { action } = await params;

    let url = '';
    switch (action) {
      case 'login':
        url = `${API_BASE_URL}/api/auth/login`;
        break;
      case 'signup':
        url = `${API_BASE_URL}/api/auth/signup`;
        break;
      default:
        return NextResponse.json(
          { message: 'Invalid action' },
          { status: 400 }
        );
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
