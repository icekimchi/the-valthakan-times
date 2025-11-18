import NewsletterListsCard from "@/components/NewsletterListCard";
import type { ListCardItem } from "@/types/beehiiv.types";

type NewsletterListProps = {
  items: ListCardItem[];
};

export default function NewsletterList({ items }: NewsletterListProps) {
  if (!items?.length) {
    return (
      <p className="text-center text-white/60 py-10">
        No newsletters found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <NewsletterListsCard
          key={item.id}
          href={`/newsletter/${item.id}`}
          imageSrc={item.imageSrc}
          editionNumber={item.editionNumber}
          tag={item.tag}
          dateISO={item.dateISO}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}
