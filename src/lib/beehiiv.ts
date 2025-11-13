const API_BASE = "https://api.beehiiv.com/v2";

export type BeehiivPost = {
  id: string;
  title: string;
  subtitle?: string | null;
  slug?: string | null;
  thumbnail_url?: string | null;
  web_url?: string | null;
  publish_date?: number | null; // unix timestamp (seconds)
  displayed_date?: number | null;
  status?: string;
  authors?: string[];
  content_tags?: string[] | null;
  meta_default_title?: string;
  meta_default_description?: string;
};

export type EditionCardItem = {
  id: string;
  href: string;
  imageSrc: string;
  editionNumber: number | string;
  tag?: string;
  dateISO?: string;
  title: string;
  subtitle?: string;
};

import { extractEditionNumber } from "./edition";

// Mock dataset used when API is unavailable or returns no posts
const MOCK_ITEMS: EditionCardItem[] = Array.from({ length: 5 }).map((_, i) => {
  const n = 82 - i;
  return {
    id: `${n}`,
    href: `/editions/${n}`,
    imageSrc: "/card_img.png",
    editionNumber: n,
    tag: "Monthly Edition",
    dateISO: "2024-01-24",
    title: `Edition #${n}: An Extravagant Addition`,
    subtitle: "I Need Your Eyeballs",
  };
});

/**
 * Fetch newest posts from Beehiiv (falls back to mock data when unavailable)
 */
export async function fetchLatestEditions(limit = 5): Promise<EditionCardItem[]> {
  const key = process.env.BEEHIIV_API_KEY || "";
  const rawPub = process.env.BEEHIIV_PUBLICATION || "";
  const useMock = process.env.USE_MOCK_DATA === "false";

  // If explicitly using mock OR missing credentials → return mock
  if (useMock || !key || !rawPub) {
    console.warn("[beehiiv] Using mock items (USE_MOCK_DATA=true or missing env vars).");
    return MOCK_ITEMS.slice(0, limit);
  }

  // Normalize publication id (accept both "pub_XXXX" and "XXXX")
  const pub = rawPub.startsWith("pub_") ? rawPub : `pub_${rawPub}`;

    // URL builder
  const url = new URL(`${API_BASE}/publications/${pub}/posts`);
  url.searchParams.set("status", "confirmed");
  url.searchParams.set("platform", "all");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("order_by", "publish_date");
  url.searchParams.set("direction", "desc");

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    // Next.js cache hint (optional)
    next: { revalidate: 300 }, // 5 minutes'
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn(`[beehiiv] fetch failed: ${res.status} ${text}\n→ Falling back to mock items.`);
    return MOCK_ITEMS.slice(0, limit);
  }

  const json = await res.json();
  const posts = (json?.data ?? []) as BeehiivPost[];

  // If API returns no posts, still fall back to mock to keep UI filled
  if (!Array.isArray(posts) || posts.length === 0) {
    console.warn("[beehiiv] API returned no posts. Falling back to mock items.");
    return MOCK_ITEMS.slice(0, limit);
  }

  const sorted = posts.sort((a, b) => {
      const ad = (a.displayed_date ?? a.publish_date) ?? 0;
      const bd = (b.displayed_date ?? b.publish_date) ?? 0;
      return bd - ad; // desc
    });

  return posts.slice(0, limit).map(mapBeehiivToEditionCard);
}

/**
 * Beehiiv response → card component
 */
export function mapBeehiivToEditionCard(p: BeehiivPost): EditionCardItem {
  const ts = p.displayed_date ?? p.publish_date ?? undefined;
  const ed = extractEditionNumber(p); // number | undefined

  return {
    id: p.id,
    href: p.web_url ?? `/editions/${p.slug ?? p.id}`,
    imageSrc: p.thumbnail_url ?? "/card_img.png",
    editionNumber: ed ?? "—",
    tag: p.content_tags?.[0] ?? "Edition",
    dateISO: ts ? new Date(ts * 1000).toISOString() : undefined,
    title: p.title,
    subtitle: p.subtitle ?? p.meta_default_description ?? "",
  };
}