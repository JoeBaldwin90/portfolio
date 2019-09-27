import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";

// AllProjects iterates over all of the players and creates
// a link to their show page.
const AllProjects = () => (
  <div className="all-projects flex justify-center items-center w-100 mw6 mw8-l">
    <div className="projects-container">
      {ProjectsApi.all().map(p => (
        <Link to={`/builds/${p.project}`} className="link w-100 w-40-l">
          <div key={p.project} className="project flex flex-column">
            <div className="min-image-size mb3">
              <img src={p.url} className="br3" alt="Project screenshot" />
            </div>

            <h1 className="pink">{p.name}</h1>
            <h2 className="mb2 f4 blue">{p.type}</h2>
            <div>
              {p.technologies.map(t => (
                <span className="mr2 mb1 f6 dib tag">{t}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default AllProjects;
