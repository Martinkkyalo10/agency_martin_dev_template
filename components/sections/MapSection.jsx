// components/sections/MapSection.js
export default function MapSection() {
  return (
    <div className="rounded h-100">
      <iframe
        className="rounded w-100"
        style={{ height: "500px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8084773955137!2d36.821609314753976!3d-1.288385835980772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664d22f6f%3A0x9f4d1b41c1b1b1b1!2sMoi%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Martin Devs Location Map"></iframe>
    </div>
  );
}
