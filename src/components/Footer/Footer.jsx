import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link href="/" className={styles.logo}>
            José Valadez
          </Link>

          <p>Frontend Developer especializado en React, Next.js y JavaScript.</p>
        </div>

        <nav className={styles.nav} aria-label="Navegación del pie de página">
          <Link href="#projects">Proyectos</Link>
          <Link href="#skills">Tecnologías</Link>
          <Link href="#about">Sobre mí</Link>
          <Link href="#contact">Contacto</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} José Valadez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
