import { useEffect } from "react";
import Footer from "./components/Footer.jsx";
import "../src/styles/layouts/home.css";
import Photo from "./components/Photo.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ButtonKeyboard from "./components/ButtonKeyboard.jsx";
import ButtonVisibleIcon from "./components/ButtonVisibleIcon.jsx";
import logo_main from "./assets/logo-lord-mercury-ment.webp";
import logo_battery from "./assets/battery-purple.webp";
import photoRetro from "./assets/foto-retro.webp";
import photoReal from "./assets/foto-real.webp";
import iconThunder from "./assets/icon-thunder.webp";
import iconInvetary from "./assets/icon-inventary.webp";
import iconExperience from "./assets/icon-experience.webp";
import iconMail from "./assets/icon-mail.webp";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="header-space"></div>

      <header className="Home-header">
        <nav>
          <div className="main-logo-container">
            <img src={logo_main} alt="Logo Portfolio" />
          </div>
          <div className="pulse-wrapper">
            <h2>PLAYER: JOSE LEONARDO GONZALEZ VALADEZ</h2>
            <span className="pulse-label">
              <i className="pulse"></i>
              <p> SYSTEM ONLINE</p>
            </span>
          </div>
          <div className="battery-logo-container">
            <img src={logo_battery} alt="Battery Logo" />
          </div>
        </nav>
      </header>

      <Photo
        imgSrc={photoRetro}
        imgSrcReal={photoReal}
        cardTitle="LEVEL 26 DESARROLLADOR FULL STACK"
        cardDescription="Ing. Sistemas Computacionales"
      />

      <section className="xp-section">
        <ProgressBar
          energyLabel="FRONT-END XP"
          energyPercent="80"
          energyColor="var(--ment)"
        />

        <ProgressBar
          energyLabel="BACK-END XP"
          energyPercent="90"
          energyColor="var(--purple)"
        />
        <ProgressBar
          energyLabel="BASE DE DATOS XP"
          energyPercent="95"
          energyColor="var(--ment)"
        />
      </section>

      <section className="button-section">
        <p className="pulse-text">
          &gt; Press Start<span className="underscore">_</span>
        </p>
        <ButtonKeyboard buttonText="CONTINUAR LA AVENTURA" to="/adventure" />
        <ButtonVisibleIcon
          iconButton={iconThunder}
          buttonText="ARBOL DE HABILIDADES"
          iconAlt="Icono de arbol de habilidades"
          href="/skills"
        />
        <ButtonVisibleIcon
          iconButton={iconInvetary}
          buttonText="PROYECTOS"
          iconAlt="Icono de proyectos"
          href="/projects"
        />
        <ButtonVisibleIcon
          iconButton={iconExperience}
          buttonText="EXPERIENCIA"
          iconAlt="Icono de experiencia"
          href="/experience"
        />
        <ButtonVisibleIcon
          iconButton={iconMail}
          buttonText="CONTACTAME"
          iconAlt="Icono de contacto"
          href="/contact"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
