export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
          Want to collaborate or chat about a role? Email is best—I'll reply quickly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:arjit@example.com"
            className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
          >
            Email me
          </a>
          <a
            href="https://github.com/arjitjain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/arjitjain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

