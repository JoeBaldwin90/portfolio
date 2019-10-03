import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overlay = ({ overlay }) => (
  <span className={`f3 f2-ns pink ${overlay ? "visible" : "hidden"}`}>
    <FontAwesomeIcon icon="eye" size="m" />
  </span>
);

// Each project component links to the project show page
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false
    };
    // Bind 'this' to component
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState((prevState, props) => ({
      overlay: !prevState.overlay
    }));
  }

  closeOverlay() {
    this.setState({
      overlay: false
    });
  }

  render() {
    const { project, url, name, type, technologies } = this.props;
    return (
      <Link to={`/builds/${project}`} className="link mb3 w-100 w-40-l">
        <div
          key={project}
          className="project flex flex-column"
          onMouseEnter={this.toggleOverlay}
          onMouseLeave={this.closeOverlay}
        >
          <div className="min-image-size mb2">
            <img src={url} className="br3" alt="Project screenshot" />
          </div>

          <div className="flex items-center justify-between">
            <h1 className="pink mr2">{name}</h1>
            <Overlay {...this.state} {...this.props} />
          </div>

          <h2 className="mb2 f3 blue">{type}</h2>

          <div>
            {technologies.map(t => (
              <span className="mr2 mb1 f6 dib tag">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    );
  }
}

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
