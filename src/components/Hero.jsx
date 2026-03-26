import "./Hero.css";
import heroImg from "../assets/rambla.webp";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div
          className="hero__bg-slide"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="hero__overlay" />
      </div>

      <div className="container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            Gestión de alquileres temporales
          </span>

          <h1 className="hero__title text-balance">
            Tu propiedad, trabajando por vos
          </h1>

          <p className="hero__text">
            Administramos propiedades para alquileres temporales por Airbnb para
            que generes ingresos sin ocuparte de la gestión diaria.
          </p>

          <div className="hero__actions">
            <a href="#servicios" className="btn btn--primary">
              Ver servicios
            </a>

            <a href="#contacto" className="btn btn--hero">
              Quiero asesoramiento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;