import { Link } from "react-router-dom";

function CardProject({
  imgSrc,
  title,
  description,
  difficulty,
  progress,
  level,
  link,
  technologies,
}) {
  return (
    <section className="card-project">
      <article className="card-project-description">
        <div className="img-section">
          <div className="img-wrapper">
            <img src={imgSrc} alt={title} />
          </div>
          {technologies && (
            <div className="technologies-section">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-section">
          <p className="card-project-tittle">{title}</p>
          <p className="card-project-description">{description}</p>
        </div>
      </article>
      <article className="card-project-bar">
        <div className="card-project-bar-labels">
          <span className="label-left">DIFFICULTY</span>
          <span className="label-right">{difficulty}</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: progress }}></div>
        </div>
      </article>
      <article className="card-project-button">
        <a
          href={link}
          className="button-card-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar Misión
        </a>
      </article>
      <article className="crooked-sign">
        <span>{level}</span>
      </article>
    </section>
  );
}

export default CardProject;
