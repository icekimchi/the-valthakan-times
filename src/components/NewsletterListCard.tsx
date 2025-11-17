"use client";
import Link from "next/link";
import Image from "next/image";

type NewsletterProps = {
  href?: string;                    // detail page link
  imageSrc?: string;                // img link ("/card_img.png")
  editionNumber: number | string;   // edition number
  tag?: string;                     // category (e.g., "Monthly Edition")
  dateISO?: string;                 // ISO string date
  title: string;                    // title
  subtitle?: string;                // subtitle or excerpt
  className?: string;               // optional tailwind overrides
};

export default function NewsletterListsCard({
  href = "#",
  imageSrc = "/card_img.png",
  editionNumber,
  tag = "Monthly Edition",
  dateISO,
  title,
  subtitle,
  className = "",
}: NewsletterProps) {
  const formattedDate = dateISO
    ? new Date(dateISO).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : undefined;

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${className}`}
    >
      <div className="
        relative inline-flex flex-col items-center justify-center
        w-[141px] h-[128px] bg-[#120F2E] rounded-tl-lg rounded-bl-lg pt-[34px] pb-[34px] px-4 gap-[10px]
        outline outline-1 outline-offset-[-1px] outline-[#302D9A]/20">
        <div className="relative flex-shrink-0 w-full sm:w-[160px] aspect-[2880/1800] rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="60px"
            className="object-cover rounded-md"
            />
            {/* Edition number overlay */}
          <span className="absolute inset-0 flex items-center justify-center text-3xl text-white font-['Italianno'] drop-shadow-md">
            #{editionNumber}
          </span>
        </div>
      </div>

      <div className="flex items-center w-[256px] h-[128px] px-[14px] py-2 gap-[19px]
        rounded-tr-lg rounded-br-lg bg-[#120F2E]/50
        outline outline-1 outline-offset-[-1px] outline-[#302D9A]/20">
        <div className="inline-flex flex-col justify-center items-start gap-2-5 w-full">
          <h3 className="w-full text-white font font-medium heading-sp-r-text leading-6">
            {title}
          </h3>

          {formattedDate && (
            <div className="w-full text-left text-[color:var(--color-blue-gray-300)] text-xs font-normal font-['Inter'] leading-4">
              {formattedDate}
            </div>
          )}

          {tag && (
            <div className="inline-flex items-center gap-2">
              <span className="h-7 px-3 py-2 bg-indigo-800/20 rounded-full inline-flex items-center">
                <span className="max-h-6 text-center text-white text-sm font-semibold font-['Eczar'] leading-6">
                  {tag}
                </span>
              </span>
            </div>
          )}
      </div>
    </div>
    </Link>
  );
}
