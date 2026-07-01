import React from "react";
import { profile } from "../../data/portfolioData";
import { socialLinks } from "../../data/socialLinks";
import "./Hero.css";

// A small floating token cluster for the decorative panel — purely
// presentational, echoes the "areas of interest" content visually.
const focusTokens = ["React", "Python", "AI Apps", "Dev Tools", "Java", "MongoDB"];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">

          <h1 className="hero-name">
            {profile.name}
            <span className="hero-cursor" aria-hidden="true" />
          </h1>

          <h2 className="hero-title">{profile.title}</h2>

          <p className="hero-description">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a
              href={socialLinks.resume}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href={socialLinks.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="hero-panel-card">
            <span className="hero-panel-label">{"// currently exploring"}</span>
            <div className="hero-panel-tokens">
              {focusTokens.map((token, index) => (
                <span
                  key={token}
                  className="hero-token"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  {token}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
