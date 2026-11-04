import type { Project } from "../types";
import quizzicalImage from "../assets/images/quizzical/quizzical-1.png";
import quizzicalOverviewImage from "../assets/images/quizzical/quizzical-2.png";
import quizzicalResultsImage from "../assets/images/quizzical/quizzical-3.png";
import quizzicalReviewImage from "../assets/images/quizzical/quizzical-4.png";
import popChoiceoverviewImage from "../assets/images/popchoice/popchoice-1.png";
import popChoiceInputImage from "../assets/images/popchoice/popchoice-2.png";
import popChoiceResultImage from "../assets/images/popchoice/popchoice-3.png";
import allCampaigns from "../assets/images/sifo/All-Campaigns.png";
import charityCampaigns from "../assets/images/sifo/charity-campaigns.png";
import charityDashboard from "../assets/images/sifo/charity-dashboard.png";
import donorDashboard from "../assets/images/sifo/donor-dashboard.png";
import donorDonations from "../assets/images/sifo/donor-donations.png";
import donorSignup from "../assets/images/sifo/donor-signup.png";
import donateFood from "../assets/images/sifo/food-donate.png";
import Landing from "../assets/images/sifo/home-index.png";

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
    githubUrl: "https://github.com/Gr7ed/quizzical-app",
    createdAt: "2026-01-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "popchoice",
    title: "Pop Choice",
    type: "AI movie recommender",
    images: [popChoiceoverviewImage, popChoiceInputImage, popChoiceResultImage],
    tags: ["OpenAI", "LangChain", "Supabase"],
    description:
      "A beta RAG-powered movie recommender using OpenAI embeddings, LangChain chunking, Supabase vector search, and TMDB.",
    githubUrl: "https://github.com/Gr7ed/pop-choice-app",
    url: "https://popchoice.vercel.app/",
    createdAt: "2025-01-01",
    updatedAt: "2026-10-21",
  },
  {
    id: "sifo",
    title: "SIFO",
    type: "Senior college project",
    images: [Landing, charityDashboard, donorDashboard, donorDonations, donorSignup, donateFood, allCampaigns, charityCampaigns],
    tags: ["PHP", "MySQL", "Donation platform"],
    description:
      "A donation platform connecting donors and charities through campaigns and food and non-food donation management.",
    githubUrl: "https://github.com/Gr7ed/sifo-app",
    createdAt: "2024-01-01",
    updatedAt: "2025-01-01",
  },
  // {
  //   id: "it-infrastructure",
  //   title: "Enterprise network deployment",
  //   type: "IT infrastructure",
  //   images: [memeGeneratorImage],
  //   tags: ["IP cameras", "Switches", "Wi-Fi APs"],
  //   description:
  //     "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.",
  //   createdAt: "2023-01-01",
  //   updatedAt: "2023-01-01",
  // },
  // {
  //   id: "dashboard",
  //   title: "Workflow automation",
  //   type: "Full stack engineering",
  //   images: [personalDashboardImage],
  //   tags: ["Next.js", "Express", "CI/CD"],
  //   description:
  //     "Internal web applications and automated workflows built to improve operational efficiency, reliability, and release speed.",
  //   createdAt: "2023-01-01",
  //   updatedAt: "2023-01-01",
  // },
  // {
  //   id: "experiences",
  //   title: "Secure digital solutions",
  //   type: "Engineering & cybersecurity",
  //   images: [experiencesImage],
  //   tags: ["Node.js", "Docker", "RAG"],
  //   description:
  //     "Practical, high-efficiency digital solutions shaped by enterprise cybersecurity, testing, infrastructure, and AI application experience.",
  //   createdAt: "2023-01-01",
  //   updatedAt: "2023-01-01",
  // },
];
