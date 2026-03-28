import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xaqlqrll", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000); // Desaparece tras 5 segundos
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      <div className="contact__grid">
        {/* LEFT */}
        <div className="contact__left">
          <h2>
            Hablemos del próximo <br />
            <em>proyecto.</em>
          </h2>

          <p>
            Disponible para colaboraciones selectas y oportunidades en desarrollo
            y tecnología.
          </p>

          <div className="contact__actions">
            <button>
              <i className="lni lni-share-1"></i>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <form 
          className="contact__form" 
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label>NOMBRE COMPLETO</label>
            <input type="text" name="name" placeholder="Juan Pérez" required />
          </div>

          <div className="field">
            <label>CORREO ELECTRÓNICO</label>
            <input type="email" name="email" placeholder="correo@ejemplo.com" required />
          </div>

          <div className="field">
            <label>MENSAJE</label>
            <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
          </div>

          <button type="submit" className="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>

      {/* TOAST MESSAGE */}
      {status === "success" && (
        <div className="toast-notification">
          <i className="lni lni-checkmark-circle"></i> ¡Mensaje enviado con éxito!
        </div>
      )}
    </section>
  );
}

export default Contact;