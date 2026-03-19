import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* LOGO */}
        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          Nomad Montevideo
        </a>

        {/* NAV DESKTOP */}
        <nav className={`navbar__nav ${isOpen ? "is-open" : ""}`}>
          <a href="#propiedades" onClick={closeMenu}>
            Propiedades
          </a>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#como-funciona" onClick={closeMenu}>
            Cómo funciona
          </a>

          <a href="#faq" onClick={closeMenu}>
            Preguntas frecuentes
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        {/* BOTÓN MOBILE */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
