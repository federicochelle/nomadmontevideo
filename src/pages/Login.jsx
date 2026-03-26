import { useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./Login.css";
import logo from "../assets/logo.png";

function Login({ session }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (session) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      console.error("Error login:", error);
      setMessage("Email o contraseña incorrectos");
      setLoading(false);
      return;
    }

    setMessage("Login correcto");
    setLoading(false);
  };

  return (
  <main className="login-center">
    <div className="login-center__card">

      {/* LOGO */}
      <div className="login-center__logo">
        <img src={logo} alt="Nomad" />
        <span>Nomad Management</span>
      </div>

      <div className="login-center__head">
        <h1>Iniciar sesión</h1>
       
      </div>

      <form onSubmit={handleSubmit} className="login-center__form">
        <div className="login-center__field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-center__field">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Tu contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar al panel"}
        </button>
      </form>

      {message && <p className="login-center__message">{message}</p>}
    </div>
  </main>
);
}

export default Login;