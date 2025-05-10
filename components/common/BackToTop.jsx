"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href="#"
      onClick={scrollToTop}
      className={`back-to-top btn btn-primary rounded-circle ${
        isVisible ? "visible" : ""
      }`}>
      <i className="fa fa-arrow-up"></i>
    </Link>
  );
}
