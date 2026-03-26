import "./Location.css";
import montevideoImg from "../assets/salvo.jpg";
import puntaImg from "../assets/pde.webp";

function Locations() {
  return (
    <section className="locations" id="cobertura">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Cobertura</span>
          <h2 className="section-title">
            Operamos en los principales destinos
          </h2>
          <p className="section-text">
            Gestionamos propiedades en zonas con alta demanda de alquiler temporario,
            adaptando la operación a cada mercado y a cada tipo de huésped.
          </p>
        </div>

        <div className="locations__grid">
          <article className="location-card">
            <div className="location-card__media">
              <img src={montevideoImg} alt="Montevideo" />
            </div>

            <div className="location-card__content">
              <h3>Montevideo</h3>
              <p>
                Gestión orientada a estadías urbanas, corporativas y de corta
                duración, con foco en operación ordenada y presentación cuidada.
              </p>
            </div>
          </article>

          <article className="location-card">
            <div className="location-card__media">
              <img src={puntaImg} alt="Punta del Este" />
            </div>

            <div className="location-card__content">
              <h3>Punta del Este</h3>
              <p>
                Estrategias adaptadas a demanda estacional, turismo y propiedades
                con perfil premium, maximizando cada período de ocupación.
              </p>
            </div>
          </article>
        </div>

        <div className="locations__cta">
          <div className="locations__cta-card surface">
            <div className="locations__cta-copy">
              <h3>¿Tu propiedad está en alguna de estas zonas?</h3>
              <p>
                Podemos evaluar su potencial y proponerte una gestión profesional
                pensada para alquileres temporarios.
              </p>
            </div>

            <a href="#contacto" className="btn btn--primary">
              Quiero asesoramiento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;