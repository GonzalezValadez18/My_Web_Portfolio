const projects = [
  {
    title: "Costa Line",
    category: "WEB DEVELOPMENT · SEO · DIGITAL EXPERIENCE",
    description:
      "Desarrollo y optimización de una plataforma digital para la consulta de destinos y compra de boletos, enfocada en rendimiento, arquitectura frontend y experiencia de usuario.",
    image: "/src/assets/proyecto-costa-line.webp",
    link: "https://costaline.com.mx/",
  },
  {
    title: "Rapi2s",
    category: "WEB DEVELOPMENT · FRONTEND · SEO",
    description:
      "Desarrollo de plataforma web orientada a la consulta de rutas, compra de boletos y gestión de servicios, optimizada para rendimiento, estructura semántica y experiencia de usuario.",
    image: "/src/assets/proyecto-rapi2s.webp",
    link: "https://rapi2s.com.mx/",
  },
  {
    title: "Veterinaria DYL",
    category: "WEB DEVELOPMENT · FRONTEND · DEPLOYMENT",
    description:
      "Implementación de sitio web con React y Bootstrap, optimizado para dispositivos móviles, con estructura modular, sitemap para SEO y despliegue en Vercel.",
    image: "/src/assets/proyecto-dyl.webp",
    link: "https://veterinaria-dyl.vercel.app/",
  },
  {
    title: "CRM Progela",
    category: "BACKEND · LARAVEL · BASES DE DATOS",
    description:
      "Desarrollo de sistema CRM con PHP y Laravel, enfocado en gestión de información, consumo de APIs REST y administración de bases de datos SQL bajo una arquitectura estructurada.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    link: "https://github.com/GonzalezValadez18/CrmProgela",
  },
];

function Projects() {
  return (
    <section className="works">
      <div className="works__header">
        <h2>Selected Works</h2>
        <div className="works__line" />
      </div>

      <div className="works__grid">
        {projects.map((project, i) => (
          <article
            key={i}
            className="work-card"
            onClick={() => window.open(project.link, "_blank")}
          >
            <div className="work-card__image">
              <img src={project.image} alt={project.title} />
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;
