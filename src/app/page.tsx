import CollaborateList from "@/components/CollaborateList";
import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import { instagramPosts } from "@/constants/instagram";
import InstagramSection from "@/components/InstagramSection";

export default async function Page() {
  return (
    <>
      <Navbar />

      <HomeHero />

      <div className="w-full py-24">
        <div className="mx-auto max-w-[1106px] grid grid-cols-12 gap-[22px] px-5">
          
          {/* Title */}
          <h1
            className="
              col-span-12
              text-center text-white text-6xl leading-[68px]
              text-shadow-[var(--shadow-indigo)]
            "
          >
            Our Latest Edition
          </h1>

          {/* Editions */}
          <div className="col-span-12">
            <LatestEdition />
          </div>

        </div>
      </div>


      <WhatsNew />
      
      <CollaborateList/>

      <InstagramSection
        profileUrl="https://www.instagram.com/dalecsander99/"
        posts={instagramPosts}
      />

      <Footer/>
    </>
  );
}