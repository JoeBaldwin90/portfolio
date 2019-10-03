import React from "react";
import { Switch, Route } from "react-router-dom";
import AllProjects from "./AllProjects";
import ProjectShow from "./ProjectShow";

const Builds = () => (
  <Switch>
    <Route exact path="/builds" component={AllProjects} />
    <Route path="/builds/:number" component={ProjectShow} />
  </Switch>
);

export default Builds;
