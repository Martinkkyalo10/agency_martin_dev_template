// components/Pricing.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "BASIC",
    price: "00",
    popular: false,
    features: [
      { text: "Limited Access Library", included: true },
      { text: "Customer Support", included: true },
      { text: "Pre-built Email Templates", included: true },
      { text: "Reporting & Analytics", included: true },
      { text: "Forms & Landing Pages", included: true },
      { text: "A/B Testing", included: true },
      { text: "Email Scheduling", included: true },
      { text: "Automated Customer Journeys", included: true },
      { text: "Creative Assistant", included: false },
      { text: "Role-based Access", included: false },
    ],
  },
  {
    name: "STANDARD",
    price: "23",
    popular: true,
    features: [
      { text: "Limited Access Library", included: true },
      { text: "Customer Support", included: true },
      { text: "Pre-built Email Templates", included: true },
      { text: "Reporting & Analytics", included: true },
      { text: "Forms & Landing Pages", included: true },
      { text: "A/B Testing", included: true },
      { text: "Email Scheduling", included: true },
      { text: "Automated Customer Journeys", included: true },
      { text: "Creative Assistant", included: false },
      { text: "Role-based Access", included: false },
    ],
  },
  {
    name: "PREMIUM",
    price: "49",
    popular: false,
    features: [
      { text: "Limited Access Library", included: true },
      { text: "Customer Support", included: true },
      { text: "Pre-built Email Templates", included: true },
      { text: "Reporting & Analytics", included: true },
      { text: "Forms & Landing Pages", included: true },
      { text: "A/B Testing", included: true },
      { text: "Email Scheduling", included: true },
      { text: "Automated Customer Journeys", included: true },
      { text: "Creative Assistant", included: true },
      { text: "Role-based Access", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container-fluid price py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "900px" }}>
          <h4 className="text-primary">Pricing Plan</h4>
          <h1 className="display-5 mb-4">Not Sure Which Plan Is For You?</h1>
          <p className="mb-0">
            We offer flexible pricing plans to suit businesses of all sizes.
            Choose the one that fits your needs.
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay={`0.${index * 2 + 1}s`}>
              <div className="price-item bg-light rounded text-center position-relative">
                {plan.popular && (
                  <div className="price-item-offer">Popular</div>
                )}
                <div
                  className={`text-center ${
                    plan.popular ? "text-primary" : "text-dark"
                  } border-bottom d-flex flex-column justify-content-center p-4`}
                  style={{ width: "100%", height: "160px" }}>
                  <p className="fs-2 fw-bold text-uppercase mb-0">
                    {plan.name}
                  </p>
                  <div className="d-flex justify-content-center">
                    <strong className="align-self-start">$</strong>
                    <p className="mb-0">
                      <span className="display-5">{plan.price}</span>/mo
                    </p>
                  </div>
                </div>
                <div className="text-start p-5">
                  {plan.features.map((feature, i) => (
                    <p key={i}>
                      <FontAwesomeIcon
                        icon={feature.included ? faCheck : faTimes}
                        className={`me-1 ${
                          feature.included ? "text-success" : "text-danger"
                        }`}
                      />
                      {feature.text}
                    </p>
                  ))}
                  <button
                    className="btn btn-light rounded-pill py-2 px-5 w-100"
                    type="button">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
