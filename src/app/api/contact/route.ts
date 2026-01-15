import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSiteUrl } from "@/lib/site";

const rateLimitStore = new Map<string, { count: number; start: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const invalidResponse = NextResponse.json(
  { ok: false, message: "Invalid submission." },
  { status: 400 }
);

const rateLimitResponse = NextResponse.json(
  { ok: false, message: "Please try again later." },
  { status: 429 }
);

function sanitizeMessage(input: string): string {
  const withoutTags = input.replace(/<[^>]*>/g, " ");
  const normalizedNewlines = withoutTags.replace(/\r\n/g, "\n");
  const collapsedSpaces = normalizedNewlines.replace(/[\t ]+/g, " ");
  const collapsedLines = collapsedSpaces.replace(/\n{3,}/g, "\n\n");
  return collapsedLines.trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!forwardedFor) return "unknown";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now - record.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, start: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count += 1;
  return false;
}

export function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return invalidResponse;
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const messageRaw = typeof payload.message === "string" ? payload.message : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const message = sanitizeMessage(messageRaw);

  if (company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length === 0 ||
    email.length > 254 ||
    !isValidEmail(email) ||
    message.length < 10 ||
    message.length > 2000
  ) {
    return invalidResponse;
  }

  if (isRateLimited(getClientIp(request))) {
    return rateLimitResponse;
  }

  const siteUrl = getSiteUrl();
  const siteName = process.env.SITE_NAME || "LA CREATIVO GROUP, LLC";
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "";
  const toAddress = process.env.CONTACT_TO_EMAIL || "";

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const textBody = [
    `Site: ${siteUrl}`,
    `Name: ${name}`,
    `Email: ${email}`,
    "Message:",
    message,
    `Timestamp: ${new Date().toISOString()}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      to: toAddress,
      from: `${siteName} <${fromAddress}>`,
      replyTo: email,
      subject: `[Administrative Inquiry] ${siteName}`,
      text: textBody,
    });
  } catch {
    console.error("Contact form email failed.");
  }

  return NextResponse.json({ ok: true });
}
