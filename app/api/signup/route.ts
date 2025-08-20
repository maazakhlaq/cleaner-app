// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/lib/prisma";

// Type for request body
interface SignupBody {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

// Type for Prisma unique constraint error
interface PrismaUniqueConstraintError extends Error {
  code: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: SignupBody = await req.json();
    const { name, email, phone, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone: phone || null, // optional field
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      customer,
    });
  } catch (err) {
    // Prisma unique constraint error handling
    const error = err as PrismaUniqueConstraintError;
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
