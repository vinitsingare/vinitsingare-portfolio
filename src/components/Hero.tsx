import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-[var(--color-accent-blue)] top-[-10%] left-[-5%]" />
      <div className="orb w-80 h-80 bg-[var(--color-accent-purple)] bottom-[-10%] right-[-5%]" />
      <div className="orb w-64 h-64 bg-[var(--color-accent-cyan)] top-[40%] right-[20%] opacity-20" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-text-secondary)] mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up animate-delay-100 text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="gradient-text">Vinit Singare</span>
        </h1>

        {/* Title */}
        <p className="animate-fade-in-up animate-delay-200 text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium mb-6">
          Backend Developer &bull; CSE Student
        </p>

        {/* Tagline */}
        <p className="animate-fade-in-up animate-delay-300 text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          I build scalable backend systems and solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 rounded-lg glass text-[var(--color-text-heading)] font-medium hover:bg-[rgba(var(--color-overlay),0.1)] transition-colors"
          >
            Read Blog
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-lg border-2 border-[var(--color-accent-blue)] bg-[rgba(var(--color-accent-blue),0.15)] text-[var(--color-text-heading)] font-semibold hover:bg-[rgba(var(--color-accent-blue),0.25)] hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up animate-delay-500 flex items-center justify-center gap-6">
          <a
            href="https://github.com/vinitsingare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)] transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/vinitsingare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[var(--color-accent-blue)] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
