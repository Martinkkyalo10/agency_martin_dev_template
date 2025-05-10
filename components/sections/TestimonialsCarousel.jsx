"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TestimonialsCarousel() {
  useEffect(() => {
    // Initialize carousel if needed
    if (typeof window !== "undefined" && window.$?.fn?.owlCarousel) {
      $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      });
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Tech Startup, CEO",
      quote:
        "Martin Devs transformed our cloud infrastructure and streamlined our development processes.",
      rating: 5,
      image: "/img/testimonial-img-1.jpg",
    },
    // ... other testimonials
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => {
      let starClass = "fas fa-star";
      if (i < Math.floor(rating)) {
        starClass += " text-primary";
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        starClass += "-half-alt text-primary";
      } else {
        starClass += " text-secondary";
      }
      return <i key={i} className={starClass}></i>;
    });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="testimonial-carousel owl-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-inner bg-light rounded p-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      width={80}
                      height={80}
                      className="rounded-circle border border-3 border-primary"
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ms-4">
                    <h5>{testimonial.name}</h5>
                    <p className="mb-0 text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4">"{testimonial.quote}"</p>
                <div className="d-flex">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
