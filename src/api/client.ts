import type { BeehiivPost, FetchParams, Paged } from "../types/beehiiv.types";

const API_BASE = "https://api.beehiiv.com/v2";
const BEEHIIV_KEY = process.env.BEEHIIV_API_KEY!;
const BEEHIIV_PUBLICATION = process.env.BEEHIIV_PUBLICATION!;

const USE_MOCK = process.env.USE_MOCK_DATA === "true";

export async function fetchBeehiivPosts(params: FetchParams = {}): Promise<Paged<BeehiivPost>> {
  if (USE_MOCK || !BEEHIIV_KEY || !BEEHIIV_PUBLICATION) return { items: [], nextPage: null };

  const {
    page = 1,
    limit = 20,
    sort = "new",
    q = "",
    tag = "",
    audience = "all",
  } = params;

  const url = new URL(`${API_BASE}/publications/${BEEHIIV_PUBLICATION}/posts`);
  url.searchParams.set("status", "confirmed");
  url.searchParams.set("platform", "all");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("page", String(page));
  url.searchParams.set("order_by", "publish_date");
  url.searchParams.set("direction", sort === "old" ? "asc" : "desc");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${BEEHIIV_KEY}`, Accept: "application/json" },
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    return { items: [], nextPage: null };
  }

  const json = await res.json();
  let items = (json?.data ?? []) as BeehiivPost[];

  items = items.sort((a, b) => {
    const ad = (a.displayed_date ?? a.publish_date) ?? 0;
    const bd = (b.displayed_date ?? b.publish_date) ?? 0;
    return sort === "old" ? ad - bd : bd - ad;
  });

  if (audience !== "all") items = items.filter(i => (i.audience ?? "free") === audience);
  if (tag) items = items.filter(i => (i.content_tags ?? []).map(t => t.toLowerCase()).includes(tag.toLowerCase()));
  if (q) {
    const ql = q.toLowerCase();
    const inStr = (s?: string | null) => (s ?? "").toLowerCase();
    items = items.filter(i =>
      inStr(i.title).includes(ql) ||
      inStr(i.subtitle).includes(ql) ||
      (i.content_tags ?? []).some(t => t.toLowerCase().includes(ql))
    );
  }

  const nextPage = items.length < limit ? null : page + 1;
  return { items, nextPage };
}

export async function fetchBeehiivPostById(postId: string) {
  const url = new URL(
    `${API_BASE}/publications/${BEEHIIV_PUBLICATION}/posts/${postId}`
  );

  url.searchParams.append("expand", "free_web_content");
  url.searchParams.append("expand", "premium_web_content");

  console.log("[beehiiv] final url:", url.toString());

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${BEEHIIV_KEY}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 300 },
  });

  const text = await res.text();

  if (!res.ok) {
    console.error(
      "[beehiiv] fetchBeehiivPostById failed:",
      res.status,
      text
    );
    throw new Error(`Beehiiv post fetch failed: ${res.status}`);
  }

  let json: any;
  try {
    json = JSON.parse(text);
  } catch (e) {
    console.error("[beehiiv] JSON parse error. raw:", text);
    throw new Error("Beehiiv returned non-JSON response");
  }

  console.log("[beehiiv] fetchBeehiivPostById success:", json?.data?.id);
  return json.data;
}