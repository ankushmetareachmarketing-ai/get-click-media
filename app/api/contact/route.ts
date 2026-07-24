import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string = "") {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, Email and Message are required.",
        },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          success: false,
          error: "SMTP configuration is missing.",
        },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Get Click Media" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: `New Service Inquiry - ${service || "General"}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

      <h2 style="background:#2563eb;color:#fff;padding:20px">
      New Service Inquiry
      </h2>

      <table cellpadding="10" cellspacing="0" width="100%" border="1" style="border-collapse:collapse">

      <tr>
      <td><strong>Name</strong></td>
      <td>${escapeHtml(name)}</td>
      </tr>

      <tr>
      <td><strong>Email</strong></td>
      <td>${escapeHtml(email)}</td>
      </tr>

      <tr>
      <td><strong>Phone</strong></td>
      <td>${escapeHtml(phone || "-")}</td>
      </tr>

      <tr>
      <td><strong>Company</strong></td>
      <td>${escapeHtml(company || "-")}</td>
      </tr>

      <tr>
      <td><strong>Service</strong></td>
      <td>${escapeHtml(service || "-")}</td>
      </tr>

      </table>

      <div style="margin-top:20px;padding:20px;background:#f3f4f6">

      <strong>Message</strong>

      <p style="white-space:pre-wrap">
      ${escapeHtml(message)}
      </p>

      </div>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (err: any) {
    console.error("SMTP ERROR");

    console.error({
      code: err.code,
      response: err.response,
      responseCode: err.responseCode,
      command: err.command,
      message: err.message,
    });

    return NextResponse.json(
      {
        success: false,
        error: err.message,
        code: err.code,
      },
      { status: 500 }
    );
  }
}