import { fetchPostDetail } from "@/service/beehiiv.posts.service";
import Navbar from "@/components/Navbar";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsletterDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await fetchPostDetail(slug);

  return (
    <>
    <Navbar />

    <main className="w-full px-4 py-10">
      <article className="rounded-2xl bg-[var(--color-blue-gray-900)] shadow-sm">
        <h1 className="text-3xl font-bold">{post.title}</h1>

        {post.publishedAt && (
          <p className="mt-2 text-sm text-slate-500">
            {new Date(Number(post.publishedAt) * 1000).toLocaleDateString(
              "ko-KR",
              { year: "numeric", month: "short", day: "numeric" }
            )}
          </p>
        )}

        <div
          className="prose prose-slate mt-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
    </>
  );
}
