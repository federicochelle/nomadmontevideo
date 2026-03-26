import { useEffect, useState } from "react";
import "./Properties.css";
import { supabase } from "../lib/supabase";
import PropertyCard from "./PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error Supabase:", error);
        setError("No se pudieron cargar las propiedades.");
        setLoading(false);
        return;
      }

      const formattedProperties = data.map((property) => ({
        ...property,
        images: [property.image_1, property.image_2, property.image_3].filter(
          Boolean
        ),
      }));

      setProperties(formattedProperties);
      setLoading(false);
    };

    getProperties();
  }, []);

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

        {loading && <p>Cargando propiedades...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && properties.length === 0 && (
          <p>No hay propiedades publicadas todavía.</p>
        )}

        {!loading && !error && properties.length > 0 && (
          <div className="properties__grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Properties;