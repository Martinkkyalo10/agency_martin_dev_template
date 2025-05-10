import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ project, delay }) {
  // Image source mapping with your specified files
  const imageSources = {
    "portfolio-1.png": "/img/cloud-infrastructure.jpg",
    "portfolio-2.png": "/img/fullstack.jpg",
    "portfolio-3.png": "/img/devops-pipeline.jpg",
    "portfolio-4.png": "/img/database-management.jpg",
    "portfolio-5.png": "/img/Cloud Infrastructure Optimization.jpg",
  };

  return (
    <div
      className={`col-md-6 col-lg-4 mb-4 wow fadeInUp`}
      data-wow-delay={delay}>
      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
        <div className="portfolio-img overflow-hidden rounded-top">
          <Image
            src={imageSources[project.image] || `/img/${project.image}`}
            width={600}
            height={400}
            className="img-fluid w-100"
            alt={`${project.title} - ${project.client}`}
            style={{
              objectFit: "cover",
              height: "220px",
            }}
            priority={project.id <= 3} // Lazy load after first 3 items
          />
        </div>
        <div className="card-body d-flex flex-column">
          <div className="mb-3">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="badge bg-primary-light text-primary">
                  {tag}
                </span>
              ))}
            </div>
            <h5 className="card-title fw-bold mb-2">{project.title}</h5>
            <p className="card-text text-muted mb-3">{project.description}</p>
            {project.client && (
              <p className="text-muted small mb-0">
                <strong>Client:</strong> {project.client}
              </p>
            )}
          </div>

          {project.results && (
            <ul className="mt-auto ps-3 text-muted small mb-3">
              {project.results.slice(0, 3).map((result, i) => (
                <li key={i} className="mb-1">
                  {result}
                </li>
              ))}
            </ul>
          )}

          <Link
            href={`/portfolio/${project.slug}`}
            className="btn btn-outline-primary rounded-pill px-4 py-2 mt-auto align-self-start"
            aria-label={`View details for ${project.title}`}>
            View Case Study
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
