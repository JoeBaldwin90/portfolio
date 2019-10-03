import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = () => (
  <Link to="/builds" className="dib mb3">
    <h2 className="link ttu tag f5 f4-ns center dib">Go Back</h2>
  </Link>
);

const ProjectInfo = ({ name, description }) => (
  <div className="mb2">
    <h1 className="blue ttu pt3">{name}</h1>
    <p className="f5 f4-ns lh-copy lh-title-ns">{description}</p>
  </div>
);

const Technologies = ({technologies}) => (
  <div>
    <h2 className="green pt2 ttu">Technologies used: </h2>
    <ul className="flex justify-between flex-wrap">
      {technologies.map(tech => (
        <li className="mv2 mr2 mr4-ns pink f6">
          <code>{tech}</code>
        </li>
      ))}
    </ul>
  </div>
);

const Links = ({ website, github }) => (
  <div className="mv3 flex flex-column items-center flex-row-ns justify-between-ns">
    <a
      href={website}
      className="link tag tc w-70 w-40-ns mb2 mb0-ns"
      target="_blank"
    >
      <FontAwesomeIcon icon="eye" size="m" className="icon" />
      View project
    </a>
    {github && (
      <a href={github} className="link tag w-70 w-40-ns tc" target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} size="xs" className="icon" />
        See the code
      </a>
    )}
  </div>
);

// Project looks up the project using the number parsed from
// the URL's pathname. If no project is found with the given
// number, then a "project not found" message is displayed.
const ProjectShow = props => {
  const project = ProjectsApi.get(parseInt(props.match.params.number, 10));

  if (!project) {
    return (
      <div>
        <div>Sorry, that project doesn't exist</div>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="w-100 mw6-ns">
      <BackButton />
      <img src={project.url} className="br3" alt="Project screenshot" />
      <ProjectInfo {...project} />
      <Technologies {...project} />
      <Links {...project} />
    </div>
  );
};

export default ProjectShow;
