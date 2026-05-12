import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { QuoteRequest } from "@/types";

// ─── Email Configuration ────────────────────────────────────────────────────
// Add these to your .env.local file to enable email notifications:
//
//   OWNER_EMAIL = the address that receives every quote request
//   EMAIL_USER  = Gmail account used to send (e.g. noreply@yourcompany.com)
//   EMAIL_PASS  = Gmail App Password for that account
//               → https://myaccount.google.com/apppasswords
//
// If any variable is missing the form still works — email is simply skipped.
// ────────────────────────────────────────────────────────────────────────────
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "";
const EMAIL_USER  = process.env.EMAIL_USER  ?? "";
const EMAIL_PASS  = process.env.EMAIL_PASS  ?? "";

// In-memory log (replace with a database in production)
const quoteRequests: QuoteRequest[] = [];

function buildEmailHtml(data: QuoteRequest): string {
  const rows: [string, string][] = [
    ["Full Name",        data.name],
    ["Company",          data.company],
    ["Phone",            data.phone],
    ["Email",            data.email],
    ["Product Interest", data.productInterest],
    ["Details / Qty",    data.quantity   ?? "—"],
    ["Notes",            data.message    ?? "—"],
    ["Submitted At",     new Date(data.createdAt).toLocaleString("en-ET", { timeZone: "Africa/Addis_Ababa" })],
  ];

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,sans-serif;">
      <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <div style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8);padding:28px 32px;">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">New Quote Request</h1>
          <p style="margin:4px 0 0;color:#bfdbfe;font-size:13px;">Hamernassa Pharmaceuticals PLC</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${rows.map(([label, value], i) => `
            <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#fff"};">
              <td style="padding:12px 24px;font-size:13px;font-weight:600;color:#475569;width:38%;border-bottom:1px solid #e2e8f0;">${label}</td>
              <td style="padding:12px 24px;font-size:13px;color:#1e293b;border-bottom:1px solid #e2e8f0;">${value}</td>
            </tr>
          `).join("")}
        </table>
        <div style="padding:20px 32px;background:#f8fafc;text-align:center;">
          <p style="margin:0;font-size:12px;color:#94a3b8;">
            This message was generated automatically by the Hamernassa HPP website.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const quoteRequest: QuoteRequest = {
      id: `quote-${Date.now()}`,
      name:            body.name            ?? "",
      company:         body.company         ?? "",
      phone:           body.phone           ?? "",
      email:           body.email           ?? "",
      productInterest: body.productInterest ?? "",
      quantity:        body.quantity,
      message:         body.message,
      status:          "pending",
      createdAt:       new Date().toISOString(),
    };

    quoteRequests.push(quoteRequest);

    // ── Send email notification if credentials are configured ───────────────
    if (OWNER_EMAIL && EMAIL_USER && EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });

      await transporter.sendMail({
        from:    `"Hamernassa HPP Website" <${EMAIL_USER}>`,
        to:      OWNER_EMAIL,
        subject: `📋 Quote Request – ${quoteRequest.name} (${quoteRequest.company})`,
        html:    buildEmailHtml(quoteRequest),
      });
    }
    // ────────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully", data: quoteRequest },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Quote API]", error);
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
  return NextResponse.json({ success: true, data: quoteRequests }, { status: 200 });
}