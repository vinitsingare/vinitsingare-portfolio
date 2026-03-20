const techStack = {
  Languages: ["C++", "Java", "Python", "Go"],
  Backend: ["Node.js", "Spring Boot", "Express"],
  Databases: ["MySQL", "MongoDB", "Redis"],
  Concepts: ["Operating Systems", "Networking", "DBMS", "System Design"],
};

export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
          <div className="glass rounded-xl p-8">
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)]" />
              Who I Am
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m a Computer Science student who loves solving complex problems with
              elegant solutions. I focus on understanding systems from first
              principles — from how packets travel across networks to how
              databases optimize queries under the hood.
            </p>
          </div>
          <div className="glass rounded-xl p-8">
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-purple)]" />
              Current Focus
            </h3>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] mt-1">▸</span>
                Backend engineering &amp; API design
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] mt-1">▸</span>
                Microservices &amp; distributed systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] mt-1">▸</span>
                Systems-level understanding (OS, networking)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] mt-1">▸</span>
                Competitive problem solving &amp; DSA
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="glass rounded-xl p-6">
                <h4 className="text-sm font-medium text-[var(--color-accent-blue)] uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(var(--color-overlay),0.05)] text-[var(--color-text-secondary)] border border-[rgba(var(--color-overlay),0.05)]"
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
