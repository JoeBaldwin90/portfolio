import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "value"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <section className="pl6 pr4 ph6-l pv3 pv5-l vh-100 flex justify-center items-center">
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
