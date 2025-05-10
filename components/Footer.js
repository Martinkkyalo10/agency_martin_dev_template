// components/Footer.js
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faPrint,
  faShare,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-dark mb-4">Company</h4>
                <Link href="/about">About Us</Link>
                <Link href="/services">Our Services</Link>
                <Link href="/portfolio">Our Portfolio</Link>
                <Link href="/blog">Our Blog</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Quick Links</h4>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Services</h4>
                <Link href="/services/cloud">Cloud Solutions</Link>
                <Link href="/services/devops">DevOps Automation</Link>
                <Link href="/services/development">Custom Development</Link>
                <Link href="/services/security">Cybersecurity</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-dark">Contact Info</h4>
                <Link href="https://maps.google.com">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  Moi Avenue, Nairobi, Kenya
                </Link>
                <Link href="mailto:martinkkyalo10@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  martinkkyalo10@gmail.com
                </Link>
                <Link href="tel:+254715836392">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  +254 715 836392
                </Link>
                <div className="d-flex align-items-center mt-3">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="fa-2x text-secondary me-2"
                  />
                  <Link
                    href="#"
                    className="btn-square btn btn-primary rounded-circle mx-1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    href="#"
                    className="btn-square btn btn-primary rounded-circle mx-1">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    href="#"
                    className="btn-square btn btn-primary rounded-circle mx-1">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    href="#"
                    className="btn-square btn btn-primary rounded-circle mx-1">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="text-light me-2"
                />
                Martin Devs, All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
