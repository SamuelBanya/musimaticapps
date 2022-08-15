import React from "react";

function ProjectItem({ name, about, technologies, repoLink, demoLink }) {
  const renderSpans = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{renderSpans}</div>
      <div>
        <span key={repoLink}>
          <a href={repoLink}>Repo</a>
        </span>
      </div>
      <div>
        <span key={demoLink}>
          <a href={demoLink}>Demo</a>
        </span>
      </div>
    </div>
  );
}

export default ProjectItem;
