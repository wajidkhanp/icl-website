import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]!);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
  const limits = { name: 200, email: 254, subject: 200, message: 10000 };
  for (const [key, max] of Object.entries(limits)) {
    const value = fields[key];
    if (typeof value !== "string" || !value.trim() || value.length > max) {
      return NextResponse.json(
        { error: `Please provide ${key} (up to ${max} characters).` },
        { status: 400 }
      );
    }
  }
  const { name, email, subject, message } = Object.fromEntries(
    Object.keys(limits).map((key) => [key, (fields[key] as string).trim()])
  );
  if (!/^[^\s<>"@]+@[^\s<>"@]+\.[^\s<>"@]+$/.test(email) || /[\r\n]/.test(subject)) {
    return NextResponse.json({ error: "Please provide a valid email and subject." }, { status: 400 });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured. Please email us directly at secretary@iclaveen.net" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "secretary@iclaveen.net";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: `ICL Contact Form <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[ICL Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A5C2A; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              New Message — Islamic Center of Laveen
            </h1>
          </div>
          <div style="background: #f0fdf4; padding: 24px; border: 1px solid #bbf7d0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 100px; font-weight: bold;">Name</td>
                <td style="padding: 8px 0; color: #111;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td>
                <td style="padding: 8px 0; color: #111;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Subject</td>
                <td style="padding: 8px 0; color: #111;">${escapeHtml(subject)}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #bbf7d0; margin: 16px 0;" />
            <p style="color: #666; font-weight: bold; margin: 0 0 8px;">Message</p>
            <p style="color: #111; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">
            Sent from islamiccenteroflaveen.org contact form
          </p>
        </div>
      `,
    });

    if (error || !data?.id) {
      return NextResponse.json(
        { error: "Failed to send message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email us directly." },
      { status: 500 }
    );
  }
}
