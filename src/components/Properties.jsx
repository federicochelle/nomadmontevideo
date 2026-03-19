import "./Properties.css";
import propertiesData from "../data/propertiesData";
import PropertyCard from "./PropertyCard";

function Properties() {
  return (
    <section className="properties surface" id="propiedades">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Propiedades en gestión</span>
          <h2 className="section-title text-balance">
            Algunas unidades que reflejan nuestro enfoque de trabajo
          </h2>
          <p className="section-text">
            Presentamos ejemplos de propiedades administradas con foco en
            operación ordenada, buena experiencia del huésped y una presentación
            cuidada.
          </p>
        </div>

        <div className="properties__grid">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
