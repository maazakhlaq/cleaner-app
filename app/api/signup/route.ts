import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma/lib/prisma";
 
export async function POST(req: Request) {
  try { 

    const { name, email, phone, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await prisma.customer.create({
      data: { name, email, phone, password:hashedPassword },
    });

    return NextResponse.json({ message: "User created successfully", customer });
  } catch (err: any) {
    if (err.code === "P2002") {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
