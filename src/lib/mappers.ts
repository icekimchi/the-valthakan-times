import type { BeehiivPost, CarouselCardItem, ListCardItem } from "./types";
import { extractEditionNumber, toISO } from "./utils";

const fallbackImg = "/card_img.png";

export function mapToCarouselCard(p: BeehiivPost): CarouselCardItem {
  const ts = p.displayed_date ?? p.publish_date ?? undefined;
  return {
    id: p.id,
    href: p.web_url ?? `/editions/${p.slug ?? p.id}`,
    imageSrc: fallbackImg,
    editionNumber: extractEditionNumber(p),
    tag: p.content_tags?.[0] ?? "Edition",
    dateISO: toISO(ts ?? undefined),
    title: p.title,
    subtitle: p.subtitle ?? p.meta_default_description ?? "",
    audience: p.audience ?? "free",
    tags: p.content_tags ?? [],
  };
}

export function mapToListCard(p: BeehiivPost): ListCardItem {
  const ts = p.displayed_date ?? p.publish_date ?? undefined;
  return {
    id: p.id,
    href: p.web_url ?? `/editions/${p.slug ?? p.id}`,
    imageSrc: fallbackImg,
    editionNumber: extractEditionNumber(p),
    tag: p.content_tags?.[0] ?? "Edition",
    dateISO: toISO(ts ?? undefined),
    title: p.title,
    subtitle: p.subtitle ?? p.meta_default_description ?? "",
    audience: p.audience ?? "free",
    tags: p.content_tags ?? [],
  };
}
