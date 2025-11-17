import type { BeehiivPost } from "./beehiiv";

const PATTERNS: RegExp[] = [
  /(?:edition|episode|chapter)\s*#?\s*(\d+)/i, // Edition 84 / Episode #27
  /#\s*(\d{1,4})/,                             // #84
  /\b(\d{1,4})\b/,                             
];

export function extractEditionNumber(post: Pick<BeehiivPost, "slug" | "title" | "meta_default_title">) {
  const texts = [post.slug, post.title, post.meta_default_title].filter(Boolean) as string[];
  for (const t of texts) {
    for (const re of PATTERNS) {
      const m = t.match(re);
      if (m) return Number(m[1]);
    }
  }
  return undefined;
}
