import { NextResponse } from "next/server";
import type { ContactSubmission } from "@/types";

// In-memory storage (in production, use a database)
const contactSubmissions: ContactSubmission[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const contact: ContactSubmission = {
      ...body,
    };

    contactSubmissions.push(contact);

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send Slack/Teams notification

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit contact form",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      data: contactSubmissions,
    },
    { status: 200 }
  );
}