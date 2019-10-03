import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Project looks up the project using the number parsed from
// the URL's pathname. If no project is found with the given
// number, then a "project not found" message is displayed.
const Project = props => {
  const project = ProjectsApi.get(parseInt(props.match.params.number, 10));
  if (!project) {
    return <div>Sorry, that project doesn't exist</div>;
  }
  return (
    <div className="w-100 mw6-ns">
      <Link to="/builds" className="dib mb3">
        <h2 className="link ttu tag f5 f4-ns center dib">Go Back</h2>
      </Link>

      <img src={project.url} className="br3" alt="Project screenshot" />

      <div className="mb2">
        <h1 className="blue ttu pt3">{project.name}</h1>
        <p className="f5 f4-ns lh-copy lh-title-ns">{project.description}</p>
      </div>

      <div>
        <h2 className="green pt2 ttu">Technologies used: </h2>
        <ul className="flex justify-between flex-wrap">
          {project.technologies.map(t => (
            <li className="mv2 mr2 mr4-ns pink f6">
              <code>{t}</code>
            </li>
          ))}
        </ul>

        <div className="mv3 flex flex-column items-center flex-row-ns justify-between-ns">
          <a
            href={project.website}
            className="link tag tc w-70 w-40-ns mb2 mb0-ns"
            target="_blank"
          >
            <FontAwesomeIcon icon="eye" size="m" className="icon" />
            View project
          </a>
          {project.github && (
            <a
              href={project.github}
              className="link tag w-70 w-40-ns tc"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="xs"
                className="icon"
              />
              See the code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
