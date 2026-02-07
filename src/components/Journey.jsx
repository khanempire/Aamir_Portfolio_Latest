import { journey } from "../data/journey";
import "./Journey.css";

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="journey-container">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">Key milestones along the way</p>
        <div className="journey-scroll">
          <div className="journey-timeline">
          <div className="journey-line" aria-hidden="true" />
          {journey.map((item, index) => (
            <div key={item.id} className="journey-step">
              <div className="journey-node">
                <div className="journey-node-inner">
                  <span className="journey-year">{item.year}</span>
                  <span className="journey-node-dot" />
                </div>
              </div>
              <div className="journey-card">
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-description">{item.description}</p>
                <span className="journey-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
