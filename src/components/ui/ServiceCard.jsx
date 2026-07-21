export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>
        <span className="service-card__icon" aria-hidden="true">
          ↗
        </span>
      </div>

      <h3 className="service-card__title">{service.title}</h3>

      <p className="service-card__description">{service.description}</p>

      <ul className="feature-list">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
