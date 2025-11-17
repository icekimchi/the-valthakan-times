import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  serviceName,
  serviceSubtitle,
  serviceLink,
  backgroundImage,
  badge,
}: {
  serviceName: string;
  serviceSubtitle: string;
  serviceLink: string;
  backgroundImage: string;
  badge: string;
}) {
  return (
    <article
      className="relative isolate w-full max-w-md h-56 rounded-2xl overflow-hidden justify-between
                  bg-[linear-gradient(180deg,_#1C1144_0%,_#0C0525_49%,_#1D1A60_75%,_#2C2E99_100%)] p-6 text-white
                  shadow-[var(--shadow-indigo)]"
      aria-label={`${serviceName}: ${serviceSubtitle}`}
    >
      {/* Background image on right */}
      <div className="absolute right-0 top-0 opacity-90">
        <Image
          src={backgroundImage}
          alt="serviceImage"
          width={150}
          height={150}
          className="size-36 rounded-[12px] object-contain"
        />
      </div>

      {/* Top section */}
      <header className="mb-10">
        <Link href={serviceLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg !font-serif mb-1 flex items-center gap-2">
            <Image
              src={badge}
              alt="badgeImage"
              width={24}
              height={24}
              className="object-contain"
            />
            {serviceName}
          </h3>
        </Link>
        <p className="text-base font-serif">{serviceSubtitle}</p>
      </header>

      {/* CTA */}
      <Link
        href={serviceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#120F2E]/40 px-4 py-1-5 font-base 
                  text-[color:var(--color-blue-gray-300)] font-['inter'] hover:bg-[#3A30B3] transition"
      >
        Listen on {serviceName}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}