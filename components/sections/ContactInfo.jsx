// components/sections/ContactInfo.js
export default function ContactInfo() {
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <div
          className="bg-light d-flex align-items-center justify-content-center mb-3"
          style={{ width: "90px", height: "90px", borderRadius: "50px" }}>
          <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
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
          <i className="fa fa-phone-alt fa-2x text-primary"></i>
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
          <i className="fa fa-envelope-open fa-2x text-primary"></i>
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
            style={{ width: "90px", height: "90px", borderRadius: "50px" }}>
            <i className="fas fa-share fa-2x text-primary"></i>
          </div>
        </div>
        <div className="d-flex">
          <a
            className="btn btn-lg-square btn-primary rounded-circle me-2"
            href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-lg-square btn-primary rounded-circle mx-2"
            href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-lg-square btn-primary rounded-circle mx-2"
            href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-lg-square btn-primary rounded-circle mx-2"
            href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
}
