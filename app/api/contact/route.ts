import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

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

    await resend.emails.send({
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
                <td style="padding: 8px 0; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td>
                <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Subject</td>
                <td style="padding: 8px 0; color: #111;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #bbf7d0; margin: 16px 0;" />
            <p style="color: #666; font-weight: bold; margin: 0 0 8px;">Message</p>
            <p style="color: #111; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 16px;">
            Sent from islamiccenteroflaveen.org contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email us directly." },
      { status: 500 }
    );
  }
}
