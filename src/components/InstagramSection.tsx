import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

type InstagramPost = {
  href: string;       // Instagram post link
  imageSrc: string;   // Img link
  alt?: string;
};

export default function InstagramSection({
  title = "On Instagram",
  description = "Stories, moments, and musings from the creator behind Valthakan.",
  profileUrl, 
  posts,
}: {
  title?: string;
  description?: string;
  profileUrl: string;
  posts: InstagramPost[];
}) {
  const visiblePosts = posts.slice(0, 6);

  return (
    <section
      className="w-full max-w-sm mx-auto rounded-3xl
                 py-10 mb-10 text-white"
    >
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-center text-white text-5xl leading-[68px] text-shadow-[var(--shadow-indigo)] px-5">
          Our Latest Edition
        </h1>
        <p className="text-sm text-[color:var(--color-blue-gray-400)] font-['Eczar']">
          {description}
        </p>
      </header>

      {/* 3×2 grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {visiblePosts.map((post, index) => (
          <Link
            key={post.href + index}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative w-full rounded-xl overflow-hidden aspect-[3/4] bg-black/40">
              <Image
                src={post.imageSrc}
                alt={post.alt ?? `Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* See more posts button */}
      <Link href="/login" className="w-full">
        <PrimaryButton
          text="See more posts →"
          showLeftIcon={false}
          showRightIcon={false}
        />
      </Link>
    </section>
  );
}
