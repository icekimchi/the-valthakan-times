import EditionsCarousel from "./EditionsCarousel";
import { fetchLatestEditions } from "@/service/beehiiv.service";

export default async function LatestEdition() {
  const items = await fetchLatestEditions(5);

  return (
    <div className="w-full">
      <EditionsCarousel items={items} />
    </div>
  );
}
