import { NextResponse } from "next/server";

const PUB_ID = process.env.BEEHIIV_PUBLICATION!;
const API_KEY = process.env.BEEHIIV_API_KEY!;
const POST_ID = "post_07af2f5b-7d8d-4147-9a5c-7b32f747d926";

export async function GET() {
  const url = `https://api.beehiiv.com/v2/publications/${PUB_ID}/posts/${POST_ID}?expand[]=free_web_content`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("beehiiv error:", res.status, text);
      return NextResponse.json(
        { ok: false, status: res.status, body: text },
        { status: res.status },
      );
    }

    const json = await res.json();
    console.log("beehiiv success:", json);
    return NextResponse.json({ ok: true, data: json });
  } catch (err: any) {
    console.error("fetch error:", err);
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
