import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section id="contacto" className="contact-section">

      <form className="contact-form">
        <h4 className="contact-title">Contáctanos</h4>
        <input
          type="text"
          placeholder="Nombre"
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="contact-input"
        />
        <textarea
          placeholder="Tu mensaje"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>
    </section>
  );
}


