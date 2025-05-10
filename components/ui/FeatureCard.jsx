export default function FeatureCard({ feature }) {
  return (
    <div className="text-center p-4">
      <div className="d-inline-block rounded bg-light p-4 mb-4">
        <i className={`fas fa-${feature.icon} fa-5x text-secondary`}></i>
      </div>
      <div className="feature-content">
        <h4>{feature.title}</h4>
        <p className="mb-0">{feature.description}</p>
      </div>
    </div>
  );
}
