import ServiceCard from "./ServiceCard";
import Image from "next/image";
import YoutubeShortScroller from "./YoutubeShortScroller";
import { getShorts } from "@/service/youtube.service";
import { extractYouTubeId } from "@/utils/youtube";

export default async function WhatsNew(){
    const youtubeUrls = [
      "https://youtu.be/nuYB2SIYIac?si=Ldo5lRQF6f6RaRNy",
      "https://youtube.com/shorts/0F-feFkJhIE?si=ne3p-zu0pA7HJh6x",
      "https://youtube.com/shorts/nV83_h0Aqe8?si=GNLgq4PuoJSCzeel",
    ];
  
    const ids = youtubeUrls.map((url) => extractYouTubeId(url)).filter(Boolean);
    const items = await getShorts(ids as string[]);
  
    return(
      <section
        id="Hey Crone What's New?"
        className="
            relative isolate -z-0
            w-full min-h-screen px-5 py-20
            flex flex-col inline-flex justify-center items-center overflow-hidden gap-12
            bg-[linear-gradient(180deg,_#0F172A33_0%,_#4338CA33_28%,_#0F172A33_100%)]
            "
        >

        <div
            className="
            absolute inset-0 -z-10 pointer-events-none
            flex justify-center items-center
            opacity-70
            "
        >
            <img
                src="/sparkling.png"
                alt="background stars"
                className="
                w-full max-w-[900px] object-contain
                md:object-cover
                opacity-60
                scale-125
                "
            />
        </div>
        
        <div className="relative flex flex-col justify-center items-center gap-4 w-fit h-fit">
            <img
                src="/crone_logo.png"
                alt="Crone logo"
                className="w-[119px] h-auto object-contain"
            />

            <h1 className="text-center heading-sp-h1 text-white [text-shadow:var(--text-shadow-purple)]">
                Hey Crone,<span className="block md:inline"> What's New?</span>
            </h1>
        </div>

        {/* Responsive card container */}
        <div
          className="
            w-full max-w-6xl px-5
            flex flex-col items-center gap-8
            md:flex-row md:justify-center md:items-stretch"
        >

          <ServiceCard
            serviceName="Spotify"
            serviceSubtitle="Valthakan on Air"
            backgroundImage="/spotify.jpg"
            badge="/spotify_badge.svg"
            serviceLink="https://open.spotify.com/show/2hkwdtpiPBRcKjVEfReKSg?si=jkBLDCobQ3evR1C0kfjEYQ&nd=1&dlsi=1e11d866f03a4c79"
          />
          <ServiceCard
            serviceName="Patreon"
            serviceSubtitle="Support our creations"
            backgroundImage="/patreon.jpg"
            badge="/patreon_badge.svg"
            serviceLink="https://www.patreon.com/collection/1503875?view=condensed"
          />
        </div>

        <div className="w-full mb-10">
          <h3 className="text-lg !font-serif mb-1 text-white flex items-center gap-4">
              <Image
                src="/youtubeshort.svg"
                alt="YoutubeShort"
                width={24}
                height={24}
                className="object-contain"
              />
              Shorts
            </h3>
            <div className="mt-4">
              <YoutubeShortScroller items={items} />
            </div>
        </div>
      </section>
    );
}