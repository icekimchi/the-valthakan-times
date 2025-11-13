import { NextResponse } from "next/server";

type BeehiivPost = {
  id: string;
  title: string;
  subtitle?: string;
  thumbnail_url?: string;
  web_url: string;
  publish_date?: number;       
  displayed_date?: number;   
  content_tags?: string[];
  slug?: string;
};

export async function GET() {
  const pubId = process.env.BEEHIIV_PUBLICATION_ID!;
  const url = new URL(`https://api.beehiiv.com/v2/publications/${pubId}/posts`);

  url.searchParams.set("limit", "5");
  url.searchParams.set("order_by", "publish_date");
  url.searchParams.set("direction", "desc");
  url.searchParams.set("hidden_from_feed", "false");
  url.searchParams.set("platform", "all");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}` },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }

  const json = await res.json();
  const items = (json.data as BeehiivPost[]).map((p, i) => {
    const ts = (p.displayed_date ?? p.publish_date) ?? null;
    const dateISO = ts ? new Date(ts * 1000).toISOString() : undefined;

    // EditionCard Format
    return {
      id: p.id,
      href: p.web_url,
      imageSrc: "card_img.png",
      editionNumber: p.slug ?? i + 1,        
      tag: p.content_tags?.[0],
      dateISO,
      title: p.title,
      subtitle: p.subtitle,
    };
  });

  return NextResponse.json({ items });
}
