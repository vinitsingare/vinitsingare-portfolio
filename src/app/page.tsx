import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import BlogTicker from "@/components/BlogTicker";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BlogTicker />
      <About />
      <FeaturedBlogs />
    </>
  );
}
