import Image from "next/image";
import Link from "next/link";

export default function PortfolioDetails({ id }) {
  // In a real app, fetch project data based on ID
  const project = {
    id: 1,
    title: "Cloud Infrastructure Optimization",
    description:
      "Optimized cloud infrastructure for a leading e-commerce brand",
    challenges: [
      "High infrastructure costs",
      "Limited scalability",
      "Performance bottlenecks",
    ],
    solutions: [
      "Cloud optimization using AWS",
      "Infrastructure as Code (IaC)",
      "Auto-scaling mechanisms",
    ],
    results: "40% performance improvement and 30% cost reduction",
    technologies: [
      { name: "AWS", description: "Cloud Optimization" },
      { name: "Terraform", description: "Infrastructure as Code" },
      { name: "Docker", description: "Containerization" },
      { name: "Kubernetes", description: "Orchestration" },
    ],
    images: [
      "/img/portfolio-1.jpg",
      "/img/portfolio-2.jpg",
      "/img/portfolio-3.jpg",
    ],
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <div className="project-img">
            <Image
              src={project.images[0]}
              className="img-fluid w-100"
              alt={project.title}
              width={800}
              height={450}
            />
          </div>
          <div className="project-content mt-4">
            <h4 className="text-primary">Project Overview</h4>
            <p>{project.description}</p>

            <h4 className="text-primary mt-4">Challenges</h4>
            <ul>
              {project.challenges.map((challenge, i) => (
                <li key={i}>{challenge}</li>
              ))}
            </ul>

            <h4 className="text-primary mt-4">Solutions Provided</h4>
            <ul>
              {project.solutions.map((solution, i) => (
                <li key={i}>{solution}</li>
              ))}
            </ul>

            <h4 className="text-primary mt-4">Results</h4>
            <p>{project.results}</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="project-info bg-light p-4 rounded">
            <h4 className="text-primary">Technologies Used</h4>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>
                  <strong>{tech.name}</strong> - {tech.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4 className="text-primary">Project Gallery</h4>
          <div className="row g-4">
            {project.images.map((image, i) => (
              <div key={i} className="col-md-4">
                <Image
                  src={image}
                  className="img-fluid w-100"
                  alt={`${project.title} ${i + 1}`}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
