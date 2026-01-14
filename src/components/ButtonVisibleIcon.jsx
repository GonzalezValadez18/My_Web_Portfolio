function ButtonVisibleIcon({iconButton, buttonText, iconAlt}) {
  return (
    <a href="" className="button-visible-icon">
      <img src={iconButton} className="button-icon" alt={iconAlt} />
      <span className="button-visible-text">{buttonText}</span>
    </a>
  );
}

export default ButtonVisibleIcon;
