import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function FeaturedBlogs() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Deep dives into backend engineering, networking, and systems — written from a problem-first perspective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-xl p-6 hover:bg-[rgba(var(--color-overlay),0.05)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4 text-sm text-[var(--color-text-muted)]">
                <span>{post.date}</span>
                <span>&bull;</span>
                <span>{post.readingTime} min read</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors">
                {post.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-[var(--color-accent-blue)] hover:underline font-medium"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
