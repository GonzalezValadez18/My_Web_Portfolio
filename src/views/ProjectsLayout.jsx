import React from "react";
import Header from "../components/Header";
import FooterXP from "../components/FooterXP.jsx";
import CardProject from "../components/CardProject";
import "../styles/layouts/projects.css";
import photoRetro from "../assets/foto-retro.webp";
import photoDyl from "../assets/dyl-web.webp";
import photoProgela from "../assets/crm-progela.webp";

function ProjectsLayout() {
  const projects = [
    {
      imgSrc: photoProgela,
      title: "CRM - Progela",
      description:
        "Desarrollo de aplicación CRM para la gestión de clientes y prospectos de farmacias, con funcionalidades diferenciadas por rol de usuario (supervisor y vendedor). La aplicación incluye envío de ubicación en tiempo real, captura de fotografías, firma digital, registro de prospectos, levantamiento de pedidos y sincronización con un servidor privado de Progela, al cual se accedía de forma segura mediante VPN.",
      difficulty: "HARD",
      progress: "100%",
      level: "LVL 10",
      link: "#",
      technologies: ["JAVA", "SQlite", "PHP", "HTML/CSS", "SQL"],
    },
    {
      imgSrc: photoDyl,
      title: "WEB Veterinaria DYL",
      description:
        "Diseño y desarrollo de un sitio web para la veterinaria DYL, utilizando React para la interfaz de usuario, Vite como herramienta de construcción y Bootstrap CSS para el diseño visual. El sitio web incluye información sobre los servicios ofrecidos, horarios de atención, ubicación y un formulario de contacto para facilitar la comunicación con los clientes.",
      difficulty: "MEDIUM",
      progress: "100%",
      level: "LVL 2",
      link: "https://veterinaria-dyl.vercel.app/",
      technologies: ["React", "Vite", "CSS"],
    },
    {
      imgSrc: photoRetro,
      title: "TASK MASTER API",
      description:
        "Backend service for task management using Node.js and MongoDB.",
      difficulty: "EASY",
      progress: "100%",
      level: "LVL 3",
      link: "#",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <>
      <div>
        <div className="header-space"></div>
        <Header />
        <h2 className="tittle-page">Proyectos</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              difficulty={project.difficulty}
              progress={project.progress}
              level={project.level}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
        <FooterXP />
      </div>
    </>
  );
}

export default ProjectsLayout;
