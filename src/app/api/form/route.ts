import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

/**
 * The project inquiry form (ProjectForm in src/components/studio.tsx) posts
 * here, and the message is emailed to Stephen through Resend.
 *
 * Settings (Vercel → Environment Variables, never in the code):
 *   RESEND_API_KEY  the Resend key that can send from elijahdesent.com
 *   FORM_TO         where messages go (comma-separate for more than one)
 *   FORM_SECRET     any long random string; signs the anti-spam token
 *   FORM_FROM       optional; defaults to "Great Lakes Gospel Studio website
 *                   <contact@elijahdesent.com>"
 * Without RESEND_API_KEY + FORM_TO the endpoint answers 503 and the form tells
 * the visitor to call or text instead — it never pretends a message was sent.
 *
 * Spam defences: a signed load-time token that must be at least 3 seconds old,
 * a honeypot field, a per-IP rate limit, and no links in the free-text fields.
 * Anything that trips one gets a fake success and is dropped.
 */

const STUDIO = "Great Lakes Gospel Studio";
const PHONE = "(810) 358-0518";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECRET = process.env.FORM_SECRET || process.env.RESEND_API_KEY || "";
const MIN_FILL_MS = 3000;
const MAX_AGE_MS = 1000 * 60 * 60 * 6;

function sign(ts: string) {
  return createHmac("sha256", SECRET).update(ts).digest("hex");
}

function tokenOk(token: unknown) {
  if (!SECRET) return true;
  if (typeof token !== "string") return false;
  const [ts, sig] = token.split(".");
  if (!ts || !sig) return false;
  const expected = Buffer.from(sign(ts));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;
  const age = Date.now() - Number(ts);
  return age >= MIN_FILL_MS && age <= MAX_AGE_MS;
}

export async function GET() {
  const ts = String(Date.now());
  return NextResponse.json(
    { token: SECRET ? `${ts}.${sign(ts)}` : `${ts}.${randomBytes(8).toString("hex")}` },
    { headers: { "Cache-Control": "no-store" } },
  );
}

// Best-effort, per serverless instance.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = 2000) =>
  typeof v === "string"
    ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, max)
    : "";

// Links in free text are the spam signature. Email addresses are checked on
// their own field, so "jane@gmail.com" is never mistaken for a link.
const hasLink = (s: string) => /(https?:\/\/|www\.|\.(com|net|ru|xyz|top)\b)/i.test(s);
const okEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const fake = () => NextResponse.json({ ok: true });

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 12_000) return NextResponse.json({ error: "Too long." }, { status: 413 });

  let b: Record<string, unknown>;
  try {
    b = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (b.website || b.company) return fake();
  if (!tokenOk(b.token)) return fake();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return fake();

  const name = clean(b.name, 100);
  const type = clean(b.type, 60);
  const email = clean(b.email, 200);
  const message = clean(b.message, 4000);

  if (!name) return NextResponse.json({ error: "Please give your name." }, { status: 400 });
  if (!message) return NextResponse.json({ error: "Tell us a little about your project." }, { status: 400 });
  if (!okEmail(email))
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  if ([name, type, message].some(hasLink)) return fake();

  const key = process.env.RESEND_API_KEY;
  const to = process.env.FORM_TO;
  if (!key || !to) {
    return NextResponse.json(
      { error: `The online form isn't connected yet. Please call or text Stephen at ${PHONE}.` },
      { status: 503 },
    );
  }

  const subject = `Studio inquiry: ${type || "Project"} (from ${name})`;
  const text = [
    "New project inquiry from the studio website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    type ? `Project: ${type}` : null,
    "",
    message,
    "",
    "—",
    "Sent from the form on greatlakesgospelstudio.com. Reply to this email to answer them.",
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.FORM_FROM || `${STUDIO} website <contact@elijahdesent.com>`,
        to: to.split(",").map((a) => a.trim()),
        reply_to: email,
        subject: `[Website] ${subject}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`resend ${res.status}`);
  } catch {
    return NextResponse.json(
      { error: `We couldn't send that just now. Please call or text Stephen at ${PHONE}.` },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
