import { NextResponse } from "next/server";

export async function GET() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Admin not configured" },
      { status: 500 }
    );
  }

  return NextResponse.json({ email, password });
}