"use client";

import { useEffect, useRef } from "react";

const techStack = {
  Languages: ["C++", "Java", "Python", "Go"],
  Backend: ["Node.js", "Spring Boot", "Express"],
  Databases: ["MySQL", "MongoDB", "Redis"],
  Concepts: ["Operating Systems", "Networking", "DBMS", "System Design"],
};

// Hook: observe elements and add .revealed when they enter viewport
function useScrollReveal(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

export default function About() {
  useScrollReveal(".about-reveal");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="about-reveal reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            CSE student passionate about backend engineering, distributed systems,
            and building things that work at scale.
          </p>
        </div>

        {/* Intro + Focus */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className="about-reveal reveal glass rounded-xl p-8"
            style={{ transitionDelay: "0.1s" }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)]" />
              Who I Am
            </h3>
            <p className="text-[var(--color-text-heading)] text-lg font-medium mb-4 leading-relaxed">
              Backend-focused engineer who enjoys building scalable systems and understanding how things work under the hood.
            </p>

            <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-4 text-[15px] max-w-xl">
              <p>
                I&apos;m Vinit Singare, a third-year B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. I&apos;m deeply passionate about building real-world projects and solving complex problems through clean, scalable solutions.
              </p>
              <p>
                My approach to engineering is rooted in first principles—I enjoy understanding how systems work internally, from how packets travel across networks to how backend services and databases operate.
              </p>
              <p>
                I primarily work with <span className="text-[var(--color-accent-blue)] font-medium">Java, Spring Boot, and Node.js</span>, and I also explore areas like blockchain to expand my understanding of modern systems.
              </p>
              <p>
                I&apos;m working toward becoming a backend engineer, with strong interests in distributed systems, API design, and performance optimization.
              </p>
            </div>
          </div>

          <div
            className="about-reveal reveal glass rounded-xl p-8"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-purple)]" />
              Current Focus
            </h3>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              {[
                "Backend engineering & API design",
                "Microservices & distributed systems",
                "Systems-level understanding (OS, networking)",
                "Competitive problem solving & DSA",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-blue)] mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="about-reveal reveal text-xl font-semibold text-[var(--color-text-heading)] mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <div
                key={category}
                className="about-reveal reveal-scale glass rounded-xl p-6"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <h4 className="text-sm font-medium text-[var(--color-accent-blue)] uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(var(--color-overlay),0.05)] text-[var(--color-text-secondary)] border border-[rgba(var(--color-overlay),0.05)] hover:border-[var(--color-accent-blue)] hover:text-[var(--color-text-heading)] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
