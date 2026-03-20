import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { fetchPagedList } from "@/service/beehiiv.posts.service";
import NewsletterListSection from "@/components/NewsletterListSection";
import Footer from "@/components/Footer";

export default async function Page() {
  const { items } = await fetchPagedList({ page: 1, limit: 12 });

  return (
    <>
      <Navbar />

      <main className="w-full pt-20">
        {/* container */}
        <div className="mx-auto max-w-[1100px] px-5 flex flex-col gap-10">
          {/* Title */}
          <h1 className="text-center text-white text-[36px] md:text-[56px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
            Featured Posts
          </h1>

          {/* Search + Latest */}
          <div className="flex flex-col items-center gap-8">
            <LatestEdition />
          </div>

          {/* Newsletter list */}
          <div className="w-full">
            <SearchBar />
          </div>
          <NewsletterListSection initialItems={items} />
        </div>
      </main>

      <Footer />
    </>
  );
}
