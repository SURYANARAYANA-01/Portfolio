import React from "react";
import { statusMeta } from "../../data/portfolioData";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useRevealOnScroll();
  const status = statusMeta[project.status];

  return (
    <article
      ref={ref}
      className={`project-card reveal ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index, 4) * 80}ms` }}
    >
      <div className="project-card-head">
        <h3 className="project-title">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title} ↗
            </a>
          ) : (
            project.title
          )}
        </h3>
        <span className={`status-badge ${status.cssClass}`}>
          <span className="status-dot" />
          {status.label}
        </span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        <span className="project-tags-label">{project.tagsLabel}</span>
        <div className="project-tags-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
