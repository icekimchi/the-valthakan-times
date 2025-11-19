"use client";

import { useState } from "react";
import type { ListFilters, PriceFilter, SortFilter } from "@/constants/filters";
import type { EditionFilter } from "@/constants/filters";

type Props = {
  filters: ListFilters;
  onChange: (next: ListFilters) => void;
};

type OpenKey = "edition" | "price" | "sort" | null;


const editionOptions: { value: EditionFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "deep_dive", label: "Deep Dive" },
  { value: "dear_crone", label: "Dear Crone" },
  { value: "mid_month", label: "Mid Month Update" },
  { value: "monthly", label: "Monthly Edition" },
  { value: "wandering", label: "Wandering of the Crone" },
  { value: "audio", label: "Audio Edition" },
  { value: "special", label: "Special Edition" },
]

const priceOptions: { value: PriceFilter; label: string }[] = [
  { value: "all", label: "Paid + Free" },
  { value: "paid", label: "Paid" },
];

const sortOptions: { value: SortFilter; label: string }[] = [
  { value: "new", label: "Newest posts" },
  { value: "old", label: "Oldest posts" },
  { value: "most_view", label: "Most View Posts" },
];

function getEditionLabel(value: EditionFilter) {
  return editionOptions.find(o => o.value === value)?.label ?? "All";
}
function getPriceLabel(value: PriceFilter) {
  return priceOptions.find(o => o.value === value)?.label ?? "Paid + Free";
}
function getSortLabel(value: SortFilter) {
  return sortOptions.find(o => o.value === value)?.label ?? "Newest posts";
}

export default function FilterBar({ filters, onChange }: Props) {
  const [open, setOpen] = useState<OpenKey>(null);

  const toggle = (key: OpenKey) => {
    setOpen(prev => (prev === key ? null : key));
  };

  const selectEdition = (value: EditionFilter) => {
    onChange({ ...filters, edition: value });
    setOpen(null);
  };

  const selectPrice = (value: PriceFilter) => {
    onChange({ ...filters, price: value });
    setOpen(null);
  };

  const selectSort = (value: SortFilter) => {
    onChange({ ...filters, sort: value });
    setOpen(null);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-3">
        {/* Edition */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("edition")}
            className="flex items-center justify-between min-w-[56px] h-10 px-4 rounded-md border border-white/10 bg-[var(--color-card-bg)] font-['inter'] text-white"
          >
            <span>{getEditionLabel(filters.edition)}</span>
            <span className="text-[10px]">▾</span>
          </button>

          {open === "edition" && (
            <div className="absolute left-0 mt-2 w-[189px] rounded-md border border-white/10 bg-[var(--color-card-bg)] shadow-lg z-30">
              {editionOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectEdition(option.value)}
                  className={[
                    "flex w-full items-center px-4 h-10 text-left text-sm",
                    filters.edition === option.value
                      ? "bg-[var(--color-indigo-700)]"
                      : "bg-[var(--filter-box-bg)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("price")}
            className="flex items-center justify-between min-w-[56px] h-10 px-4 rounded-md border border-white/10 bg-[var(--color-card-bg)] font-['inter'] text-white"
          >
            <span>{getPriceLabel(filters.price)}</span>
            <span className="text-[10px] text-white">▾</span>
          </button>

          {open === "price" && (
            <div className="absolute left-0 mt-2 p-2 w-[189px] rounded-md border border-white/10 bg-[var(--color-blue-gray-900)] shadow-lg z-30">
              {priceOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectPrice(option.value)}
                  className={[
                    "flex w-full items-center px-4 h-10 text-left text-white font-['inter']",
                    filters.price === option.value
                      ? "bg-[var(--color-indigo-700)]"
                      : "bg-[var(--filter-box-bg)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggle("sort")}
            className="flex items-center justify-between min-w-[56px] h-10 px-4 rounded-md border border-white/10 bg-[var(--color-card-bg)] font-['inter'] text-white"
          >
            <span>{getSortLabel(filters.sort)}</span>
            <span className="font-['inter'] text-[10px]">▾</span>
          </button> 

          {open === "sort" && (
            <div className="absolute left-0 mt-2 w-[189px] rounded-md border border-white/10 bg-[var(--filter-box-bg)] shadow-lg z-30">
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectSort(option.value)}
                  className={[
                    "flex w-full items-center px-4 h-10 text-left font-['inter']",
                    filters.sort === option.value
                      ? "bg-[var(--color-indigo-700)]"
                      : "bg-[var(--filter-box-bg)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
