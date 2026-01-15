import { useState } from "react";
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
import iconMail from "./assets/icon-mail.webp";

function App() {
  return (
    <>
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
        cardTitle="LEVEL 1 DESARROLLADOR FULL STACK"
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
          &gt; Press Start<span class="underscore">_</span>
        </p>
        <ButtonKeyboard buttonText="CONTINUAR LA AVENTURA" />
        <ButtonVisibleIcon
          iconButton={iconThunder}
          buttonText="ARBOL DE HABILIDADES"
          iconAlt="Icono de arbol de habilidades"
          href=""
        />
        <ButtonVisibleIcon
          iconButton={iconInvetary}
          buttonText="PROYECTOS"
          iconAlt="Icono de proyectos"
          href=""
        />
        <ButtonVisibleIcon
          iconButton={iconMail}
          buttonText="CONTACTAME"
          iconAlt="Icono de contacto"
          href=""
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
