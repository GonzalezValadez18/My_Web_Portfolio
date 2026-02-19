import React, { useEffect } from "react";
import Header from "../components/Header";
import FooterXP from "../components/FooterXP";
import "../styles/layouts/contact.css";

function ContactLayout() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="header-space"></div>
      <Header />
      <div className="contact-layout">
        <h2 className="tittle-page">Centro de Transmisión</h2>

        <div className="contact-container">
          <section className="contact-form-section">
            <p className="contact-description">
              ¿Tienes una misión o propuesta? Envía tus datos a través de este
              canal seguro.
            </p>
            <form className="contact-form" action="#" method="POST">
              <div className="form-group">
                <label htmlFor="name">CODENAME (Nombre)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">FRECUENCIA (Email)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">MENSAJE DE MISIÓN</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Detalles de la operación..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                ENVIAR TRANSMISIÓN
              </button>
            </form>
          </section>
        </div>
      </div>
      <FooterXP />
    </>
  );
}

export default ContactLayout;
