import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default async function Page() {
  return (
    <>
      <Navbar />

      <main className="relative pt-20">
        <div className="w-full text-center">
          <h1 className="text-white heading-sp-h1 [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
              Featured Posts
          </h1>
        </div>

        <div className="flex w-full justify-center mb-8 z-20">
          <SearchBar />
        </div>

        <LatestEdition />
      </main>

    </>
  );
}