import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "emails", "emails.json");

export async function POST(req: NextRequest) {
  try {
    const newEmail = await req.json();
    const data = await fs.readFile(DATA_PATH, "utf-8");
    const emails = JSON.parse(data);
    emails.unshift(newEmail);
    await fs.writeFile(DATA_PATH, JSON.stringify(emails, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
