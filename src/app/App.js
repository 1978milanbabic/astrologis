import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// components
import Home from './scenes/Home'
import Astrolozi from './scenes/Astrolozi'

// global styles
import './assets/App.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/astrolozi'>
          <Astrolozi />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
