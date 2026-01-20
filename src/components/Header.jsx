import { NavLink } from "react-router-dom";
import iconHome from "../assets/logo-lord-mercury-ment.webp"; // Usando tu logo como Home por ahora
import iconSkills from "../assets/icon-thunder.webp";
import iconProjects from "../assets/icon-inventary.webp";
import iconContact from "../assets/icon-mail.webp";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavItem to="/" icon={iconHome} label="HOME" end />
        <NavItem to="/skills" icon={iconSkills} label="SKILLS" />
        <NavItem to="/projects" icon={iconProjects} label="PROJECTS" />
        <NavItem to="/contact" icon={iconContact} label="CONTACT" />
      </nav>
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
