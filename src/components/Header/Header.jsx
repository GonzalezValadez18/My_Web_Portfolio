"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import JoseSVG from "@/components/Icons/JoseSVG";
import SeparatorSVG from "@/components/Icons/SeparatorSVG";
import ValadezSVG from "@/components/Icons/ValadezSVG";
import MenuSVG from "@/components/Icons/MenuSVG";
import ThemeSVG from "@/components/Icons/ThemeSVG";

export default function Header() {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [temaOscuro, setTemaOscuro] = useState(false);

  // Cargar preferencia al montar el componente
  useEffect(() => {
    const temaGuardado = localStorage.getItem("theme");
    const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const esDark = temaGuardado === "dark" || (!temaGuardado && prefiereOscuro);

    setTemaOscuro(esDark);
    document.documentElement.setAttribute("data-theme", esDark ? "dark" : "light");
  }, []);

  const menuIcon = () => {
    setEstaAbierto((prev) => !prev);
  };

  const toggleTheme = () => {
    const nuevoTema = !temaOscuro ? "dark" : "light";
    setTemaOscuro(!temaOscuro);
    localStorage.setItem("theme", nuevoTema);
    document.documentElement.setAttribute("data-theme", nuevoTema);
  };

  useEffect(() => {
    const cerrarAlHacerScroll = () => {
      setEstaAbierto(false);
    };

    window.addEventListener("scroll", cerrarAlHacerScroll);

    return () => {
      window.removeEventListener("scroll", cerrarAlHacerScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Inicio — José Valadez">
          <JoseSVG className={styles.logoText} />
          <SeparatorSVG className={styles.logoSeparator} />
          <ValadezSVG className={styles.logoText} />
        </Link>

        <nav className={`${styles.nav} ${estaAbierto ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="#projects" onClick={() => setEstaAbierto(false)}>
                Proyectos
              </Link>
            </li>

            <li>
              <Link href="#skills" onClick={() => setEstaAbierto(false)}>
                Tecnologías
              </Link>
            </li>

            <li>
              <Link href="#about" onClick={() => setEstaAbierto(false)}>
                Sobre mí
              </Link>
            </li>

            <li>
              <Link href="#contact" onClick={() => setEstaAbierto(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleTheme} className={styles.themeButton} aria-label={temaOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
          <ThemeSVG className={styles.btnTheme} dark={temaOscuro} />
        </button>

        <button onClick={menuIcon} className={styles.menuButton} aria-label={estaAbierto ? "Cerrar menú" : "Abrir menú"} aria-expanded={estaAbierto}>
          <MenuSVG className={styles.btnMenu} open={estaAbierto} />
        </button>
      </div>
    </header>
  );
}
