import Link from "next/link";
import Image from "next/image";

/**
 * Mobile-first YouTube Shorts card + horizontal scroller
 * - 9:16 thumbnail, rounded-2xl corners
 * - Title (1 line clamp) + hashtags (truncate with ellipsis)
 * - Date (e.g., Nov 12, 2025)
 * - Entire card is tappable
 */

export type ShortsItem = {
  id: string;
  title: string; // e.g., "Announcement time!"
  hashtags?: string; // e.g., "#dalecsander #music #shorts"
  dateLabel: string; // preformatted date string
  thumbnailUrl: string;
  href: string; // YouTube deep link
};

export function YoutubeShortCard({ item }: { item: ShortsItem }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-[178px] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      aria-label={`${item.title} ${item.hashtags ?? ""}`.trim()}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black/10">
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          fill
          sizes="140px"
          className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.02]"
          priority={false}
        />

        {/* Subtle gradient top & bottom to match the screenshot depth */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      {/* Meta */}
      <div className="pt-3">
        <h3 className="text-white text-base font-semibold !font-['Eczar'] leading-5 truncate">
          {item.title}
        </h3>
        <p className="text-white/70 text-xs pt-1">{item.dateLabel}</p>
      </div>
    </Link>
  );
}