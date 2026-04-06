import Logo from "/src/components/Logo";

const cards = [
  {
    title: "Stack Técnico",
    tools: [
      "java",
      "javascript",
      "php",
      "kotlin",
      "html5",
      "css3",
      "c",
      "cplusplus",
    ],
    wide: true, // Fila 1: 1 columna
  },
  {
    title: "Desarrollo Web",
    tools: ["react", "astro", "tailwindcss", "bootstrap", "wordpress"],
    wide: false, // Primera fila: Card grande (ocupa 2 columnas)
  },
  {
    title: "Backend & APIs",
    tools: ["node", "laravel", "firebase"],
    wide: false, // Segunda fila: Card grande (ocupa 2 columnas)
  },
  {
    title: "Desarrollo Móvil",
    tools: ["androidstudio", "intellijidea", "xml"],
    wide: false, // Segunda fila: Card normal (ocupa 1 columna)
  },
  {
    title: "Base de Datos",
    tools: ["mysql", "microsoftsqlserver", "postgresql", "sqlite"],
    wide: false, // Segunda fila: Card normal (ocupa 1 columna)
  },
  {
    title: "Herramientas",
    tools: ["vercel", "github", "postman", "wordpress", "hubspot" ],
    wide: false, // Segunda fila: Card normal (ocupa 1 columna)
  },
  {
    title: "Diseño y Modelado",
    tools: ["figma", "sketchup"],
    wide: false, // Segunda fila: Card normal (ocupa 1 columna)
  },
];

function ToolkitGrid() {
  return (
    <section className="toolkit">
      <div className="toolkit__header">
        <p className="toolkit__eyebrow">COMPETENCIAS</p>
        <h2 className="toolkit__title">Mi caja de herramientas</h2>
      </div>

      <div className="toolkit__grid">
        {cards.map((card, index) => (
          <article
            key={index}
            className={`card ${card.wide ? "card--wide" : ""}`}
          >
            <h3 className="card__title">{card.title}</h3>

            <div className="tools">
              {card.tools.map((tool, i) => (
                <Logo key={i} name={tool} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default ToolkitGrid;
