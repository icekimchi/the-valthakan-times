import { YoutubeShortCard } from "./YoutubeShortCard";
import type { ShortsItem } from "./YoutubeShortCard";
import styles from "../app/youtubeshortscroller.module.css";

export default function YoutubeShortScroller({
  items,
  title = "Shorts",
}: {
  items: ShortsItem[];
  title?: string;
}) {
  return (
    <section className="w-full">
      <div
          className={`flex gap-4 overflow-x-auto snap-x snap-mandatory ${styles.noScrollbar}`}
        >
          {items.map((it) => (
            <div key={it.id} className="shrink-0 snap-start">
              <YoutubeShortCard item={it} />
            </div>
          ))}
        </div>
    </section>
  );
}