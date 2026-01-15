import { useState, useEffect } from "react";

function Photo({ imgSrc, imgSrcReal, cardTitle, cardDescription }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768) {
        setIsFlipped((prev) => !prev);
      } else {
        setIsFlipped(false);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="card-component">
      <div className={`photo-container ${isFlipped ? "flipped" : ""}`}>
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
