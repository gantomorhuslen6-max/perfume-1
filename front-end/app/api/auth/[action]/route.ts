import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: Promise<{ action: string }> }) {
  try {
    const body = await request.json();
    const { action } = await params;

    // Mock authentication responses for demo purposes
    if (action === 'login') {
      const { email, password } = body;
      
      // Simple validation
      if (!email || !password) {
        return NextResponse.json(
          { message: 'И-мэйл болон нууц үг оруулна уу' },
          { status: 400 }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { message: 'Зөв и-мэйл хаяг оруулна уу' },
          { status: 400 }
        );
      }

      // Mock successful login
      const mockUser = {
        id: "1",
        firstName: "Хэрэглэгч",
        lastName: "Нэр",
        email: email,
        role: email.includes('admin') ? 'admin' : 'user'
      };

      const mockToken = "mock-token-" + Date.now();

      return NextResponse.json({
        token: mockToken,
        user: mockUser,
        message: "Амжилттай нэвтэрлээ!"
      });

    } else if (action === 'signup') {
      const { firstName, lastName, email, password } = body;
      
      // Simple validation
      if (!firstName || !lastName || !email || !password) {
        return NextResponse.json(
          { message: 'Бүх талбарыг бөглөнө үү' },
          { status: 400 }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { message: 'Зөв и-мэйл хаяг оруулна уу' },
          { status: 400 }
        );
      }

      // Password length validation
      if (password.length < 6) {
        return NextResponse.json(
          { message: 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой' },
          { status: 400 }
        );
      }

      // Mock successful signup
      const mockUser = {
        id: "1",
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: email.includes('admin') ? 'admin' : 'user'
      };

      const mockToken = "mock-token-" + Date.now();

      return NextResponse.json({
        token: mockToken,
        user: mockUser,
        message: "Бүртгэл амжилттай!"
      });

    } else {
      return NextResponse.json(
        { message: 'Invalid action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
