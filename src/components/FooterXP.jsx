import Photo from "../assets/foto-retro.webp";

function FooterXP() {
  return (
    <section className="footer-xp">
      <article className="footer-photo">
        <img
          src={Photo}
          alt="Footer Photo"
          className="footer-image"
        />
      </article>
      <article className="footer-info">
        <p className="footer-level">DEV_LEVEL 42</p>
        <p className="footer-name">Master Architect</p>
        <div className="xp-container">
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "83%" }}></div>
          </div>

          <div className="xp-info">
            <span>XP: 12,450</span>
            <span>NEXT: 15,000</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FooterXP;
