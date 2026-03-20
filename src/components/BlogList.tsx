"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl glass text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]/50 transition-all"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            !activeTag
              ? "bg-[var(--color-accent-blue)] text-white"
              : "bg-[rgba(var(--color-overlay),0.05)] text-[var(--color-text-secondary)] hover:bg-[rgba(var(--color-overlay),0.1)]"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTag === tag
                ? "bg-[var(--color-accent-blue)] text-white"
                : "bg-[rgba(var(--color-overlay),0.05)] text-[var(--color-text-secondary)] hover:bg-[rgba(var(--color-overlay),0.1)]"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--color-text-muted)] text-lg">
              No articles found.
            </p>
          </div>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block glass rounded-xl p-6 hover:bg-[rgba(var(--color-overlay),0.05)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 text-sm text-[var(--color-text-muted)]">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:flex-shrink-0">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
