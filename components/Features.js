// components/Features.js
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    icon: "envelope",
    title: "Email Marketing",
    description:
      "Comprehensive email marketing solutions for your business growth.",
    delay: "0.1s",
  },
  {
    icon: "mail-bulk",
    title: "Email Builder",
    description: "Easy-to-use email builder with drag and drop functionality.",
    delay: "0.3s",
  },
  {
    icon: "sitemap",
    title: "Customer Builder",
    description: "Build and manage your customer relationships effectively.",
    delay: "0.5s",
  },
  {
    icon: "tasks",
    title: "Campaign Manager",
    description: "Plan, execute and track your marketing campaigns.",
    delay: "0.7s",
  },
];

export default function Features() {
  return (
    <div className="container-fluid feature overflow-hidden py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "900px" }}>
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-5 mb-4">
            Important Features For Your Business
          </h1>
          <p className="mb-0">
            We provide a comprehensive suite of features designed to help your
            business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="row g-4 justify-content-center text-center mb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={feature.delay}>
              <div className="text-center p-4">
                <div className="d-inline-block rounded bg-light p-4 mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="fa-5x text-secondary"
                  />
                </div>
                <div className="feature-content">
                  <Link href="#" className="h4 d-block mb-3">
                    {feature.title}{" "}
                    <FontAwesomeIcon
                      icon="long-arrow-alt-right"
                      className="ms-2"
                    />
                  </Link>
                  <p className="mt-4 mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
