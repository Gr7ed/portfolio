import type { Project } from "../types";
import dashboardImage from "../assets/images/dashboard.png";
import experiencesImage from "../assets/images/experiences.png";
import memeGeneratorImage from "../assets/images/meme-generator.jpg";
import oldagramImage from "../assets/images/oldagram-square.png";
import oldagramHeroImage from "../assets/images/oldagram.png";
import passwordGeneratorImage from "../assets/images/password-generator.jpg";
import personalDashboardImage from "../assets/images/personal-dashboard.png";
import tenziesImage from "../assets/images/tenzies.jpg";

export const projects: Project[] = [
  {
    id: "oldagram",
    title: "Quizzical",
    type: "React quiz application",
    image: oldagramImage,
    hero: oldagramHeroImage,
    tags: ["React", "Open Trivia DB", "Accessibility"],
    description:
      "A React trivia application with dynamic questions, answer selection, scoring, review, replay, loading states, and accessible feedback.",
  },
  {
    id: "tenzies",
    title: "SIFO",
    type: "Senior college project",
    image: tenziesImage,
    tags: ["PHP", "MySQL", "Donation platform"],
    description:
      "A donation platform connecting donors and charities through campaigns and food and non-food donation management.",
  },
  {
    id: "password",
    title: "Pop Choice",
    type: "AI movie recommender",
    image: passwordGeneratorImage,
    tags: ["OpenAI", "LangChain", "Supabase"],
    description:
      "A beta RAG-powered movie recommender using OpenAI embeddings, LangChain chunking, Supabase vector search, and TMDB.",
  },
  {
    id: "meme",
    title: "Enterprise network deployment",
    type: "IT infrastructure",
    image: memeGeneratorImage,
    hero: memeGeneratorImage,
    tags: ["IP cameras", "Switches", "Wi-Fi APs"],
    description:
      "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.",
  },
  {
    id: "dashboard",
    title: "Workflow automation",
    type: "Full stack engineering",
    image: personalDashboardImage,
    hero: personalDashboardImage,
    tags: ["Next.js", "Express", "CI/CD"],
    description:
      "Internal web applications and automated workflows built to improve operational efficiency, reliability, and release speed.",
  },
  {
    id: "experiences",
    title: "Secure digital solutions",
    type: "Engineering & cybersecurity",
    image: experiencesImage,
    tags: ["Node.js", "Docker", "RAG"],
    description:
      "Practical, high-efficiency digital solutions shaped by enterprise cybersecurity, testing, infrastructure, and AI application experience.",
  },
];
