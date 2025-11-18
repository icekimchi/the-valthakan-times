"use client";
import Link from "next/link";
import Image from "next/image";

type EditionCardProps = {
  href?: string;                    // detail page link
  imageSrc?: string;                // img link ("/card_img.png")
  editionNumber: number | string;   // edtition number
  tag?: string;                // category : "Monthly Edition" 
  dateISO?: string;                    // date : "2024-01-24"
  title: string;                    // title
  subtitle?: string;                // subtitle
  className?: string;
};

export default function EditionCard({
  href = "#",
  imageSrc = "/card_img.png",
  editionNumber,
  tag = "Monthly Edition",
  dateISO,
  title,
  subtitle,
  className = "",
}: EditionCardProps) {
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
      className={`
        w-72 h-96
        flex flex-col
        overflow-hidden rounded-[8px] border border-[1px] border-[color:var(--color-card-stroke)]
        bg-[color:var(--color-card-bg)] shadow-[0_0_20px_rgba(0,0,0,0.15)]
        ${className}
      `}
    >

      {/* === Image & Badge === */}
      <div
        className="
          h-56 w-full self-stretch
          px-[36px] pt-[24px] pb-[13px]
          relative
          flex flex-col items-center
        "
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* tag badge */}
        {tag && (
          <div className="mt-2 flex justify-center">
            <div
              className="
                inline-flex h-[30px] items-center rounded-full px-4
                bg-[#9D174D]/20 text-[color:var(--color-pink-300)]
                font-medium text-sm
              "
            >
              {tag}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between px-6 py-6 h-[calc(100%-228px)]">

        {/* title + subtitle */}
        <div className="space-y-3.5">
          <h3 className="text-white heading-sp-h3-eczar leading-snug">
            {title}
          </h3>

          {subtitle && (
            <p className="text-[color:var(--color-blue-gray-300)] font-['Inter']">
              {subtitle}
            </p>
          )}
        </div>

        {/* date */}
        {formattedDate && (
          <div className="flex justify-end text-sm text-[color:var(--color-blue-gray-300)] font-['Inter']">
            <span>{formattedDate}</span>
          </div>
        )}
      </div>
    </Link>
  );
}