import PricingCard from "@/components/ui/PricingCard";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups",
    price: "$19/mo",
    features: ["Basic Cloud Hosting", "5 DevOps Pipelines", "Email Support"],
    missingFeature: "Dedicated Support",
    delay: "0.1s",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$49/mo",
    features: [
      "Advanced Cloud Solutions",
      "Unlimited DevOps Pipelines",
      "Priority Email & Chat Support",
    ],
    missingFeature: "Dedicated Team",
    delay: "0.3s",
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "$99/mo",
    features: [
      "Full Cloud Infrastructure",
      "Custom DevOps Solutions",
      "24/7 Dedicated Support",
      "Tailored Consultancy",
    ],
    missingFeature: null,
    delay: "0.5s",
  },
];

export default function PricingPlans() {
  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={plan.delay}>
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
