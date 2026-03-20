import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  tech,
  repoUrl,
  demoUrl,
  highlight,
}: Project) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.07]">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>

        {highlight && (
          <p className="mt-3 text-xs text-white/50">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
              {highlight}
            </span>
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

