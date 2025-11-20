import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  serviceName,
  serviceSubtitle,
  serviceLink,
  backgroundImage,
  badge,
  ctaLabel, // 필요하면 CTA도 커스터마이즈 가능하도록
}: {
  serviceName: string;
  serviceSubtitle: string;
  serviceLink: string;
  backgroundImage: string;
  badge: string;
  ctaLabel?: string;
}) {
  return (
    <article
      className="relative isolate w-full max-w-md min-h-[222px] rounded-[8px] overflow-hidden
                 bg-[linear-gradient(180deg,_#1C1144_0%,_#0C0525_49%,_#1D1A60_75%,_#2C2E99_100%)]
                 p-6 text-white shadow-[var(--shadow-indigo)] flex flex-col justify-between"
      aria-label={`${serviceName}: ${serviceSubtitle}`}
    >
      {/* ServiceImage */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 opacity-90">
        <Image
          src={backgroundImage}
          alt="serviceImage"
          width={150}
          height={150}
          className="w-36 h-36 object-contain rounded-[12px]"
        />
      </div>

      {/* Service Name */}
      <header className="relative z-10 mb-8">
        <Link href={serviceLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-lg !font-['Eczar'] mb-1 flex items-center gap-2">
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
        <p className="text-base pt-1 font-serif text-[color:var(--color-blue-gray-300)]">{serviceSubtitle}</p>
      </header>

      {/* CTA Button */}
      <Link
        href={serviceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 self-start inline-flex items-center gap-2 
                  rounded-full bg-[#120F2E]/40 px-4 py-1.5
                  text-sm font-medium font-['Inter']
                  text-[color:var(--color-blue-gray-300)]
                  hover:bg-[#3A30B3] transition"
      >
        {ctaLabel ?? `Listen on ${serviceName}`}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}
