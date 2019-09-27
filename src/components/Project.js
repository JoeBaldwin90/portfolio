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
    <div className="tc">
      <h1 className="pink ttu">{project.name}</h1>
      <img src={project.url} className="mw7-l" />
      <h2 className="mb2 f2 blue">{project.type}</h2>
      <ul>
        <li>
          <a
            href={project.github}
            className="link"
            target="_blank"
          >
            <h2 className="mw5-ns center f4 f3-ns fw2 fw3-ns pa3 tc ttu mb3 tag">
              GitHub
            </h2>
          </a>
        </li>
        <li>
          <a
            href={project.website}
            className="link"
            target="_blank"
          >
            <h2 className="mw5-ns center f4 f3-ns fw2 fw3-ns pa3 tc ttu mb3 tag">
              Website
            </h2>
          </a>
        </li>
      </ul>
      <div>
        {project.technologies.map(t => (
          <span className="mr2 mb1 f6 dib tag">{t}</span>
        ))}
      </div>

      <Link to="/builds" className="link db ttu tag f3 center mt5 dib">
        Go Back
      </Link>
    </div>
  );
};

export default Project;
