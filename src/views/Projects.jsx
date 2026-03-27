const projects = [
  {
    title: "The Nordic Collective",
    category: "COMMERCE · UX ARCHITECTURE",
    description:
      "A spatial commerce experience designed for a high-end furniture brand.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com/nordic",
  },
  {
    title: "Aura Meditation",
    category: "HEALTH & WELLNESS · INTERACTION",
    description: "Redefining digital mindfulness through haptic feedback.",
    image:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com/aura",
  },
  {
    title: "Synthetix Capital",
    category: "FINTECH · DATA SYSTEMS",
    description: "Design language for algorithmic trading platforms.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com/synthetix",
  },
  {
    title: "Modernist Archival",
    category: "EDITORIAL · ARCHIVES",
    description: "Digital publication platform inspired by print.",
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/11027.jpg",
    link: "https://example.com/modernist",
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
