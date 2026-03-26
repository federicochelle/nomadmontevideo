import "./HowItWorks.css";
import stepsData from "../data/stepsData";

function HowItWorks() {
  return (
    <section className="how-it-works surface" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Cómo funciona</span>
          <h2 className="section-title text-balance">
            Un proceso simple para que tu propiedad funcione mejor
          </h2>
          <p className="section-text">
            Trabajamos con una gestión clara y ordenada, enfocada en simplificar
            la operación para el propietario y mejorar la experiencia del
            huésped.
          </p>
        </div>

        <div className="how-it-works__grid">
          {stepsData.map((step) => (
            <article className="how-it-works__card" key={step.id}>
              <span className="how-it-works__number">{step.number}</span>
              <h3 className="how-it-works__title">{step.title}</h3>
              <p className="how-it-works__text">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
