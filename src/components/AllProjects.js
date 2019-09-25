import React from "react";
import ProjectsApi from "../data/projects-api.js";
import { Link } from "react-router-dom";

// AllProjects iterates over all of the players and creates
// a link to their show page.
const AllProjects = () => (
  <div>
    <ul>
      {ProjectsApi.all().map(p => (
        <li key={p.project}>
          <Link to={`/builds/${p.project}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AllProjects;
