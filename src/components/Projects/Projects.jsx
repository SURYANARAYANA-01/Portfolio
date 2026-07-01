import React from "react";
import { projects } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">{"// projects"}</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A mix of finished tools, active builds, and early-stage ideas — spanning
            developer tooling, AI-assisted apps, and productivity experiments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
