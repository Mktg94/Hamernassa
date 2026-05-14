import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactSubmission } from "@/types";

const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "mikeabrsh21@gmail.com";
const EMAIL_USER  = process.env.EMAIL_USER  ?? "";
const EMAIL_PASS  = process.env.EMAIL_PASS  ?? "";

// In-memory storage (replace with a database in production)
const contactSubmissions: ContactSubmission[] = [];

function buildContactEmailHtml(data: ContactSubmission): string {
  const rows: [string, string][] = [
    ["Full Name", data.name],
    ["Email",     data.email],
    ["Phone",     data.phone ?? "—"],
    ["Subject",   data.subject],
    ["Type",      data.type],
    ["Message",   data.message],
  ];

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,sans-serif;">
      <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <div style="background:linear-gradient(135deg,#1e3a8a,#1d4ed8);padding:28px 32px;">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">New Contact Message</h1>
          <p style="margin:4px 0 0;color:#bfdbfe;font-size:13px;">Hamernassa Pharmaceuticals PLC</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${rows.map(([label, value], i) => `
            <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#fff"};">
              <td style="padding:12px 24px;font-size:13px;font-weight:600;color:#475569;width:30%;border-bottom:1px solid #e2e8f0;">${label}</td>
              <td style="padding:12px 24px;font-size:13px;color:#1e293b;border-bottom:1px solid #e2e8f0;white-space:pre-wrap;">${value}</td>
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

    const contact: ContactSubmission = { ...body };
    contactSubmissions.push(contact);

    // ── Send email notification if credentials are configured ───────────────
    if (OWNER_EMAIL && EMAIL_USER && EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });

      await transporter.sendMail({
        from:    `"Hamernassa HPP Website" <${EMAIL_USER}>`,
        to:      OWNER_EMAIL,
        subject: `✉️ Contact Message – ${contact.subject} (${contact.name})`,
        html:    buildContactEmailHtml(contact),
      });
    }
    // ────────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully", data: contact },
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
  return NextResponse.json({ success: true, data: contactSubmissions }, { status: 200 });
}