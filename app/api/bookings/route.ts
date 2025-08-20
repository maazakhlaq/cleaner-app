import { prisma } from "@/prisma/lib/prisma";
import { NextResponse } from "next/server";
 
export async function POST(req: Request) {
  try {
    const { customer, date, service } = await req.json();

    if (!customer || !date || !service) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        customer,
        date: new Date(date),
        service,
      },
    });

    return NextResponse.json({ message: "Booking created", booking });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
