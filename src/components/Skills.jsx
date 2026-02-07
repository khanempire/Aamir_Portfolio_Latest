import { skillsByCategory } from "../data/portfolio";
import "./Skills.css";

const categoryConfig = {
  frontend: {
    label: "Frontend",
    description: "Building interfaces",
  },
  backend: {
    label: "Backend",
    description: "Powering applications",
  },
  devops: {
    label: "DevOps",
    description: "Shipping & scaling",
  },
};

function getCategoryConfig(key) {
  return (
    categoryConfig[key] || {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      description: "",
    }
  );
}

function CategoryIcon({ type }) {
  const icons = {
    frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
        <polyline points="2 15.5 12 8.5 22 15.5" />
        <line x1="12" y1="2" x2="12" y2="8.5" />
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01" />
        <path d="M6 12h12M6 16h8" />
      </svg>
    ),
    devops: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  };
  return <span className="skill-category-icon">{icons[type] || icons.frontend}</span>;
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I work with
        </p>
        <div className="skills-categories">
          {Object.entries(skillsByCategory).map(([key, skills]) => {
            const config = getCategoryConfig(key);
            return (
              <div key={key} className="skill-category">
                <div className="skill-category-header">
                  <CategoryIcon type={key} />
                  <div>
                    <h3 className="skill-category-title">{config.label}</h3>
                    {config.description && (
                      <p className="skill-category-desc">{config.description}</p>
                    )}
                  </div>
                </div>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
