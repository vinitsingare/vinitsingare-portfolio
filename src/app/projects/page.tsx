import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects showcasing backend systems, networking tools, and distributed architectures by Vinit Singare.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real engineering problems, real solutions. Each project showcases a specific challenge
            and the thought process behind solving it.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
