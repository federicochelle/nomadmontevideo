import { useState } from "react";
import "./FAQ.css";
import faqData from "../data/faqData";

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Preguntas frecuentes</span>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </div>

        <div className="faq__list">
          {faqData.map((item) => (
            <div key={item.id} className="faq__item">
              <button className="faq__question" onClick={() => toggle(item.id)}>
                {item.question}
                <span>{activeId === item.id ? "−" : "+"}</span>
              </button>

              {activeId === item.id && (
                <p className="faq__answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
