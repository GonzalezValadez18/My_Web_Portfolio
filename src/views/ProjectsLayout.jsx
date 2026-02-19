import React, { useEffect } from "react";
import Header from "../components/Header";
import FooterXP from "../components/FooterXP.jsx";
import CardProject from "../components/CardProject";
import "../styles/layouts/projects.css";
import photoDyl from "../assets/dyl-web.webp";
import photoR2 from "../assets/rapi2s-web.webp";
import photoProgela from "../assets/crm-progela.webp";

function ProjectsLayout() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      imgSrc: photoR2,
      title: "Pagina Web Rapi2s.com.mx",
      description:
        "Diseño y desarrollo de sitio web de Rapi2s.com.mx, utilizando HTML, CSS y JavaScript para crear una experiencia de usuario atractiva y funcional, optimizando el rendimiento de la página para mejor posicionamiento SEO en los motores de búsqueda. Esta muestra información de venta de boletos de Autobus por Jalisaco y Colima.",
      difficulty: "EASY",
      progress: "100%",
      level: "LVL 3",
      link: "https://rapi2s.com.mx/",
      technologies: ["HTML", "CSS", "JavaScript"],
    }
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
