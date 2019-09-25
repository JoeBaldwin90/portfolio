import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";

// Project looks up the project using the number parsed from
// the URL's pathname. If no project is found with the given
// number, then a "project not found" message is displayed.
const Project = props => {
  const project = ProjectsApi.get(parseInt(props.match.params.number, 10));
  if (!project) {
    return <div>Sorry, that project doesn't exist</div>;
  }
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>Type: {project.type}</h2>
      <ul>
        <li>
          <a href={project.github}>View on Github</a>
        </li>
        <li>
          <a href={project.website}>View Site!</a>
        </li>
      </ul>
      <div>
          <span>{project.technologies.join(" ")}</span>
      </div>

      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Project;
