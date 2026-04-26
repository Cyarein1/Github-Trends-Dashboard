const STOP_WORDS = new Set([
  "the", "and", "for", "with", "from", "this", "that", "you", "your",
  "are", "was", "but", "not", "all", "can", "our", "out", "into",
  "use", "using", "open", "source", "based", "build", "built",
  "app", "apps", "tool", "tools", "repo", "repository", "github", "project"
]);

const CATEGORIES = [
  {
    name: "AI / Automation",
    keywords: [
      "ai", "llm", "agent", "agents", "automation", "automate",
      "openai", "claude", "machine", "learning", "model"
    ],
  },
  {
    name: "Web Development",
    keywords: [
      "react", "next", "nextjs", "javascript", "typescript",
      "frontend", "web", "css", "tailwind"
    ],
  },
  {
    name: "Backend / Infrastructure",
    keywords: [
      "api", "backend", "server", "database", "postgres",
      "node", "docker", "cloud", "kubernetes"
    ],
  },
  {
    name: "Developer Productivity",
    keywords: [
      "cli", "workflow", "productivity", "developer",
      "dev", "code", "coding", "editor", "vscode"
    ],
  },
];

export { STOP_WORDS, CATEGORIES };
