import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, company, service, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Get Click Media Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Service Inquiry — ${service || "General"} from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb,#38bdf8);padding:32px;text-align:center;">
          <h1 style="color:#fff;margin:0;font-size:22px;">New Service Inquiry</h1>
        </div>
        <div style="padding:32px;background:#fff;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#64748b;font-size:13px;width:130px;">Name</td><td style="padding:10px 0;color:#0f172a;font-weight:600;">${name}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:10px 0;color:#0f172a;font-weight:600;">${email}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:13px;">Phone</td><td style="padding:10px 0;color:#0f172a;font-weight:600;">${phone || "—"}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:13px;">Company</td><td style="padding:10px 0;color:#0f172a;font-weight:600;">${company || "—"}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;"><td style="padding:10px 0;color:#64748b;font-size:13px;">Service</td><td style="padding:10px 0;color:#2563eb;font-weight:700;">${service || "—"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:20px;background:#f1f5f9;border-radius:8px;border-left:4px solid #2563eb;">
            <p style="margin:0;color:#64748b;font-size:12px;margin-bottom:8px;">MESSAGE</p>
            <p style="margin:0;color:#0f172a;">${message}</p>
          </div>
        </div>
        <div style="padding:16px 32px;background:#f8fafc;text-align:center;">
          <p style="margin:0;color:#94a3b8;font-size:12px;">Sent from Get Click Media website</p>
        </div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
