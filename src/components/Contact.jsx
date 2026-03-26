import { useState } from "react";
import "./Contact.css";
import { supabase } from "../lib/supabase";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    const { error } = await supabase.from("contact_leads").insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    ]);

    if (error) {
      console.error("CONTACT ERROR:", error);
      setFeedback(`Error: ${error.message}`);
      setLoading(false);
      return;
    }

    setFeedback("Mensaje enviado correctamente");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className="contact" id="contacto">
      <div className="container container--sm">
        <div className="section-header text-center">
          <span className="section-kicker">Contacto</span>
          <h2 className="section-title">Sumate a una gestión profesional.</h2>
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

          <button className="btn btn--primary" disabled={loading}>
            {loading ? "Enviando..." : "Enviar consulta"}
          </button>
        </form>

        {feedback && (
          <p style={{ marginTop: "16px", textAlign: "center" }}>{feedback}</p>
        )}
      </div>
    </section>
  );
}

export default Contact;