import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";

type InstagramPost = {
  href: string;
  imageSrc: string;
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
  const visiblePosts = posts.slice(0, 8);

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[1106px] grid grid-cols-12 gap-[22px] px-5">

        {/* Header */}
        <header className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-10">
          <h1 className="text-white text-5xl leading-[68px] text-shadow-[var(--shadow-indigo)]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[color:var(--color-blue-gray-400)] font-['Eczar']">
            {description}
          </p>
        </header>

        {/* Posts grid */}
        <div
          className="
            col-span-12
            md:col-span-10 md:col-start-2
            grid grid-cols-2 md:grid-cols-4
            gap-[22px] mb-10
          "
        >
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
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <Link href={profileUrl} className="block w-full">
            <PrimaryButton
              text="See more posts →"
              showLeftIcon={false}
              showRightIcon={false}
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
