import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import SolutionCards from "./components/SolutionCards";
import SolutionModal from "./components/SolutionModal";
import FinancialWellness from "./components/FinancialWellness";
import WhyMoneyyy from "./components/WhyMoneyyy";
import HowItWorks from "./components/HowItWorks";
import Goals from "./components/Goals";
import EmiCalculator from "./components/EmiCalculator";
import TrustDisclaimer from "./components/TrustDisclaimer";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleExplore = () => scrollTo("#solutions");
  const handleTalkToUs = () => scrollTo("#contact");
  const handleWellness = () => scrollTo("#wellness");

  return (
    <>
      <Navbar />
      <main>
        <Hero onExplore={handleExplore} onTalkToUs={handleTalkToUs} />
        <CategoryCards onExplore={handleExplore} />
        <SolutionCards onCardClick={setSelectedSolution} />
        <FinancialWellness onExplore={handleWellness} />
        <WhyMoneyyy />
        <HowItWorks />
        <Goals onSolutionClick={setSelectedSolution} />
        <EmiCalculator />
        <TrustDisclaimer />
        <FAQ />
        <CTA onExplore={handleExplore} onTalkToUs={handleTalkToUs} />
      </main>
      <Footer />

      {/* Product modal — rendered at root level to avoid z-index issues */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </>
  );
}
