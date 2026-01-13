function Photo({ imgSrc, cardTitle, cardDescription }) {
  return (
    <section className="card-component">
      <div className="photo-container">
        <img
          src={imgSrc}
          alt="Foto de perfil Retro Jose Leonardo Gonzalez Valadez"
        />
      </div>
      <p className="card-title">{cardTitle}</p>
      <p className="card-description">{cardDescription}</p>
    </section>
  );
}

export default Photo;
