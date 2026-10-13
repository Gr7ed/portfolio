import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { FloatingBubble } from "./components/ui/FloatingBubble";
import { ProjectDetail } from "./pages/ProjectDetail";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToSection = (hash: string) => {
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToSection = (hash: string) => {
    const isCurrentSection =
      location.pathname === "/" && location.hash === hash;

    setMenuOpen(false);
    navigate({ pathname: "/", hash });

    if (isCurrentSection) {
      scrollToSection(hash);
    }
  };

  const navigateHome = () => {
    navigate({ pathname: "/", search: "", hash: "#home" }, { replace: true });

    if (location.pathname === "/") {
      scrollToSection("#home");
    }
  };

  return (
    <>
      <Header
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={navigateToSection}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
      <FloatingBubble onClick={navigateHome} />
    </>
  );
}
