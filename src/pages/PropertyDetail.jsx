import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./PropertyDetail.css";

function PropertyDetail() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProperty = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error cargando propiedad:", error);
        setError("No se pudo cargar la propiedad.");
        setLoading(false);
        return;
      }

      setProperty(data);
      setLoading(false);
    };

    getProperty();
  }, [id]);

  if (loading) {
    return (
      <main className="property-detail">
        <div className="container">
          <p>Cargando propiedad...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="property-detail">
        <div className="container">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  if (!property) {
    return (
      <main className="property-detail">
        <div className="container">
          <p>Propiedad no encontrada.</p>
        </div>
      </main>
    );
  }

  const images = [property.image_1, property.image_2, property.image_3].filter(
    Boolean
  );

  return (
    <main className="property-detail">
      <section className="property-detail__hero">
        <div className="container">
          <div className="property-detail__header">
            <div className="property-detail__heading">
              <span className="property-detail__location">
                {property.location}
              </span>
              <h1 className="property-detail__title">{property.name}</h1>
            </div>

            <Link to="/" className="property-detail__back">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <section className="property-detail__gallery-section">
        <div className="container">
          {images.length > 0 ? (
            <div className="property-detail__gallery">
              <div className="property-detail__gallery-main">
                <img src={images[0]} alt={property.name} />
              </div>

              <div className="property-detail__gallery-side">
                {images[1] ? (
                  <div className="property-detail__gallery-thumb">
                    <img src={images[1]} alt={`${property.name} 2`} />
                  </div>
                ) : (
                  <div className="property-detail_gallery-thumb property-detail_gallery-thumb--empty" />
                )}

                {images[2] ? (
                  <div className="property-detail__gallery-thumb">
                    <img src={images[2]} alt={`${property.name} 3`} />
                  </div>
                ) : (
                  <div className="property-detail_gallery-thumb property-detail_gallery-thumb--empty" />
                )}
              </div>
            </div>
          ) : (
            <div className="property-detail__empty">
              <span>Sin imágenes disponibles</span>
            </div>
          )}
        </div>
      </section>

      <section className="property-detail__content-section">
        <div className="container">
          <div className="property-detail__content-grid">
            <div className="property-detail__main">
              <h2 className="property-detail__section-title">
                Sobre la propiedad
              </h2>
              <p className="property-detail__description">
                {property.description}
              </p>
            </div>

            <aside className="property-detail__sidebar">
              <h3 className="property-detail__section-title">Resumen</h3>

              <ul className="property-detail__summary">
                <li>
                  <span>Ubicación</span>
                  <strong>{property.location}</strong>
                </li>
                <li>
                  <span>Tipo</span>
                  <strong>{property.type}</strong>
                </li>
                <li>
                  <span>Capacidad</span>
                  <strong>{property.guests}</strong>
                </li>
              </ul>

              <a
                href="#contacto"
                className="property-detail__back"
              >
                Consultar esta propiedad →
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetail;