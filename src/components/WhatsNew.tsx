import ServiceCard from "./ServiceCard";
import Image from "next/image";
import YoutubeShortScroller from "./YoutubeShortScroller";
import { getShorts } from "@/service/youtube.service";
import { extractYouTubeId } from "@/utils/youtube";

export default async function WhatsNew() {
  const youtubeUrls = [
    "https://youtube.com/shorts/9mFTKSm1BYc?si=qUJ2c-4JWhLkVmp0",
    "https://youtube.com/shorts/p62CVdB2lIE?si=pbjld2eqO5JEHAxb",
    "https://youtu.be/nuYB2SIYIac?si=Ldo5lRQF6f6RaRNy",
    "https://youtube.com/shorts/0F-feFkJhIE?si=ne3p-zu0pA7HJh6x",
    "https://youtube.com/shorts/nV83_h0Aqe8?si=GNLgq4PuoJSCzeel",
  ];

  const ids = youtubeUrls
    .map((url) => extractYouTubeId(url))
    .filter(Boolean);

  const items = await getShorts(ids as string[]);

  return (
    <section
      id="whats-new"
      className="
        relative isolate overflow-hidden
        w-full py-24
        bg-[linear-gradient(180deg,_#0F172A33_0%,_#4338CA33_28%,_#0F172A33_100%)]
      "
    >
      {/* background sparkle */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-70 pointer-events-none">
        <img
          src="/sparkling.png"
          alt=""
          className="w-full max-w-[900px] object-contain opacity-60 scale-125"
        />
      </div>

      <div className="mx-auto max-w-[1106px] grid grid-cols-12 gap-[22px] px-5">

        {/* Title block (10 columns) */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col items-center gap-4">
          <img
            src="/crone_logo.png"
            alt="Crone logo"
            className="w-[119px] object-contain"
          />

          <h1 className="text-center heading-sp-h1 text-white [text-shadow:var(--text-shadow-purple)]">
            Hey Crone,
            <span className="block md:inline"> What’s New?</span>
          </h1>
        </div>

        {/* Service Cards (10 columns) */}
        <div
          className="
            col-span-12
            md:col-span-10 md:col-start-2
            grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-12
          "
        >
          <ServiceCard
            serviceName="Spotify"
            serviceSubtitle="Valthakan on Air"
            backgroundImage="/patreon_service.png"
            badge="/spotify_badge.svg"
            serviceLink="https://open.spotify.com/show/2hkwdtpiPBRcKjVEfReKSg"
          />

          <ServiceCard
            serviceName="Patreon"
            serviceSubtitle="Support our creations"
            backgroundImage="/patreon.png"
            badge="/patreon_badge.svg"
            serviceLink="https://www.patreon.com/collection/1503875"
          />
        </div>

        {/* Shorts title */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 mt-16">
          <h1 className="text-lg !font-serif text-white flex items-center gap-4">
            <Image
              src="/youtubeshort.svg"
              alt="YoutubeShort"
              width={24}
              height={24}
            />
            Shorts
          </h1>
        </div>

        {/* Shorts scroller (10 columns) */}
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <YoutubeShortScroller items={items} />
        </div>
      </div>
    </section>
  );
}
