import { useState } from "react";
import "../src/styles/layouts/home.css";
import Photo from "./components/Photo.jsx";

import logo_main from "./assets/logo-lord-mercury-ment.webp"; 
import logo_battery from "./assets/battery-purple.webp";
import photoRetro from "./assets/foto-retro.webp";

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
        cardTitle="LEVEL 1 DESARROLLADOR FULL STACK"
        cardDescription="Ing. Sistemas Computacionales"
      />

    </>
  );
}

export default App;
