// components/common/SectionHeader.js
export default function SectionHeader({
  subtitle,
  title,
  description,
  delay = "0.1s",
}) {
  return (
    <div
      className="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay={delay}
      style={{ maxWidth: "900px" }}>
      <h4 className="text-primary">{subtitle}</h4>
      <h1 className="display-5 mb-4">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
