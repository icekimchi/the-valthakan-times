export type EditionFilter =
  | "all"
  | "deep_dive"
  | "dear_crone"
  | "mid_month"
  | "monthly"
  | "wandering"
  | "audio"
  | "special";

export type PriceFilter = "all" | "paid" ;
export type SortFilter = "new" | "old" | "most_view";

export type ListFilters = {
  edition: EditionFilter;
  price: PriceFilter;
  sort: SortFilter;
};
