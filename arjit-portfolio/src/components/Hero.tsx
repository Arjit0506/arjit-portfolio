export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pt-24 pb-14 sm:px-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          Open to internships • Full‑stack focus
        </p>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Building reliable, user‑centric web experiences.
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          I’m Arjit Jain, an aspiring software developer with a strong foundation in full‑stack
          development. I enjoy turning ideas into clean UI, solid APIs, and maintainable code.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Contact
          </a>
          <a
            href="/resume"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition"
          >
            Resume
          </a>
        </div>

        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs text-white/60">Frontend</dt>
            <dd className="mt-1 text-sm font-medium text-white">
              React, Next.js, Tailwind
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs text-white/60">Backend</dt>
            <dd className="mt-1 text-sm font-medium text-white">
              Node.js, Express, MongoDB
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs text-white/60">Strengths</dt>
            <dd className="mt-1 text-sm font-medium text-white">
              DX, UI polish, clean code
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

