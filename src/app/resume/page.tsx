export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Resume
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
        Add your resume file at{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">
          public/resume.pdf
        </code>{" "}
        and it will be available at{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-white">
          /resume.pdf
        </code>
        .
      </p>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white/90 transition"
        >
          Download resume PDF
        </a>
      </div>
    </main>
  );
}

