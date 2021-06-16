import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './pages/Homepage'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path='/' component={Homepage} />
          <Route path='/pokemon/:id' component={PokemonPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;