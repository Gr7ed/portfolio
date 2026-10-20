import type { Project } from "../types";
import experiencesImage from "../assets/images/experiences.png";
import memeGeneratorImage from "../assets/images/meme-generator.jpg";
import quizzicalImage from "../assets/images/quizzical-1.png";
import quizzicalOverviewImage from "../assets/images/quizzical-2.png";
import quizzicalResultsImage from "../assets/images/quizzical-3.png";
import quizzicalReviewImage from "../assets/images/quizzical-4.png";
import popChoiceoverviewImage from "../assets/images/popchoice-1.png";
import popChoiceInputImage from "../assets/images/popchoice-2.png";
import popChoiceResultImage from "../assets/images/popchoice-3.png";
import personalDashboardImage from "../assets/images/personal-dashboard.png";
import tenziesImage from "../assets/images/tenzies.jpg";

export const projects: Project[] = [
  {
    id: "quizzical",
    title: "Quizzical",
    type: "React quiz application",
    images: [
      quizzicalImage,
      quizzicalOverviewImage,
      quizzicalResultsImage,
      quizzicalReviewImage,
    ],
    tags: ["React", "Open Trivia DB", "Accessibility"],
    description:
      "A React trivia application with dynamic questions, answer selection, scoring, review, replay, loading states, and accessible feedback.",
  },
  {
    id: "popchoice",
    title: "Pop Choice",
    type: "AI movie recommender",
    images: [popChoiceoverviewImage, popChoiceInputImage, popChoiceResultImage],
    tags: ["OpenAI", "LangChain", "Supabase"],
    description:
      "A beta RAG-powered movie recommender using OpenAI embeddings, LangChain chunking, Supabase vector search, and TMDB.",
  },
  {
    id: "sifo",
    title: "SIFO",
    type: "Senior college project",
    images: [tenziesImage],
    tags: ["PHP", "MySQL", "Donation platform"],
    description:
    "A donation platform connecting donors and charities through campaigns and food and non-food donation management.",
  },
  {
    id: "it-infrastructure",
    title: "Enterprise network deployment",
    type: "IT infrastructure",
    images: [memeGeneratorImage],
    tags: ["IP cameras", "Switches", "Wi-Fi APs"],
    description:
      "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.",
  },
  {
    id: "dashboard",
    title: "Workflow automation",
    type: "Full stack engineering",
    images: [personalDashboardImage],
    tags: ["Next.js", "Express", "CI/CD"],
    description:
      "Internal web applications and automated workflows built to improve operational efficiency, reliability, and release speed.",
  },
  {
    id: "experiences",
    title: "Secure digital solutions",
    type: "Engineering & cybersecurity",
    images: [experiencesImage],
    tags: ["Node.js", "Docker", "RAG"],
    description:
      "Practical, high-efficiency digital solutions shaped by enterprise cybersecurity, testing, infrastructure, and AI application experience.",
  },
];
