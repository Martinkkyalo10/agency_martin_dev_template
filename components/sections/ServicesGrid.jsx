import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: "cloud",
    title: "Cloud Solutions",
    description: "Secure, scalable, and cost-effective cloud services",
    delay: "0.1s",
  },
  {
    icon: "cogs",
    title: "DevOps Automation",
    description: "CI/CD pipelines and automation tools",
    delay: "0.3s",
  },
  {
    icon: "code",
    title: "Custom Software Development",
    description: "Bespoke software tailored to your needs",
    delay: "0.5s",
  },
  {
    icon: "shield-alt",
    title: "Cybersecurity",
    description: "Protect your business from cyber threats",
    delay: "0.7s",
  },
];

export default function ServicesGrid() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={service.delay}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
