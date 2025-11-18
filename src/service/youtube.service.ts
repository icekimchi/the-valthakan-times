export async function getShorts(ids: string[]) {
  const key = process.env.YT_API_KEY!;
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("id", ids.join(","));
  url.searchParams.set("key", key);

  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();

  return data.items.map((it: any) => {
    const s = it.snippet;
    const t = s.thumbnails;
    const thumb =
      t.maxres?.url || t.high?.url || t.medium?.url || t.default?.url;
    return {
      id: it.id,
      title: s.title,
      hashtags: "#shorts",
      dateLabel: new Date(s.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      thumbnailUrl: thumb,
      href: `https://youtu.be/${it.id}`,
    };
  });
}
