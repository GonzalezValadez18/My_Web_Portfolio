import photo from "/src/assets/foto-real.webp";

function About() {
  return (
    <>
      <article className="about">
        <section className="about__photo">
          <img src={photo} alt="Foto de perfil" />
        </section>
        <section className="about__text">
          <p className="about__text__title">José Leonardo González Valadez</p>
          <p className="about__text__content">
            Entiendo cada producto digital como un sistema donde la claridad, el
            rendimiento y la estructura definen la experiencia. Mi enfoque se
            centra en desarrollar soluciones eficientes, escalables y orientadas
            a resultados. <br />
            <br /> Como ingeniero en sistemas con experiencia en desarrollo web
            y móvil, trabajo en la creación de arquitecturas sólidas,
            integración de APIs y optimización continua del rendimiento. Busco
            que cada implementación aporte valor real, combinando funcionalidad
            con una ejecución técnica precisa.
          </p>
          <section className="about__statistics">
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">26</p>
              <p className="about__statistics__item__text">EDAD</p>
            </div>
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">2+</p>
              <p className="about__statistics__item__text">AÑOS EXP.</p>
            </div>
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">10</p>
              <p className="about__statistics__item__text">PROYECTOS</p>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}
export default About;
