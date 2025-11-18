import type { Paged, FetchParams, CarouselCardItem, ListCardItem } from "../types/beehiiv.types";
import { fetchBeehiivPosts } from "../api/client";
import { mapToCarouselCard, mapToListCard } from "../mappers/beehiiv.mappers";

export * from "../types/beehiiv.types";

// Latest 5 Edition
export async function fetchLatestCarousel(limit = 5): Promise<CarouselCardItem[]> {
  const { items } = await fetchBeehiivPosts({ page: 1, limit, sort: "new" });
  return items.slice(0, limit).map(mapToCarouselCard);
}

// Newsletter List
export async function fetchPagedList(params: FetchParams = {}): Promise<Paged<ListCardItem>> {
  const { items, nextPage } = await fetchBeehiivPosts(params);
  return { items: items.map(mapToListCard), nextPage };
}
