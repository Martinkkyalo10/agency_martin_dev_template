// components/ServiceItem.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceItem({ icon, title, description, delay }) {
  return (
    <div
      className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
      data-wow-delay={delay}>
      <div className="service-item p-4">
        <div className="service-icon bg-light rounded p-4 mb-4">
          <FontAwesomeIcon icon={icon} className="fa-5x text-secondary" />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
