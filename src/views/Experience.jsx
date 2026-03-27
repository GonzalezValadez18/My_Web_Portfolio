function Experience() {
  return (
    <>
      <article className="experience">
        <section className="experience__first-text">
          <p className="experience__first-text__title1">
            Mi experiencia profesional.
          </p>
          <p className="experience__first-text__title2">
            Evolución en desarrollo de software a través de proyectos relevantes
            y experiencia técnica aplicada.
          </p>
        </section>
        <table className="experience__timeline">
          <tr>
            <td className="experience__timeline__col-1">2025 — ACTUAL.</td>
            <td className="experience__timeline__col-2">
              <p className="__role">Desarrollador WEB SEO</p>
              <p className="__company">ETN Turistar Lujo</p>
            </td>
            <td className="experience__timeline__col-3">
              Desarrollo y mantenimiento de arquitectura frontend utilizando Web
              Components, HTML, JavaScript y SASS, enfocado en optimización SEO
              técnica y mejora del rendimiento web. Creación de landing pages
              para campañas comerciales, gestión y optimización de contenido en
              WordPress, e implementación de estrategias de email marketing con
              HubSpot. Trabajo continuo en la mejora del rendimiento y la
              experiencia de usuario en las plataformas digitales del grupo.
            </td>
          </tr>
          <tr>
            <td className="experience__timeline__col-1">2024</td>
            <td className="experience__timeline__col-2">
              <p className="__role">Programador</p>
              <p className="__company">Progela SA de CV</p>
            </td>
            <td className="experience__timeline__col-3">
              Desarrollo de aplicaciones móviles Android con Java en Android
              Studio y construcción de sistemas web tipo CRM utilizando PHP y
              Laravel. Implementación de arquitectura MVVM, integración de APIs
              REST con Retrofit y gestión de bases de datos en SQL Server. Uso
              de herramientas como Postman para pruebas de endpoints y GitHub
              para control de versiones, además de la elaboración de
              documentación técnica y planes de trabajo.
            </td>
          </tr>
          <tr>
            <td className="experience__timeline__col-1">2023</td>
            <td className="experience__timeline__col-2">
              <p className="__role">Desarrollador Freelancer</p>
              <p className="__company">Clínica Veterinaria Dyl</p>
            </td>
            <td className="experience__timeline__col-3">
              Desarrollo desde cero de una aplicación Android para la gestión de
              citas médicas, incluyendo conexión a base de datos MySQL en
              servidor remoto. Creación de una página web en React con
              optimización SEO, despliegue en Vercel y mantenimiento continuo,
              además de la elaboración de documentación técnica del sistema.
            </td>
          </tr>
        </table>
      </article>
    </>
  );
}
export default Experience;
