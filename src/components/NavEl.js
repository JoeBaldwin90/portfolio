import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavEl = ({ to, icon, title }) => {
  return (
    <li key={title}>
      <NavLink
        exact
        to={to}
        className="nav-icon db white link tc pv2 ph3 hover-bg-green pv3-ns"
      >
        <FontAwesomeIcon icon={icon} size="lg" className="db center mb1" />
        <span className="ttu f6 b-ns f5-ns">{title}</span>
      </NavLink>
    </li>
  );
};

export default NavEl
