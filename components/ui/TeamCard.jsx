import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <div className="team-item bg-light rounded">
      <div className="row g-0">
        <div className="col-md-4">
          <Image
            src={member.image}
            className="img-fluid w-100 rounded-start"
            alt={member.name}
            width={300}
            height={300}
          />
        </div>
        <div className="col-md-8 p-4">
          <h3>{member.name}</h3>
          <h6 className="text-primary mb-4">{member.role}</h6>
          <p className="mb-4">Brief bio or description would go here...</p>
          <div className="d-flex">
            <a
              href={member.social.twitter}
              className="btn btn-primary rounded-circle me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={member.social.linkedin}
              className="btn btn-primary rounded-circle me-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={member.social.github}
              className="btn btn-primary rounded-circle">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
