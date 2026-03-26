import { useState } from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const hasImages = property.images && property.images.length > 0;
  const totalImages = property.images?.length || 0;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (!hasImages || totalImages <= 1) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (!hasImages || totalImages <= 1) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <article className="property-card">
      
      {/* MEDIA */}
      <div className="property-card__media">
        {hasImages ? (
          <>
            <img
              src={property.images[currentIndex]}
              alt={property.name}
              className="property-card__image"
            />

            {totalImages > 1 && (
              <>
                {/* FLECHA IZQUIERDA */}
                <button
                  type="button"
                  className="property-card_arrow property-card__arrow--left"
                  onClick={handlePrev}
                  aria-label="Imagen anterior"
                >
                  ‹
                </button>

                {/* FLECHA DERECHA */}
                <button
                  type="button"
                  className="property-card_arrow property-card__arrow--right"
                  onClick={handleNext}
                  aria-label="Imagen siguiente"
                >
                  ›
                </button>

                {/* DOTS */}
                <div className="property-card__dots">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`property-card__dot ${
                        index === currentIndex ? "is-active" : ""
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="property-card__placeholder">
            <span>Sin imagen</span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="property-card__content">
        <span className="property-card__location">
          {property.location}
        </span>

        <h3 className="property-card__title">
          {property.name}
        </h3>

        <p className="property-card__meta">
          {property.type} · {property.guests}
        </p>

        <p className="property-card__description">
          {property.description}
        </p>

        <Link
          to={`/propiedad/${property.id}`}
          className="property-card__cta"
        >
          Ver propiedad
        </Link>
      </div>

    </article>
  );
}

export default PropertyCard;