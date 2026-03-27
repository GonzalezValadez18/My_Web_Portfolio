import { useState } from "react";

function Logo({ name }) {
  const [error, setError] = useState(false);

  // Intentamos cargar el SVG original del CDN de Devicon
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

  return (
    <div className={`tool ${error ? "tool--tag" : ""}`}>
      {!error ? (
        <img
          src={iconUrl}
          alt={name}
          onError={() => setError(true)}
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
      ) : (
        <span className="tag-fallback">{name.toUpperCase()}</span>
      )}
    </div>
  );
}
export default Logo;
