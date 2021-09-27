import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// components
import Home from './scenes/Home'
import Astrolozi from './scenes/Astrolozi'
import Privacy from './scenes/Privacy'
import Terms from './scenes/Terms'
import ScrollToTop from './scenes/components/ScrollToTop'

// global styles
import './assets/App'



const App = () => {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/astrolozi'>
            <Astrolozi />
          </Route>
          <Route path='/privacy'>
            <Privacy />
          </Route>
          <Route path='/terms'>
            <Terms />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
