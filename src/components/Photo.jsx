function Photo({ imgSrc, imgSrcReal, cardTitle, cardDescription }) {
  return (
    <section className="card-component">
      <div className="photo-container">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={imgSrc}
              alt="Foto de perfil Retro Jose Leonardo Gonzalez Valadez"
            />
          </div>
          <div className="flip-card-back">
            <img
              src={imgSrcReal}
              alt="Foto de perfil Real Jose Leonardo Gonzalez Valadez"
            />
          </div>
        </div>
      </div>
      <p className="card-title">{cardTitle}</p>
      <p className="card-description">{cardDescription}</p>
    </section>
  );
}

export default Photo;
