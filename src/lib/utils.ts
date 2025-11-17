import type { BeehiivPost } from "./types";

export function toISO(ts?: number | null) {
  if (!ts) return undefined;
  return new Date(ts * 1000).toISOString();
}

export function extractEditionNumber(post: Pick<BeehiivPost, "slug" | "title" | "meta_default_title">) {
  const texts = [post.slug, post.title, post.meta_default_title].filter(Boolean) as string[];

  for (const t of texts) {
    const m1 = t.match(/(?:edition|episode|chapter)\s*#?\s*(\d+)/i);
    if (m1) return Number(m1[1]);
    const m2 = t.match(/#\s*(\d{1,4})/);
    if (m2) return Number(m2[1]);
    const m3 = t.match(/\b(\d{1,4})\b/);
    if (m3) return Number(m3[1]);
  }
  return "—";
}
