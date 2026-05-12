import { NextResponse } from "next/server";
import type { QuoteRequest } from "@/types";

// In-memory storage (in production, use a database)
const quoteRequests: QuoteRequest[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const quoteRequest: QuoteRequest = {
      id: `quote-${Date.now()}`,
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    quoteRequests.push(quoteRequest);

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send Slack/Teams notification

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully",
        data: quoteRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote request",
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
      data: quoteRequests,
    },
    { status: 200 }
  );
}