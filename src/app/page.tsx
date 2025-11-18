import CollaborateList from "@/components/CollaborateList";
import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";
import Image from "next/image";
import YoutubeShortScroller from "@/components/YoutubeShortScroller";
import { getShorts } from "@/service/youtube.service";
import { extractYouTubeId } from "@/utils/youtube";

export default async function Page() {
  return (
    <>
      <Navbar />

      <HomeHero />

      <div className="
          w-full flex flex-col justify-center items-center gap-8
        ">
        <h1 className="text-center text-white text-6xl leading-[68px] text-shadow-[var(--shadow-indigo)] px-5">
          Our Latest Edition
        </h1>
        <LatestEdition />
      </div>

      <WhatsNew />
      
      <CollaborateList/>

      <Footer/>
    </>
  );
}