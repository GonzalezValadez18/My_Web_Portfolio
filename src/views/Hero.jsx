import ButtonDark from "../components/ButtonDark.jsx";
import ButtonLight from "../components/ButtonLight.jsx";

function Hero() {
  return (
    <>
      <p className="hero-main__small-text">
        INDEPENDENT MULTIDISCIPLINARY DESIGNER
      </p>
      <p className="hero-main__main-text">
        <strong>
          Archiving the<br></br>
        </strong>{" "}
        <em>sublime</em>{" "}
        <strong>
          through<br></br> digital interfaces
        </strong>
      </p>
      <div className="hero-main__buttons">
        <ButtonDark text="View Selected Works" />
        <ButtonLight text="Get In Touch" />
      </div>
    </>
  );
}
export default Hero;
