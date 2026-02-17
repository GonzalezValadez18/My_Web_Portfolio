import { useState, useEffect } from "react";
import Photo from "../assets/foto-retro.webp";

function FooterXP() {
  const [progress, setProgress] = useState(0);
  const [xpStats, setXpStats] = useState({ current: 0, total: 0 });
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const birthdayThisYear = new Date(currentYear, 6, 18); // Mi cumpleaños el 18 de julio (sexto mes, índice 6)
      const birthYear = 1999;

      let start, end;
      let currentLevel = currentYear - birthYear;

      if (now < birthdayThisYear) {
        start = new Date(currentYear - 1, 6, 18);
        end = birthdayThisYear;
        currentLevel--;
      } else {
        start = birthdayThisYear;
        end = new Date(currentYear + 1, 6, 18);
      }

      setLevel(currentLevel);

      const totalTime = end - start;
      const elapsedTime = now - start;

      const currentProgress = (elapsedTime / totalTime) * 100;
      setProgress(currentProgress);

      const daysPassed = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
      const daysTotal = Math.round(totalTime / (1000 * 60 * 60 * 24));
      setXpStats({ current: daysPassed, total: daysTotal });
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000); // se actualiza cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="footer-xp">
      <article className="footer-photo">
        <img src={Photo} alt="Footer Photo" className="footer-image" />
      </article>
      <article className="footer-info">
        <p className="footer-level">DEV_NIVEL {level}</p>
        <p className="footer-name">Desarrollador Full Stack</p>
        <div className="xp-container">
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="xp-info">
            <span>XP: {xpStats.current}, 000</span>
            <span>NEXT: {xpStats.total}, 000</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FooterXP;
