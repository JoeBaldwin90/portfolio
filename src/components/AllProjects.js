import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";

// Each project component links to the project show page
const Project = ({project, name, type, url, technologies}) => (
  <Link to={`/builds/${project}`} className="link w-100 w-40-l">
    <div key={project} className="project flex flex-column">
      <div className="min-image-size mb3">
        <img src={url} className="br3" alt="Project screenshot" />
      </div>

      <h1 className="pink">{name}</h1>
      <h2 className="mb2 f4 blue">{type}</h2>
      <div>
        {technologies.map(t => (
          <span className="mr2 mb1 f6 dib tag">{t}</span>
        ))}
      </div>
    </div>
  </Link>
);

// AllProjects iterates over all projects in the API
const AllProjects = () => (
  <div className="all-projects flex justify-center items-center w-100 mw6 mw8-l">
    <div className="projects-container">
      {ProjectsApi.all().map(p => (
        <Project {...p} />
      ))}
    </div>
  </div>
);

export default AllProjects;
