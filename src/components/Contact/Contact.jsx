import React from "react";
import { socialLinks } from "../../data/socialLinks";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Contact.css";

function Contact() {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div
          ref={ref}
          className={`contact-card reveal ${isVisible ? "reveal-visible" : ""}`}
        >
          <span className="section-eyebrow">{"// contact"}</span>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle contact-subtitle">
            Open to internship opportunities, project collaborations, and professional networking. 
            Feel free to connect through any of the channels below.
          </p>

          <div className="contact-links">
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
            <a href={`mailto:${socialLinks.email}`} className="btn btn-secondary">
              {socialLinks.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;