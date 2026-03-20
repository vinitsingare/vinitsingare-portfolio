import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on backend engineering, networking, databases, Docker, and problem-solving by Vinit Singare.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Problem-first technical writing. Deep dives into backend systems,
            networking concepts, and engineering tradeoffs.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </section>
  );
}
