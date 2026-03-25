import { useState } from "react";
import { NavLink } from "react-router-dom";
import iconHome from "/src/assets/main-logo.webp";

function Header({ activeSection }) {
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
        <NavItem to="/#about" label="ABOUT" activeSection={activeSection} />
        <NavItem
          to="/#experience"
          label="EXPERIENCE"
          activeSection={activeSection}
        />
        <NavItem to="/#skills" label="SKILLS" activeSection={activeSection} />
        <NavItem
          to="/#projects"
          label="PROJECTS"
          activeSection={activeSection}
        />
        <NavItem to="/#contact" label="CONTACT" activeSection={activeSection} />
      </nav>
      <button className="header-button">Resume</button>
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
