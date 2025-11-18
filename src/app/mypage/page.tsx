import Navbar from "@/components/Navbar";
import { PrimaryButton } from "@/components/PrimaryButton";
import Footer from "@/components/Footer";
import { fetchPagedList } from "@/service/beehiiv.posts.service";
import NewsletterList from "@/components/NewsletterList";

export default async function mypage(){

  const { items } = await fetchPagedList({ page: 1, limit: 4 });

    return(
      <>
      <Navbar/>
      <main className="w-full px-6 pb-8">
        <div className="
          flex flex-col items-center gap-6 px-6 py-10 mt-25
          rounded-[16px] border border-[1px] border-[#302D9A]/20
          backdrop-blur-[2px] bg-[color:var(--color-card-bg)]
          box-border"
        >
          <img
            src="/Avatar.png"
            width={72}
            height={72}
            className="object-contain flex-shrink-0"
          />
          <div className="text-xl-figma">
            <div className="title text-center text-white font-semibold font-['Eczar']">Name</div>
            <div className="text-base-figma text-[color:var(--color-blue-gray-400)]">thevalthakantimes12@gmail.com</div>
          </div>

          <div className="h-px w-full bg-[color:var(--color-indigo-900)]" />

          <div className="w-full flex flex-col gap-5">
            <div className="text-[color:var(--color-blue-gray-400)] font-['Eczar']">Current Plan</div>
            <div className="text-xl-figma text-white font-semibold !font-['Eczar']">Free Plan</div>
            <PrimaryButton text="Upgrade Now" showLeftIcon={false} showRightIcon={true}/>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-8">
          <div className="heading-sp-h3-eczar text-white font-['Eczar']">Recently Viewed</div>

          <div className="mb-8 z-20">
            <NewsletterList items={items} />
          </div>

        </div>
      </main>
      <Footer/>
    </>
  );
}