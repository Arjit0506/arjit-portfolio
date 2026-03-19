export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Arjit Jain. Built with Next.js.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="#projects"
            className="text-white/70 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-white/70 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white/70 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

