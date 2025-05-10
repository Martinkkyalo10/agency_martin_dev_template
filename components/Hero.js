// components/Hero.js
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="container-fluid hero-header overflow-hidden px-5">
      <div className="row gy-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <h1 className="display-4 text-dark mb-4">
            Transforming Ideas into Scalable Software Solutions
          </h1>
          <p className="fs-4 mb-4">
            From cloud automation to full-stack web development, Martin Devs
            builds high-performance applications for businesses worldwide.
          </p>
          <Link
            href="#services"
            className="btn btn-primary rounded-pill py-3 px-5">
            Get Started <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </Link>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <img
            src="/img/hero-img-1.png"
            className="img-fluid w-100"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}
