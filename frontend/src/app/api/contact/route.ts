import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  // Server-side re-validation (never trust client)
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const errors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0]);
      errors[field] ??= [];
      errors[field].push(issue.message);
    }
    return NextResponse.json({ success: false, errors }, { status: 422 });
  }

  const { website, name: _name, phone: _phone, ...nonPii } = result.data;

  // Honeypot check — silent success to confuse bots
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Log non-PII fields only
  console.log("[contact] New lead submission", {
    street: nonPii.street,
    city: nonPii.city,
    state: nonPii.state,
    zip: nonPii.zip,
    hasMessage: Boolean(nonPii.message),
    hasEmail: Boolean(result.data.email),
    timestamp: new Date().toISOString(),
  });

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (apiBase) {
    const apiRes = await fetch(`${apiBase}/api/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...result.data, source: "contact_form" }),
    });
    if (!apiRes.ok) {
      const err = await apiRes.text();
      console.error("[contact] Django API error", err);
      return NextResponse.json({ success: false, error: "Failed to save lead" }, { status: 502 });
    }
  }

  return NextResponse.json({ success: true });
}
