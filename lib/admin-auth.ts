import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const ADMIN_COOKIE = "icl-admin-session";
const ADMIN_PASSWORD = process.env.ICL_ADMIN_PASSWORD ?? "change-this-icl-admin-password";

function sessionToken() {
  return createHmac("sha256", ADMIN_PASSWORD).update("icl-admin-session").digest("hex");
}

export function isAdminRequest(request: NextRequest) {
  const supplied = request.cookies.get(ADMIN_COOKIE)?.value ?? "";
  const expected = sessionToken();
  if (supplied.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
}

export function loginResponse() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}

export function unauthorized() {
  return NextResponse.json({ error: "Admin authentication required." }, { status: 401 });
}

export function passwordMatches(password: unknown) {
  return typeof password === "string" && password === ADMIN_PASSWORD;
}