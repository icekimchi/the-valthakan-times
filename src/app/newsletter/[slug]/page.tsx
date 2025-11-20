import { fetchPostDetail } from "@/service/beehiiv.posts.service";
import Navbar from "@/components/Navbar";
import { normalizeBeehiivHtml } from "@/utils/beehiivHtml";
import Footer from "@/components/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsletterDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await fetchPostDetail(slug);
  const contentHtml = normalizeBeehiivHtml(post.contentHtml);

  return (
    <>
    <Navbar />

    <main className="w-full py-10">
      <article className="rounded-2xl bg-[var(--color-blue-gray-900)] shadow-sm">
        <h1 className="text-3xl font-bold">{post.title}</h1>

        <div
          className="prose prose-slate mt-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
    <Footer/>
    </>
  );
}
