function Experience() {
  return (
    <>
      <article className="experience">
        <section className="experience__first-text">
          <p className="experience__first-text__title1">
            A selective archive of career milestones.
          </p>
          <p className="experience__first-text__title2">
            Charting the evolution of a design perspective through influential
            roles and creative leadership positions.
          </p>
        </section>
        <table className="experience__timeline">
          <tr>
            <td className="experience__timeline__col-1">2021 — PRES.</td>
            <td className="experience__timeline__col-2">
              <p className="__role">Lead Product Designer</p>
              <p className="__company">Lumina Tech Group</p>
            </td>
            <td className="experience__timeline__col-3">
              Lumina Tech Group Directing the design vision for enterprise-scale
              visual analytics. Spearheading the transition to a motion-first
              design system.
            </td>
          </tr>
          <tr>
            <td className="experience__timeline__col-1">2018 — 2021</td>
            <td className="experience__timeline__col-2">
              <p className="__role">Senior Visual Designer</p>
              <p className="__company">Vanguard Creative Agency</p>
            </td>
            <td className="experience__timeline__col-3">
              Crafting high-end editorial experiences for luxury fashion and
              automotive clients. Focused on storytelling through typography.
            </td>
          </tr>
          <tr>
            <td className="experience__timeline__col-1">2015 — 2018</td>
            <td className="experience__timeline__col-2">
              <p className="__role">UI/UX Designer</p>
              <p className="__company">Nova Systems</p>
            </td>
            <td className="experience__timeline__col-3">
              Ideating and prototyping interactive components for mobile-first
              SaaS platforms. Emphasis on accessibility and user research.
            </td>
          </tr>
        </table>
      </article>
    </>
  );
}
export default Experience;
