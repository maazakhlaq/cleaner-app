// app/api/bookings/route.ts
import { prisma } from "@/prisma/lib/prisma";
import { NextResponse } from "next/server";

// Use proper type annotation for Request
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { customer, date, service, cleaner } = body;

    if (!customer || !date || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        customer,
        cleaner: cleaner || null, // optional field handling
        date: new Date(date),
        service,
      },
    });

    return NextResponse.json({ message: "Booking created", booking });
  } catch (err) {
    // Use proper type guard for unknown errors
    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
