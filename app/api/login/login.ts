import { NextResponse } from "next/server";
 import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/prisma/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; // set in .env

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = await prisma.customer.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });

    return NextResponse.json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
