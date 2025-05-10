// components/AboutSection.js
import Link from "next/link";

export default function AboutSection() {
  return (
    <div
      className="container-fluid overflow-hidden py-5"
      style={{ marginTop: "6rem" }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="RotateMoveLeft">
              <img
                src="/img/about-1.png"
                className="img-fluid w-100"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h4 className="mb-1 text-primary">About Us</h4>
            <h1 className="display-5 mb-4">
              Get Started Easily With a Personalized Product Tour
            </h1>
            <p className="mb-4">
              We specialize in high-performance software development, DevOps
              automation, and cloud solutions to help businesses scale and
              succeed in the digital world.
            </p>
            <Link
              href="/about"
              className="btn btn-primary rounded-pill py-3 px-5">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
