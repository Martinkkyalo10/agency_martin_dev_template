import Link from "next/link";

export default function PortfolioHeader() {
  return (
    <div className="container-fluid bg-breadcrumb position-relative">
      {/* Breadcrumb animation elements */}
      <ul className="breadcrumb-animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          Our Portfolio
        </h3>
        {/* <ol
          className="breadcrumb justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <Link href="/" className="text-white"></Link>
          </li>
          <li className="breadcrumb-item active text-primary"></li>
        </ol> */}
      </div>
    </div>
  );
}
