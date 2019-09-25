import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
