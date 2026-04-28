import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("予約内容:", data);

  return NextResponse.json({
    message: "予約を受け付けました",
  });
}
