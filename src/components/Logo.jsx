import { useState } from "react";

function Logo({ name }) {
  const [error, setError] = useState(false);

  // Función para construir la URL del icono
  const getIconUrl = (variant) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

  // Estado para la URL actual del icono
  const [currentIconUrl, setCurrentIconUrl] = useState(getIconUrl("original"));

  // Manejador de errores para intentar cargar otra variante
  const handleError = () => {
    if (currentIconUrl.includes("-original.svg")) {
      setCurrentIconUrl(getIconUrl("plain")); // Intenta con la versión 'plain'
    } else {
      setError(true); // Si 'plain' también falla, marca error
    }
  };

  return (
    <div className={`tool ${error ? "tool--tag" : ""}`}>
      <span className="tool__tooltip">{name}</span>
      {!error ? (
        <img
          src={currentIconUrl}
          alt={name}
          onError={handleError}
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
      ) : (
        <span className="tag-fallback">{name.toUpperCase()}</span>
      )}
    </div>
  );
}
export default Logo;
