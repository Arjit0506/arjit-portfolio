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
    title: "Animal Rescue Management",
    description:
      "Comprehensive system for managing animal rescue operations, including pet adoption, medical records, and volunteer coordination.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    repoUrl: "https://github.com/Arjit0506/animal-rescue-management",
    demoUrl: "https://animal-rescue-agency-portal.vercel.app/",
    highlight: "Animal welfare • adoption system",
  },
  {
    title: "2048 Game",
    description:
      "Responsive web version of the classic 2048 puzzle game with smooth animations and dynamic gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Arjit0506/2048-Game",
    demoUrl: "https://2048-game-one-wheat.vercel.app/",
    highlight: "Game development • animations",
  },
  {
    title: "Online Voting Platform",
    description:
      "Online voting and survey system with candidate addition and result view, matching the platform described in your resume.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    repoUrl: "https://github.com/Arjit0506/online-voting-platform",
    demoUrl: "https://online-election-platform-using-node.vercel.app/",
    highlight: "E-voting • survey management",
  },
];

