import ButtonDark from "../components/ButtonDark.jsx";
import ButtonLight from "../components/ButtonLight.jsx";

function Hero() {
  return (
    <>
      <p className="hero-main__small-text">
        INGENIERO EN SISTEMAS COMPUTACIONALES
      </p>
      <p className="hero-main__main-text">
        <strong>
          Convirtiendo necesidades en<br></br>
        </strong>{" "}
        <em>soluciones </em>{" "}
        <strong>
          tecnológicas<br></br> sólidas
        </strong>
      </p>
      <div className="hero-main__buttons">
        <ButtonDark text="Ver Proyectos" />
        <ButtonLight text="Contactame" />
      </div>
    </>
  );
}
export default Hero;
