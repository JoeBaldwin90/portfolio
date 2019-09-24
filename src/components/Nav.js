import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="fixed left-0 h-100 mw4 bg-black flex items-center z-10">
    <ul className="list w-100 tc flex flex-column">
      
      <li>
        <NavLink
          exact
          to="/"
          className="link pv3 flex flex-column items-center bg-animate hover-bg-green pa2 relative"
        >
          <div className="icon about mb2"></div>
          <span className="white ttu b">About</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          to="/projects"
          className="link pv3 flex flex-column items-center bg-animate hover-bg-green pa2 relative"
        >
          <div className="icon projects mb2"></div>
          <span className="white ttu b">Projects</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          exact
          to="/contact"
          className="link pv3 flex flex-column items-center bg-animate hover-bg-green pa2 relative"
        >
          <div className="icon contact mb2"></div>
          <span className="white ttu b">Contact</span>
        </NavLink>
      </li>
      
    </ul>
  </nav>
);

export default Nav;
