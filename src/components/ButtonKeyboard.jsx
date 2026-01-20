import { Link } from "react-router-dom";

function ButtonKeyboard({ buttonText, to }) {
  return (
    <Link to={to} className="button-keyboard">
      {buttonText}
    </Link>
  );
}

export default ButtonKeyboard;
