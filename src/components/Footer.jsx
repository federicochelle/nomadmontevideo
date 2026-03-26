import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <img src={logo} alt="Nomad Montevideo" className="footer__logo-img" />
            <span className="footer__logo-text">Nomad Managament</span>
          </a>

          <p className="footer__text">
            Gestión profesional de propiedades para alquileres temporales en Montevideo.
          </p>
        </div>

        <div className="footer__nav-wrap">
          <div className="footer__column">
            <h3 className="footer__title">Navegación</h3>
            <nav className="footer__nav">
              <a href="#propiedades">Propiedades</a>
              <a href="#servicios">Servicios</a>
              <a href="#como-funciona">Cómo funciona</a>
              <a href="#faq">Preguntas frecuentes</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Contacto</h3>
            <div className="footer__contact">
              <a href="mailto:nomadmontevideo@gmail.com">nomadmontevideo@gmail.com</a>
              
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Nomad Managament. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;