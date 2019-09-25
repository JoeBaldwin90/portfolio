import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Builds from './Builds'
import Contact from "./Contact";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/builds' component={Builds}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main