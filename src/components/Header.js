import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="fixed z-10 bottom-0 w-100 bg-black flex flex-row left-0-l w-auto-l h-100-l">
      <ul className="list w-100 flex justify-around flex-column-l justify-center-l">
        <li>
          <NavLink
            exact
            to="/"
            className="db white link tc pv2 ph3 hover-bg-green pv3-ns"
          >
            <div className="icon about center mb2"></div>
            <span className="ttu f6 b-ns f5-ns">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/builds"
            className="db white link tc pv2 ph3 hover-bg-green pv3-ns"
          >
            <div className="icon builds center mb2"></div>
            <span className="ttu f6 b-ns f5-ns">Builds</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="db white link tc pv2 ph3 hover-bg-green pv3-ns"
          >
            <div className="icon contact center mb2"></div>
            <span className="ttu f6 b-ns f5-ns">Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header