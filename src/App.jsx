import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DeskGrid from "./components/DeskGrid";
import {
  ProjectsSection,
  PhotographySection,
  AboutSection,
  ContactSection,
} from "./components/Sections";

export default function App() {
  // Lifted up so DeskGrid (clicking "Game Console", etc.) can pre-set
  // which category is active when it scrolls into the Projects section.
  const [projectFilter, setProjectFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#0b0e14]">
      <Nav />
      <Hero />
      <DeskGrid onNavigate={setProjectFilter} />
      <ProjectsSection
        activeFilter={projectFilter}
        onFilterChange={setProjectFilter}
      />
      <PhotographySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
