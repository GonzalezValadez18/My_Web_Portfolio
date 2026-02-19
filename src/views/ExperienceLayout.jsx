import { useEffect, useState } from "react";
import Header from "../components/Header";
import FooterXP from "../components/FooterXP";
import "../styles/layouts/experience.css";

function ExperienceLayout() {
  const [activeQuest, setActiveQuest] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleQuestClick = (index) => {
    setActiveQuest(activeQuest === index ? null : index);
  };

  const quests = [
    {
      year: "2025",
      questId: "QUEST #03",
      role: "DESARROLLADOR WEB SEO",
      company: "ETN Turistar Lujo",
      range: "FEB-2025 — ACTUAL",
      tools: [
        "HTML",
        "CSS",
        "JAVA SCRIPT",
        "SEO",
        "ANALYTICS",
        "HubSpot",
        "WordPress",
        "Google Search Console",
        "Git-Hub",
      ],
      objectives: [
        "Pagina Web Optimizada",
        "Campañas Email Marketing",
        "Diseños responsivos",
        "Estrategia SEO implementada",
      ],
      xpTotal: null,
      description:
        "Optimización de la página web para motores de búsqueda (SEO), implementando mejoras técnicas y de contenido. Desarrollo de componentes con HTML, CSS y JavaScript, y gestión de campañas de email marketing a través de HubSpot. Análisis de rendimiento y seguimiento de KPIs con Google Analytics y Search Console.",
      xpBars: [],
      badges: [
        { title: "SEO\nESTRATEGICO", icon: "🔍" },
        { title: "HUBSPOT\nMARKETING", icon: "📢" },
        { title: "ANALYTICS\nKPIs", icon: "📈" },
      ],
      status: ["PLATAFORMA ENTREGADA", "RENDIMIENTO OPTIMIZADO"],
    },
    {
      year: "2024",
      questId: "QUEST #02",
      role: "PROGRAMADOR",
      company: "Progela S.A. de C.V.",
      range: "AGO-2024 — DIC-2024",
      tools: [
        "Android Studio",
        "JAVA",
        "SQLite",
        "Git-Hub",
        "PHP",
        "MySQL",
        "Postman",
      ],
      objectives: [
        "App CRM desarrollada",
        "Gestion de Bases de Datos",
        "API REST funcional",
      ],
      xpTotal: null,
      description:
        "Desarrollo de una aplicación móvil CRM para Android con Java y SQLite, permitiendo la gestión de clientes y pedidos. Creación de una API RESTful con PHP y MySQL para la comunicación entre la app y el servidor. Uso de Postman para pruebas de endpoints y Git para control de versiones.",
      xpBars: [],
      badges: [
        { title: "APP\nANDROID", icon: "🤖" },
        { title: "API REST\nPHP", icon: "🔗" },
        { title: "SQL\nMANAGER", icon: "💾" },
      ],
      status: ["API DESPLEGADA", "PAGOS FUNCIONALES"],
    },
    {
      year: "2023",
      questId: "QUEST #01",
      role: "DESARROLLADOR FREELANCE",
      company: "Clinica Veterinaria DYL",
      range: "Mar-2023 — Dic-2023",
      tools: ["React", "Vite", "HTML", "CSS", "Git-Hub"],
      objectives: ["Sitio web lanzado", "Responsive design aplicado"],
      xpTotal: null,
      description:
        "Diseño y desarrollo de un sitio web corporativo como desarrollador freelance. Creación de una interfaz de usuario atractiva y completamente responsiva utilizando React, Vite y CSS puro, asegurando una experiencia de usuario óptima en cualquier dispositivo.",
      xpBars: [],
      badges: [
        { title: "REACT\nFRONTEND", icon: "⚛️" },
        { title: "DISEÑO\nRESPONSIVO", icon: "📱" },
        { title: "FREELANCE\nPROJECT", icon: "🚀" },
      ],
      status: [],
    },
  ];

  return (
    <>
      <div className="header-space"></div>
      <Header />

      <div className="experience-layout">
        <div className="exp-header">
          <h2 className="tittle-page">Experiencia Laboral</h2>

          <div className="exp-subtitle">
            <span>
              <b>SYSTEM:</b> INGENIERIA EN SISTEMA COMPUTACIONALES
            </span>
            <span>
              <b>STATUS:</b> ACTIVE
            </span>
          </div>
          <div className="exp-divider" />
        </div>

        <div className="timeline">
          {quests.map((q, idx) => {
            const isActive = activeQuest === idx;

            return (
              <section className="timeline-item" key={q.questId}>
                <div className="timeline-marker">
                  <span className="timeline-year">{q.year}</span>
                  <span
                    className={`timeline-dot ${idx === 1 ? "is-purple" : ""}`}
                  />
                </div>

                <article
                  className={`quest-card ${isActive ? "is-active" : ""}`}
                  onClick={() => handleQuestClick(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="quest-head">
                    <div className="quest-left">
                      <div className="quest-title-row">
                        <span className="quest-id">{q.questId}</span>
                        <span className="quest-role">{q.role}</span>
                      </div>
                      <div className="quest-company">{q.company}</div>
                    </div>

                    <div className="quest-range">
                      <span className="quest-ring" />
                      <span>{q.range}</span>
                    </div>
                  </div>

                  <div className="quest-body">
                    <div className="quest-col quest-col-left">
                      <div className="quest-section">
                        <div className="quest-label">
                          <span className="quest-pip" /> Armas y herramientas
                        </div>
                        <div className="chips">
                          {q.tools?.map((t) => (
                            <span className="chip chip-cyan" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="quest-section">
                        <div className="quest-label">
                          <span className="quest-pip" /> Objetivos completados
                        </div>
                        <ul className="quest-list">
                          {q.objectives?.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="quest-col quest-col-right">
                      {q.xpTotal !== null && (
                        <div className="quest-section xp-box">
                          <div className="xp-head">
                            <span>XP OBTENIDA</span>
                            <span className="xp-total">{q.xpTotal}%</span>
                          </div>

                          {q.xpBars?.map((b) => (
                            <div className="xp-row" key={b.label}>
                              <div className="xp-row-top">
                                <span>{b.label}</span>
                                <span>{b.value}%</span>
                              </div>
                              <div className="xp-bar">
                                <div
                                  className="xp-fill"
                                  style={{ width: `${b.value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {!!q.badges?.length && (
                        <div
                          className={`badges ${q.badges.length === 2 ? "two" : ""}`}
                        >
                          {q.badges?.map((b, i) => (
                            <div className="badge" key={`${b.title}-${i}`}>
                              <div className="badge-icon">{b.icon}</div>
                              <div className="badge-text">{b.title}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {q.description && (
                        <div className="quest-section quest-description-section">
                          <div className="quest-label">
                            <span className="quest-pip" /> Resumen de la Misión
                          </div>
                          <p className="quest-description-text">
                            {q.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="quest-hint">
                    {isActive
                      ? "Click para cerrar"
                      : "Click para ver / ocultar detalle"}
                  </div>
                </article>
              </section>
            );
          })}
        </div>
      </div>

      <FooterXP />
    </>
  );
}

export default ExperienceLayout;
