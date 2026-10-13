import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "oldagram",
    title: "Quizzical",
    type: "React quiz application",
    image: "../src/assets/images/oldagram-square.png",
    hero: "../src/assets/images/oldagram.png",
    tags: ["React", "Open Trivia DB", "Accessibility"],
    description:
      "A React trivia application with dynamic questions, answer selection, scoring, review, replay, loading states, and accessible feedback.",
  },
  {
    id: "tenzies",
    title: "SIFO",
    type: "Senior college project",
    image: "../src/assets/images/tenzies.jpg",
    tags: ["PHP", "MySQL", "Donation platform"],
    description:
      "A donation platform connecting donors and charities through campaigns and food and non-food donation management.",
  },
  {
    id: "password",
    title: "Pop Choice",
    type: "AI movie recommender",
    image: "../src/assets/images/password-generator.jpg",
    tags: ["OpenAI", "LangChain", "Supabase"],
    description:
      "A beta RAG-powered movie recommender using OpenAI embeddings, LangChain chunking, Supabase vector search, and TMDB.",
  },
  {
    id: "meme",
    title: "Enterprise network deployment",
    type: "IT infrastructure",
    image: "../src/assets/images/meme-generator.jpg",
    hero: "../src/assets/images/meme-generator.jpg",
    tags: ["IP cameras", "Switches", "Wi-Fi APs"],
    description:
      "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.",
  },
  {
    id: "dashboard",
    title: "Workflow automation",
    type: "Full stack engineering",
    image: "../src/assets/images/personal-dashboard.png",
    hero: "../src/assets/images/personal-dashboard.png",
    tags: ["Next.js", "Express", "CI/CD"],
    description:
      "Internal web applications and automated workflows built to improve operational efficiency, reliability, and release speed.",
  },
  {
    id: "experiences",
    title: "Secure digital solutions",
    type: "Engineering & cybersecurity",
    image: "../src/assets/images/experiences.png",
    tags: ["Node.js", "Docker", "RAG"],
    description:
      "Practical, high-efficiency digital solutions shaped by enterprise cybersecurity, testing, infrastructure, and AI application experience.",
  },
];
