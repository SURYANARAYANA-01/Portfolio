import React from "react";
import { interests } from "../../data/portfolioData";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Interests.css";

function Interests() {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <section id="interests" className="section interests">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">{"// interests"}</span>
          <h2 className="section-title">Areas of interest</h2>
        </div>

        <div
          ref={ref}
          className={`interests-list reveal ${isVisible ? "reveal-visible" : ""}`}
        >
          {interests.map((interest) => (
            <span key={interest} className="interest-chip">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;