// components/Navbar.js
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0 ${
        isScrolled ? "navbar-scrolled" : ""
      }`}>
      <Link href="/" className="navbar-brand p-0">
        <h1 className="display-6 text-primary m-0">
          <FontAwesomeIcon icon={faCode} className="me-3" />
          Martin Devs
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link">
            About
          </Link>
          <Link href="#services" className="nav-item nav-link">
            Services
          </Link>
          <Link href="/portfolio" className="nav-item nav-link">
            Portfolio
          </Link>
          <Link href="/blog" className="nav-item nav-link">
            Blog
          </Link>
          <Link href="/contact" className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
        <Link
          href="/login"
          className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">
          Log In
        </Link>
      </div>
    </nav>
  );
}
