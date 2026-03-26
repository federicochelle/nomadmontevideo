import { useState } from "react";
import "./FAQ.css";
import faqData from "../data/faqData";

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq surface" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Preguntas frecuentes</span>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </div>

        <div className="faq__list">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__question-text">{item.question}</span>
                  <span className="faq__icon">{isOpen ? "−" : "+"}</span>
                </button>

                <div className={`faq__answer-wrap ${isOpen ? "is-open" : ""}`}>
                  <p className="faq__answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;