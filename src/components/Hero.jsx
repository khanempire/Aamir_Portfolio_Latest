import { profile, contact } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-photo">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              View Experience
            </a>
            {contact.resume && (
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
