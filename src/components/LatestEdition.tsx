import EditionsCarousel from "./EditionsCarousel";
import { fetchLatestEditions } from "@/lib/beehiiv";

export default async function LatestEdition() {
    const items = await fetchLatestEditions(5);

    return (
        <div className="w-full max-w-6xl px-4 md:px-6 mx-auto">
          <EditionsCarousel items={items} />
        </div>
    );
}