import iconLinkedin from "../assets/icon-linkedin.webp";
import iconGithub from "../assets/icon-github.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__redes">
        <ul className="footer__redes-wrapper">
          <li>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-leonardo-gonzalez-valadez-614502379/"
              className="footer__link"
            >
              <img src={iconLinkedin} alt="Icono Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GonzalezValadez18"
              className="footer__link"
            >
              <img src={iconGithub} alt="Icono GitHub" />
            </a>
          </li>
        </ul>
      </div>

      <div className="separador"></div>

      <p className="footer__texto">
        Copyright © 2026 Jose Leonardo Gonzalez Valadez
      </p>
    </footer>
  );
}
export default Footer;
