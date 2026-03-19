import { useState } from "react";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = property.images.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <article className="property-card">
      <div className="property-card__media">
        <img
          src={property.images[currentIndex]}
          alt={property.name}
          className="property-card__image"
        />

        <button
          className="property-card__arrow property-card__arrow--left"
          onClick={handlePrev}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button
          className="property-card__arrow property-card__arrow--right"
          onClick={handleNext}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

        <div className="property-card__dots">
          {property.images.map((_, index) => (
            <button
              key={index}
              className={`property-card__dot ${
                index === currentIndex ? "is-active" : ""
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="property-card__content">
        <span className="property-card__location">{property.location}</span>

        <h3 className="property-card__title">{property.name}</h3>

        <p className="property-card__meta">
          {property.type} · {property.guests}
        </p>

        <p className="property-card__description">{property.description}</p>
      </div>
    </article>
  );
}

export default PropertyCard;
