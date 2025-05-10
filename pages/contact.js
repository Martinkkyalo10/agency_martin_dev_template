// app/contact/page.js
import Head from "next/head";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import MapSection from "@/components/sections/MapSection";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Martin Devs - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Martin Devs for software development and DevOps solutions"
        />
      </Head>

      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <ul className="breadcrumb-animation">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}>
          <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Contact Us
          </h3>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "900px" }}>
            <h4 className="text-primary mb-4">Contact Us</h4>
            <h1 className="display-5 mb-4">Get In Touch With Us</h1>
            <p className="mb-0">
              Have questions about our services or want to discuss a project?
              Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <ContactForm />
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <ContactInfo />
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <MapSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
