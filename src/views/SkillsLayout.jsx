import { useState } from "react";
import Header from "../components/Header";
import "../styles/layouts/skills.css";
import SkillBar from "../components/SkillBar.jsx";
import FooterXP from "../components/FooterXP.jsx";

function SkillsLayout() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <>
      <div className="header-space"></div>

      <Header />
      <div className="skills-layout">
        <h2 className="tittle-page">Arbol de Habilidades</h2>
        <section className="skills-section">
          <SkillBar
            label="HTML & CSS"
            value={85}
            position="right"
            isActive={activeSkill === 0}
            onClick={() => handleSkillClick(0)}
            tooltip="Dominio en la creación de estructuras semánticas y diseños responsivos modernos utilizando Flexbox y Grid para una experiencia de usuario fluida."
          />
          <SkillBar
            label="PHP"
            value={80}
            position="left"
            isActive={activeSkill === 1}
            onClick={() => handleSkillClick(1)}
            tooltip="Desarrollo de aplicaciones web dinámicas del lado del servidor, integración con bases de datos MySQL y manejo de formularios y sesiones."
          />
        </section>
        <section className="skills-section">
          <SkillBar
            label="React"
            value={75}
            position="right"
            isActive={activeSkill === 2}
            onClick={() => handleSkillClick(2)}
            tooltip="Desarrollo de interfaces de usuario dinámicas basadas en componentes, gestión eficiente del estado con Hooks, Context API y ecosistema moderno."
          />
          <SkillBar
            label="Node.js"
            value={70}
            position="left"
            isActive={activeSkill === 3}
            onClick={() => handleSkillClick(3)}
            tooltip="Construcción de servidores escalables y APIs RESTful rápidas utilizando Express, integrando lógica de negocio y comunicación con bases de datos."
          />
        </section>
        <section className="skills-section">
          <SkillBar
            label="SQL"
            value={65}
            position="right"
            isActive={activeSkill === 4}
            onClick={() => handleSkillClick(4)}
            tooltip="Diseño y gestión de bases de datos relacionales, escritura de consultas optimizadas y modelado de datos para asegurar la integridad de la información."
          />
          <SkillBar
            label="Git"
            value={90}
            position="left"
            isActive={activeSkill === 5}
            onClick={() => handleSkillClick(5)}
            tooltip="Control de versiones distribuido para el trabajo colaborativo, manejo de ramas, resolución de conflictos y mantenimiento del historial de código."
          />
        </section>
      </div>
      <FooterXP />
    </>
  );
}

export default SkillsLayout;
