import "./Services.css";
import servicesData from "../data/servicesData.jsx";

function Services() {
  return (
    <section className="services surface" id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Servicios</span>
          <h2 className="section-title text-balance">
            Nos ocupamos de la gestión para que vos no tengas que hacerlo
          </h2>
          <p className="section-text">
            Brindamos un servicio integral de administración para alquileres
            temporales, cuidando cada etapa de la experiencia.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service) => (
            <article className="card services__card" key={service.id}>
              <div className="card__body">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-text">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
