export type BeehiivPost = {
  id: string;
  title: string;
  subtitle?: string | null;
  slug?: string | null;
  thumbnail_url?: string | null;
  web_url?: string | null;
  publish_date?: number | null;
  displayed_date?: number | null;
  status?: string;
  authors?: string[];
  meta_default_title?: string;
  meta_default_description?: string;
  content_tags?: string[] | null;
  audience?: "free" | "premium";
};

export type BaseCardItem = {
  id: string;
  href: string;
  imageSrc: string;
  editionNumber: string | number;
  tag?: string;
  dateISO?: string;
  title: string;
  subtitle?: string;
  audience?: "free" | "premium";
  tags?: string[];
};

// 카드 2종 (필요한 필드만 확장)
export type CarouselCardItem = BaseCardItem & {
  // 예: 캐러셀 전용 스타일/표시용 필드가 있다면 여기에
};

export type ListCardItem = BaseCardItem & {
  // 예: 리스트 전용 배지/카테고리 같은 추가 필드
};

export type FetchParams = {
  page?: number;           // 1-based
  limit?: number;          // 기본 20
  sort?: "new" | "old";    // publish_date desc/asc
  q?: string;              // 제목/부제/태그 보조 검색
  tag?: string;            // content_tags 보조 필터
  audience?: "all" | "free" | "premium";
};

export type Paged<T> = { items: T[]; nextPage: number | null };
