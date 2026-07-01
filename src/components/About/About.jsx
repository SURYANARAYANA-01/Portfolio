import React from "react";
import { profile } from "../../data/portfolioData";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./About.css";

function About() {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div
          ref={ref}
          className={`about-card reveal ${isVisible ? "reveal-visible" : ""}`}
        >
          <span className="section-eyebrow">{"// about"}</span>
          <h2 className="section-title about-title">About Me</h2>
          <p className="about-text">{profile.about}</p>
        </div>
      </div>
    </section>
  );
}

export default About;