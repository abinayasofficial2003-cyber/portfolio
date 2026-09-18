import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactForm, ContactFormFields } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: Partial<ContactFormFields>;
  try {
    payload = (await request.json()) as Partial<ContactFormFields>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON request." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const url = typeof payload.url === "string" ? payload.url.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const services = Array.isArray(payload.services)
    ? payload.services.filter((s): s is string => typeof s === "string")
    : [];

  const validationError = validateContactForm({ name, email, message });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER || "abinayaselsa@gmail.com";
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, ""); // strip any spaces from 16-char app password

  if (!gmailPass) {
    console.error("GMAIL_APP_PASSWORD environment variable is not configured.");
    return NextResponse.json(
      {
        error:
          "Email service is not yet configured. Please set GMAIL_APP_PASSWORD in environment variables.",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const servicesHtml =
      services.length > 0
        ? services
            .map(
              (s) =>
                `<span style="display:inline-block;background:#f13024;color:#ffffff;padding:4px 10px;border-radius:12px;font-size:12px;margin:2px 4px 2px 0;font-weight:600;">${s}</span>`
            )
            .join(" ")
        : "<em style='color:#888;'>None specified</em>";

    // 1. Send Notification Email to Abinaya S
    await transporter.sendMail({
      from: `"AegisSec Portal" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `🚨 New Security Assessment Request: ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0c1b; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #2e2257;">
          <div style="background: linear-gradient(135deg, #e52e20 0%, #131424 100%); padding: 24px; text-align: left;">
            <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">AegisSec Security Engagement Request</h2>
            <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">Inbound inquiry from your cybersecurity portfolio</p>
          </div>
          
          <div style="padding: 24px; background: #131424;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #a19dbb; font-size: 13px; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #a19dbb; font-size: 13px;">Email:</td>
                <td style="padding: 8px 0; color: #f13024; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color:#f13024;text-decoration:none;">${email}</a></td>
              </tr>
              ${
                company
                  ? `<tr>
                      <td style="padding: 8px 0; color: #a19dbb; font-size: 13px;">Company / Organization:</td>
                      <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${company}</td>
                    </tr>`
                  : ""
              }
              ${
                phone
                  ? `<tr>
                      <td style="padding: 8px 0; color: #a19dbb; font-size: 13px;">Phone / Signal:</td>
                      <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${phone}</td>
                    </tr>`
                  : ""
              }
              ${
                url
                  ? `<tr>
                      <td style="padding: 8px 0; color: #a19dbb; font-size: 13px;">Target App / Scope URL:</td>
                      <td style="padding: 8px 0; color: #4da3ff; font-size: 14px;"><a href="${url.startsWith("http") ? url : `https://${url}`}" target="_blank" style="color:#4da3ff;">${url}</a></td>
                    </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; color: #a19dbb; font-size: 13px; vertical-align: top;">Selected Scopes:</td>
                <td style="padding: 8px 0;">${servicesHtml}</td>
              </tr>
            </table>

            <div style="background: rgba(255,255,255,0.04); border-left: 4px solid #f13024; padding: 16px; border-radius: 6px; margin-top: 10px;">
              <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Requirement Details:</h4>
              <p style="margin: 0; color: #dcd7f3; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #7f7a9c; text-align: center;">
              Hit <strong>Reply</strong> to respond directly to <a href="mailto:${email}" style="color:#f13024;">${email}</a>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Send Automated Confirmation to the Client
    await transporter.sendMail({
      from: `"Abinaya S | AegisSec" <${gmailUser}>`,
      to: email,
      subject: `Security Assessment Inquiry Received — Abinaya S`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; background: #0f0c1b; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #2e2257;">
          <div style="background: #131424; padding: 24px; border-bottom: 2px solid #f13024;">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px;">Aegis<span style="color:#f13024;">Sec</span>.</h2>
            <p style="margin: 4px 0 0 0; color: #a19dbb; font-size: 12px;">Application Security & Cybersecurity Consulting</p>
          </div>

          <div style="padding: 24px; background: #131424; line-height: 1.6; color: #dcd7f3; font-size: 14px;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out regarding security assessment services. I have received your requirement details.</p>
            <p>I am reviewing your scope details and will get back to you with the testing methodology, scope boundaries, and timeline promptly (typically within 24 hours).</p>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: 8px; margin: 18px 0;">
              <p style="margin: 0; font-size: 12px; color: #a19dbb;"><strong>Submitted Scopes:</strong> ${services.length > 0 ? services.join(", ") : "General Security Consultation"}</p>
            </div>

            <p style="margin-bottom: 0;">Best regards,<br />
            <strong style="color: #ffffff;">Abinaya S</strong><br />
            <span style="font-size: 12px; color: #a19dbb;">Certified Penetration Tester | AegisSec</span><br />
            <a href="mailto:${gmailUser}" style="color: #f13024; font-size: 12px; text-decoration: none;">${gmailUser}</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Nodemailer SMTP dispatch error:", error);
    const errMessage = error instanceof Error ? error.message : "Failed to send email via SMTP.";
    return NextResponse.json(
      { error: `Email dispatch failed: ${errMessage}` },
      { status: 500 }
    );
  }
}
