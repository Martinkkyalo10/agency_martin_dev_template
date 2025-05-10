// app/page.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Devs - Software & DevOps Solutions</title>
        <meta
          name="description"
          content="Professional software development and DevOps services"
        />
      </Head>

      {/* Hero Section */}
      <div className="container-fluid hero-header bg-light position-relative">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3">
                Transform Your Business With Our{" "}
                <span className="text-primary">Tech Solutions</span>
              </h1>
              <p className="mb-4">
                We deliver cutting-edge software development and DevOps
                automation to help your business scale efficiently.
              </p>
              <div className="d-flex gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary rounded-pill py-3 px-4">
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="btn btn-outline-primary rounded-pill py-3 px-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/hero-img-1.png"
                alt="Hero illustration"
                width={600}
                height={500}
                className="img-fluid"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "700px" }}>
            <h4 className="text-primary mb-4">Our Services</h4>
            <h1 className="display-5 mb-4">What We Offer</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-item bg-light p-4">
                  <div className="icon-box bg-primary mb-4">
                    <Image
                      src={`/img/icons/${service.icon}`}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <Link
                    href={service.link}
                    className="btn btn-link text-primary p-0">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Image
                src="/img/about-img.jpg"
                alt="About us"
                width={600}
                height={500}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <h4 className="text-primary mb-4">About Us</h4>
              <h1 className="display-5 mb-4">
                Trusted Tech Partner For Your Business
              </h1>
              <p className="mb-4">
                Martin Devs is a leading software development company
                specializing in custom solutions, cloud services, and DevOps
                automation.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check text-primary me-2"></i> 10+ Years
                  Experience
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-primary me-2"></i> 50+
                  Successful Projects
                </li>
                <li className="mb-3">
                  <i className="fas fa-check text-primary me-2"></i> 24/7
                  Support
                </li>
              </ul>
              <Link
                href="/about"
                className="btn btn-primary rounded-pill py-3 px-4 mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-fluid cta-section position-relative py-5">
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, zIndex: -1 }}>
          <Image
            src="/img/cta-bg.jpg"
            alt="CTA background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-white mb-4">Ready to Start Your Project?</h1>
              <p className="text-white mb-5">
                Contact us today and let's discuss how we can help you achieve
                your business goals.
              </p>
              <Link
                href="/contact"
                className="btn btn-light rounded-pill py-3 px-5">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed specifically for your business needs.",
    icon: "software-icon.png",
    link: "/services/software-development",
  },
  {
    title: "DevOps Automation",
    description: "Streamline your development and deployment processes.",
    icon: "devops-icon.png",
    link: "/services/devops",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure for your applications.",
    icon: "cloud-icon.png",
    link: "/services/cloud",
  },
];
