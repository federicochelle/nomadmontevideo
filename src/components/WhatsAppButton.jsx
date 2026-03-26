import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phone = "59898892350";
  const message =
    "Hola, me gustaría consultar por la gestión de una propiedad.";

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      className="whatsapp-sticky"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
    >
      <span className="whatsapp-sticky__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12a8 8 0 0 1-11.72 7.05L4 20l.98-4.04A8 8 0 1 1 20 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.4 8.9c.2-.45.4-.46.58-.47h.5c.17 0 .4.06.52.34.13.29.43 1.04.46 1.11.04.08.07.18.01.29-.06.11-.1.18-.2.28-.1.1-.2.22-.28.3-.1.1-.2.2-.08.39.12.18.53.87 1.14 1.42.78.69 1.43.9 1.64 1 .2.08.32.07.44-.05.11-.12.49-.57.62-.77.13-.2.25-.17.42-.1.18.06 1.11.52 1.3.61.19.1.31.14.36.22.04.08.04.48-.11.94-.15.45-.86.88-1.2.93-.31.05-.7.08-1.13-.06-.26-.08-.59-.2-1.02-.39-1.79-.78-2.95-2.61-3.04-2.73-.08-.12-.73-.98-.73-1.87 0-.89.46-1.33.63-1.52Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span className="whatsapp-sticky__label">Hablemos!</span>
    </a>
  );
}

export default WhatsAppButton;