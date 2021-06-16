import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route exact path='/' component={Homepage} />
        </div>
      </div>
    </Router>
  );
}

export default App;