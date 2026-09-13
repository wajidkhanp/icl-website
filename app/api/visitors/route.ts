import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { recordMonthlyVisitor } from "@/lib/visitor-count";

export const dynamic = "force-dynamic";

const VISITOR_COOKIE = "icl_visitor_id";

export async function POST(request: NextRequest) {
  const visitorId = request.cookies.get(VISITOR_COOKIE)?.value ?? randomUUID();

  try {
    const count = recordMonthlyVisitor(visitorId);
    const response = NextResponse.json(
      { count },
      { headers: { "Cache-Control": "no-store" } },
    );

    if (!request.cookies.has(VISITOR_COOKIE)) {
      response.cookies.set(VISITOR_COOKIE, visitorId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 400,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } catch (error) {
    console.error("Visitor count save error:", error);
    return NextResponse.json(
      { error: "The visitor counter is unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
