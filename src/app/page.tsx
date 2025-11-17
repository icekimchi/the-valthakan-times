import CollaborateList from "@/components/CollaborateList";
import LatestEdition from "@/components/LatestEdition";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import HomeHero from "@/components/HomeHero";
import Footer from "@/components/Footer";


export default async function Page() {
  return (
    <>
      <Navbar />

      <HomeHero />

      <div className="
          w-full min-h-screen py-20
          flex flex-col justify-center items-center gap-8
        ">
        <h1 className="text-center text-white text-7xl leading-[68px] text-shadow-[var(--shadow-indigo)] px-5">
          Our Latest Edition
        </h1>
        <div className="self-stretch text-center justify-center [color:var(--color-blue-gray-400)] text-base font-normal font-['Eczar'] leading-6">
          Join our vibrant community for weekly content, honest lifestyle advice, and unique perspectives on
        </div>
        <LatestEdition />
      </div>

      <WhatsNew />

      <CollaborateList/>

      <Footer/>
    </>
  );
}