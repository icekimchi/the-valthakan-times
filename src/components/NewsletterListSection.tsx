"use client";

import { useState, useMemo } from "react";
import NewsletterList from "@/components/NewsletterList";
import type { ListCardItem } from "@/types/beehiiv.types";
import type { ListFilters, EditionFilter } from "@/constants/filters";
import FilterBar from "./FilterBar"; 

type Props = {
  initialItems: ListCardItem[];
};

const defaultFilters: ListFilters = {
  edition: "all",
  price: "all",
  sort: "new",
};

const editionTagMap: Record<EditionFilter, string | null> = {
  all: null,
  deep_dive: "deep dive/writers workshop",
  dear_crone: "dear crone quarterly",     
  mid_month: "mid month update",
  monthly: "monthly edition",
  wandering: "wanderings of the crone",
  audio: "audio edition",
  special: "special edition",
};

export default function NewsletterListSection({ initialItems }: Props) {
  const [filters, setFilters] = useState<ListFilters>(defaultFilters);

  const filteredItems = useMemo(() => {
    let list = [...initialItems];

    // free, pai
    if (filters.price === "paid") {
      list = list.filter((i) => i.audience === "premium");
    }

    // EditionFilter
    const editionTag = editionTagMap[filters.edition];
    if (editionTag) {
      const target = editionTag.toLowerCase();
      list = list.filter((i) => {
        const singleTag = i.tag?.toLowerCase();
        const tagList = i.tags?.map((t) => t.toLowerCase()) ?? [];
        return singleTag === target || tagList.includes(target);
      });
    }

    // 🎯 sort (dateISO)
    if (filters.sort === "new") {
      list.sort(
        (a, b) => +new Date(b.dateISO ?? 0) - +new Date(a.dateISO ?? 0)
      );
    } else if (filters.sort === "old") {
      list.sort(
        (a, b) => +new Date(a.dateISO ?? 0) - +new Date(b.dateISO ?? 0)
      );
    } else if (filters.sort === "most_view") {
      // 아직 조회수 필드 없으면 일단 그대로 두거나 나중에 추가
      // list.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    }

    return list;
  }, [filters, initialItems]);

  return (
    <div className="w-full flex flex-col gap-4 mx-5">
      <FilterBar filters={filters} onChange={setFilters} />
      <div className="flex w-full justify-center mb-8 z-20">
        <NewsletterList items={filteredItems} />
      </div>
    </div>
  );
}
