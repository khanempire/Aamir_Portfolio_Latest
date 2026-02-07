import { contact } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          I'm always open to new opportunities and conversations.
        </p>
        {contact.resume && (
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-resume"
          >
            View / Download Resume
          </a>
        )}
        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">
            <span className="contact-icon">✉</span>
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">in</span>
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">⌘</span>
            GitHub
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">𝕏</span>
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
