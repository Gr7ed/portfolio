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
import ITInfrastructure from "../assets/images/IT/IT-1.jpg";
import homeTinyLibrary from "../assets/images/tiny-library/tiny-library-1.png";
import collectionTinyLibrary from "../assets/images/tiny-library/tiny-library-2.png";
import collectionGridTinyLibrary from "../assets/images/tiny-library/tiny-library-3.png";
import contactTinyLibrary from "../assets/images/tiny-library/tiny-library-4.png";
import aboutTinyLibrary from "../assets/images/tiny-library/tiny-library-5.png";
import bookDetailTinyLibrary from "../assets/images/tiny-library/tiny-library-6.png";

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
    url: "https://pop-choice-app-production.suhail142176.workers.dev/",
    createdAt: "2025-01-01",
    updatedAt: "2026-10-21",
  },
  {
    id: "sifo",
    title: "SIFO",
    type: "Senior college project",
    images: [Landing, charityDashboard, donorDashboard, donorDonations, donorSignup, donateFood, allCampaigns, charityCampaigns],
    tags: ["PHP", "MySQL", "Donation platform", "hTML", "CSS", "JavaScript"],
    description:
      "A donation platform connecting donors and charities through campaigns and food and non-food donation management.",
    githubUrl: "https://github.com/Gr7ed/sifo-app",
    createdAt: "2024-01-01",
    updatedAt: "2025-01-01",
  },
  {
    id: "it-infrastructure",
    title: "Enterprise network deployment",
    type: "IT infrastructure",
    images: [ITInfrastructure],
    tags: ["IP", "Switches", "Wi-Fi APs", "Network monitoring", "Network security", "IT"],
    description:
      "An enterprise deployment covering 50+ IP cameras, 8+ switches, and 20+ access points with reliable post-deployment operations.",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "tiny-library",
    title: "Tiny Library",
    type: "Full stack engineering",
    images: [homeTinyLibrary, collectionTinyLibrary, collectionGridTinyLibrary, contactTinyLibrary, aboutTinyLibrary, bookDetailTinyLibrary],
    tags: ["Next.js", "CI/CD", "Tailwind CSS", "TypeScript", "React", "Sqlite", "Vercel"],
    description:
      "Tiny Library is a responsive bilingual book discovery platform built with Next.js, React, TypeScript, and Tailwind CSS. It features curated collections, search, sorting, category filters, pagination, book detail pages, and seamless English/Arabic RTL support through a clean, accessible interface.",
    createdAt: "2026-09-01",
    updatedAt: "2026-10-01",
  }
];
