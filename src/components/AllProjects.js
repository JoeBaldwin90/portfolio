import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Screenshot = ({ url }) => {
  return (
    <div className="min-image-size mb2">
      <img src={url} className="br3" alt="Project screenshot" />
    </div>
  );
};

const Overlay = ({ hover }) => (
  <span className={`f3 f2-ns pink ${hover ? "visible" : "hidden"}`}>
    <FontAwesomeIcon icon="eye" />
  </span>
);

const Title = ({ name, type, overlay }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Fade cascade>
          <h1 className="pink mr2">{name}</h1>
        </Fade>
        <Overlay hover={overlay} />
      </div>

      <h2 className="mb2 f3 blue">{type}</h2>
    </div>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <div>
      {technologies.map((t, index) => (
        <span key={index} className="mr2 mb1 f6 dib tag">{t}</span>
      ))}
    </div>
  );
};

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
    const { project } = this.props;
    return (
      <Link
        to={`/builds/${project}`}
        className="link mb3 w-100 w-40-l"
      >
        <div
          className="project flex flex-column"
          onMouseEnter={this.toggleOverlay}
          onMouseLeave={this.closeOverlay}
        >
          <Screenshot {...this.props} />
          <Title {...this.state} {...this.props} />
          <Technologies {...this.props} />
        </div>
      </Link>
    );
  }
}

// AllProjects iterates over all projects in the API
const AllProjects = () => (
  <div className="all-projects flex justify-center items-center w-100 mw6 mw8-l">
    <div className="projects-container">
      {ProjectsApi.all().map((p, index) => (
        <Project {...p} key={index} />
      ))}
    </div>
  </div>
);

export default AllProjects;
