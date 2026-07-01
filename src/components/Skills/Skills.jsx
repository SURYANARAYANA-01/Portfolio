import React from "react";
import { skillGroups } from "../../data/portfolioData";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Skills.css";

function SkillGroup({ group, index }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`skill-group reveal ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
    >
      <h3 className="skill-group-title">{group.category}</h3>
      <div className="skill-badges">
        {group.skills.map((skill) => (
          <span key={skill} className="skill-badge">
            <span className="skill-badge-dot" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">{"// skills"}</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;