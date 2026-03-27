function Contact() {
  return (
    <section className="contact">
      <div className="contact__grid">
        {/* LEFT */}
        <div className="contact__left">
          <h2>
            Let's discuss the next <br />
            <em>curation.</em>
          </h2>

          <p>
            Open for select collaborations and creative leadership roles for
            2024 and beyond.
          </p>

          <div className="contact__actions">
            <button>
              <i className="lni lni-share-1"></i>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <form className="contact__form">
          <div className="field">
            <label>FULL NAME</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="field">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="field">
            <label>MESSAGE</label>
            <textarea placeholder="Tell me about your project..."></textarea>
          </div>

          <button className="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
