import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: "cloud",
    title: "Cloud Solutions",
    description:
      "Leverage cloud computing for scalability, security, and cost efficiency.",
    delay: "0.1s",
  },
  {
    icon: "cogs",
    title: "DevOps Automation",
    description:
      "Enhance productivity with seamless CI/CD pipelines and automation tools.",
    delay: "0.3s",
  },
  {
    icon: "code",
    title: "Custom Development",
    description:
      "Tailor-made software solutions built to drive business growth and efficiency.",
    delay: "0.5s",
  },
  {
    icon: "shield-alt",
    title: "Cybersecurity",
    description:
      "Robust security implementations to safeguard your business data and applications.",
    delay: "0.7s",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center text-center mb-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay={feature.delay}>
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
