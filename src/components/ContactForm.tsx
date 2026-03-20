"use client";

export default function ContactForm() {
  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-6">
        Send a Message
      </h3>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-[var(--color-text-secondary)] mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--color-overlay),0.05)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]/50 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-[var(--color-text-secondary)] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--color-overlay),0.05)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]/50 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-[var(--color-text-secondary)] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 rounded-lg bg-[rgba(var(--color-overlay),0.05)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]/50 focus:border-transparent transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-medium hover:opacity-90 transition-opacity"
        >
          Send Message
        </button>
        <p className="text-xs text-[var(--color-text-muted)] text-center">
          Form UI only — no backend connected yet. Feel free to email directly!
        </p>
      </form>
    </div>
  );
}
