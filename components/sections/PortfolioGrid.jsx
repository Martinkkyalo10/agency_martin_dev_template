import PortfolioCard from "@/components/ui/PortfolioCard";

const projects = [
  {
    id: 1,
    slug: "cloud-optimization",
    title: "Cloud Infrastructure Optimization",
    description:
      "Optimized AWS infrastructure reducing costs by 40% while improving performance for global e-commerce platform.",
    image: "portfolio-1.png",
    tags: ["AWS", "Terraform", "DevOps"],
    results: [
      "40% cost reduction in cloud spending",
      "Improved system performance by 35%",
      "Implemented auto-scaling for traffic spikes",
    ],
    client: "Global E-Commerce Platform",
    duration: "3 months",
    teamSize: "5 engineers",
  },
  {
    id: 2,
    slug: "web-application",
    title: "Full-Stack Web Application",
    description:
      "Developed responsive application with React frontend and Node.js backend for financial services.",
    image: "portfolio-2.png",
    tags: ["React", "Node.js", "TypeScript"],
    results: [
      "300ms API response time under load",
      "100% WCAG accessibility compliance",
      "Reduced bounce rate by 25%",
    ],
    client: "Financial Services Provider",
    duration: "6 months",
    teamSize: "8 engineers",
  },
  {
    id: 3,
    slug: "devops-automation",
    title: "DevOps Automation",
    description:
      "Implemented CI/CD pipelines with Jenkins and Docker, reducing deployment times by 70%.",
    image: "portfolio-3.png",
    tags: ["Jenkins", "Docker", "Kubernetes"],
    results: [
      "Deployment time reduced from 45min to 15min",
      "Zero-downtime deployment strategy",
      "Automated testing coverage increased to 85%",
    ],
    client: "Healthcare Technology Company",
    duration: "4 months",
    teamSize: "4 engineers",
  },
  {
    id: 4,
    slug: "database-system",
    title: "Database Management System",
    description:
      "Designed scalable database architecture handling 10K+ transactions per second for e-commerce.",
    image: "portfolio-4.png",
    tags: ["PostgreSQL", "Redis", "Elasticsearch"],
    results: [
      "10,000+ transactions per second capacity",
      "99.99% system availability",
      "Real-time analytics with sub-second latency",
    ],
    client: "E-Commerce Retailer",
    duration: "5 months",
    teamSize: "6 engineers",
  },
  {
    id: 5,
    slug: "mobile-app",
    title: "Cross-Platform Mobile App",
    description:
      "Built performant mobile application for both iOS and Android using React Native.",
    image: "portfolio-5.png",
    tags: ["React Native", "Firebase", "GraphQL"],
    results: [
      "4.8/5 average app store rating",
      "50,000+ monthly active users",
      "Offline-first functionality",
    ],
    client: "Fitness Startup",
    duration: "7 months",
    teamSize: "5 engineers",
  },
];

export default function PortfolioGrid() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "900px" }}>
          <h4 className="mb-1 text-primary">Our Work</h4>
          <h1 className="display-5 mb-4">Explore Our Recent Projects</h1>
          <p className="mb-0">
            Here are some of the projects we've delivered successfully. We take
            pride in our work and are always excited to show you how we can
            transform your ideas into reality.
          </p>
        </div>

        {/* Project Filter Controls */}
        <div className="mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="btn btn-outline-primary rounded-pill px-4 filter-btn active">
              All Projects
            </button>
            <button className="btn btn-outline-primary rounded-pill px-4 filter-btn">
              Cloud
            </button>
            <button className="btn btn-outline-primary rounded-pill px-4 filter-btn">
              Web Apps
            </button>
            <button className="btn btn-outline-primary rounded-pill px-4 filter-btn">
              DevOps
            </button>
            <button className="btn btn-outline-primary rounded-pill px-4 filter-btn">
              Databases
            </button>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              delay={`${0.1 + index * 0.2}s`}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.3s">
          <button className="btn btn-primary rounded-pill px-5 py-3">
            View More Projects <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
