import { Routes, Route } from "react-router-dom";

import Home from "./App.jsx";
import Skills from "./App.jsx";
import Projects from "./App.jsx";
import Contact from "./App.jsx";
import Experience from "./App.jsx";


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
