import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import About from './About'
import Builds from './Builds'
import Contact from "./Contact";

const Main = ({location}) => (
  <main className="nav-margin w-100 min-vh-100-ns flex flex-start items-center-l justify-center pa3 pa4-ns ph5-l">
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 100 }}
        classNames="fade"
      >
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/builds" component={Builds} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </main>
);

export default withRouter(Main)
