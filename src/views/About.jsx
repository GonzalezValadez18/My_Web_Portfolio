import photo from "/src/assets/foto-real.webp";

function About() {
  return (
    <>
      <article className="about">
        <section className="about__photo">
          <img src={photo} alt="Foto de perfil" />
        </section>
        <section className="about__text">
          <p className="about__text__title">The Narrative of Intent</p>
          <p className="about__text__content">
            I believe that every digital touchpoint is an opportunity for a
            curated experience. My practice centers on the intersection of
            functional minimalism and editorial storytelling. <br />
            <br /> With over eight years of experience working with global
            brands, I have developed a philosophy that treats UI as a gallery
            space—where content is the masterpiece and the interface is the
            frame that elevates it without noise.
          </p>
          <section className="about__statistics">
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">08+</p>
              <p className="about__statistics__item__text">YEARS EXP.</p>
            </div>
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">120</p>
              <p className="about__statistics__item__text">PROJECTS</p>
            </div>
            <div className="about__statistics__item">
              <p className="about__statistics__item__number">12</p>
              <p className="about__statistics__item__text">AWARDS</p>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}
export default About;
