import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavEl = ({to, icon, title}) => {
  return (
    <li key={title}>
      <NavLink
        exact
        to={to}
        className="nav-icon db white link tc pv2 ph3 hover-bg-green pv3-ns"
      >
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          className="db center mb1"
        />
        <span className="ttu f6 b-ns f5-ns">{title}</span>
      </NavLink>
    </li>
  );
}

const Header = () => (
  <header>
    <nav className="fixed z-10 bottom-0 w-100 bg-black flex flex-row left-0-l w-auto-l h-100-l">
      <ul className="list w-100 flex justify-around flex-column-l justify-center-l">
        <NavEl to="/" icon="user-circle" title="About" />
        <NavEl to="/builds" icon="folder-open" title="Builds" />
        <NavEl to="/contact" icon="envelope" title="Contact" />
      </ul>
    </nav>
  </header>
);

export default Header