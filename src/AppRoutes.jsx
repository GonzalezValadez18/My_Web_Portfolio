import { Routes, Route } from "react-router-dom";

import Home from "./App.jsx";
import Skills from "./views/SkillsLayout.jsx";
import Projects from "./views/ProjectsLayout.jsx";
import Contact from "./views/ContactLayout.jsx";
import Experience from "./views/ExperienceLayout.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default AppRoutes;
