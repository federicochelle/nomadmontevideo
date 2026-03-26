import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Nomad Montevideo"
            className="navbar__logo-img"
          />
          Nomad Management
        </a>

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

        <button
          className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;