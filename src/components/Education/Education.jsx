import React from "react";
import { education } from "../../data/portfolioData";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Education.css";

function Education() {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">{"// education"}</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div
          ref={ref}
          className={`education-card reveal ${isVisible ? "reveal-visible" : ""}`}
        >
          <div className="education-marker" aria-hidden="true" />
          <div>
            <h3 className="education-degree">{education.degree}</h3><br/>
            <h3 className="education-college">{education.College}</h3><br/>
            <h3 className="education-graduation">{education.graduation}</h3>
            <p className="education-description">{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
