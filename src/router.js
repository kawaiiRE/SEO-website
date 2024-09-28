import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'
import Contact from './components/Contact'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/location' component={Location} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </Router>
)

export default AppRouter
