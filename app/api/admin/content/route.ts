import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest, unauthorized } from "@/lib/admin-auth";
import { readSiteContent, writeSiteContent, SiteContent } from "@/lib/site-content";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return unauthorized();
  return NextResponse.json(readSiteContent());
}

export async function PUT(request: NextRequest) {
  if (!isAdminRequest(request)) return unauthorized();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const content = body as SiteContent;
  if (!content || typeof content !== "object" || !content.iqamaTimes || !Array.isArray(content.jumuah) || content.jumuah.length !== 2) {
    return NextResponse.json({ error: "Please provide both Jumu’ah entries and all Iqama times." }, { status: 400 });
  }

  const values = [
    content.weekendDhuhrNote,
    content.seasonalNote,
    ...Object.values(content.iqamaTimes),
    ...content.jumuah.flatMap((entry) => [entry?.time, entry?.khateeb]),
  ];
  if (!Array.isArray(content.announcements) || content.announcements.length !== 4
    || content.announcements.some((announcement) => typeof announcement !== "string" || announcement.length > 300)
    || values.some((value) => typeof value !== "string" || !value.trim() || value.length > 300)) {
    return NextResponse.json({ error: "All fields are required and must be 300 characters or less." }, { status: 400 });
  }

  try {
    writeSiteContent(content);
    return NextResponse.json({ success: true, content: readSiteContent() });
  } catch (error) {
    console.error("Admin content save error:", error);
    return NextResponse.json({ error: "The content file could not be saved. Configure a writable persistent path." }, { status: 500 });
  }
}