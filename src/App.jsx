import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "devicon/devicon.min.css";
import "lineicons/dist/lineicons.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./views/Hero.jsx";
import About from "./views/About.jsx";
import Experience from "./views/Experience.jsx";
import Toolkit from "./views/Toolkit.jsx";
import Projects from "./views/Projects.jsx";
import Contact from "./views/Contact.jsx";
import "./styles/home.css";

function Home() {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <div className="header-space"></div>
      <Header activeSection={activeSection} />
      <section className="section-placeholder__blue">
        <Hero />
      </section>
      <section id="about" className="section-placeholder__white">
        <About />
      </section>
      <section id="experience" className="section-placeholder__blue">
        <Experience />
      </section>
      <section id="skills" className="section-placeholder__white">
        <Toolkit />
      </section>
      <section id="projects" className="section-placeholder__blue">
        <Projects />
      </section>
      <section id="contact" className="section-placeholder__white">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
