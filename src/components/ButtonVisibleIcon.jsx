import { Link } from "react-router-dom";

function ButtonVisibleIcon({ iconButton, buttonText, iconAlt, href }) {
  return (
    <Link to={href} className="button-visible-icon">
      <img src={iconButton} className="button-icon" alt={iconAlt} />
      <span className="button-visible-text">{buttonText}</span>
    </Link>
  );
}

export default ButtonVisibleIcon;
