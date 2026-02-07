import { companies } from "../data/companies";
import "./Experience.css";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Companies I've had the pleasure of working with
        </p>
        <div className="experience-timeline">
          {companies.map((company) => (
            <article key={company.id} className="experience-card">
              {company.bannerImage && (
                <div className="experience-banner">
                  <img
                    src={company.bannerImage}
                    alt={company.name}
                    className="experience-banner-img"
                  />
                  <div className="experience-banner-overlay" />
                </div>
              )}
              <div className="experience-body">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{company.role}</h3>
                    <h4 className="experience-company">{company.name}</h4>
                  </div>
                  <span className="experience-period">{company.period}</span>
                </div>
                <p className="experience-location">
                  <LocationIcon />
                  {company.location}
                </p>
                <p className="experience-description">{company.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
