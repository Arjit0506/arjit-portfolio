export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "DEEPScan",
    description:
      "Deepfake detection tool using facial recognition and confidence scoring, built as part of your AI/ML work.",
    tech: ["Python", "Flask", "MediaPipe", "AI/ML"],
    repoUrl: "https://github.com/Arjit0506/Deep-Fake-detection-webapp",
    highlight: "Deepfake detection • confidence scoring",
  },
  {
    title: "Portfolio Website",
    description:
      "A fast, responsive personal site with strong UX, SEO-friendly metadata, and a modern design system.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/Arjit0506/arjit-portfolio",
    highlight: "Design system • accessibility",
  },
  {
    title: "2048 Game",
    description:
      "Responsive web version of the classic 2048 puzzle game with smooth animations and dynamic gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Arjit0506/2048-Game",
    highlight: "Game development • animations",
  },
  {
    title: "Online Voting Platform",
    description:
      "Online voting and survey system with candidate addition and result view, matching the platform described in your resume.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    highlight: "E-voting • survey management",
  },
];

