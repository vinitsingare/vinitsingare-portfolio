import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogTicker() {
  const posts = await getAllPosts();

  // Duplicate posts to ensure smooth continuous scrolling
  const tickerItems = [...posts, ...posts, ...posts, ...posts];

  return (
    <div className="w-full border-y border-[var(--color-border)] bg-[var(--color-surface)] py-3 overflow-hidden flex whitespace-nowrap relative">
      <div className="animate-marquee flex gap-8 items-center w-max">
        {tickerItems.map((post, index) => (
          <Link
            key={`${post.slug}-${index}`}
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 group text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 text-sm md:text-base font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
