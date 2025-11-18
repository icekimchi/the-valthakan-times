import Image from "next/image";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

export default async function HomeHero() {
    return (
    <section
      id="hero"
      className="relative flex flex-col items-center min-h-screen overflow-x-hidden items-center px-5 pt-30 pb-24"
    >
      <div
        className="
          absolute -z-10 pointer-events-none
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[140%] max-w-[1000px] aspect-[612/449]
          md:w-[110%]
          opacity-60md:w-[120%]
          opacity-60
        "
      >
        <Image
          src="/sparkling.png" 
          alt=""
          fill
          priority={false}
          className="object-contain md:object-cover"
        />
      </div>
      <div className="
        w-full mx-5
        rounded-[16px]
        border border-[1px] border-[#302D9A]/20
        backdrop-blur-[2px]
        bg-[color:var(--color-card-bg)]
        flex flex-col items-center gap-6 px-8 pt-6 pb-8 
        box-border"
      >
        <button
          className="
            flex self-center mb-2 gap-2
            bg-[#302D9A]/20
            text-[color:var(--color-indigo-500)] text-base font-semibold font-['Eczar']
            px-4 py-2 rounded-full
          "
        >
          <img
            src="/crown.png"
            alt="crown"
            className="flex object-contain"
          />
          by Daniel Alexander
        </button>
        

        {/* Copy */}
        <div className="w-full text-center">
          <h1 className="text-white text-6xl [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
              The <span className="block md:inline">Valthakan Times</span>
          </h1>
          <p className="mt-3 text-[color:var(--color-blue-gray-300)] leading-6 font-['Eczar']">
              Blending epic fantasy with practical lifewtyle advice
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 w-full justify-center">
          <PrimaryButton text="Subscribe" showLeftIcon={false} showRightIcon={false} />
          <SecondaryButton text="Partner With Us" showLeftIcon={false} showRightIcon={false} />
        </div>
      </div>

      {/* radial glow */}
      <div
        className="
          absolute -z-10
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          size-72 md:size-[420px] rounded-full
          blur-[109px] opacity-80
          mix-blend-screen bg-[radial-gradient(circle,_var(--color-indigo-200)_0%,_var(--color-indigo-600)_100%)]
          pointer-events-none"
      />

      {/* character */}
      <Image
        src="/crone.png"
        alt=""
        width={280}
        height={280}
        className="relative z-10 w-[220px] md:w-[280px] py-5 select-none"
        draggable={false}
        priority
      />
    </section>
    );
}