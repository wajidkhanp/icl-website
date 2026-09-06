import { NextRequest, NextResponse } from "next/server";
import { loginResponse, passwordMatches } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !passwordMatches((body as { password?: unknown }).password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  return loginResponse();
}