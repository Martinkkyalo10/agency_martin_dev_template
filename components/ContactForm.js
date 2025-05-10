// components/ContactForm.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactForm() {
  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "900px" }}>
          <h4 className="text-primary mb-4">Contact Us</h4>
          <h1 className="display-5 mb-4">Get In Touch With Us</h1>
          <p className="mb-0">
            Have questions or want to discuss your project? Reach out to our
            team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <h2 className="display-5 mb-2">Our Contact Form</h2>
            <p className="mb-4">
              Send us a message and we'll respond within 24 hours.
            </p>

            <form>
              <div className="row g-3">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="project"
                      placeholder="Project"
                    />
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "160px" }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-light d-flex align-items-center justify-content-center mb-3"
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="fa-2x text-primary"
                />
              </div>
              <div className="ms-4">
                <h4>Address</h4>
                <p className="mb-0">Moi Avenue, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-light d-flex align-items-center justify-content-center mb-3"
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="fa-2x text-primary"
                />
              </div>
              <div className="ms-4">
                <h4>Mobile</h4>
                <p className="mb-0">+254 715 836392</p>
                <p className="mb-0">+254 759 669324</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-light d-flex align-items-center justify-content-center mb-3"
                style={{ width: "90px", height: "90px", borderRadius: "50px" }}>
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="fa-2x text-primary"
                />
              </div>
              <div className="ms-4">
                <h4>Email</h4>
                <p className="mb-0">martinkkyalo10@gmail.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="me-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50px",
                  }}>
                  <FontAwesomeIcon
                    icon="share"
                    className="fa-2x text-primary"
                  />
                </div>
              </div>
              <div className="d-flex">
                <Link
                  href="#"
                  className="btn btn-lg-square btn-primary rounded-circle me-2">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link
                  href="#"
                  className="btn btn-lg-square btn-primary rounded-circle mx-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  href="#"
                  className="btn btn-lg-square btn-primary rounded-circle mx-2">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href="#"
                  className="btn btn-lg-square btn-primary rounded-circle mx-2">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded h-100">
              <iframe
                className="rounded w-100"
                style={{ height: "500px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808560553203!2d36.8215483153312!3d-1.2923598359806928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5a5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sMoi%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
