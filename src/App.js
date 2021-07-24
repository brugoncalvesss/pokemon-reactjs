import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Feedpage from './pages/Feedpage'
import Pokemonpage from './pages/Pokemonpage'

/**
 * todo: Replace for styled-components
 */
 import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path='/' component={Feedpage} />
          <Route path='/pokemon/:id' component={Pokemonpage} />
        </div>
      </div>
    </Router>
  );
}

export default App;