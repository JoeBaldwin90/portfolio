import React, { Component } from "react";
import Header from './Header'
import Main from './Main'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUserCircle,
  faFolderOpen,
  faEye, 
  faDatabase
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faUserCircle, faFolderOpen, faEye, faDatabase);

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
