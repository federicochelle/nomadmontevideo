import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Mensaje enviado (simulado)");
  };

  return (
    <section className="contact" id="contacto">
      <div className="container container--sm">
        <div className="section-header text-center">
          <span className="section-kicker">Contacto</span>
          <h2 className="section-title">
            ¿Querés que gestionemos tu propiedad?
          </h2>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label>Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn--primary">Enviar consulta</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
