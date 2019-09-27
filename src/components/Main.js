import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Builds from './Builds'
import Contact from "./Contact";

const Main = () => (
  <main className="nav-margin w-100 min-vh-100-l flex flex-start items-center justify-center pa3 ph4-ns ph5-l">
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/builds" component={Builds} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

export default Main
