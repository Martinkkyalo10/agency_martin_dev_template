// pages/portfolio-details.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioDetails() {
  const technologies = ["Docker", "Kubernetes", "AWS", "React", "Node.js"];
  const galleryImages = [
    { id: 1, src: "/img/portfolio-1.jpg", alt: "Project screenshot 1" },
    { id: 2, src: "/img/portfolio-2.jpg", alt: "Project screenshot 2" },
    { id: 3, src: "/img/portfolio-3.jpg", alt: "Project screenshot 3" },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2>Project Details</h2>
          <p>Detailed description of the project...</p>

          <h4 className="mt-4">Technologies Used</h4>
          <div className="mb-4">
            <ul className="list-unstyled">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-primary me-2"
                  />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <h4 className="mt-4">Project Gallery</h4>
          <div className="row">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-md-4 mb-4">
                <img
                  src={image.src}
                  className="img-fluid rounded"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
