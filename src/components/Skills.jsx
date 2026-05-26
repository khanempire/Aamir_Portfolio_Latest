import { skillsByCategory } from "../data/portfolio";
import "./Skills.css";

const categoryConfig = {
  "Artificial Intelligence": {
    label: "Artificial Intelligence",
    description: "Building intelligent systems",
  },
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
    "Artificial Intelligence": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4C7.3 4 6 5.3 6 7c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 5 11c0 1.3.7 2.4 1.8 3A3 3 0 0 0 9 19h1" />
      <path d="M15 4c1.7 0 3 1.3 3 3 0 .5-.1 1-.3 1.4A3.5 3.5 0 0 1 19 11c0 1.3-.7 2.4-1.8 3A3 3 0 0 1 15 19h-1" />
      <path d="M12 4v15" />
      <circle cx="9" cy="7" r="1" />
      <circle cx="15" cy="7" r="1" />
      <circle cx="8" cy="12" r="1" />
      <circle cx="16" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <line x1="10" y1="7" x2="11" y2="7" />
      <line x1="13" y1="7" x2="14" y2="7" />
      <line x1="9" y1="12" x2="11" y2="12" />
      <line x1="13" y1="12" x2="15" y2="12" />
    </svg>
    ),
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
