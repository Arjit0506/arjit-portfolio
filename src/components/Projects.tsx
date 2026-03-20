import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            A few things I’ve built recently—focused on clean UX, solid engineering, and shipping.
          </p>
        </div>
        <a
          href="https://github.com/Arjit0506"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          More on GitHub
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

