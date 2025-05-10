// components/sections/ContactForm.js
export default function ContactForm() {
  return (
    <>
      <h2 className="display-5 mb-2">Our Contact Form</h2>
      <form>
        <div className="row g-3">
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
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
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="form-floating">
              <input
                type="tel"
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
                required
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
                style={{ height: "160px" }}
                required></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100 py-3">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
