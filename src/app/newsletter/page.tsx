import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { fetchPagedList } from "@/service/beehiiv.posts.service";
import NewsletterListSection from "@/components/NewsletterListSection";
import Footer from "@/components/Footer";

export default async function Page() {
  
    const { items } = await fetchPagedList({ page: 1, limit: 20 });
    console.log(items);
    
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col gap-10 pt-20 gap-10">
        <div className="w-full text-center">
          <h1 className="text-white text-[56px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
              Featured Posts
          </h1>
        </div>

        <div className="inline-flex flex-col items-center w-full justify-center gap-8">
          <SearchBar />
          <LatestEdition />
        </div>

        <div className="flex w-full justify-center mb-8 z-20">
          <NewsletterListSection initialItems={items} />
        </div>
      </main>
      <Footer/>
    </>
  );
}