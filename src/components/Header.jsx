import { useState } from "react";
import { NavLink } from "react-router-dom";
import iconHome from "../assets/logo-lord-mercury-ment.webp"; // Usando tu logo como Home por ahora
import iconSkills from "../assets/icon-thunder.webp";
import iconProjects from "../assets/icon-inventary.webp";
import iconContact from "../assets/icon-mail.webp";
import iconExperience from "../assets/icon-experience.webp";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú si se hace clic en un enlace o en el fondo
  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`header ${isOpen ? "is-open" : ""}`}>
      <NavLink to="/" className="header-logo">
        <img src={iconHome} alt="Home" />
      </NavLink>
      <nav
        className={`nav ${isOpen ? "is-open" : ""}`}
        onClick={handleNavClick}
      >
        <NavItem to="/" icon={iconHome} label="HOME" end />
        <NavItem to="/experience" icon={iconExperience} label="EXPERIENCE" />
        <NavItem to="/skills" icon={iconSkills} label="SKILLS" />
        <NavItem to="/projects" icon={iconProjects} label="PROJECTS" />
        <NavItem to="/contact" icon={iconContact} label="CONTACT" />
      </nav>
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

function NavItem({ icon, label, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
    >
      <img src={icon} className="nav-icon" alt={label} />
      <span className="nav-text">{label}</span>
    </NavLink>
  );
}

export default Header;
