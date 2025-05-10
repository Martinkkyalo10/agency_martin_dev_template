import Button from "@/components/ui/Button";

export default function PricingCard({ plan }) {
  return (
    <div className="price-item bg-light rounded text-center p-4 h-100">
      <h2 className="text-primary">{plan.name}</h2>
      <p className="fs-4">{plan.description}</p>
      <h3 className="text-primary display-4">{plan.price}</h3>
      <ul className="list-unstyled text-start px-3 mb-4">
        {plan.features.map((feature, i) => (
          <li key={i} className="mb-2">
            <i className="fas fa-check text-success me-2"></i> {feature}
          </li>
        ))}
        {plan.missingFeature && (
          <li className="mb-2">
            <i className="fas fa-times text-danger me-2"></i>{" "}
            {plan.missingFeature}
          </li>
        )}
      </ul>
      <Button variant="primary" className="w-100 py-2">
        Get Started
      </Button>
    </div>
  );
}
