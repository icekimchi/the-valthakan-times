import type { BeehiivPost, FetchParams, Paged } from "./types";

const API_BASE = "https://api.beehiiv.com/v2";
const KEY = process.env.BEEHIIV_API_KEY ?? "";
const RAW_PUB = process.env.BEEHIIV_PUBLICATION?? "";
const PUB = RAW_PUB ? (RAW_PUB.startsWith("pub_") ? RAW_PUB : `pub_${RAW_PUB}`) : "";

const USE_MOCK = process.env.USE_MOCK_DATA === "true";

export async function fetchBeehiivPosts(params: FetchParams = {}): Promise<Paged<BeehiivPost>> {
  if (USE_MOCK || !KEY || !PUB) return { items: [], nextPage: null };

  const {
    page = 1,
    limit = 20,
    sort = "new",
    // 아래 3개는 beehiiv 서버 파라미터가 제한적이라 보조 필터로만 사용
    q = "",
    tag = "",
    audience = "all",
  } = params;

  const url = new URL(`${API_BASE}/publications/${PUB}/posts`);
  url.searchParams.set("status", "confirmed");
  url.searchParams.set("platform", "all");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("page", String(page));
  url.searchParams.set("order_by", "publish_date");
  url.searchParams.set("direction", sort === "old" ? "asc" : "desc");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${KEY}`, Accept: "application/json" },
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    return { items: [], nextPage: null };
  }

  const json = await res.json();
  let items = (json?.data ?? []) as BeehiivPost[];

  // 정렬 재보장
  items = items.sort((a, b) => {
    const ad = (a.displayed_date ?? a.publish_date) ?? 0;
    const bd = (b.displayed_date ?? b.publish_date) ?? 0;
    return sort === "old" ? ad - bd : bd - ad;
  });

  // 서버 보조 필터 (q/tag/audience)
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
