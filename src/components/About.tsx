const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "Python",
] as const;

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            About
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Hi, I’m Arjit Jain. I like building products that feel fast and intuitive. I’m most
            comfortable working across the stack—shipping UI with thoughtful interaction details
            and backing it with practical APIs and clean data modeling.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            I care about maintainability: consistent component patterns, clear naming, and
            performance-aware defaults.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-medium text-white">Tech I use</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 p-4">
              <p className="text-xs text-white/60">What I optimize for</p>
              <p className="mt-1 text-sm font-medium text-white">Clarity, speed, and polish</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/40 p-4">
              <p className="text-xs text-white/60">What I’m learning</p>
              <p className="mt-1 text-sm font-medium text-white">System design & testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

