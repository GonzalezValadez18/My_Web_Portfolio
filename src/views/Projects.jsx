import { useEffect, useRef } from "react";
import proyectoCostaLine from "/src/assets/proyecto-costa-line.webp";
import proyectoRapi2s from "/src/assets/proyecto-rapi2s.webp";
import proyectoDyl from "/src/assets/proyecto-dyl.webp";
import proyectoJeg from "/src/assets/proyecto-jeg.webp";
import videoProgela from "/src/assets/proyecto-progela.mp4";

const projects = [
  {
    title: "Costa Line",
    category: "WEB DEVELOPMENT · SEO · DIGITAL EXPERIENCE",
    description:
      "Desarrollo y optimización de una plataforma digital para la consulta de destinos y compra de boletos, enfocada en rendimiento, arquitectura frontend y experiencia de usuario.",
    image: proyectoCostaLine,
    link: "https://costaline.com.mx/",
    tags: ["JavaScript", "SASS", "Web Components", "SEO"],
  },
  {
    title: "Rapi2s",
    category: "WEB DEVELOPMENT · FRONTEND · SEO",
    description:
      "Desarrollo de plataforma web orientada a la consulta de rutas, compra de boletos y gestión de servicios, optimizada para rendimiento, estructura semántica y experiencia de usuario.",
    image: proyectoRapi2s,
    link: "https://rapi2s.com.mx/",
    tags: ["JavaScript", "SASS", "SEO"],
  },
  {
    title: "Veterinaria DYL",
    category: "WEB DEVELOPMENT · FRONTEND · DEPLOYMENT",
    description:
      "Implementación de sitio web con React y Bootstrap, optimizado para dispositivos móviles, con estructura modular, sitemap para SEO y despliegue en Vercel.",
    image: proyectoDyl,
    link: "https://veterinaria-dyl.vercel.app/",
    tags: ["React", "Bootstrap", "Vercel", "SEO"],
  },
  {
  "title": "JEG Dev Studios",
  "category": "WEB DEVELOPMENT · FULL-STACK · SEO",
  "description": "Implementación de sitio web para agencia digital, integrando arquitectura frontend, estructura optimizada para SEO y presentación de servicios de desarrollo, software y aplicaciones.",
  "image": proyectoJeg,
  "link": "https://www.jegdevstudios.com/",
  "tags": ["React", "Full-Stack", "SEO"]
  },
  {
    title: "CRM Progela",
    category: "BACKEND · LARAVEL · BASES DE DATOS",
    description:
      "Desarrollo de sistema CRM con PHP y Laravel, enfocado en gestión de información, consumo de APIs REST y administración de bases de datos SQL bajo una arquitectura estructurada.",
    image:
      videoProgela,
    link: "https://github.com/GonzalezValadez18/CrmProgela",
    video: videoProgela, 
    tags: ["PHP", "Laravel", "SQL Server", "SQLite", "Java", "Android Studio" ],
  },
];

function ProjectCard({ project }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!project.video || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play().catch((error) => {
            console.log("Autoplay bloqueado o error en reproducción:", error);
          });
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } 
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [project.video]);

  return (
    <article className="work-card">
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`Ver detalles del proyecto de desarrollo web: ${project.title}`}
      >
      <div className="work-card__image">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            poster={project.image}
          />
        ) : (
          <img src={project.image} alt={`Captura de pantalla del proyecto ${project.title} - ${project.category}`} loading="lazy" />
        )}
      </div>

      <div className="work-card__content">
        <p className="work-card__category">{project.category}</p>

        <div className="work-card__title-row">
          <h3>{project.title}</h3>
          <span className="arrow">
            <i className="lni lni-arrow-angular-top-right"></i>
          </span>
        </div>

        <p className="work-card__desc">{project.description}</p>

        <div className="work-card__tags">
          {project.tags?.map((tag, index) => (
            <span key={index} className="work-card__tag">{tag}</span>
          ))}
        </div>
      </div>
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section className="works">
      <div className="works__header">
        <h2>Selected Works</h2>
        <div className="works__line" />
      </div>

      <div className="works__grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
