import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
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

  return (
    <>
      <Header
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={(hash) => navigate({ pathname: "/", hash })}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
