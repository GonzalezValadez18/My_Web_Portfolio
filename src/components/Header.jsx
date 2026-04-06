import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import iconHome from "/src/assets/main-logo.webp";
import cv from "/src/assets/CV_Jose_Leonardo_Gonzalez_Valadez_2026_Feb.pdf";

function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.history.replaceState({}, document.title, window.location.pathname);
    }, 0);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`header ${isOpen ? "is-open" : ""}`}>
      <NavLink
        to="/"
        className="header-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={iconHome}
          alt="Jose Leonardo Gonzalez Valadez - Desarrollador Full Stack Logo"
        />
      </NavLink>
      <nav
        className={`nav ${isOpen ? "is-open" : ""}`}
        onClick={handleNavClick}
      >
        <NavItem to="/#about" label="YO" activeSection={activeSection} />
        <NavItem
          to="/#experience"
          label="EXPERIENCIA"
          activeSection={activeSection}
        />
        <NavItem
          to="/#skills"
          label="HABILIDADES"
          activeSection={activeSection}
        />
        <NavItem
          to="/#projects"
          label="PROYECTOS"
          activeSection={activeSection}
        />
        <NavItem
          to="/#contact"
          label="CONTACTO"
          activeSection={activeSection}
        />
      </nav>
      <a
        href={cv}
        download="CV_Jose_Leonardo_Gonzalez_Valadez.pdf"
        className="header-button"
      >
        CV
      </a>
      <a
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Cambiar tema"
      >
        <i
          className={
            theme === "light" ? "lni lni-moon-half-right-5" : "lni lni-sun-1"
          }
        ></i>
      </a>

      <button
        className={`hamburger-menu ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function NavItem({ label, to, activeSection }) {
  const id = to.split("#")[1];
  const isActive = activeSection === id;

  return (
    <NavLink
      to={to}
      className={({ isActive: _routerActive }) =>
        `nav-item ${isActive ? "active" : ""}`
      }
    >
      <span className="nav-text">{label}</span>
    </NavLink>
  );
}

export default Header;
