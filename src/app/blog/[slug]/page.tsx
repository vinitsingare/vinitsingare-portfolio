import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4 text-sm text-[var(--color-text-muted)]">
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <hr className="border-[var(--color-border)] mb-12" />

        {/* Post Content */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-[var(--color-text-secondary)] mb-4">
              Enjoyed this article? Check out more on the blog.
            </p>
            <Link
              href="/blog"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
