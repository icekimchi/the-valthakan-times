import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { fetchPagedList } from "@/lib";
import NewsletterList from "@/components/NewsletterList";

export default async function Page() {
  
    const { items } = await fetchPagedList({ page: 1, limit: 12 });
  return (
    <>
      <Navbar />
      <main className="relative pt-20 gap-10">
        <div className="w-full text-center py-10">
          <h1 className="text-white text-[56px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
              Featured Posts
          </h1>
        </div>

        <div className="inline-flex flex-col items-center w-full justify-center gap-8">
          <SearchBar />
          <LatestEdition />
        </div>

        

        <div className="flex w-full justify-center mb-8 z-20">
          <NewsletterList items={items} />
        </div>
      </main>

    </>
  );
}